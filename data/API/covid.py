from amadeus import Client, ResponseError
import json

try:
    amadeus = Client(
        client_id='OhFVBgKHYOayzIVA0AnqnA1GyChLN28W',
        client_secret='p3kdIsz21wUqlfNc'
    )
    covid = amadeus.get('/v1/duty-of-care/diseases/covid19-area-report', countryCode = 'BR')
    with open('covid.json', 'w') as output:
        output.write(json.dumps(covid.result, indent = 4, sort_keys= False))
except ResponseError as error:
    print(error)