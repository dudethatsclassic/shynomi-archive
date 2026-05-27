const ARTISTS = [
  {
    "id": "311",
    "name": "311",
    "showCount": 54,
    "firstYear": 1991,
    "lastYear": 2026
  },
  {
    "id": "a-perfect-circle",
    "name": "A Perfect Circle",
    "showCount": 367,
    "firstYear": 1999,
    "lastYear": 2024
  },
  {
    "id": "a-tribe-called-quest",
    "name": "A Tribe Called Quest",
    "showCount": 8,
    "firstYear": 1990,
    "lastYear": 2011
  },
  {
    "id": "aerosmith",
    "name": "Aerosmith",
    "showCount": 17,
    "firstYear": 1976,
    "lastYear": 2019
  },
  {
    "id": "afi",
    "name": "AFI",
    "showCount": 9,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "ahmad-jamal",
    "name": "Ahmad Jamal",
    "showCount": 1,
    "firstYear": 1971,
    "lastYear": 1971
  },
  {
    "id": "al-green",
    "name": "Al Green",
    "showCount": 2,
    "firstYear": 1974,
    "lastYear": 2002
  },
  {
    "id": "alanis-morissette",
    "name": "Alanis Morissette",
    "showCount": 71,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "alice-in-chains",
    "name": "Alice In Chains",
    "showCount": 252,
    "firstYear": 1986,
    "lastYear": 2024
  },
  {
    "id": "all-american-rejects",
    "name": "All American Rejects",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "all-time-low",
    "name": "All Time Low",
    "showCount": 3,
    "firstYear": 2022,
    "lastYear": 2025
  },
  {
    "id": "american-football",
    "name": "American Football",
    "showCount": 5,
    "firstYear": 2014,
    "lastYear": 2024
  },
  {
    "id": "american-hi-fi",
    "name": "American Hi-fi",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "anberlin",
    "name": "Anberlin",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "angels-airwaves",
    "name": "Angels & Airwaves",
    "showCount": 3,
    "firstYear": 2012,
    "lastYear": 2019
  },
  {
    "id": "angels-and-airwaves",
    "name": "Angels & Airwaves",
    "showCount": 3,
    "firstYear": 2012,
    "lastYear": 2019
  },
  {
    "id": "angie-aparo",
    "name": "Angie Aparo",
    "showCount": 10,
    "firstYear": 2002,
    "lastYear": 2018
  },
  {
    "id": "aphex-twin",
    "name": "Aphex Twin",
    "showCount": 17,
    "firstYear": 1993,
    "lastYear": 2019
  },
  {
    "id": "aretha-franklin",
    "name": "Aretha Franklin",
    "showCount": 1,
    "firstYear": 1982,
    "lastYear": 1982
  },
  {
    "id": "arlo-guthrie",
    "name": "Arlo Guthrie",
    "showCount": 1,
    "firstYear": 2017,
    "lastYear": 2017
  },
  {
    "id": "art-blakey-and-the-jazz-messengers",
    "name": "Art Blakey and the Jazz Messengers",
    "showCount": 23,
    "firstYear": 1957,
    "lastYear": 1986
  },
  {
    "id": "ash",
    "name": "Ash",
    "showCount": 12,
    "firstYear": 1996,
    "lastYear": 2015
  },
  {
    "id": "athenaeum",
    "name": "Athenaeum",
    "showCount": 1,
    "firstYear": 1999,
    "lastYear": 1999
  },
  {
    "id": "audioslave",
    "name": "Audioslave",
    "showCount": 80,
    "firstYear": 2002,
    "lastYear": 2019
  },
  {
    "id": "avril-lavigne",
    "name": "Avril Lavigne",
    "showCount": 17,
    "firstYear": 2003,
    "lastYear": 2024
  },
  {
    "id": "bad-brains",
    "name": "Bad Brains",
    "showCount": 3,
    "firstYear": 1981,
    "lastYear": 1986
  },
  {
    "id": "bad-radio",
    "name": "Bad Radio",
    "showCount": 4,
    "firstYear": 1989,
    "lastYear": 1990
  },
  {
    "id": "band-of-horses",
    "name": "Band of Horses",
    "showCount": 28,
    "firstYear": 2006,
    "lastYear": 2025
  },
  {
    "id": "band-of-susans",
    "name": "Band of Susans",
    "showCount": 12,
    "firstYear": 1988,
    "lastYear": 1993
  },
  {
    "id": "beastie-boys",
    "name": "Beastie Boys",
    "showCount": 68,
    "firstYear": 1985,
    "lastYear": 2009
  },
  {
    "id": "beck",
    "name": "Beck",
    "showCount": 317,
    "firstYear": 1986,
    "lastYear": 2026
  },
  {
    "id": "belly",
    "name": "Belly",
    "showCount": 26,
    "firstYear": 1993,
    "lastYear": 2025
  },
  {
    "id": "ben-folds",
    "name": "Ben Folds",
    "showCount": 15,
    "firstYear": 2001,
    "lastYear": 2025
  },
  {
    "id": "ben-folds-five",
    "name": "Ben Folds Five",
    "showCount": 18,
    "firstYear": 1995,
    "lastYear": 2012
  },
  {
    "id": "ben-gibbard",
    "name": "Ben Gibbard",
    "showCount": 34,
    "firstYear": 2005,
    "lastYear": 2021
  },
  {
    "id": "better-than-ezra",
    "name": "Better Than Ezra",
    "showCount": 8,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "billy-corgan",
    "name": "Billy Corgan",
    "showCount": 181,
    "firstYear": 1988,
    "lastYear": 2025
  },
  {
    "id": "biz-markie",
    "name": "Biz Markie",
    "showCount": 1,
    "firstYear": 1996,
    "lastYear": 1996
  },
  {
    "id": "bjork",
    "name": "Bjork",
    "showCount": 49,
    "firstYear": 1988,
    "lastYear": 2022
  },
  {
    "id": "black-flag",
    "name": "Black Flag",
    "showCount": 4,
    "firstYear": 1981,
    "lastYear": 1985
  },
  {
    "id": "black-sabbath",
    "name": "Black Sabbath",
    "showCount": 17,
    "firstYear": 1969,
    "lastYear": 2025
  },
  {
    "id": "blake-babies",
    "name": "Blake Babies",
    "showCount": 1,
    "firstYear": 1991,
    "lastYear": 1991
  },
  {
    "id": "blind-melon",
    "name": "Blind Melon",
    "showCount": 49,
    "firstYear": 1990,
    "lastYear": 2013
  },
  {
    "id": "blink-182",
    "name": "Blink 182",
    "showCount": 34,
    "firstYear": 1997,
    "lastYear": 2024
  },
  {
    "id": "blondshell",
    "name": "Blondshell",
    "showCount": 6,
    "firstYear": 2023,
    "lastYear": 2026
  },
  {
    "id": "bob-dylan",
    "name": "Bob Dylan",
    "showCount": 28,
    "firstYear": 1962,
    "lastYear": 2019
  },
  {
    "id": "body-count",
    "name": "Body Count",
    "showCount": 1,
    "firstYear": 1991,
    "lastYear": 1991
  },
  {
    "id": "bon-iver",
    "name": "Bon Iver",
    "showCount": 32,
    "firstYear": 2008,
    "lastYear": 2019
  },
  {
    "id": "boygenius",
    "name": "Boygenius",
    "showCount": 8,
    "firstYear": 2023,
    "lastYear": 2023
  },
  {
    "id": "brad",
    "name": "Brad",
    "showCount": 30,
    "firstYear": 1997,
    "lastYear": 2012
  },
  {
    "id": "brand-new",
    "name": "Brand New",
    "showCount": 5,
    "firstYear": 2004,
    "lastYear": 2025
  },
  {
    "id": "buddy-holly",
    "name": "Buddy Holly",
    "showCount": 0,
    "firstYear": null,
    "lastYear": null
  },
  {
    "id": "buffalo-tom",
    "name": "Buffalo Tom",
    "showCount": 17,
    "firstYear": 1990,
    "lastYear": 2024
  },
  {
    "id": "bush",
    "name": "Bush",
    "showCount": 91,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "butthole-surfers",
    "name": "Butthole Surfers",
    "showCount": 5,
    "firstYear": 1985,
    "lastYear": 1996
  },
  {
    "id": "cake",
    "name": "Cake",
    "showCount": 29,
    "firstYear": 1994,
    "lastYear": 2025
  },
  {
    "id": "candlebox",
    "name": "Candlebox",
    "showCount": 96,
    "firstYear": 1994,
    "lastYear": 2025
  },
  {
    "id": "carole-king",
    "name": "Carole King",
    "showCount": 2,
    "firstYear": 1971,
    "lastYear": 1973
  },
  {
    "id": "catherine-wheel",
    "name": "Catherine Wheel",
    "showCount": 4,
    "firstYear": 1992,
    "lastYear": 1995
  },
  {
    "id": "charles-mingus",
    "name": "Charles Mingus",
    "showCount": 35,
    "firstYear": 1964,
    "lastYear": 2003
  },
  {
    "id": "chevelle",
    "name": "Chevelle",
    "showCount": 7,
    "firstYear": 2007,
    "lastYear": 2025
  },
  {
    "id": "chick-corea",
    "name": "Chick Corea",
    "showCount": 40,
    "firstYear": 1978,
    "lastYear": 1994
  },
  {
    "id": "chris-cornell",
    "name": "Chris Cornell",
    "showCount": 83,
    "firstYear": 1999,
    "lastYear": 2019
  },
  {
    "id": "chris-robinson-brotherhood",
    "name": "Chris Robinson Brotherhood",
    "showCount": 9,
    "firstYear": 2011,
    "lastYear": 2012
  },
  {
    "id": "chris-shiflet",
    "name": "Chris Shiflet",
    "showCount": 3,
    "firstYear": 2015,
    "lastYear": 2022
  },
  {
    "id": "chris-stapleton",
    "name": "Chris Stapleton",
    "showCount": 5,
    "firstYear": 2016,
    "lastYear": 2018
  },
  {
    "id": "chuck-berry",
    "name": "Chuck Berry",
    "showCount": 1,
    "firstYear": 1982,
    "lastYear": 1982
  },
  {
    "id": "circa-survive",
    "name": "Circa Survive",
    "showCount": 3,
    "firstYear": 2015,
    "lastYear": 2022
  },
  {
    "id": "city-and-colour",
    "name": "City and Colour",
    "showCount": 1,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "claypool-gold",
    "name": "Claypool Gold",
    "showCount": 1,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "cocteau-twins",
    "name": "Cocteau Twins",
    "showCount": 21,
    "firstYear": 1982,
    "lastYear": 1994
  },
  {
    "id": "coheed-and-cambria",
    "name": "Coheed & Cambria",
    "showCount": 16,
    "firstYear": 2005,
    "lastYear": 2024
  },
  {
    "id": "coheed-cambria",
    "name": "Coheed & Cambria",
    "showCount": 16,
    "firstYear": 2005,
    "lastYear": 2024
  },
  {
    "id": "cold",
    "name": "Cold",
    "showCount": 2,
    "firstYear": 2023,
    "lastYear": 2024
  },
  {
    "id": "coldplay",
    "name": "Coldplay",
    "showCount": 756,
    "firstYear": 1998,
    "lastYear": 2025
  },
  {
    "id": "collective-soul",
    "name": "Collective Soul",
    "showCount": 67,
    "firstYear": 1994,
    "lastYear": 2025
  },
  {
    "id": "colonel-claypools-bucket-of-bernie-brains",
    "name": "Colonel Claypool's Bucket of Bernie Brains",
    "showCount": 60,
    "firstYear": 2000,
    "lastYear": 2024
  },
  {
    "id": "colonel-claypool-s-bucket-of-bernie-brains",
    "name": "Colonel Claypool's Bucket of Bernie Brains",
    "showCount": 21,
    "firstYear": 2003,
    "lastYear": 2004
  },
  {
    "id": "counting-crows",
    "name": "Counting Crows",
    "showCount": 1317,
    "firstYear": 1992,
    "lastYear": 2025
  },
  {
    "id": "crash-test-dummies",
    "name": "Crash Test Dummies",
    "showCount": 21,
    "firstYear": 1988,
    "lastYear": 2023
  },
  {
    "id": "creed",
    "name": "Creed",
    "showCount": 22,
    "firstYear": 1997,
    "lastYear": 2025
  },
  {
    "id": "creeper-lagoon",
    "name": "Creeper Lagoon",
    "showCount": 1,
    "firstYear": 2017,
    "lastYear": 2017
  },
  {
    "id": "darius-rucker",
    "name": "Darius Rucker",
    "showCount": 1,
    "firstYear": 2023,
    "lastYear": 2023
  },
  {
    "id": "darlene-love-and-ronnie-spector",
    "name": "Darlene Love & Ronnie Spector",
    "showCount": 2,
    "firstYear": 1988,
    "lastYear": 1988
  },
  {
    "id": "darlene-love-ronnie-spector",
    "name": "Darlene Love & Ronnie Spector",
    "showCount": 2,
    "firstYear": 1988,
    "lastYear": 1988
  },
  {
    "id": "dashboard-confessional",
    "name": "Dashboard Confessional",
    "showCount": 4,
    "firstYear": 2001,
    "lastYear": 2025
  },
  {
    "id": "dave-brubeck",
    "name": "Dave Brubeck",
    "showCount": 15,
    "firstYear": 1955,
    "lastYear": 2010
  },
  {
    "id": "dave-matthews-band",
    "name": "Dave Matthews Band",
    "showCount": 280,
    "firstYear": 1989,
    "lastYear": 2025
  },
  {
    "id": "de-la-soul",
    "name": "De La Soul",
    "showCount": 8,
    "firstYear": 1989,
    "lastYear": 2025
  },
  {
    "id": "dead-kennedys",
    "name": "Dead Kennedy's",
    "showCount": 1,
    "firstYear": 1981,
    "lastYear": 1981
  },
  {
    "id": "death-cab-for-cutie",
    "name": "Death Cab For Cutie",
    "showCount": 129,
    "firstYear": 1998,
    "lastYear": 2024
  },
  {
    "id": "default",
    "name": "Default",
    "showCount": 1,
    "firstYear": 2002,
    "lastYear": 2002
  },
  {
    "id": "deftones",
    "name": "Deftones",
    "showCount": 302,
    "firstYear": 1992,
    "lastYear": 2026
  },
  {
    "id": "dig",
    "name": "Dig",
    "showCount": 2,
    "firstYear": 1993,
    "lastYear": 1994
  },
  {
    "id": "dinosaur-jr",
    "name": "Dinosaur Jr.",
    "showCount": 34,
    "firstYear": 1987,
    "lastYear": 2022
  },
  {
    "id": "dishwalla",
    "name": "Dishwalla",
    "showCount": 3,
    "firstYear": 1995,
    "lastYear": 2023
  },
  {
    "id": "dixie-chicks",
    "name": "Dixie Chicks",
    "showCount": 2,
    "firstYear": 1990,
    "lastYear": 2000
  },
  {
    "id": "dj-jazzy-jeff-and-the-fresh-prince",
    "name": "DJ Jazzy Jeff & the Fresh Prince",
    "showCount": 1,
    "firstYear": 1988,
    "lastYear": 1988
  },
  {
    "id": "dj-jazzy-jeff-the-fresh-prince",
    "name": "DJ Jazzy Jeff & the Fresh Prince",
    "showCount": 1,
    "firstYear": 1988,
    "lastYear": 1988
  },
  {
    "id": "dolly-parton",
    "name": "Dolly Parton",
    "showCount": 2,
    "firstYear": 2001,
    "lastYear": 2005
  },
  {
    "id": "dolores-oriordan",
    "name": "Dolores O'Riordan",
    "showCount": 4,
    "firstYear": 2007,
    "lastYear": 2007
  },
  {
    "id": "dolores-o-riordan",
    "name": "Dolores O'Riordan",
    "showCount": 4,
    "firstYear": 2007,
    "lastYear": 2007
  },
  {
    "id": "drive-like-jehu",
    "name": "Drive Like Jehu",
    "showCount": 7,
    "firstYear": 1992,
    "lastYear": 2016
  },
  {
    "id": "duke-ellington",
    "name": "Duke Ellington",
    "showCount": 5,
    "firstYear": 1950,
    "lastYear": 1973
  },
  {
    "id": "duster",
    "name": "Duster",
    "showCount": 1,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "eddie-vedder-solo",
    "name": "Eddie Vedder (solo)",
    "showCount": 155,
    "firstYear": 1992,
    "lastYear": 2025
  },
  {
    "id": "eddie-vedder-and-c-average",
    "name": "Eddie Vedder & C-Average",
    "showCount": 8,
    "firstYear": 1999,
    "lastYear": 1999
  },
  {
    "id": "eddie-vedder-c-average",
    "name": "Eddie Vedder & C-Average",
    "showCount": 8,
    "firstYear": 1999,
    "lastYear": 1999
  },
  {
    "id": "eddie-vedder-and-neil-finn",
    "name": "Eddie Vedder & Neil Finn",
    "showCount": 4,
    "firstYear": 1998,
    "lastYear": 2001
  },
  {
    "id": "eddie-vedder-neil-finn",
    "name": "Eddie Vedder & Neil Finn",
    "showCount": 4,
    "firstYear": 1998,
    "lastYear": 2001
  },
  {
    "id": "eddie-vedder-and-pete-townsend",
    "name": "Eddie Vedder & Pete Townsend",
    "showCount": 1,
    "firstYear": 1999,
    "lastYear": 1999
  },
  {
    "id": "eddie-vedder-pete-townsend",
    "name": "Eddie Vedder & Pete Townsend",
    "showCount": 1,
    "firstYear": 1999,
    "lastYear": 1999
  },
  {
    "id": "eddie-vedder-and-the-fastbacks",
    "name": "Eddie Vedder & the Fastbacks",
    "showCount": 2,
    "firstYear": 1996,
    "lastYear": 1996
  },
  {
    "id": "eddie-vedder-the-fastbacks",
    "name": "Eddie Vedder & the Fastbacks",
    "showCount": 2,
    "firstYear": 1996,
    "lastYear": 1996
  },
  {
    "id": "edwin-mccain",
    "name": "Edwin McCain",
    "showCount": 3,
    "firstYear": 1995,
    "lastYear": 2024
  },
  {
    "id": "eels",
    "name": "Eels",
    "showCount": 53,
    "firstYear": 1994,
    "lastYear": 2023
  },
  {
    "id": "elastica",
    "name": "Elastica",
    "showCount": 3,
    "firstYear": 1995,
    "lastYear": 1999
  },
  {
    "id": "elder",
    "name": "Elder",
    "showCount": 10,
    "firstYear": 2014,
    "lastYear": 2025
  },
  {
    "id": "elton-john",
    "name": "Elton John",
    "showCount": 6,
    "firstYear": 1970,
    "lastYear": 1980
  },
  {
    "id": "emmylou-harris",
    "name": "EmmyLou Harris",
    "showCount": 7,
    "firstYear": 1975,
    "lastYear": 2011
  },
  {
    "id": "epmd",
    "name": "EPMD",
    "showCount": 2,
    "firstYear": 1991,
    "lastYear": 2025
  },
  {
    "id": "eric-church",
    "name": "Eric Church",
    "showCount": 27,
    "firstYear": 2012,
    "lastYear": 2026
  },
  {
    "id": "eve-6",
    "name": "Eve 6",
    "showCount": 2,
    "firstYear": 2012,
    "lastYear": 2025
  },
  {
    "id": "everclear",
    "name": "Everclear",
    "showCount": 27,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "failure",
    "name": "Failure",
    "showCount": 35,
    "firstYear": 1994,
    "lastYear": 2026
  },
  {
    "id": "faith-no-more",
    "name": "Faith No More",
    "showCount": 184,
    "firstYear": 1983,
    "lastYear": 2015
  },
  {
    "id": "fall-out-boy",
    "name": "Fall Out Boy",
    "showCount": 4,
    "firstYear": 2007,
    "lastYear": 2021
  },
  {
    "id": "far",
    "name": "Far",
    "showCount": 1,
    "firstYear": 1996,
    "lastYear": 1996
  },
  {
    "id": "fastball",
    "name": "Fastball",
    "showCount": 3,
    "firstYear": 2018,
    "lastYear": 2025
  },
  {
    "id": "feeder",
    "name": "Feeder",
    "showCount": 6,
    "firstYear": 2000,
    "lastYear": 2024
  },
  {
    "id": "fig-dish",
    "name": "Fig Dish",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "filter",
    "name": "Filter",
    "showCount": 18,
    "firstYear": 1995,
    "lastYear": 2026
  },
  {
    "id": "finger-eleven",
    "name": "Finger Eleven",
    "showCount": 5,
    "firstYear": 2025,
    "lastYear": 2026
  },
  {
    "id": "flight-to-mars",
    "name": "Flight to Mars",
    "showCount": 2,
    "firstYear": 2015,
    "lastYear": 2017
  },
  {
    "id": "foo-fighters",
    "name": "Foo Fighters",
    "showCount": 1068,
    "firstYear": 1995,
    "lastYear": 2026
  },
  {
    "id": "for-squirrels",
    "name": "For Squirrels",
    "showCount": 0,
    "firstYear": null,
    "lastYear": null
  },
  {
    "id": "fort-minor",
    "name": "Fort Minor",
    "showCount": 1,
    "firstYear": 2015,
    "lastYear": 2015
  },
  {
    "id": "fountains-of-wayne",
    "name": "Fountains of Wayne",
    "showCount": 37,
    "firstYear": 1997,
    "lastYear": 2012
  },
  {
    "id": "fuel",
    "name": "Fuel",
    "showCount": 8,
    "firstYear": 2007,
    "lastYear": 2025
  },
  {
    "id": "garbage",
    "name": "Garbage",
    "showCount": 443,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "garth-brooks",
    "name": "Garth Brooks",
    "showCount": 5,
    "firstYear": 1986,
    "lastYear": 2023
  },
  {
    "id": "gavin-rossdale",
    "name": "Gavin Rossdale",
    "showCount": 5,
    "firstYear": 2009,
    "lastYear": 2010
  },
  {
    "id": "george-strait",
    "name": "George Strait",
    "showCount": 6,
    "firstYear": 1980,
    "lastYear": 1985
  },
  {
    "id": "gin-blossoms",
    "name": "Gin Blossoms",
    "showCount": 66,
    "firstYear": 1990,
    "lastYear": 2025
  },
  {
    "id": "glassjaw",
    "name": "Glassjaw",
    "showCount": 10,
    "firstYear": 2000,
    "lastYear": 2025
  },
  {
    "id": "golden-smog",
    "name": "Golden Smog",
    "showCount": 16,
    "firstYear": 1994,
    "lastYear": 2006
  },
  {
    "id": "goldfinger",
    "name": "Goldfinger",
    "showCount": 4,
    "firstYear": 1996,
    "lastYear": 2025
  },
  {
    "id": "goldie",
    "name": "Goldie",
    "showCount": 2,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "goo-goo-dolls",
    "name": "Goo Goo Dolls",
    "showCount": 32,
    "firstYear": 1990,
    "lastYear": 2026
  },
  {
    "id": "good-charlotte",
    "name": "Good Charlotte",
    "showCount": 1,
    "firstYear": 1999,
    "lastYear": 1999
  },
  {
    "id": "green-day",
    "name": "Green Day",
    "showCount": 355,
    "firstYear": 1989,
    "lastYear": 2025
  },
  {
    "id": "green-jelly",
    "name": "Green Jelly",
    "showCount": 1,
    "firstYear": 2023,
    "lastYear": 2023
  },
  {
    "id": "green-river",
    "name": "Green River",
    "showCount": 11,
    "firstYear": 1984,
    "lastYear": 2009
  },
  {
    "id": "guided-by-voices",
    "name": "Guided By Voices",
    "showCount": 48,
    "firstYear": 1993,
    "lastYear": 2022
  },
  {
    "id": "guster",
    "name": "Guster",
    "showCount": 843,
    "firstYear": 1992,
    "lastYear": 2026
  },
  {
    "id": "h-sker-d",
    "name": "H?sker D?",
    "showCount": 27,
    "firstYear": 1983,
    "lastYear": 1987
  },
  {
    "id": "harvey-danger",
    "name": "Harvey Danger",
    "showCount": 8,
    "firstYear": 2000,
    "lastYear": 2009
  },
  {
    "id": "hellogoodbye",
    "name": "Hellogoodbye",
    "showCount": 1,
    "firstYear": 2004,
    "lastYear": 2004
  },
  {
    "id": "helmet",
    "name": "Helmet",
    "showCount": 33,
    "firstYear": 1991,
    "lastYear": 2025
  },
  {
    "id": "herbie-hancock",
    "name": "Herbie Hancock",
    "showCount": 14,
    "firstYear": 1971,
    "lastYear": 1987
  },
  {
    "id": "hole",
    "name": "Hole",
    "showCount": 145,
    "firstYear": 1989,
    "lastYear": 2011
  },
  {
    "id": "hoobastank",
    "name": "Hoobastank",
    "showCount": 5,
    "firstYear": 2004,
    "lastYear": 2025
  },
  {
    "id": "hootie-and-the-blowfish",
    "name": "Hootie & the Blowfish",
    "showCount": 5,
    "firstYear": 1995,
    "lastYear": 2024
  },
  {
    "id": "hootie-the-blowfish",
    "name": "Hootie & the Blowfish",
    "showCount": 5,
    "firstYear": 1995,
    "lastYear": 2024
  },
  {
    "id": "horace-silver",
    "name": "Horace Silver",
    "showCount": 2,
    "firstYear": 1962,
    "lastYear": 1968
  },
  {
    "id": "how-to-destroy-angels",
    "name": "How To Destroy Angels",
    "showCount": 26,
    "firstYear": 2013,
    "lastYear": 2013
  },
  {
    "id": "hum",
    "name": "Hum",
    "showCount": 56,
    "firstYear": 1994,
    "lastYear": 2017
  },
  {
    "id": "ice-cube",
    "name": "Ice Cube",
    "showCount": 1,
    "firstYear": 1992,
    "lastYear": 1992
  },
  {
    "id": "incubus",
    "name": "Incubus",
    "showCount": 151,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "ivy",
    "name": "Ivy",
    "showCount": 4,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "jack-white",
    "name": "Jack White",
    "showCount": 1,
    "firstYear": 2001,
    "lastYear": 2001
  },
  {
    "id": "jackson-5",
    "name": "Jackson 5",
    "showCount": 1,
    "firstYear": 1973,
    "lastYear": 1973
  },
  {
    "id": "jakob-dylan",
    "name": "Jakob Dylan",
    "showCount": 2,
    "firstYear": 2008,
    "lastYear": 2008
  },
  {
    "id": "james-iha",
    "name": "James Iha",
    "showCount": 9,
    "firstYear": 1998,
    "lastYear": 2012
  },
  {
    "id": "jane-s-addiction",
    "name": "Jane's Addiction",
    "showCount": 276,
    "firstYear": 1986,
    "lastYear": 2024
  },
  {
    "id": "janes-addiction",
    "name": "Jane's Addiction",
    "showCount": 310,
    "firstYear": 1986,
    "lastYear": 2024
  },
  {
    "id": "jawbox",
    "name": "Jawbox",
    "showCount": 1,
    "firstYear": 1993,
    "lastYear": 1993
  },
  {
    "id": "jeff-buckley",
    "name": "Jeff Buckley",
    "showCount": 109,
    "firstYear": 1991,
    "lastYear": 1997
  },
  {
    "id": "jeff-schroeder",
    "name": "Jeff Schroeder",
    "showCount": 1,
    "firstYear": 2019,
    "lastYear": 2019
  },
  {
    "id": "jeff-tweedy",
    "name": "Jeff Tweedy",
    "showCount": 228,
    "firstYear": 1994,
    "lastYear": 2026
  },
  {
    "id": "jeff-tweedy-and-friends",
    "name": "Jeff Tweedy & Friends",
    "showCount": 12,
    "firstYear": 1996,
    "lastYear": 2024
  },
  {
    "id": "jeff-tweedy-friends",
    "name": "Jeff Tweedy & Friends",
    "showCount": 12,
    "firstYear": 1996,
    "lastYear": 2024
  },
  {
    "id": "jellyfish",
    "name": "Jellyfish",
    "showCount": 24,
    "firstYear": 1990,
    "lastYear": 1993
  },
  {
    "id": "jeremy-enigk",
    "name": "Jeremy Enigk",
    "showCount": 2,
    "firstYear": 1996,
    "lastYear": 1997
  },
  {
    "id": "jerry-cantrell",
    "name": "Jerry Cantrell",
    "showCount": 15,
    "firstYear": 1998,
    "lastYear": 2025
  },
  {
    "id": "jesus-and-mary-chain",
    "name": "Jesus and Mary Chain",
    "showCount": 10,
    "firstYear": 1985,
    "lastYear": 2021
  },
  {
    "id": "jewel",
    "name": "Jewel",
    "showCount": 64,
    "firstYear": 1995,
    "lastYear": 2013
  },
  {
    "id": "jimi-hendrix",
    "name": "Jimi Hendrix",
    "showCount": 241,
    "firstYear": 1965,
    "lastYear": 2010
  },
  {
    "id": "jimmies-chicken-shack",
    "name": "Jimmies Chicken Shack",
    "showCount": 3,
    "firstYear": 1999,
    "lastYear": 2023
  },
  {
    "id": "jimmy-chamberlin",
    "name": "Jimmy Chamberlin",
    "showCount": 16,
    "firstYear": 2003,
    "lastYear": 2024
  },
  {
    "id": "jimmy-eat-world",
    "name": "Jimmy Eat World",
    "showCount": 27,
    "firstYear": 1999,
    "lastYear": 2025
  },
  {
    "id": "john-anderson",
    "name": "John Anderson",
    "showCount": 1,
    "firstYear": 1986,
    "lastYear": 1986
  },
  {
    "id": "john-coltrane",
    "name": "John Coltrane",
    "showCount": 19,
    "firstYear": 1951,
    "lastYear": 1966
  },
  {
    "id": "john-frusciante",
    "name": "John Frusciante",
    "showCount": 11,
    "firstYear": 2001,
    "lastYear": 2005
  },
  {
    "id": "john-mayer",
    "name": "John Mayer",
    "showCount": 378,
    "firstYear": 1999,
    "lastYear": 2025
  },
  {
    "id": "johnny-cash",
    "name": "Johnny Cash",
    "showCount": 5,
    "firstYear": 1954,
    "lastYear": 1975
  },
  {
    "id": "jonsi",
    "name": "Jonsi",
    "showCount": 24,
    "firstYear": 2010,
    "lastYear": 2019
  },
  {
    "id": "jose-gonzalez",
    "name": "Jose Gonzalez",
    "showCount": 1,
    "firstYear": 2006,
    "lastYear": 2006
  },
  {
    "id": "juliana-hatfield",
    "name": "Juliana Hatfield",
    "showCount": 17,
    "firstYear": 1992,
    "lastYear": 2024
  },
  {
    "id": "ks-choice",
    "name": "K's Choice",
    "showCount": 8,
    "firstYear": 1994,
    "lastYear": 2023
  },
  {
    "id": "k-s-choice",
    "name": "K's Choice",
    "showCount": 9,
    "firstYear": 1994,
    "lastYear": 2023
  },
  {
    "id": "kacey-musgraves",
    "name": "Kacey Musgraves",
    "showCount": 29,
    "firstYear": 2015,
    "lastYear": 2026
  },
  {
    "id": "keane",
    "name": "Keane",
    "showCount": 45,
    "firstYear": 2004,
    "lastYear": 2024
  },
  {
    "id": "ken-andrews",
    "name": "Ken Andrews",
    "showCount": 2,
    "firstYear": 2007,
    "lastYear": 2007
  },
  {
    "id": "kevin-martin-and-the-hiwatts",
    "name": "Kevin Martin & The Hiwatts",
    "showCount": 1,
    "firstYear": 2004,
    "lastYear": 2004
  },
  {
    "id": "kevin-martin-the-hiwatts",
    "name": "Kevin Martin & The Hiwatts",
    "showCount": 1,
    "firstYear": 2004,
    "lastYear": 2004
  },
  {
    "id": "kexp-presents-raw-power",
    "name": "KEXP Presents Raw Power",
    "showCount": 2,
    "firstYear": 2015,
    "lastYear": 2015
  },
  {
    "id": "korn",
    "name": "Korn",
    "showCount": 54,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "kula-shaker",
    "name": "Kula Shaker",
    "showCount": 5,
    "firstYear": 1997,
    "lastYear": 2024
  },
  {
    "id": "l7",
    "name": "L7",
    "showCount": 13,
    "firstYear": 1989,
    "lastYear": 2024
  },
  {
    "id": "lainey-wilson",
    "name": "Lainey Wilson",
    "showCount": 6,
    "firstYear": 2022,
    "lastYear": 2026
  },
  {
    "id": "leadbelly",
    "name": "Leadbelly",
    "showCount": 2,
    "firstYear": 1940,
    "lastYear": 1949
  },
  {
    "id": "led-zeppelin",
    "name": "Led Zeppelin",
    "showCount": 11,
    "firstYear": 1969,
    "lastYear": 1980
  },
  {
    "id": "les-claypool-and-friends",
    "name": "Les Claypool & Friends",
    "showCount": 2,
    "firstYear": 2024,
    "lastYear": 2025
  },
  {
    "id": "les-claypool-friends",
    "name": "Les Claypool & Friends",
    "showCount": 2,
    "firstYear": 2024,
    "lastYear": 2025
  },
  {
    "id": "les-claypool-and-the-holy-mackeral",
    "name": "Les Claypool & the Holy Mackeral",
    "showCount": 6,
    "firstYear": 1996,
    "lastYear": 1996
  },
  {
    "id": "les-claypool-the-holy-mackeral",
    "name": "Les Claypool & the Holy Mackeral",
    "showCount": 6,
    "firstYear": 1996,
    "lastYear": 1996
  },
  {
    "id": "les-claypool-and-the-fancy-band",
    "name": "Les Claypool and the Fancy Band",
    "showCount": 4,
    "firstYear": 2005,
    "lastYear": 2007
  },
  {
    "id": "les-claypools-bastard-jazz",
    "name": "Les Claypool's Bastard Jazz",
    "showCount": 10,
    "firstYear": 2022,
    "lastYear": 2025
  },
  {
    "id": "les-claypool-s-bastard-jazz",
    "name": "Les Claypool's Bastard Jazz",
    "showCount": 10,
    "firstYear": 2022,
    "lastYear": 2025
  },
  {
    "id": "les-claypools-duo-de-twang",
    "name": "Les Claypool's Duo de Twang",
    "showCount": 2,
    "firstYear": 2014,
    "lastYear": 2023
  },
  {
    "id": "les-claypool-s-duo-de-twang",
    "name": "Les Claypool's Duo de Twang",
    "showCount": 2,
    "firstYear": 2014,
    "lastYear": 2023
  },
  {
    "id": "les-claypool-s-fearless-flying-frog-brigade",
    "name": "Les Claypool's Fearless Flying Frog Brigade",
    "showCount": 34,
    "firstYear": 2000,
    "lastYear": 2023
  },
  {
    "id": "les-claypools-fungi-band",
    "name": "Les Claypool's Fungi Band",
    "showCount": 1,
    "firstYear": 2009,
    "lastYear": 2009
  },
  {
    "id": "les-claypool-s-fungi-band",
    "name": "Les Claypool's Fungi Band",
    "showCount": 1,
    "firstYear": 2009,
    "lastYear": 2009
  },
  {
    "id": "letters-to-cleo",
    "name": "Letters To Cleo",
    "showCount": 4,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "liam-gallagher",
    "name": "Liam Gallagher",
    "showCount": 37,
    "firstYear": 2017,
    "lastYear": 2024
  },
  {
    "id": "lifehouse",
    "name": "Lifehouse",
    "showCount": 1,
    "firstYear": 2001,
    "lastYear": 2001
  },
  {
    "id": "limblifter",
    "name": "Limblifter",
    "showCount": 2,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "limp-bizkit",
    "name": "Limp Bizkit",
    "showCount": 18,
    "firstYear": 1996,
    "lastYear": 2024
  },
  {
    "id": "linkin-park",
    "name": "Linkin Park",
    "showCount": 166,
    "firstYear": 2000,
    "lastYear": 2026
  },
  {
    "id": "lit",
    "name": "Lit",
    "showCount": 4,
    "firstYear": 2023,
    "lastYear": 2025
  },
  {
    "id": "live",
    "name": "Live",
    "showCount": 44,
    "firstYear": 1992,
    "lastYear": 2025
  },
  {
    "id": "liz-phair",
    "name": "Liz Phair",
    "showCount": 11,
    "firstYear": 1994,
    "lastYear": 2023
  },
  {
    "id": "ll-cool-j",
    "name": "LL Cool J",
    "showCount": 1,
    "firstYear": 1987,
    "lastYear": 1987
  },
  {
    "id": "local-h",
    "name": "Local H",
    "showCount": 548,
    "firstYear": 1991,
    "lastYear": 2026
  },
  {
    "id": "lori-mckenna",
    "name": "Lori McKenna",
    "showCount": 1,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "low",
    "name": "Low",
    "showCount": 10,
    "firstYear": 1993,
    "lastYear": 2016
  },
  {
    "id": "luke-combs",
    "name": "Luke Combs",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "luscious-jackson",
    "name": "Luscious Jackson",
    "showCount": 10,
    "firstYear": 1993,
    "lastYear": 1999
  },
  {
    "id": "lush",
    "name": "Lush",
    "showCount": 59,
    "firstYear": 1988,
    "lastYear": 2016
  },
  {
    "id": "lynyrd-skynyrd",
    "name": "Lynyrd Skynyrd",
    "showCount": 36,
    "firstYear": 1973,
    "lastYear": 2018
  },
  {
    "id": "mad-season",
    "name": "Mad Season",
    "showCount": 7,
    "firstYear": 1994,
    "lastYear": 1995
  },
  {
    "id": "madder-rose",
    "name": "Madder Rose",
    "showCount": 1,
    "firstYear": 1994,
    "lastYear": 1994
  },
  {
    "id": "maisie-peters",
    "name": "Maisie Peters",
    "showCount": 2,
    "firstYear": 2023,
    "lastYear": 2024
  },
  {
    "id": "mammoth",
    "name": "Mammoth",
    "showCount": 18,
    "firstYear": 2023,
    "lastYear": 2026
  },
  {
    "id": "marcy-playground",
    "name": "Marcy Playground",
    "showCount": 2,
    "firstYear": 2022,
    "lastYear": 2024
  },
  {
    "id": "maren-morris",
    "name": "Maren Morris",
    "showCount": 1,
    "firstYear": 2023,
    "lastYear": 2023
  },
  {
    "id": "marvin-gaye",
    "name": "Marvin Gaye",
    "showCount": 4,
    "firstYear": 1972,
    "lastYear": 1983
  },
  {
    "id": "matchbox-20",
    "name": "Matchbox 20",
    "showCount": 31,
    "firstYear": 1997,
    "lastYear": 2023
  },
  {
    "id": "matt-pond-pa",
    "name": "Matt Pond PA",
    "showCount": 4,
    "firstYear": 2002,
    "lastYear": 2025
  },
  {
    "id": "matthew-good",
    "name": "Matthew Good",
    "showCount": 4,
    "firstYear": 2005,
    "lastYear": 2025
  },
  {
    "id": "matthew-sweet",
    "name": "Matthew Sweet",
    "showCount": 26,
    "firstYear": 1992,
    "lastYear": 2024
  },
  {
    "id": "mayday-parade",
    "name": "Mayday Parade",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "mazzy-star",
    "name": "Mazzy Star",
    "showCount": 38,
    "firstYear": 1990,
    "lastYear": 2019
  },
  {
    "id": "meat-puppets",
    "name": "Meat Puppets",
    "showCount": 51,
    "firstYear": 1980,
    "lastYear": 2022
  },
  {
    "id": "metallica",
    "name": "Metallica",
    "showCount": 1471,
    "firstYear": 1982,
    "lastYear": 2025
  },
  {
    "id": "michael-jackson",
    "name": "Michael Jackson",
    "showCount": 18,
    "firstYear": 1987,
    "lastYear": 1997
  },
  {
    "id": "michael-stipe",
    "name": "Michael Stipe",
    "showCount": 5,
    "firstYear": 2014,
    "lastYear": 2015
  },
  {
    "id": "michelle-branch",
    "name": "Michelle Branch",
    "showCount": 1,
    "firstYear": 2023,
    "lastYear": 2023
  },
  {
    "id": "midtown",
    "name": "Midtown",
    "showCount": 3,
    "firstYear": 2022,
    "lastYear": 2022
  },
  {
    "id": "mike-ness",
    "name": "Mike Ness",
    "showCount": 5,
    "firstYear": 1999,
    "lastYear": 1999
  },
  {
    "id": "mike-shinoda",
    "name": "Mike Shinoda",
    "showCount": 3,
    "firstYear": 2018,
    "lastYear": 2018
  },
  {
    "id": "mike-watt",
    "name": "Mike Watt",
    "showCount": 13,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "miles-davis",
    "name": "Miles Davis",
    "showCount": 193,
    "firstYear": 1946,
    "lastYear": 1991
  },
  {
    "id": "minor-threat",
    "name": "Minor Threat",
    "showCount": 1,
    "firstYear": 1983,
    "lastYear": 1983
  },
  {
    "id": "miranda-lambert",
    "name": "Miranda Lambert",
    "showCount": 8,
    "firstYear": 2007,
    "lastYear": 2023
  },
  {
    "id": "missy-higgins",
    "name": "Missy Higgins",
    "showCount": 4,
    "firstYear": 2004,
    "lastYear": 2024
  },
  {
    "id": "mos-def",
    "name": "Mos Def",
    "showCount": 2,
    "firstYear": 2000,
    "lastYear": 2008
  },
  {
    "id": "mother-love-bone",
    "name": "Mother Love Bone",
    "showCount": 13,
    "firstYear": 1988,
    "lastYear": 2018
  },
  {
    "id": "mudcrutch",
    "name": "Mudcrutch",
    "showCount": 4,
    "firstYear": 1971,
    "lastYear": 2016
  },
  {
    "id": "mudhoney",
    "name": "Mudhoney",
    "showCount": 169,
    "firstYear": 1988,
    "lastYear": 2025
  },
  {
    "id": "mutemath",
    "name": "Mutemath",
    "showCount": 2,
    "firstYear": 2012,
    "lastYear": 2013
  },
  {
    "id": "my-bloody-valentine",
    "name": "My Bloody Valentine",
    "showCount": 155,
    "firstYear": 1986,
    "lastYear": 2026
  },
  {
    "id": "my-chemical-romance",
    "name": "My Chemical Romance",
    "showCount": 3,
    "firstYear": 2007,
    "lastYear": 2022
  },
  {
    "id": "nada-surf",
    "name": "Nada Surf",
    "showCount": 17,
    "firstYear": 2004,
    "lastYear": 2025
  },
  {
    "id": "narrowhead",
    "name": "Narrowhead",
    "showCount": 1,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "nas",
    "name": "Nas",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "natalie-merchant",
    "name": "Natalie Merchant",
    "showCount": 3,
    "firstYear": 1996,
    "lastYear": 2001
  },
  {
    "id": "neds-atomic-dustbin",
    "name": "Ned's Atomic Dustbin",
    "showCount": 2,
    "firstYear": 1991,
    "lastYear": 2023
  },
  {
    "id": "ned-s-atomic-dustbin",
    "name": "Ned's Atomic Dustbin",
    "showCount": 2,
    "firstYear": 1991,
    "lastYear": 2023
  },
  {
    "id": "neil-young",
    "name": "Neil Young",
    "showCount": 8,
    "firstYear": 1965,
    "lastYear": 1992
  },
  {
    "id": "neil-young-and-pearl-jam",
    "name": "Neil Young & Pearl Jam",
    "showCount": 24,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "neil-young-pearl-jam",
    "name": "Neil Young & Pearl Jam",
    "showCount": 24,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "new-found-glory",
    "name": "New Found Glory",
    "showCount": 6,
    "firstYear": 2019,
    "lastYear": 2024
  },
  {
    "id": "new-radicals",
    "name": "New Radicals",
    "showCount": 1,
    "firstYear": 1998,
    "lastYear": 1998
  },
  {
    "id": "nickelback",
    "name": "Nickelback",
    "showCount": 12,
    "firstYear": 2000,
    "lastYear": 2024
  },
  {
    "id": "nine-inch-nails",
    "name": "Nine Inch Nails",
    "showCount": 989,
    "firstYear": 1988,
    "lastYear": 2990
  },
  {
    "id": "nirvana",
    "name": "Nirvana",
    "showCount": 1034,
    "firstYear": 1969,
    "lastYear": 2025
  },
  {
    "id": "no-doubt",
    "name": "No Doubt",
    "showCount": 1,
    "firstYear": 1997,
    "lastYear": 1997
  },
  {
    "id": "noel-gallagher",
    "name": "Noel Gallagher",
    "showCount": 12,
    "firstYear": 1998,
    "lastYear": 2023
  },
  {
    "id": "noel-gallaghers-high-flying-birds",
    "name": "Noel Gallagher's High Flying Birds",
    "showCount": 42,
    "firstYear": 2011,
    "lastYear": 2024
  },
  {
    "id": "noel-gallagher-s-high-flying-birds",
    "name": "Noel Gallagher's High Flying Birds",
    "showCount": 42,
    "firstYear": 2011,
    "lastYear": 2024
  },
  {
    "id": "oasis",
    "name": "Oasis",
    "showCount": 717,
    "firstYear": 1992,
    "lastYear": 2025
  },
  {
    "id": "old-97-s",
    "name": "Old 97's",
    "showCount": 6,
    "firstYear": 1996,
    "lastYear": 2026
  },
  {
    "id": "old-97s",
    "name": "Old 97's",
    "showCount": 6,
    "firstYear": 1996,
    "lastYear": 2026
  },
  {
    "id": "orgy",
    "name": "Orgy",
    "showCount": 1,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "otis-redding",
    "name": "Otis Redding",
    "showCount": 2,
    "firstYear": 1966,
    "lastYear": 1967
  },
  {
    "id": "our-lady-peace",
    "name": "Our Lady Peace",
    "showCount": 58,
    "firstYear": 1995,
    "lastYear": 2026
  },
  {
    "id": "outkast",
    "name": "Outkast",
    "showCount": 1,
    "firstYear": 1998,
    "lastYear": 1998
  },
  {
    "id": "oysterhead",
    "name": "Oysterhead",
    "showCount": 13,
    "firstYear": 2000,
    "lastYear": 2022
  },
  {
    "id": "pantera",
    "name": "Pantera",
    "showCount": 66,
    "firstYear": 1984,
    "lastYear": 2025
  },
  {
    "id": "paramore",
    "name": "Paramore",
    "showCount": 9,
    "firstYear": 2009,
    "lastYear": 2024
  },
  {
    "id": "pat-wilson",
    "name": "Pat Wilson",
    "showCount": 1,
    "firstYear": 2002,
    "lastYear": 2002
  },
  {
    "id": "pavement",
    "name": "Pavement",
    "showCount": 132,
    "firstYear": 1989,
    "lastYear": 2024
  },
  {
    "id": "paw",
    "name": "Paw",
    "showCount": 3,
    "firstYear": 1993,
    "lastYear": 1995
  },
  {
    "id": "pearl-jam",
    "name": "Pearl Jam",
    "showCount": 1696,
    "firstYear": 1990,
    "lastYear": 2025
  },
  {
    "id": "pete-yorn",
    "name": "Pete Yorn",
    "showCount": 4,
    "firstYear": 2003,
    "lastYear": 2019
  },
  {
    "id": "phantom-planet",
    "name": "Phantom Planet",
    "showCount": 2,
    "firstYear": 2012,
    "lastYear": 2024
  },
  {
    "id": "pharcyde",
    "name": "Pharcyde",
    "showCount": 1,
    "firstYear": 2014,
    "lastYear": 2014
  },
  {
    "id": "pigface",
    "name": "Pigface",
    "showCount": 2,
    "firstYear": 1991,
    "lastYear": 1991
  },
  {
    "id": "pinback",
    "name": "Pinback",
    "showCount": 36,
    "firstYear": 2000,
    "lastYear": 2015
  },
  {
    "id": "pixies",
    "name": "Pixies",
    "showCount": 31,
    "firstYear": 1987,
    "lastYear": 2023
  },
  {
    "id": "pluralone",
    "name": "Pluralone",
    "showCount": 7,
    "firstYear": 2022,
    "lastYear": 2022
  },
  {
    "id": "polvo",
    "name": "Polvo",
    "showCount": 1,
    "firstYear": 1998,
    "lastYear": 1998
  },
  {
    "id": "porno-for-pyros",
    "name": "Porno for Pyros",
    "showCount": 36,
    "firstYear": 1992,
    "lastYear": 2024
  },
  {
    "id": "portishead",
    "name": "Portishead",
    "showCount": 1,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "postal-service",
    "name": "Postal Service",
    "showCount": 15,
    "firstYear": 2003,
    "lastYear": 2024
  },
  {
    "id": "primus",
    "name": "Primus",
    "showCount": 802,
    "firstYear": 1987,
    "lastYear": 2025
  },
  {
    "id": "public-enemy",
    "name": "Public Enemy",
    "showCount": 5,
    "firstYear": 1988,
    "lastYear": 1999
  },
  {
    "id": "puscifer",
    "name": "Puscifer",
    "showCount": 12,
    "firstYear": 2009,
    "lastYear": 2023
  },
  {
    "id": "queens-of-the-stone-age",
    "name": "Queens of the Stone Age",
    "showCount": 63,
    "firstYear": 1999,
    "lastYear": 2024
  },
  {
    "id": "quicksand",
    "name": "Quicksand",
    "showCount": 15,
    "firstYear": 1993,
    "lastYear": 2024
  },
  {
    "id": "r-e-m",
    "name": "R.E.M.",
    "showCount": 821,
    "firstYear": 1980,
    "lastYear": 2989
  },
  {
    "id": "rem",
    "name": "R.E.M.",
    "showCount": 803,
    "firstYear": 1980,
    "lastYear": 2989
  },
  {
    "id": "radiohead",
    "name": "Radiohead",
    "showCount": 1225,
    "firstYear": 1986,
    "lastYear": 2025
  },
  {
    "id": "rage-against-the-machine",
    "name": "Rage Against the Machine",
    "showCount": 240,
    "firstYear": 1991,
    "lastYear": 2022
  },
  {
    "id": "rancid",
    "name": "Rancid",
    "showCount": 3,
    "firstYear": 1994,
    "lastYear": 1996
  },
  {
    "id": "randy-travis",
    "name": "Randy Travis",
    "showCount": 1,
    "firstYear": 1986,
    "lastYear": 1986
  },
  {
    "id": "ray-charles",
    "name": "Ray Charles",
    "showCount": 20,
    "firstYear": 1953,
    "lastYear": 2002
  },
  {
    "id": "reba-mcentire",
    "name": "Reba McEntire",
    "showCount": 1,
    "firstYear": 1985,
    "lastYear": 1985
  },
  {
    "id": "red-hot-chili-peppers",
    "name": "Red Hot Chili Peppers",
    "showCount": 927,
    "firstYear": 1983,
    "lastYear": 2025
  },
  {
    "id": "revolting-cocks",
    "name": "Revolting Cocks",
    "showCount": 1,
    "firstYear": 1990,
    "lastYear": 1990
  },
  {
    "id": "rich-robinson",
    "name": "Rich Robinson",
    "showCount": 1,
    "firstYear": 2015,
    "lastYear": 2015
  },
  {
    "id": "ride",
    "name": "Ride",
    "showCount": 34,
    "firstYear": 1989,
    "lastYear": 2023
  },
  {
    "id": "rivers-cuomo",
    "name": "Rivers Cuomo",
    "showCount": 1,
    "firstYear": 2018,
    "lastYear": 2018
  },
  {
    "id": "rndm",
    "name": "RNDM",
    "showCount": 12,
    "firstYear": 2012,
    "lastYear": 2016
  },
  {
    "id": "rob-thomas",
    "name": "Rob Thomas",
    "showCount": 7,
    "firstYear": 2005,
    "lastYear": 2019
  },
  {
    "id": "rob-zombie",
    "name": "Rob Zombie",
    "showCount": 23,
    "firstYear": 1998,
    "lastYear": 2025
  },
  {
    "id": "rocket-from-the-crypt",
    "name": "Rocket From The Crypt",
    "showCount": 1,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "royal-trux",
    "name": "Royal Trux",
    "showCount": 1,
    "firstYear": 1999,
    "lastYear": 1999
  },
  {
    "id": "run-dmc",
    "name": "Run DMC",
    "showCount": 4,
    "firstYear": 1985,
    "lastYear": 1996
  },
  {
    "id": "ryan-adams",
    "name": "Ryan Adams",
    "showCount": 686,
    "firstYear": 1994,
    "lastYear": 2025
  },
  {
    "id": "sam-and-dave",
    "name": "Sam and Dave",
    "showCount": 1,
    "firstYear": 1979,
    "lastYear": 1979
  },
  {
    "id": "saosin",
    "name": "Saosin",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "sarah-mclachlan",
    "name": "Sarah McLachlan",
    "showCount": 7,
    "firstYear": 2004,
    "lastYear": 2025
  },
  {
    "id": "satchel",
    "name": "Satchel",
    "showCount": 9,
    "firstYear": 1994,
    "lastYear": 2010
  },
  {
    "id": "school-of-fish",
    "name": "School of Fish",
    "showCount": 1,
    "firstYear": 1991,
    "lastYear": 1991
  },
  {
    "id": "scott-lucas-and-the-married-men",
    "name": "Scott Lucas & the Married Men",
    "showCount": 4,
    "firstYear": 2011,
    "lastYear": 2022
  },
  {
    "id": "scott-lucas-the-married-men",
    "name": "Scott Lucas & the Married Men",
    "showCount": 4,
    "firstYear": 2011,
    "lastYear": 2022
  },
  {
    "id": "scrawl",
    "name": "Scrawl",
    "showCount": 1,
    "firstYear": 1992,
    "lastYear": 1992
  },
  {
    "id": "scream",
    "name": "Scream",
    "showCount": 0,
    "firstYear": null,
    "lastYear": null
  },
  {
    "id": "screaming-trees",
    "name": "Screaming Trees",
    "showCount": 24,
    "firstYear": 1987,
    "lastYear": 1998
  },
  {
    "id": "seaweed",
    "name": "Seaweed",
    "showCount": 1,
    "firstYear": 1992,
    "lastYear": 1992
  },
  {
    "id": "sebadoh",
    "name": "Sebadoh",
    "showCount": 49,
    "firstYear": 1991,
    "lastYear": 2014
  },
  {
    "id": "semisonic",
    "name": "Semisonic",
    "showCount": 5,
    "firstYear": 1999,
    "lastYear": 2023
  },
  {
    "id": "sepultura",
    "name": "Sepultura",
    "showCount": 5,
    "firstYear": 1990,
    "lastYear": 1996
  },
  {
    "id": "sessanta",
    "name": "Sessanta",
    "showCount": 6,
    "firstYear": 2024,
    "lastYear": 2025
  },
  {
    "id": "seven-mary-three",
    "name": "Seven Mary Three",
    "showCount": 17,
    "firstYear": 1995,
    "lastYear": 2012
  },
  {
    "id": "sevendust",
    "name": "Sevendust",
    "showCount": 47,
    "firstYear": 1998,
    "lastYear": 2026
  },
  {
    "id": "shadow",
    "name": "Shadow",
    "showCount": 2,
    "firstYear": 2008,
    "lastYear": 2013
  },
  {
    "id": "shawn-smith",
    "name": "Shawn Smith",
    "showCount": 20,
    "firstYear": 1998,
    "lastYear": 2015
  },
  {
    "id": "sheryl-crow",
    "name": "Sheryl Crow",
    "showCount": 4,
    "firstYear": 1994,
    "lastYear": 2025
  },
  {
    "id": "sigur-ros",
    "name": "Sigur Ros",
    "showCount": 308,
    "firstYear": 1999,
    "lastYear": 2025
  },
  {
    "id": "silverchair",
    "name": "Silverchair",
    "showCount": 90,
    "firstYear": 1995,
    "lastYear": 2007
  },
  {
    "id": "sleater-kinney",
    "name": "Sleater-Kinney",
    "showCount": 10,
    "firstYear": 2005,
    "lastYear": 2025
  },
  {
    "id": "slipknot",
    "name": "Slipknot",
    "showCount": 54,
    "firstYear": 1998,
    "lastYear": 2025
  },
  {
    "id": "slow-pulp",
    "name": "Slow Pulp",
    "showCount": 2,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "slowdive",
    "name": "Slowdive",
    "showCount": 75,
    "firstYear": 1990,
    "lastYear": 2025
  },
  {
    "id": "smashing-pumpkins",
    "name": "Smashing Pumpkins",
    "showCount": 1799,
    "firstYear": 1988,
    "lastYear": 2025
  },
  {
    "id": "smog",
    "name": "Smog",
    "showCount": 11,
    "firstYear": 1995,
    "lastYear": 2005
  },
  {
    "id": "smokey-robinson",
    "name": "Smokey Robinson",
    "showCount": 1,
    "firstYear": 1977,
    "lastYear": 1977
  },
  {
    "id": "social-distortion",
    "name": "Social Distortion",
    "showCount": 88,
    "firstYear": 1981,
    "lastYear": 2025
  },
  {
    "id": "son-volt",
    "name": "Son Volt",
    "showCount": 3,
    "firstYear": 1996,
    "lastYear": 2009
  },
  {
    "id": "sonic-youth",
    "name": "Sonic Youth",
    "showCount": 297,
    "firstYear": 1981,
    "lastYear": 2011
  },
  {
    "id": "soul-asylum",
    "name": "Soul Asylum",
    "showCount": 47,
    "firstYear": 1986,
    "lastYear": 2025
  },
  {
    "id": "soul-coughing",
    "name": "Soul Coughing",
    "showCount": 26,
    "firstYear": 1992,
    "lastYear": 2025
  },
  {
    "id": "soulfly",
    "name": "Soulfly",
    "showCount": 2,
    "firstYear": 1998,
    "lastYear": 2025
  },
  {
    "id": "soundgarden",
    "name": "Soundgarden",
    "showCount": 343,
    "firstYear": 1985,
    "lastYear": 2022
  },
  {
    "id": "spacehog",
    "name": "Spacehog",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "spin-doctors",
    "name": "Spin Doctors",
    "showCount": 5,
    "firstYear": 1991,
    "lastYear": 1992
  },
  {
    "id": "sponge",
    "name": "Sponge",
    "showCount": 17,
    "firstYear": 1995,
    "lastYear": 2025
  },
  {
    "id": "squarepusher",
    "name": "Squarepusher",
    "showCount": 2,
    "firstYear": 1996,
    "lastYear": 2023
  },
  {
    "id": "stabbing-westward",
    "name": "Stabbing Westward",
    "showCount": 23,
    "firstYear": 1993,
    "lastYear": 2024
  },
  {
    "id": "staind",
    "name": "Staind",
    "showCount": 14,
    "firstYear": 1999,
    "lastYear": 2024
  },
  {
    "id": "stan-getz",
    "name": "Stan Getz",
    "showCount": 2,
    "firstYear": 1972,
    "lastYear": 1974
  },
  {
    "id": "starchildren",
    "name": "Starchildren",
    "showCount": 1,
    "firstYear": 1994,
    "lastYear": 1994
  },
  {
    "id": "stevie-wonder",
    "name": "Stevie Wonder",
    "showCount": 55,
    "firstYear": 1972,
    "lastYear": 2025
  },
  {
    "id": "stone-gossard",
    "name": "Stone Gossard",
    "showCount": 2,
    "firstYear": 2004,
    "lastYear": 2008
  },
  {
    "id": "stone-sour",
    "name": "Stone Sour",
    "showCount": 3,
    "firstYear": 2006,
    "lastYear": 2018
  },
  {
    "id": "stone-temple-pilots",
    "name": "Stone Temple Pilots",
    "showCount": 96,
    "firstYear": 1993,
    "lastYear": 2025
  },
  {
    "id": "sublime",
    "name": "Sublime",
    "showCount": 2,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "sufjan-stevens",
    "name": "Sufjan Stevens",
    "showCount": 36,
    "firstYear": 2004,
    "lastYear": 2018
  },
  {
    "id": "sugar",
    "name": "Sugar",
    "showCount": 6,
    "firstYear": 1992,
    "lastYear": 2026
  },
  {
    "id": "suicidal-tendencies",
    "name": "Suicidal Tendencies",
    "showCount": 2,
    "firstYear": 1983,
    "lastYear": 1993
  },
  {
    "id": "sun-ra",
    "name": "Sun Ra",
    "showCount": 12,
    "firstYear": 1978,
    "lastYear": 1990
  },
  {
    "id": "sunny-day-real-estate",
    "name": "Sunny Day Real Estate",
    "showCount": 20,
    "firstYear": 1993,
    "lastYear": 2025
  },
  {
    "id": "superdrag",
    "name": "Superdrag",
    "showCount": 8,
    "firstYear": 1996,
    "lastYear": 2024
  },
  {
    "id": "swell",
    "name": "Swell",
    "showCount": 3,
    "firstYear": 1994,
    "lastYear": 1999
  },
  {
    "id": "swell-season",
    "name": "Swell Season",
    "showCount": 23,
    "firstYear": 2006,
    "lastYear": 2025
  },
  {
    "id": "swervedriver",
    "name": "Swervedriver",
    "showCount": 82,
    "firstYear": 1990,
    "lastYear": 2025
  },
  {
    "id": "switchfoot",
    "name": "Switchfoot",
    "showCount": 3,
    "firstYear": 2013,
    "lastYear": 2017
  },
  {
    "id": "system-of-a-down",
    "name": "System of a Down",
    "showCount": 18,
    "firstYear": 2000,
    "lastYear": 2024
  },
  {
    "id": "tad",
    "name": "Tad",
    "showCount": 19,
    "firstYear": 1989,
    "lastYear": 2013
  },
  {
    "id": "talib-kweli",
    "name": "Talib Kweli",
    "showCount": 1,
    "firstYear": 2023,
    "lastYear": 2023
  },
  {
    "id": "taylor-swift",
    "name": "Taylor Swift",
    "showCount": 27,
    "firstYear": 2007,
    "lastYear": 2024
  },
  {
    "id": "teenage-fanclub",
    "name": "Teenage Fanclub",
    "showCount": 19,
    "firstYear": 1991,
    "lastYear": 2025
  },
  {
    "id": "temple-of-the-dog",
    "name": "Temple of the Dog",
    "showCount": 22,
    "firstYear": 1990,
    "lastYear": 2016
  },
  {
    "id": "the-appleseed-cast",
    "name": "The Appleseed Cast",
    "showCount": 1,
    "firstYear": 2023,
    "lastYear": 2023
  },
  {
    "id": "the-beach-boys",
    "name": "The Beach Boys",
    "showCount": 2,
    "firstYear": 1967,
    "lastYear": 1971
  },
  {
    "id": "the-beatles",
    "name": "The Beatles",
    "showCount": 16,
    "firstYear": 1963,
    "lastYear": 1969
  },
  {
    "id": "the-black-crowes",
    "name": "The Black Crowes",
    "showCount": 289,
    "firstYear": 1990,
    "lastYear": 2026
  },
  {
    "id": "the-breeders",
    "name": "The Breeders",
    "showCount": 53,
    "firstYear": 1990,
    "lastYear": 2024
  },
  {
    "id": "the-clash",
    "name": "The Clash",
    "showCount": 1,
    "firstYear": 1982,
    "lastYear": 1982
  },
  {
    "id": "the-claypool-lennon-delirium",
    "name": "The Claypool Lennon Delirium",
    "showCount": 23,
    "firstYear": 2016,
    "lastYear": 2019
  },
  {
    "id": "the-cranberries",
    "name": "The Cranberries",
    "showCount": 53,
    "firstYear": 1991,
    "lastYear": 2012
  },
  {
    "id": "the-doors-and-eddie-vedder",
    "name": "The Doors & Eddie Vedder",
    "showCount": 1,
    "firstYear": 1993,
    "lastYear": 1993
  },
  {
    "id": "the-doors-eddie-vedder",
    "name": "The Doors & Eddie Vedder",
    "showCount": 1,
    "firstYear": 1993,
    "lastYear": 1993
  },
  {
    "id": "the-flaming-lips",
    "name": "The Flaming Lips",
    "showCount": 224,
    "firstYear": 1984,
    "lastYear": 2992
  },
  {
    "id": "the-format",
    "name": "The Format",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "the-germs",
    "name": "The Germs",
    "showCount": 5,
    "firstYear": 1978,
    "lastYear": 1980
  },
  {
    "id": "the-jackson-s",
    "name": "The Jackson's",
    "showCount": 1,
    "firstYear": 1981,
    "lastYear": 1981
  },
  {
    "id": "the-jayhawks",
    "name": "The Jayhawks",
    "showCount": 37,
    "firstYear": 1985,
    "lastYear": 2025
  },
  {
    "id": "the-lemonheads",
    "name": "The Lemonheads",
    "showCount": 53,
    "firstYear": 1989,
    "lastYear": 2025
  },
  {
    "id": "the-maine",
    "name": "The Maine",
    "showCount": 2,
    "firstYear": 2019,
    "lastYear": 2024
  },
  {
    "id": "the-melvins",
    "name": "The Melvins",
    "showCount": 21,
    "firstYear": 1985,
    "lastYear": 2022
  },
  {
    "id": "the-minus-5-and-wilco",
    "name": "The Minus 5 and Wilco",
    "showCount": 10,
    "firstYear": 2000,
    "lastYear": 2025
  },
  {
    "id": "the-minutemen",
    "name": "The Minutemen",
    "showCount": 4,
    "firstYear": 1981,
    "lastYear": 1985
  },
  {
    "id": "the-network",
    "name": "The Network",
    "showCount": 1,
    "firstYear": 2005,
    "lastYear": 2005
  },
  {
    "id": "the-nixons",
    "name": "The Nixons",
    "showCount": 1,
    "firstYear": 1995,
    "lastYear": 1995
  },
  {
    "id": "the-offspring",
    "name": "The Offspring",
    "showCount": 100,
    "firstYear": 1991,
    "lastYear": 2025
  },
  {
    "id": "the-presidents-of-the-u-s-a",
    "name": "The Presidents of the U.S.A.",
    "showCount": 55,
    "firstYear": 1994,
    "lastYear": 2014
  },
  {
    "id": "the-presidents-of-the-usa",
    "name": "The Presidents of the U.S.A.",
    "showCount": 52,
    "firstYear": 1994,
    "lastYear": 2014
  },
  {
    "id": "the-ramones",
    "name": "The Ramones",
    "showCount": 28,
    "firstYear": 1976,
    "lastYear": 1996
  },
  {
    "id": "the-refreshments",
    "name": "The Refreshments",
    "showCount": 1,
    "firstYear": 1996,
    "lastYear": 1996
  },
  {
    "id": "the-rockfords",
    "name": "The Rockfords",
    "showCount": 1,
    "firstYear": 2000,
    "lastYear": 2000
  },
  {
    "id": "the-roots",
    "name": "The Roots",
    "showCount": 7,
    "firstYear": 1996,
    "lastYear": 2025
  },
  {
    "id": "the-shins",
    "name": "The Shins",
    "showCount": 32,
    "firstYear": 2000,
    "lastYear": 2017
  },
  {
    "id": "the-temptations",
    "name": "The Temptations",
    "showCount": 1,
    "firstYear": 1982,
    "lastYear": 1982
  },
  {
    "id": "the-urge",
    "name": "The Urge",
    "showCount": 2,
    "firstYear": 1996,
    "lastYear": 2019
  },
  {
    "id": "the-verve-pipe",
    "name": "The Verve Pipe",
    "showCount": 29,
    "firstYear": 1997,
    "lastYear": 2026
  },
  {
    "id": "the-wallflowers",
    "name": "The Wallflowers",
    "showCount": 41,
    "firstYear": 1992,
    "lastYear": 2025
  },
  {
    "id": "the-what",
    "name": "The What",
    "showCount": 1,
    "firstYear": 1996,
    "lastYear": 1996
  },
  {
    "id": "the-white-stripes",
    "name": "The White Stripes",
    "showCount": 1,
    "firstYear": 2005,
    "lastYear": 2005
  },
  {
    "id": "thelonious-monk",
    "name": "Thelonious Monk",
    "showCount": 33,
    "firstYear": 1955,
    "lastYear": 1975
  },
  {
    "id": "them-crooked-vultures",
    "name": "Them Crooked Vultures",
    "showCount": 17,
    "firstYear": 2009,
    "lastYear": 2010
  },
  {
    "id": "third-eye-blind",
    "name": "Third Eye Blind",
    "showCount": 14,
    "firstYear": 1998,
    "lastYear": 2025
  },
  {
    "id": "thrice",
    "name": "Thrice",
    "showCount": 3,
    "firstYear": 2008,
    "lastYear": 2026
  },
  {
    "id": "tim-and-dave",
    "name": "Tim and Dave",
    "showCount": 12,
    "firstYear": 1994,
    "lastYear": 2022
  },
  {
    "id": "toad-the-wet-sprocket",
    "name": "Toad the Wet Sprocket",
    "showCount": 334,
    "firstYear": 1986,
    "lastYear": 2025
  },
  {
    "id": "toadies",
    "name": "Toadies",
    "showCount": 17,
    "firstYear": 1994,
    "lastYear": 2017
  },
  {
    "id": "toby-keith",
    "name": "Toby Keith",
    "showCount": 1,
    "firstYear": 2002,
    "lastYear": 2002
  },
  {
    "id": "tom-morello",
    "name": "Tom Morello",
    "showCount": 4,
    "firstYear": 2024,
    "lastYear": 2025
  },
  {
    "id": "tom-petty--the-heartbreakers",
    "name": "Tom Petty & the Heartbreakers",
    "showCount": 324,
    "firstYear": 1971,
    "lastYear": 2017
  },
  {
    "id": "tom-petty-and-the-heartbreakers",
    "name": "Tom Petty & the Heartbreakers",
    "showCount": 320,
    "firstYear": 1973,
    "lastYear": 2017
  },
  {
    "id": "tom-petty-the-heartbreakers",
    "name": "Tom Petty & the Heartbreakers",
    "showCount": 0,
    "firstYear": null,
    "lastYear": null
  },
  {
    "id": "tonic",
    "name": "Tonic",
    "showCount": 46,
    "firstYear": 1997,
    "lastYear": 2025
  },
  {
    "id": "tool",
    "name": "Tool",
    "showCount": 1392,
    "firstYear": 1991,
    "lastYear": 2025
  },
  {
    "id": "tori-amos",
    "name": "Tori Amos",
    "showCount": 113,
    "firstYear": 1991,
    "lastYear": 2022
  },
  {
    "id": "tracy-chapman",
    "name": "Tracy Chapman",
    "showCount": 1,
    "firstYear": 1988,
    "lastYear": 1988
  },
  {
    "id": "train",
    "name": "Train",
    "showCount": 7,
    "firstYear": 2002,
    "lastYear": 2014
  },
  {
    "id": "traveling-wilburys",
    "name": "Traveling Wilburys",
    "showCount": 0,
    "firstYear": null,
    "lastYear": null
  },
  {
    "id": "tripping-daisy",
    "name": "Tripping Daisy",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "turnstile",
    "name": "Turnstile",
    "showCount": 10,
    "firstYear": 2023,
    "lastYear": 2025
  },
  {
    "id": "tycho",
    "name": "Tycho",
    "showCount": 6,
    "firstYear": 2020,
    "lastYear": 2025
  },
  {
    "id": "ugly-kid-joe",
    "name": "Ugly Kid Joe",
    "showCount": 10,
    "firstYear": 1992,
    "lastYear": 2025
  },
  {
    "id": "uncle-tupelo",
    "name": "Uncle Tupelo",
    "showCount": 77,
    "firstYear": 1988,
    "lastYear": 1994
  },
  {
    "id": "underoath",
    "name": "Underoath",
    "showCount": 1,
    "firstYear": 2025,
    "lastYear": 2025
  },
  {
    "id": "various-country",
    "name": "Various Country",
    "showCount": 2,
    "firstYear": 1987,
    "lastYear": 1992
  },
  {
    "id": "velocity-girl",
    "name": "Velocity Girl",
    "showCount": 1,
    "firstYear": 1992,
    "lastYear": 1992
  },
  {
    "id": "vertical-horizon",
    "name": "Vertical Horizon",
    "showCount": 66,
    "firstYear": 1994,
    "lastYear": 2025
  },
  {
    "id": "veruca-salt",
    "name": "Veruca Salt",
    "showCount": 21,
    "firstYear": 1994,
    "lastYear": 2024
  },
  {
    "id": "vic-chestnutt",
    "name": "Vic Chestnutt",
    "showCount": 4,
    "firstYear": 1991,
    "lastYear": 2008
  },
  {
    "id": "weezer",
    "name": "Weezer",
    "showCount": 337,
    "firstYear": 1993,
    "lastYear": 2025
  },
  {
    "id": "wheatus",
    "name": "Wheatus",
    "showCount": 5,
    "firstYear": 2000,
    "lastYear": 2025
  },
  {
    "id": "whiskeytown",
    "name": "Whiskeytown",
    "showCount": 20,
    "firstYear": 1995,
    "lastYear": 1998
  },
  {
    "id": "white-zombie",
    "name": "White Zombie",
    "showCount": 11,
    "firstYear": 1988,
    "lastYear": 1996
  },
  {
    "id": "wilco",
    "name": "Wilco",
    "showCount": 1123,
    "firstYear": 1994,
    "lastYear": 2026
  },
  {
    "id": "willie-nelson",
    "name": "Willie Nelson",
    "showCount": 2,
    "firstYear": 1975,
    "lastYear": 2000
  },
  {
    "id": "wu-tang-clan",
    "name": "Wu Tang Clan",
    "showCount": 10,
    "firstYear": 1993,
    "lastYear": 2025
  },
  {
    "id": "x",
    "name": "X",
    "showCount": 1,
    "firstYear": 2013,
    "lastYear": 2013
  },
  {
    "id": "year-of-the-rabbit",
    "name": "Year of the Rabbit",
    "showCount": 1,
    "firstYear": 2003,
    "lastYear": 2003
  },
  {
    "id": "zac-brown-band",
    "name": "Zac Brown Band",
    "showCount": 1,
    "firstYear": 2024,
    "lastYear": 2024
  },
  {
    "id": "zero-7",
    "name": "Zero 7",
    "showCount": 3,
    "firstYear": 2002,
    "lastYear": 2006
  },
  {
    "id": "zwan",
    "name": "Zwan",
    "showCount": 158,
    "firstYear": 2001,
    "lastYear": 2003
  }
];