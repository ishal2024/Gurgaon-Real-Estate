// import image1_land001 from '../assets/LAND001/image1.png'
// import image2_land001 from '../assets/LAND001/image2.png'
// import image1_land002 from '../assets/LAND002/image1.png'
// import image2_land002 from '../assets/LAND002/image2.png'
// import image3_land002 from '../assets/LAND002/image3.png'
// import image1_land003 from '../assets/LAND003/image1.png'
// import image2_land003 from '../assets/LAND003/image2.png'
// import image1_land004 from '../assets/LAND004/image1.png'
// import image2_land004 from '../assets/LAND004/image2.png'
// import image3_land004 from '../assets/LAND004/image3.png'

const images = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

function getPropertyImages(folderName) {
  return Object.keys(images)
    .filter((img) => img.includes(`/${folderName}/`))
    .map((img) => images[img]);
}

const agriculture_land = [
  {
    id: "LAND001",
    title: "5 Acre Fertile Agricultural Land",
    description:
      "Well-maintained agricultural land suitable for farming, horticulture, organic cultivation, or long-term investment. The property offers a peaceful environment with excellent agricultural potential.",

    location: {
      country: "India",
      state: "Rajasthan",
      address: "Nuh, Haryana",
    },

    category : "Agriculture Land",
    images: getPropertyImages("LAND001"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },

  {
    id: "LAND002",
    title: "Green Valley Agricultural Land",
    description:
      "Well-maintained agricultural land suitable for farming, horticulture, organic cultivation, or long-term investment. The property offers a peaceful environment with excellent agricultural potential.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Alwar Nogawa, Rajasthan",
    },

    category : "Agriculture Land",
    images: getPropertyImages("LAND002"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },

  {
    id: "LAND003",
    title: "Premium Farmland Near Riverside",
    description:
      "Well-maintained agricultural land suitable for farming, horticulture, organic cultivation, or long-term investment. The property offers a peaceful environment with excellent agricultural potential.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Sohana, Haryana",
    },

    category : "Agriculture Land",
    images: getPropertyImages("LAND003"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },

  {
    id: "LAND004",
    title: "Scenic Agricultural Land with Open Views",
    description:
      "Well-maintained agricultural land suitable for farming, horticulture, organic cultivation, or long-term investment. The property offers a peaceful environment with excellent agricultural potential.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Firozpur Jhirka, Nuh, Haryana",
    },

    category : "Agriculture Land",
    images: getPropertyImages("LAND004"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },
];


const farm_land = [
  {
    id: "FARM001",
    title: "Luxury Farmhouse Land with Scenic Views",
    description:
      "Premium farmland ideal for building a farmhouse, weekend retreat, organic farming, or long-term investment. Surrounded by greenery and offering a peaceful environment with excellent road connectivity.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Sohna Faridabad Road, Haryana",
    },

    category : "Farm Land",

    images: getPropertyImages("FARM001"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },

  {
    id: "FARM002",
    title: "Green Farm Land Near River",
    description:
      "Beautiful farmhouse land suitable for weekend homes, fruit orchards, organic farming, and recreational activities. The property offers a peaceful atmosphere with easy access to nearby towns.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Westin Vatika, Sohna, Haryana",
    },

    category : "Farm Land",

    images: getPropertyImages("FARM002"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },

  {
    id: "FARM003",
    title: "Greenview Farm Estate",
    description:
      "A beautifully maintained farm estate surrounded by lush green lawns and landscaped gardens. The property features a spacious single-storey villa with a charming tiled roof, elegant outdoor spaces, and ample open greenery, offering a peaceful and private setting ideal for weekend retreats, family gatherings, or a luxurious countryside lifestyle.",

    location: {
      country: "India",
      state: "Haryana",
      address: "DLF Spring Field, Gurugram, Haryana",
    },

    category : "Farm Land",

    images: getPropertyImages("FARM003"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },

  {
    id: "FARM004",
    title: "Greenfield Retreat Farm",
    description:
      "A modern farm villa surrounded by lush green lawns and landscaped gardens, offering a peaceful and spacious countryside setting.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Ansal Farm, Gurugram, Haryana",
    },

    category : "Farm Land",

    images: getPropertyImages("FARM004"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },

];

const villas = [
  {
    id: "VILLA001",
    title: "Sunset Luxury Villa",
    description:
      "A modern luxury villa featuring a private pool, spacious interiors, elegant outdoor seating, and beautifully landscaped surroundings.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Vatika Western , Sohna , Haryana",
    },

    category : "Villas",

    images: getPropertyImages("VILLA001"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },
  {
    id: "VILLA002",
    title: "Countryside Luxury Villa",
    description:
      "A stylish private villa with a swimming pool, spacious lawn, and peaceful countryside surroundings.",

    location: {
      country: "India",
      state: "Haryana",
      address: "DLF Spring Field, Sohna, Haryana",
    },

    category : "Villas",

    images: getPropertyImages("VILLA002"),

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },
]

const flats = [
  {
    id: "FLAT001",
    title: "Ashiana Mulberry",
    description:
      "Ashiana Mulberry offers well-planned homes with modern living spaces, essential amenities, and convenient access to key areas of Gurgaon.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Sector 2, Gurgaon, Haryana",
    },

    category : "Flats",

    images: [
      "https://imgs.search.brave.com/vBxXgjqB04vqtlzEHDhrdkr3ye82Pe2m0Ozm3nEoWMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/enJpY2tzLmNvbS9p/bWcvVXBkYXRlc0Js/b2cvZDVlNDhmZDYt/MjRhZS00YWMxLThh/OGMtZThkNzc1MTc3/MTNmYXNoaWFuYS5q/cGVn",
      "https://www.ashianahomes.com/_next/image?url=https%3A%2F%2Fbackend.ashianahomes.com%2Fuploads%2Fr_1_a67854f3c0.png&w=1920&q=75",

    ],

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },

  {
    id: "FLAT002",
    title: "Ansal Shiva Som Valley",
    description:
      "Ansal Shiva Som Valley provides a comfortable residential setting with spacious homes, greenery, and convenient connectivity to surrounding Gurgaon areas.",

    location: {
      country: "India",
      state: "Haryana",
      address: "Sector 2 & 35, Gurgaon, Haryana",
    },

    category : "Flats",

    images: [
      "https://imgs.search.brave.com/uVqalYtM9Bkl3GYpSI4EYhja7PKl1NF0t437Ot9oD-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3F1YXJleWFyZHMu/Y29tL3NlY29uZGFy/eVBvcnRhbC82Mzg2/Mjc3OTM4MjkxNDU4/MzktMjQwOTI0MTI1/NjIyNTYyMi5qcGc_/YWlvPXctNzQ1O2gt/NDE5O2Nyb3A7",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTNup1fDU0e7y1rl7xiiicwgh2NjgDyPvPR87QtnldIoqn9-iYCELN80p&s=10",
    ],

    agent: {
      name: "Rahul Sharma",
      phone: "+91XXXXXXXXXX",
      email: "rahul@example.com",
    },

    status: "Available",

    listedOn: "2026-07-31",
    updatedOn: "2026-07-31",
  },
]


export const data = [...agriculture_land , ...farm_land , ...villas , ...flats]
export const popular_properties = [agriculture_land[2] , farm_land[1] , villas[0]]



const projectDescriptions = {
  PRJ001:
    "Ashiana Mulberry offers well-planned homes with modern living spaces, essential amenities, and convenient access to key areas of Gurgaon.",

  PRJ002:
    "Eldeco Accolade is designed for comfortable family living, combining contemporary residences with a peaceful environment and good urban connectivity.",

  PRJ003:
    "NS Arcus Avani Signature Floors brings independent-floor living with a modern design, practical layouts, and easy access to the Sohna region.",

  PRJ004:
    "HCBS Sports Ville is a residential development focused on active community living, offering thoughtfully designed homes and sports-oriented amenities.",

  PRJ005:
    "Ansal Shiva Som Valley provides a comfortable residential setting with spacious homes, greenery, and convenient connectivity to surrounding Gurgaon areas.",

  PRJ006:
    "Anand Niketan offers residential spaces suited for families looking for everyday comfort, practical layouts, and access to essential facilities.",

  PRJ007:
    "Santur Azalea combines contemporary home designs with a peaceful residential atmosphere, making it suitable for both end users and investors.",

  PRJ008:
    "GLS Arawali Homes offers modern residences in a developing neighborhood, with convenient connectivity and facilities designed for comfortable family living.",

  PRJ009:
    "Mebbier Golden Park features thoughtfully planned residences with a focus on comfort, accessibility, and a convenient lifestyle in Sector 4.",

  PRJ010:
    "Ireo Pride Park offers modern residential spaces with quality infrastructure, attractive surroundings, and connectivity to major roads and facilities.",

  PRJ011:
    "MKS County is a residential project offering well-designed homes in a developing part of Gurgaon, suitable for families seeking convenience and value.",

  PRJ012:
    "Ganga Swarnim by Tathastu provides contemporary residential options with a focus on comfortable living, practical amenities, and a well-connected location.",

  PRJ013:
    "MVN Athens offers modern apartments designed for urban lifestyles, combining functional spaces with convenient access to everyday services and transportation.",

  PRJ014:
    "Mebbier Garden Avenue emphasizes comfortable community living with contemporary homes, landscaped surroundings, and access to essential neighborhood facilities.",

  PRJ015:
    "Pervas Ekam offers thoughtfully designed residential spaces with modern features, making it an attractive option for families and property investors.",

  PRJ016:
    "Corona Greens provides a comfortable residential environment with spacious living areas, greenery, and connectivity to important parts of Gurgaon.",

  PRJ017:
    "JMS Mega City is planned as a modern residential community with contemporary homes, useful amenities, and accessibility to major roads and local conveniences.",

  PRJ018:
    "4S Aster Avenue offers modern residences with practical layouts and contemporary architecture, positioned for convenient access to the surrounding Gurgaon region.",

  PRJ019:
    "Our Homes provides practical residential options for buyers seeking comfortable living spaces, everyday conveniences, and a well-connected neighborhood.",

  PRJ020:
    "Tisara offers thoughtfully planned homes with contemporary designs and practical living spaces, catering to families looking for a comfortable residential lifestyle.",

  PRJ021:
    "Raheja Aranya combines residential comfort with landscaped surroundings and modern infrastructure, offering a peaceful lifestyle along the Sohna Road corridor.",

  PRJ022:
    "Godrej Nature+ focuses on nature-inspired urban living with modern residences, landscaped spaces, and a lifestyle-oriented residential environment.",

  PRJ023:
    "Central Park Flower Valley offers a resort-style residential experience with landscaped surroundings, modern homes, and a community-focused lifestyle.",

  PRJ024:
    "Breez Global Heights provides contemporary residential spaces with modern amenities, functional layouts, and convenient connectivity to the surrounding area.",

  PRJ025:
    "Ashiana Anmol is designed to provide comfortable family homes with practical amenities, a community atmosphere, and easy access to daily necessities.",

  PRJ026:
    "NKV Golden Avenue offers modern residential spaces in a developing Gurgaon location, combining contemporary living with convenient local connectivity.",

  PRJ027:
    "LID Green Valley offers residential homes surrounded by a greener setting, with practical layouts and a lifestyle suited to families and long-term buyers.",

  PRJ028:
    "Adore Pyramid features contemporary residences with efficient layouts, modern infrastructure, and accessibility to important destinations across Gurgaon.",

  PRJ029:
    "BLF Nature Valley combines residential comfort with a nature-oriented setting, offering buyers a peaceful environment along with essential modern conveniences.",

  PRJ030:
    "Signature Global The Serenas offers contemporary homes with functional designs, community amenities, and convenient connectivity within the growing Gurgaon region.",

  PRJ031:
    "Signature Global Park 2 & 3 provides modern residential options with thoughtfully planned layouts, community facilities, and access to key urban conveniences.",

  PRJ032:
    "Signature Global Park 4 & 5 offers comfortable family residences with modern infrastructure, practical amenities, and connectivity to major parts of Gurgaon.",

  PRJ033:
    "Ireo Savannah offers premium residential spaces in a well-developed setting, combining contemporary architecture with comfortable community living.",

  PRJ034:
    "The Melia Silverglade provides stylish residential spaces with a modern outlook, appealing to buyers looking for comfort, quality, and a refined lifestyle.",

  PRJ035:
    "Tulsiani Easy In offers practical and affordable residential options with functional layouts, essential facilities, and convenient access to nearby areas.",

  PRJ036:
    "ROF Normanton Park is planned for comfortable urban living, offering modern residences, community amenities, and connectivity to the expanding Gurgaon region.",

  PRJ037:
    "Signature Global Daxin Vistas offers contemporary homes in the Sohna Road corridor, combining modern living spaces with a developing neighborhood and convenient connectivity."
};


const projectArray = [
  {
    "id": "PRJ001",
    "name": "Ashiana Mulberry",
    "location": "Sector 2, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/vBxXgjqB04vqtlzEHDhrdkr3ye82Pe2m0Ozm3nEoWMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/enJpY2tzLmNvbS9p/bWcvVXBkYXRlc0Js/b2cvZDVlNDhmZDYt/MjRhZS00YWMxLThh/OGMtZThkNzc1MTc3/MTNmYXNoaWFuYS5q/cGVn"
    ]
  },
  {
    "id": "PRJ002",
    "name": "Eldeco Accolade",
    "location": "Sector 2, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/VxpxuqYEmIxb-J5wJh5Rn5d8mdqXUZ6vxGd_xSfIW9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubm9icm9rZXIu/aW4vaW1hZ2VzLzhh/OWZhZjg1OTQyNWRh/ODYwMTk0MjVmNDcx/Y2YwOTg0LzhhOWZh/Zjg1OTQyNWRhODYw/MTk0MjVmNDcxY2Yw/OTg0XzUzNDMyXzk1/MzA4MF9tZWRpdW0u/anBn"
    ]
  },
  {
    "id": "PRJ003",
    "name": "NS Arcus Avani Signature Floors",
    "location": "Sector 2, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/elpqy9ELKs77BzGVO-EK21WmaCBMrQblAuyeUP-bq2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWZmb3JkYWJsZWhv/bWVzZ3VyZ2Fvbi5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8xMC9hdmFuaS1z/aWduYXR1cmUtZmxv/b3JzLXNlY3Rvci0y/LXNvaG5hLmpwZw"
    ]
  },
  {
    "id": "PRJ004",
    "name": "HCBS Sports Ville",
    "location": "Sector 2, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/Q5mYCanrvWv10UMxRizrlaum36cRKWAlTIn979e4F0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21iaW1hZ2VzL3By/b2plY3QvUGhvdG9f/aDMxMF93NDYyLzIw/MjQvMTIvMjcvUHJv/amVjdC1QaG90by0z/OC1IQ0JTLVNwb3J0/cy1WaWxsZS1HdXJn/YW9uLTUwNzg1OTdf/NDI2XzQxN18zMTBf/NDY2LmpwZw"
    ]
  },
  {
    "id": "PRJ005",
    "name": "Ansal Shiva Som Valley",
    "location": "Sector 2 & 35, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/uVqalYtM9Bkl3GYpSI4EYhja7PKl1NF0t437Ot9oD-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3F1YXJleWFyZHMu/Y29tL3NlY29uZGFy/eVBvcnRhbC82Mzg2/Mjc3OTM4MjkxNDU4/MzktMjQwOTI0MTI1/NjIyNTYyMi5qcGc_/YWlvPXctNzQ1O2gt/NDE5O2Nyb3A7"
    ]
  },
  {
    "id": "PRJ006",
    "name": "Anand Niketan",
    "location": "Sector 2, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/gIadF1NN-Ke2wdkaBlIX9UzBEFoTTV0HaND0ZPBfvF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbWJh/ay5jb20vX25leHQv/aW1hZ2U_dXJsPWh0/dHBzOi8vc3RhdGlj/LmFtYmFrLmNvbS9p/bWFnZS1zY3JhcGVy/L3Byb2plY3RfNTgv/QW5hbmRfTmlrZXRh/bi9waG90bzIuanBn/Jnc9NjQwJnE9NzU"
    ]
  },
  {
    "id": "PRJ007",
    "name": "Santur Azalea",
    "location": "Sector 2, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/6Qvj85VYN65QmNey-DJo5Lw0o4CzVh9veaWdSNs8j4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3JvdXBzcHJvamVj/dC5jb20vcHJvamVj/dF9waWNzL3NhbnR1/ci1zZWN0b3ItMi1i/YW5uZXItNjIxMDEu/anBn"
    ]
  },
  {
    "id": "PRJ008",
    "name": "GLS Arawali Homes",
    "location": "Sector 4, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/htgx4pXgFX0THTSpZxsXGTtzamZPWmwaZXa2evgjxWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmdj/ZG4uaG91c3NlZC5j/b20vYXNzZXRzL0Zp/bGVzL1Byb2plY3Rz/LzEzMDkyMS9Qcm9q/ZWN0JTIwSW1hZ2Uv/NTAxNTAwMTU0MS0x/NzQ0Mjg4MzM3Lndl/YnA"
    ]
  },
  {
    "id": "PRJ009",
    "name": "Mebbier Golden Park",
    "location": "Sector 4, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/F5lGRmAi5S-KM19CT9XUnLj8tzruWmqZ5ZfhK_czFa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWRzLXNzbC53ZWJm/bG93LmNvbS82M2Vi/NmE1OGM5YzNkMDBi/ZTc0NjkzMGMvNjQ0/YjkwZTNjOGRhNDdi/MjhmNGY0ODBlX01l/ZmZpZXIlMjBHb2xk/ZW4lMjBQYXJrJTIw/U2VjdG9yJTIwNC5q/cGc"
    ]
  },
  {
    "id": "PRJ010",
    "name": "Ireo Pride Park",
    "location": "Sector 4, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/Va8Up5nPifB443cRhO20XvlbvqZ79-0PGvF3hw_mkwA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9q/ZWN0c2d1cmdhb24u/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDIvSXJlby1Q/cmlkZS1QYXJrLVNl/Y3Rvci00LVNvaG5h/LnBuZw"
    ]
  },
  {
    "id": "PRJ011",
    "name": "MKS County",
    "location": "Sector 2, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/QTzycCZ0ReVmvlw10UG8Jk2wylBQNyTja_UeewXH9yc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmNCRW5mcmF0ZWNo/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wOC9ta3Mt/Y291bnR5LXNlY3Rv/ci0yLXNvaG5hLmpw/Zw"
    ]
  },
  {
    "id": "PRJ012",
    "name": "Ganga Swarnim by Tathastu",
    "location": "Sector 5, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/PXspbnFuzT76Wtx2LHw9YNv7aNzo8Ga1lcSt_s1JGzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmdj/ZG4uaG91c3NlZC5j/b20vYXNzZXRzL0Zp/bGVzL1Byb2plY3Rz/LzU0MzgvQW1lbml0/aWVzLzVmODRlY2Qy/OGFkODUzMmE5ZWM3/ZTJmNjVmODQwOTAx/LndlYnA"
    ]
  },
  {
    "id": "PRJ013",
    "name": "MVN Athens",
    "location": "Sector 5, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/2A4DlTUj7-MPcR1exVuAXjfOyAlnl2smmT3J4XXU-Ls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Z3VyZ2Fvbi9iNS8w/MTFweHgxMS54eDEx/LjE4MTEyNzIyMTEy/MC56NWI1L2NhdGFs/b2d1ZS9tdm4tYXRo/ZW5zLXNvaG5hLWd1/cmdhb24tc2VjdG9y/LTUtZ3VyZ2Fvbi1y/ZXNpZGVudGlhbC1i/dWlsZGluZ3MteDNz/emE3c3dnbS5qcGc_/dz0zODQwJnE9NzU"
    ]
  },
  {
    "id": "PRJ014",
    "name": "Mebbier Garden Avenue",
    "location": "Sector 5, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/g-8lL0yCsqIyc-RRn3vIc_g_N1rTZSmTztlMUTjR22E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWZm/aWVyc2VjdG9yNS5j/b20vaW1hZ2UvYmFu/bmVyL2ltZ2lfMl9H/YXJkZW4tQXZlbnVl/LU92ZXJ2aWV3LnBu/Zw"
    ]
  },
  {
    "id": "PRJ015",
    "name": "Pervas Ekam",
    "location": "Sector 5, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/AU0j0IG2mIsX3l-bXX0VGxXh7j50gto5gS5e1Yn-iGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubm9icm9rZXIu/aW4vaW1hZ2VzLzhh/OWY4OTg0OTVmYjU4/NTEwMTk1ZmI2MDAw/OTYwMWYxLzhhOWY4/OTg0OTVmYjU4NTEw/MTk1ZmI2MDAwOTYw/MWYxXzY4MjUxXzIw/MzU2N19tZWRpdW0u/anBn"
    ]
  },
  {
    "id": "PRJ016",
    "name": "Corona Greens",
    "location": "Sector 5, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/DmlHHJQZBBhuydTcOumApNw7MW_k1St9M46pOokcB-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWZmb3JkYWJsZWhv/bWVzZ3VyZ2Fvbi5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMy9SYW1iaGEt/Q29yb25hLUdyZWVu/cy5qcGc"
    ]
  },
  {
    "id": "PRJ017",
    "name": "JMS Mega City",
    "location": "Sector 5, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/GvwK4SmcZougqkXR-aRhQh5dlDqyeivz-y5VZUpWBSI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcHJv/cGVydHkvY3JvcHBl/ZF9pbWFnZXMvMjAy/NS9BdWcvMjkvUGhv/dG9faDYwMF93OTAw/LzIwMjUvQXVnLzI5/LzgxMTMyNzMzXzEy/X01TMV82MDBfOTAw/LmpwZy53ZWJw"
    ]
  },
  {
    "id": "PRJ018",
    "name": "4S Aster Avenue",
    "location": "Sector 36, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/VUpwWZc3Orcl_LAWfjtMk2M56FhOHaCJXoGxka-hxpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFy/aXRyYXJlYWx0eS5j/b20vaW1nL2dhbGxl/cnkvNHMtYWZmb3Jk/YWJsZS1uZXdsYXVu/Y2gtZy0zLndlYnA"
    ]
  },
  {
    "id": "PRJ019",
    "name": "Our Homes",
    "location": "Sector 6, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/WUV5b9psmOqEBFw9guRG2rfQmhjgooT9TFX4_XgX12E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubm9icm9rZXIu/aW4vaW1nLzViYTAw/ZWJkNzE0YjU2ODdh/N2RjOGIzNy81YmEw/MGViZDcxNGI1Njg3/YTdkYzhiMzdfNTI0/OTRfMTkwMDU4X29y/aWdpbmFsLmpwZw"
    ]
  },
  {
    "id": "PRJ020",
    "name": "Tisara",
    "location": "Sector 6, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/QFyl3Y6GJ_by1JsHgu06wH55I85LOWkQNvn3nBpfZh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21iaW1hZ2VzL3By/b2plY3QvUGhvdG9f/aDQ3MF93MTA4MC9Q/cm9qZWN0LVBob3Rv/LTgtQXJldGUtT3Vy/LUhvbWVzLTMtR3Vy/Z2Fvbi01MDkyMzQ0/XzUwMF84MDBfNDcw/XzEwODAuanBn"
    ]
  },
  {
    "id": "PRJ021",
    "name": "Raheja Aranya",
    "location": "Sohna Road, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/f_olTowQCqBtrwwBZkbi5R3Xv_n6PBu-60DB9mdBGRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGNvcmVhbGVzdGF0/ZXMuY29tL19uZXh0/L2ltYWdlP3VybD1o/dHRwczovL3d3dy5p/bWFnZXMuaGNvcmVh/bGVzdGF0ZXMuY29t/L2ltZy9nYWxsZXJ5/L2dhbGxlcnlfZ2Fs/bGVyeS1pbWFnZS0w/MS53ZWJwJnc9MTky/MCZxPTc1"
    ]
  },
  {
    "id": "PRJ022",
    "name": "Godrej Nature+",
    "location": "Sector 33, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/1XIHjYWfo_67bERkn3qqfLHtFiMxEfh_4TmkHjFg58s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZXN0/bHV4dXJ5cmVzaWRl/bmNlcy5pbi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNi8wMS9M/b2NhdGlvbi1BZHZh/bnRhZ2VzLW9mLUdv/ZHJlai1OYXR1cmUt/UGx1cy1TZWN0b3It/MzMtU29obmEtUm9h/ZC1HdXJnYW9uLmpw/Zw"
    ]
  },
  {
    "id": "PRJ023",
    "name": "Central Park Flower Valley",
    "location": "Sector 32-33, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/nXeaFeRl_2H-DjqhmahFZFX7H4KtxqgNUAYoroYnLrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kcmNu/dHFscTdvZmNjLmNs/b3VkZnJvbnQubmV0/L0ludmVudG9yeUlt/YWdlcy81NV8yNF8y/MDI2XzAxXzU1XzA1/X2NlbnRyYWwtcGFy/ay1mbG93ZXItdmFs/bGV5LXNlY3Rvci0z/My5qcGc"
    ]
  },
  {
    "id": "PRJ024",
    "name": "Breez Global Heights",
    "location": "Sector 33, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/GDrM5SNzMxj3HDVjf15goKRrB7mE7_6438At2PURKbw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcmVp/bmRpYXJlYWx0eS5j/b20vdXBsb2Fkcy9n/YWxsZXJ5L2JyZWV6/LWdsb2JhbC1oZWln/aHRzLTEuanBn"
    ]
  },
  {
    "id": "PRJ025",
    "name": "Ashiana Anmol",
    "location": "Sector 33, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/GwiffbeWptO2JLGG5bi7HDreebFefOBYhEcc8OGEJlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWph/MTIua3Vpa3IuY29t/L2lzL2EvYy84MDB4/NjAwL2dhbGxlcnlf/aW1hZ2VzL29yaWdp/bmFsL2NmNWQwYjFi/YzA5ZWNkOC5naWY.gif"
    ]
  },
  {
    "id": "PRJ026",
    "name": "NKV Golden Avenue",
    "location": "Sector 35, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/zWukRDcJbHV9BywdXst03Bw0-fQEmbD8VMG-ttBILjQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3F1YXJleWFyZHMu/Y29tL3NlY29uZGFy/eVBvcnRhbC9JTl82/Mzg4NzUwNDk3MTU1/MjgyODAtMDcwNzI1/MDUwOTMxOTMxLmpw/Zz9haW89dy03NjA7/aC00Mzg7Y3JvcDs"
    ]
  },
  {
    "id": "PRJ027",
    "name": "LID Green Valley",
    "location": "Sector 35, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/8HfAtfKGZMjNO28-TdpUOKlM6q383foF035eaxlulV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/anVzdHBsYW4uY28u/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjYvMDEvbGlkLWdy/ZWVuLXZhbGxleS0y/LWhvbWUtZmxvb3It/c2VjdG9yNi1zb2hu/YS1qdXN0cGxhbmNv/aW4tc2l0ZS1wbGFu/LmpwZw"
    ]
  },
  {
    "id": "PRJ028",
    "name": "Adore Pyramid",
    "location": "Sector 35, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/PpZLz9Vz2S_Eb-2GJhjRGHbSkcXiqbMBybVMIvwDEkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21iaW1hZ2VzL3By/b2plY3QvUGhvdG9f/aDMwMF93NDUwLzIw/MTkvMTAvMDQvUHJv/amVjdC1QaG90by01/LVB5cmFtaWQtRWxp/dGUtR3VyZ2Fvbi01/MTIxNTA5XzM0MV84/MDBfMzAwXzQ1MC5q/cGc"
    ]
  },
  {
    "id": "PRJ029",
    "name": "BLF Nature Valley",
    "location": "Sector 35, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/xi1y0gi8aUs3eacdm_5OsyNkgrsjaIdJmqglmHOHFtc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcGku/YnJva2Vyc2FhdGhp/LmluL0ludmVudG9y/eURvY3VtZW50cy80/MF8wNV8yMDI2XzA0/XzQwXzU1XzEuanBn"
    ]
  },
  {
    "id": "PRJ030",
    "name": "Signature Global The Serenas",
    "location": "Sector 36, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/auBGjZGleVFwH4qpyHbBeH6TyHCqPbgD1H57sJ1-ZzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcmVp/bmRpYXJlYWx0eS5j/b20vdXBsb2Fkcy9n/YWxsZXJ5L3NpZ25h/dHVyZS1nbG9iYWwt/dGhlLXNlcmVuYXMt/NC5qcGc"
    ]
  },
  {
    "id": "PRJ031",
    "name": "Signature Global Park 2 & 3",
    "location": "Sector 36, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/nPzgN6j2zrOEzlucVYf50bHgAN9pz7qC16ye4qlFLaE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vq/Mm5JZl9hbFVCV3JW/Y25vaVhoZjNvbjd2/UDU0M2Npc1BCVzdS/cEE3T3ZtWUg1a05O/R0dsNlZva0VUTHl3/eWZqTjJqTWxPdF95/MWlIZzVyMW0zeWFD/VGV4U25UZVlqRzVR/eXBBQmg5dTFXZjhE/TkdhT0RocUFHYnlD/YnB3M3pNcmQySXpj/N2J6VHl6REtobk83/SXlYVTVWQjZ0eEY5/OEVYbXNOUy1GOWtp/NHhCZ1hpb191ZUI2/OUZOSDlTZy93NjQw/LWgzNTAtcncvU2ln/bmF0dXJlJTIwR2xv/YmFsJTIwUGFyayUy/MDQlMjBhbm]%20NSUy0UGhhc2UlMjAyJTIwU29obmElMjBHdXJnYW9uLmpwZw"
    ]
  },
  {
    "id": "PRJ032",
    "name": "Signature Global Park 4 & 5",
    "location": "Sector 36, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/KhzoiUOQCCYXl19h4PbZdKLMLFx6c7jtnBfbkJRIFGI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWZmb3JkYWJsZWhv/bWVzZ3VyZ2Fvbi5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNC9TaWduYXR1/cmUtR2xvYmFsLVBh/cmstNC1hbmQtNS5q/cGc"
    ]
  },
  {
    "id": "PRJ033",
    "name": "Ireo Savannah",
    "location": "Sector 35, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/rVvXjsUHyDYnVVo_NuqM3LQK5A3i1HgWz5BddoAId-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubm9icm9rZXIu/aW4vbWVkaWEvYnVp/bGRpbmcvOGE5Zmgy/MDM4ZjlmOGMxNjAx/OGY5Zjk0MzMwNzAx/OTMvaW1hZ2VzLzhh/OWY4MjAzOGY5Zjhj/MTYwMThmOWY5NDMz/MDcwMTkzX3Byb2pl/Y3RfaW1hZ2VfTWZ6/MkZENEJPTDE3MTgz/NDEzODY3MzBfMzEx/MzZfaXJpc19tZWRp/dW0uanBn"
    ]
  },
  {
    "id": "PRJ034",
    "name": "The Melia Silverglade",
    "location": "Sector 35, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/kIj_p2Zy5IcOUCD7NSlsyihEIYLXkdO7EySAZ253rZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ham1l/cmFlc3RhdGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI2/LzAxL1NpbHZlcmds/YWRlLU1lbGlhMDQu/anBn"
    ]
  },
  {
    "id": "PRJ035",
    "name": "Tulsiani Easy In",
    "location": "Sector 35, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/ACILle8Lz5BXPGXECmc4kdhkJ3p1Qeyc8K_BuD-Jo0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubm9icm9rZXIu/aW4vaW1hZ2VzLzhh/OWY4ZDg0OTcxMDIw/NGUwMTk3MTAyNTMy/ZDYwMDgzLzhhOWY4/ZDg0OTcxMDIwNGUw/MTk3MTAyNTMyZDYw/MDgzXzUwNjg5XzMw/MjQ5Nl9tZWRpdW0u/anBn"
    ]
  },
  {
    "id": "PRJ036",
    "name": "ROF Normanton Park",
    "location": "Sector 36, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/Jpyvt2VToODd9bsJAJi1zjw76EIMmKqBteJW7USRI7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubm9icm9rZXIu/aW4vbWVkaWEvYnVp/bGRpbmcvOGE5ZmU5/ODM4YTAxNDVkNjAx/OGEwMjBmMDM1YzVl/OGYvaW1hZ2VzLzhh/OWYlOTgzOGEwMTQ1/ZDYwMThhMDIwZjAz/NWM1ZThmX3Byb2pl/Y3RfaW1hZ2VfT0Jz/QWxoODZBcDE2OTIy/NTQyMTA4ODVfNDU3/MjZfaXJpc19vcmln/aW5hbC5qcGc"
    ]
  },
  {
    "id": "PRJ037",
    "name": "Signature Global Daxin Vistas",
    "location": "Sector 36A, Sohna Road, Gurgaon",
    "images": [
      "https://imgs.search.brave.com/D8YoraVdJyBO2EJrKilTaWRZC-hRTn0fKbTw1jtC5RE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pay5p/bWFnZWtpdC5pby9z/am5zaGFjczgvcHJv/cGVydHlnYWxsZXJ5/LzY3NzY1Mzg3ZjM2/MjFfMS53ZWJwP3Ry/PXctNjkyLGgtNDMx"
    ]
  }
];

// Update descriptions while keeping all other project data unchanged
export const projects = projectArray.map((project) => ({
  ...project,
  description: projectDescriptions[project.id] || project.description
}));

