const ARTIST_DATA = {
  "id": "ben-folds",
  "name": "Ben Folds",
  "drive": "E",
  "showCount": 23,
  "firstYear": 1995,
  "lastYear": 2025,
  "years": [
    1995,
    1997,
    2001,
    2005,
    2007,
    2008,
    2015,
    2021,
    2023,
    2024,
    2025
  ],
  "shows": [
    {
      "year": 2001,
      "month": 11,
      "day": 12,
      "dateStr": "11-12-2001",
      "city": "Tokyo",
      "state": "Japan",
      "location": "Tokyo, Japan",
      "venue": "Shibuya Public Hall",
      "version": "Silver CD",
      "format": "FLAC",
      "notes": "Unknown"
    },
    {
      "year": 2005,
      "month": 4,
      "day": 7,
      "dateStr": "4-7-2005",
      "city": "Melbourne",
      "state": "Australia",
      "location": "Melbourne, Australia",
      "venue": "MD(M)",
      "version": "AUD",
      "format": "FLAC",
      "notes": "Sony ECM-717 \u00b7 franger"
    },
    {
      "year": 2005,
      "month": 6,
      "day": 4,
      "dateStr": "6-4-2005",
      "city": "Berlin",
      "state": "Germany",
      "location": "Berlin, Germany",
      "venue": "Columbiahalle",
      "version": "FM",
      "format": "FLAC",
      "notes": ""
    },
    {
      "year": 2005,
      "month": 11,
      "day": 13,
      "dateStr": "11-13-2005",
      "city": "Nashville",
      "state": "TN",
      "location": "Nashville, TN",
      "venue": "Ryman Auditorium",
      "version": "AUD",
      "format": "FLAC",
      "notes": "Sony ECM-909 \u00b7 Unknown"
    },
    {
      "year": 2007,
      "month": 8,
      "day": 4,
      "dateStr": "8-4-2007",
      "city": "Pelham",
      "state": "AL",
      "location": "Pelham, AL",
      "venue": "Verizon Wireless Amphitheater",
      "version": "AUD",
      "format": "FLAC",
      "notes": "MC 930 \u00b7 jeff hatcher & dennis tyler"
    },
    {
      "year": 2008,
      "month": 4,
      "day": 20,
      "dateStr": "4-20-2008",
      "city": "Duluth",
      "state": "MN",
      "location": "Duluth, MN",
      "venue": "Romano Gym - University of Minnesota Duluth",
      "version": "AUD",
      "format": "FLAC",
      "notes": ""
    },
    {
      "year": 2021,
      "month": 1,
      "day": 31,
      "dateStr": "1-31-2021",
      "city": "Melbourne",
      "state": "Australia",
      "location": "Melbourne, Australia",
      "venue": "Plenary Hall",
      "version": "AUD",
      "format": "FLAC",
      "notes": "Nokia Lumia 30 \u00b7 eckythump"
    },
    {
      "year": 2021,
      "month": 2,
      "day": 28,
      "dateStr": "2-28-2021",
      "city": "Sydney",
      "state": "Australia",
      "location": "Sydney, Australia",
      "venue": "Sunset Piazza",
      "version": "FM",
      "format": "FLAC",
      "notes": "Digital Broadcast"
    },
    {
      "year": 2021,
      "month": 10,
      "day": 17,
      "dateStr": "10-17-2021",
      "city": "Troy",
      "state": "NY",
      "location": "Troy, NY",
      "venue": "Troy Savings Bank Music Hall",
      "version": "AUD",
      "format": "FLAC 24",
      "notes": "SP-CMC-8 \u00b7 smores"
    },
    {
      "year": 2023,
      "month": 9,
      "day": 30,
      "dateStr": "9-30-2023",
      "city": "Troy",
      "state": "NY",
      "location": "Troy, NY",
      "venue": "Troy Savings Bank Music Hall",
      "version": "AUD",
      "format": "FLAC 24",
      "notes": "SP-CMC-8 \u00b7 smores"
    },
    {
      "year": 2024,
      "month": 6,
      "day": 22,
      "dateStr": "6-22-2024",
      "city": "Great Barrington",
      "state": "MA",
      "location": "Great Barrington, MA",
      "venue": "Mahaiwe PAC",
      "version": "AUD",
      "format": "FLAC 24",
      "notes": "SP-CMC-8 \u00b7 smores"
    },
    {
      "year": 2024,
      "month": 11,
      "day": 7,
      "dateStr": "11-7-2024",
      "city": "Buffalo",
      "state": "NY",
      "location": "Buffalo, NY",
      "venue": "University at Buffalo Center for the Arts",
      "version": "AUD",
      "format": "FLAC",
      "notes": "iPhone 16 Pro \u00b7 powerage5"
    },
    {
      "year": 2024,
      "month": 12,
      "day": 31,
      "dateStr": "12-31-2024",
      "city": "Saratoga Springs",
      "state": "NY",
      "location": "Saratoga Springs, NY",
      "venue": "City Center",
      "version": "AUD",
      "format": "FLAC 24",
      "notes": "SP-CMC-8 \u00b7 smores"
    },
    {
      "year": 2025,
      "month": 5,
      "day": 7,
      "dateStr": "5-7-2025",
      "city": "Rochester",
      "state": "MN",
      "location": "Rochester, MN",
      "venue": "Mayo Civic Center",
      "version": "AUD",
      "format": "FLAC 24",
      "notes": "iPhone \u00b7 Unknown"
    },
    {
      "year": 2025,
      "month": 12,
      "day": 20,
      "dateStr": "12-20-2025",
      "city": "Saratoga Springs",
      "state": "NY",
      "location": "Saratoga Springs, NY",
      "venue": "UPH",
      "version": "AUD",
      "format": "FLAC 24",
      "notes": "SP-CMC-8 \u00b7 smores"
    },
    {
      "year": 1995,
      "month": 6,
      "day": 17,
      "dateStr": "6-17-1995",
      "city": "Irvine",
      "state": "CA",
      "location": "Irvine, CA",
      "venue": "Irvine Meadows - KROQ Weenie Roast",
      "version": "FM",
      "format": "FLAC",
      "notes": ""
    },
    {
      "year": 1995,
      "month": 8,
      "day": 10,
      "dateStr": "8-10-1995",
      "city": "San Francisco",
      "state": "CA",
      "location": "San Francisco, CA",
      "venue": "The Fillmore",
      "version": "AUD",
      "format": "FLAC",
      "notes": "unk \u00b7 neekrive"
    },
    {
      "year": 1995,
      "month": 12,
      "day": null,
      "dateStr": "12-XX-1995",
      "city": "Better Than Ezra",
      "state": "",
      "location": "Better Than Ezra",
      "venue": "In Concert",
      "version": "preFM",
      "format": "FLAC",
      "notes": "96-15"
    },
    {
      "year": 1997,
      "month": 7,
      "day": 5,
      "dateStr": "7-5-1997",
      "city": "Sunrise",
      "state": "FL",
      "location": "Sunrise, FL",
      "venue": "Markham Park - Zetafest 97",
      "version": "AUD",
      "format": "FLAC",
      "notes": "DSM-6P \u00b7 datfly"
    },
    {
      "year": 2015,
      "month": 12,
      "day": 29,
      "dateStr": "12-29-2015",
      "city": "Dallas TX",
      "state": "",
      "location": "Dallas TX",
      "venue": "House of Blues",
      "version": "Webcast",
      "format": "TS",
      "notes": ""
    },
    {
      "year": 2021,
      "month": 9,
      "day": 11,
      "dateStr": "9-11-2021",
      "city": "Huber Heights",
      "state": "OH",
      "location": "Huber Heights, OH",
      "venue": "Rose Music Center",
      "version": "AUD",
      "format": "FLAC",
      "notes": "CA-14s \u00b7 charles dewey cole"
    },
    {
      "year": 2024,
      "month": 5,
      "day": 5,
      "dateStr": "5-5-2024",
      "city": "Nashville",
      "state": "TN",
      "location": "Nashville, TN",
      "venue": "3rd & Lindsey",
      "version": "MIX",
      "format": "FLAC 24",
      "notes": "SP-CMC-8 + SBD \u00b7 mr sifter"
    },
    {
      "year": 2025,
      "month": 7,
      "day": 3,
      "dateStr": "7-3-2025",
      "city": "Mason",
      "state": "OH",
      "location": "Mason, OH",
      "venue": "Mason Municipal Campus",
      "version": "AUD",
      "format": "FLAC",
      "notes": "CA-14 \u00b7 live2cd"
    }
  ],
  "misc": [
    {
      "type": "label",
      "label": "Ben Folds - 1990 Demos",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Ben Folds - 1990 Demos (Goody Remaster, v.2)",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Ben Folds - Itunes Sessions",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Ben Folds - Rare",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Ben Folds - Vault 1",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Ben Folds - Vault 2 + Extra",
      "format": "FLAC + MP4"
    },
    {
      "type": "label",
      "label": "Ben Folds - The Bens + Majosha '89",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Ben Folds - Way To Normal (Fake Leaked Version) + I Made It Up On Stage",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Ben Folds - So There",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Ben Folds - Sunny 16, Speed Graphic + Super D EPs",
      "format": "FLAC"
    },
    {
      "type": "release",
      "label": "Ben Folds - Live In Perth (2017)",
      "version": "Official Release",
      "format": "FLAC"
    },
    {
      "type": "label",
      "label": "Better Than Ezra"
    },
    {
      "type": "label",
      "label": "Drive - E"
    }
  ]
};
