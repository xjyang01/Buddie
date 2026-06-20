export interface LocationData {
  [country: string]: {
    [region: string]: string[]
  }
}

export const LOCATIONS: LocationData = {
  Canada: {
    'Alberta': ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Medicine Hat'],
    'British Columbia': ['Vancouver', 'Victoria', 'Burnaby', 'Kelowna', 'Surrey', 'Richmond'],
    'Manitoba': ['Winnipeg', 'Brandon', 'Steinbach'],
    'New Brunswick': ['Moncton', 'Saint John', 'Fredericton'],
    'Newfoundland and Labrador': ["St. John's", 'Corner Brook'],
    'Nova Scotia': ['Halifax', 'Sydney', 'Truro'],
    'Ontario': ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London', 'Kitchener', 'Windsor', 'Kingston', 'Sudbury'],
    'Prince Edward Island': ['Charlottetown', 'Summerside'],
    'Quebec': ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Saguenay', 'Trois-Rivières'],
    'Saskatchewan': ['Saskatoon', 'Regina', 'Prince Albert'],
    'Northwest Territories': ['Yellowknife'],
    'Nunavut': ['Iqaluit'],
    'Yukon': ['Whitehorse'],
  },
  'United States': {
    'California': ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Fresno', 'Oakland'],
    'New York': ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse'],
    'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso'],
    'Florida': ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    'Illinois': ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford'],
    'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie'],
    'Ohio': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    'Georgia': ['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Macon'],
    'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Bellevue', 'Olympia'],
    'Massachusetts': ['Boston', 'Worcester', 'Springfield', 'Cambridge'],
    'Colorado': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder'],
    'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale'],
    'Michigan': ['Detroit', 'Grand Rapids', 'Warren', 'Ann Arbor', 'Lansing'],
    'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'],
    'Virginia': ['Virginia Beach', 'Norfolk', 'Richmond', 'Arlington', 'Alexandria'],
    'Other': ['Other city'],
  },
  'United Kingdom': {
    'England': ['London', 'Manchester', 'Birmingham', 'Leeds', 'Sheffield', 'Newcastle', 'Bristol', 'Liverpool', 'Oxford', 'Cambridge'],
    'Scotland': ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness'],
    'Wales': ['Cardiff', 'Swansea', 'Newport', 'Bangor'],
    'Northern Ireland': ['Belfast', 'Derry', 'Lisburn'],
  },
  France: {
    'Île-de-France': ['Paris', 'Versailles', 'Boulogne-Billancourt', 'Saint-Denis'],
    'Auvergne-Rhône-Alpes': ['Lyon', 'Grenoble', 'Saint-Étienne', 'Clermont-Ferrand'],
    'Nouvelle-Aquitaine': ['Bordeaux', 'Pau', 'Limoges', 'Bayonne'],
    'Occitanie': ['Toulouse', 'Montpellier', 'Nîmes', 'Perpignan'],
    'Hauts-de-France': ['Lille', 'Amiens', 'Roubaix', 'Tourcoing'],
    'Provence-Alpes-Côte d\'Azur': ['Marseille', 'Nice', 'Toulon', 'Aix-en-Provence'],
    'Grand Est': ['Strasbourg', 'Reims', 'Metz', 'Mulhouse'],
    'Bretagne': ['Rennes', 'Brest', 'Nantes', 'Quimper'],
    'Normandie': ['Rouen', 'Caen', 'Le Havre', 'Cherbourg'],
  },
  Spain: {
    'Catalonia': ['Barcelona', 'Tarragona', 'Lleida', 'Girona'],
    'Madrid': ['Madrid', 'Alcalá de Henares', 'Leganés', 'Getafe'],
    'Andalusia': ['Seville', 'Málaga', 'Granada', 'Córdoba', 'Almería'],
    'Valencia': ['Valencia', 'Alicante', 'Castellón'],
    'Basque Country': ['Bilbao', 'San Sebastián', 'Vitoria-Gasteiz'],
    'Galicia': ['Santiago de Compostela', 'Vigo', 'La Coruña'],
    'Aragon': ['Zaragoza', 'Huesca', 'Teruel'],
    'Canary Islands': ['Las Palmas', 'Santa Cruz de Tenerife'],
  },
  China: {
    'Beijing': ['Beijing'],
    'Shanghai': ['Shanghai'],
    'Guangdong': ['Guangzhou', 'Shenzhen', 'Dongguan', 'Foshan', 'Zhuhai'],
    'Zhejiang': ['Hangzhou', 'Ningbo', 'Wenzhou', 'Shaoxing'],
    'Jiangsu': ['Nanjing', 'Suzhou', 'Wuxi', 'Changzhou', 'Nantong'],
    'Sichuan': ['Chengdu', 'Mianyang', 'Zigong'],
    'Hubei': ['Wuhan', 'Yichang', 'Xiangyang'],
    'Hunan': ['Changsha', 'Zhuzhou', 'Xiangtan'],
    'Shandong': ['Jinan', 'Qingdao', 'Zibo', 'Yantai'],
    'Fujian': ['Fuzhou', 'Xiamen', 'Quanzhou'],
    'Shaanxi': ['Xi\'an', 'Xianyang', 'Baoji'],
    'Tianjin': ['Tianjin'],
    'Chongqing': ['Chongqing'],
    'Hong Kong': ['Hong Kong'],
    'Macau': ['Macau'],
  },
  Australia: {
    'New South Wales': ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast'],
    'Victoria': ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo'],
    'Queensland': ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Townsville'],
    'Western Australia': ['Perth', 'Bunbury', 'Geraldton'],
    'South Australia': ['Adelaide', 'Mount Gambier', 'Whyalla'],
    'Tasmania': ['Hobart', 'Launceston', 'Devonport'],
    'Australian Capital Territory': ['Canberra'],
    'Northern Territory': ['Darwin', 'Alice Springs'],
  },
  Germany: {
    'Bavaria': ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg'],
    'Berlin': ['Berlin'],
    'Hamburg': ['Hamburg'],
    'Baden-Württemberg': ['Stuttgart', 'Karlsruhe', 'Freiburg', 'Heidelberg'],
    'North Rhine-Westphalia': ['Cologne', 'Düsseldorf', 'Dortmund', 'Essen', 'Bonn'],
    'Hesse': ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt'],
    'Saxony': ['Dresden', 'Leipzig', 'Chemnitz'],
    'Lower Saxony': ['Hanover', 'Braunschweig', 'Osnabrück'],
  },
  Japan: {
    'Tokyo': ['Tokyo', 'Shinjuku', 'Shibuya', 'Chiyoda'],
    'Osaka': ['Osaka', 'Sakai', 'Higashiosaka'],
    'Kanagawa': ['Yokohama', 'Kawasaki', 'Sagamihara'],
    'Aichi': ['Nagoya', 'Toyota', 'Okazaki'],
    'Hokkaido': ['Sapporo', 'Asahikawa', 'Hakodate'],
    'Kyoto': ['Kyoto', 'Uji', 'Fushimi'],
    'Fukuoka': ['Fukuoka', 'Kitakyushu', 'Kurume'],
    'Hyogo': ['Kobe', 'Himeji', 'Amagasaki'],
  },
  'Other': {
    'Worldwide / Remote': ['Worldwide'],
    'Other country': ['Other city'],
  },
}

export const COUNTRY_LIST = Object.keys(LOCATIONS)

export function getRegions(country: string): string[] {
  return country ? Object.keys(LOCATIONS[country] ?? {}) : []
}

export function getCities(country: string, region: string): string[] {
  return country && region ? (LOCATIONS[country]?.[region] ?? []) : []
}
