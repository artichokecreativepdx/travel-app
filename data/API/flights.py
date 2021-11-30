from amadeus import Client, ResponseError
import json
import re

class flightFinder:

    inputDict = {}

    def formatDuration(self, unformattedDuration):
        return ':'.join(re.findall("([0-9]+[0-9])", unformattedDuration))

    def formatDateTime(self, unformattedDateTime):
        return unformattedDateTime.split('T')

    def formatJson(self, dict, j):
            dict['segments'][j]['duration'] = self.formatDuration(dict['segments'][j]['duration'])
            dict['segments'][j]['departure']['at'] = self.formatDateTime(dict['segments'][j]['departure']['at'])
            dict['segments'][j]['arrival']['at'] = self.formatDateTime(dict['segments'][j]['arrival']['at'])
            dict['segments'][j]['carrierCode'] = self.decodeValue('carrierCode', dict['segments'][j]['carrierCode'])
            dict['segments'][j]['aircraft']['code'] = self.decodeValue('aircraft', dict['segments'][j]['aircraft']['code'])
            self.removeKeys(dict, j)

    def decodeValue(self, key, encodedValue):
        if 'carrierCode' == key:
            return self.inputDict['dictionaries']['carriers'][encodedValue]
        if 'aircraft' == key:
            return self.inputDict['dictionaries']['aircraft'][encodedValue]

    def removeKeys(self, dict, j):
        if 'terminal' in dict['segments'][j]['arrival']:
            dict['segments'][j]['arrival'].pop('terminal', -1)
        if'terminal' in dict['segments'][j]['departure']:
            dict['segments'][j]['departure'].pop('terminal', -1)
        dict['segments'][j].pop('number', -1)
        dict['segments'][j].pop('id', -1)
        dict['segments'][j].pop('numberOfStops')
        dict['segments'][j].pop('blacklistedInEU', -1)
        dict['segments'][j].pop('operating', -1)

    def findFlights(self, origin, destination, departureDate, returnDate, currency, adults):
        amadeus = Client(
            client_id='OhFVBgKHYOayzIVA0AnqnA1GyChLN28W',
            client_secret='p3kdIsz21wUqlfNc'
        )
        try:
            response = amadeus.shopping.flight_offers_search.get(
                    originLocationCode=origin,
                    destinationLocationCode=destination,
                    departureDate=departureDate,
                    returnDate=returnDate,
                    currencyCode=currency,
                    adults=adults)

            self.inputDict = json.loads(response.body)
            count = self.inputDict['meta']['count']

            outputDict = {'roundTrip':[], 'departureDate':[], 'returnDate':[], 'price': [] , 'operatingAirlines': [], 'adults': [], 'itineraries': {'inboundItinerary': [], 'outboundItinerary': []} }
            outputDict['roundTrip'].append(origin + '-' + destination) 
            outputDict['departureDate'].append(departureDate) 
            outputDict['returnDate'].append(returnDate) 
            outputDict['adults'].append(adults)
            for i in range(count):

                initialInboundItinerary = self.inputDict['data'][i]['itineraries'][0]
                initialOutboundItinerary = self.inputDict['data'][i]['itineraries'][1]

                initialInboundItinerary['duration'] = self.formatDuration(initialInboundItinerary['duration'])
                for j in range(len(initialInboundItinerary['segments'])):
                    self.formatJson(initialInboundItinerary, j)
                outputDict['itineraries']['inboundItinerary'].append(initialInboundItinerary)

                initialOutboundItinerary['duration'] = self.formatDuration(initialOutboundItinerary['duration'])
                for j in range(len(initialOutboundItinerary['segments'])):
                    self.formatJson(initialOutboundItinerary, j)
                outputDict['itineraries']['outboundItinerary'].append(initialOutboundItinerary)
                
                airline = self.inputDict['dictionaries']['carriers'][self.inputDict['data'][i]['validatingAirlineCodes'][0]]
                price = airline + ': ' + currency + ' ' + str(self.inputDict['data'][i]['price']['grandTotal'])

                if price not in outputDict['price']:
                    outputDict['price'].append(price)
                if airline not in outputDict['operatingAirlines']:
                    outputDict['operatingAirlines'].append(airline)
            
            with open('data.json', 'w') as output:
                 output.write(json.dumps(outputDict, indent = 4, sort_keys= False))
        except ResponseError as error:
            print(error)