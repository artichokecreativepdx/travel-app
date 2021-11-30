import csv

class airportFinder:

	csvfile = open('airports.csv', encoding='utf-8')
	reader = csv.DictReader(csvfile, delimiter=';')

	def findIATA(self, city = '', airportName = '', coord = [0, 0, 0], icao = ''):
		iata = ''
		for row in self.reader:
			if row['city'] == city or row['name'] == airportName or [row['lat'], row['lng'], row['altitude']] == coord or row['icao'] == icao:
				iata = row['iata']
				break
			else:
				iata = 'Not found!'
		return iata

	def findICAO(self, iata = ''):
		icao = ''
		for row in self.reader:
			if row['iata'] == iata:
				icao = row['icao']
				break
			else:
				icao = 'Not found!'
		return icao

	def findCoord(self, iata = ''):
		coord = []
		for row in self.reader:
			if row['iata'] == iata:
				coord = [row['lat'], row['lng'], row['altitude']]
				break
			else:
				coord = [0, 0, 0]
		return coord

	def findTimeZone(self, iata = ''):
		timeZone = []
		for row in self.reader:
			if row['iata'] == iata:
				timeZone = [row['timezone'], row['dst']]
				break
			else:
				timeZone = ['Not found!', 'Not found!']
		return timeZone

	def findCity(self, iata = ''):
		city = []
		for row in self.reader:
			if row['iata'] == iata:
				city = [row['city'], row['country']]
				break
			else:
				city = ['Not found!', 'Not found!']
		return city