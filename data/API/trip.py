from airports import airportFinder
from flights import flightFinder

airport = airportFinder()
flight = flightFinder()
destination = airport.findIATA('Portland')
origin = airport.findIATA('Brasilia')
departure = '2021-12-03'
_return = '2022-07-24'
currency = 'BRL'
adults = 1
print(destination, origin)
flight.findFlights(origin, destination, departure, _return, currency, adults)