from bs4 import BeautifulSoup as soup
import json
from selenium import webdriver
import undetected_chromedriver as uc
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

options = Options()
options.add_argument("--headless")
options.add_argument("--window-size=1440, 900")
service = Service('C:\\Users\\lucas\\Downloads\\chromedriver.exe')
driver = uc.Chrome(options=options, service=service)
city = 'BSB'
checkin = '2021-11-27'
checkout = '2021-11-30'
adults = '2'
# rank_a: recommended, price_a: low to high, price_b: high to low, stars_b: highest stars, userrating_b: highest review score, distance_a: closest to airport first
sorting = ['rank_a', 'price_a', 'price_b', 'stars_b', 'userrating_b', 'distance_a']

link = 'https://www.kayak.com/hotels/' + city + '/' + checkin + '/' + checkout + '/' + adults + 'adults' + '?sort=' + sorting[0] + '&fs=property-type=-rental:apartment,rental:bungalow,rental:homestay,rental:holhome.html'
driver.get(link)
try:
    element = WebDriverWait(driver, 30).until(
        EC.presence_of_element_located((By.CLASS_NAME, "zV27-price"))
    )
finally:
    bsobj = soup(driver.page_source,'lxml')
    driver.quit()

hotel = []
for name in bsobj.findAll('div',{'class':'FLpo-big-name'}):
    hotel.append(name.text.strip())

provider = [] 
for name in bsobj.findAll('div',{'class':'zV27-provider'}):
    provider.append(name.text.strip())

ratings = []
for rating in bsobj.findAll('div',{'class':'FLpo-score'}):
    ratings.append(rating.text.strip())

reviews = []
for review in bsobj.findAll('div',{'class':'FLpo-review-count'}):
    reviews.append(review.text.strip())

price = []
for p in bsobj.findAll('div',{'class':'zV27-price'}):
    price.append(p.text.strip())

jsonOutput = {'hotels': hotel, 'providers': provider , 'ratings': ratings, 'reviews': reviews, 'prices': price}

with open('hotels.json', 'w', encoding="utf-8") as output:
    output.write(json.dumps(jsonOutput, indent = 4, sort_keys= False))