import newApp from '../assets/icons/Star.svg'
import pending from '../assets/icons/invst.svg'
import person1 from '../assets/icons/person1.svg'
import person2 from '../assets/icons/person2.svg'
import person3 from '../assets/icons/person3.svg'
import company from '../assets/images/appleoff.svg'
import applied from '../assets/images/appliedMap.svg'
import declined from '../assets/images/declinedMap.svg'
import expired from '../assets/images/expiredMap.svg'
import approved from '../assets/images/approvedMap.svg'
import doctor from '../assets/images/doctor.svg'

export const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export const optionsNumb = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
]

export const stage = [
  { value: 'series A', label: 'series A' },
  { value: 'series B', label: 'series B' },
  { value: 'series C', label: 'series C' },
]

export const cardData = [
  { icon: newApp, name: 'Founders', count: 50, color: '#E5FFE4' },
  { icon: pending, name: 'Investors', count: 12, color: '#FAD7DC' },
  { icon: newApp, name: 'Mentors', count: 12, color: '#FAD7DC' },
  { icon: pending, name: 'Partners', count: 12, color: '#FAD7DC' },
]

export const boosterData = [
  { icon: newApp, name: 'New Deals', count: 200, color: '#E5FFE4' },
  { icon: pending, name: 'Applied', count: 20, color:"#FAD7DC"},
  { icon: newApp, name: 'Active', count: 20, color: '#FAD7DC' },
]

export const cardFundData = [
  {
    icon: newApp,
    name: "Founder's Capital",
    count: '$100,000',
    color: '#E5FFE4',
  },
  {
    icon: pending,
    name: 'Total Fund Raised',
    count: '$200,000',
    color: '#FAD7DC',
  },
  {
    icon: newApp,
    name: 'Pre-Money Valuation',
    count: '$90,000',
    color: '#FAD7DC',
  },
  {
    icon: pending,
    name: 'Post-Money Valuation',
    count: '$1M',
    color: '#FAD7DC',
  },
]

export const cardFill = [
  {
    header: 'Total Fund',
    amount: '$700,000',
    color: '#2E3192',
  },
  {
    header: 'Last Funding Round',
    amount: '$500,000',
    color: '#00ADEF',
    time: '(9 oct 2021)',
  },
  {
    header: 'Investors',
    // amount: '8',
    img: doctor,
    color: '#2E3192',
  },
  {
    header: 'Valuation',
    amount: '$5M',
    color: '#00ADEF',
    time: '(9 oct 2021)',
  },
]

export const applicationCardData = [
  {
    title: 'Applane  Insteen.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
]

export const compdetailModal = [
  {
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  },
]

export const cardDataModal = [
  {
    header: 'Applane  Insteen.',
  },
  {
    header: '',
    subtitle: 'Offerings',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
  },
  {
    header: '',
    subtitle: 'Eligibility Criteria',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
  },
  {
    header: '',
    subtitle: 'Important Note',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
  },
  {
    header: '',
    subtitle: 'Process',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
  },
]

export const compImage = [{ logo: company }]

export const Map = [
  {
    appliedMap: applied,
    declinedMap: declined,
    expiredMap: expired,
    approvedMap: approved,
    title: 'Application Status',
  },
]

export const images = [
  {
    icon: person1,
  },
  {
    icon: person2,
  },
  {
    icon: person3,
  },
]

// assignments: (2) [{…}, {…}]
// events: (3) [{…}, {…}, {…}]
// founders: "20"
// invest: []
// investors: "30"
// lastFund: {amount: '500,000', date: 'Thu Mar 24 2022 10:00:00 GMT+0100 (West Africa Standard Time)'}
// mentors: "20"
// partners: "10"
// startupInvestors: []
// total: "900,000"
// totalFund: {amount: '700,000'}
// valuation: {amount: '5,000,000

export const industry = [
 " Advertising",
  "Aeronautics/Aerospace",
 "Agriculture",
  "AI",
"Analytics",
 "Animation",
  "Augmented Reality /Virtual Reality",
  "Architecture",
  "Art & Photography",
  "Automotive",
  "Beauty",
  "Big Data",
  "Blockchain",
  "Career",
  "Communication",
  "Computer Vision",
  "Construction",
  "Consumer Goods",
  "Dating/Matrimonial",
  "Defence",
  "Design",
  "Education",
  "Enterprise Software",
  "Events",
  "Energy & Sustainability",
  "Fashion",
  "Fintech",
  "Beverages",
  "Gaming",
  "Gifting",
  "Grocery",
  "Hardware",
  "Healthcare",
  "Human Resources",
  "Information /Tech",
  "Internet of Things",
  "IT Services",
  "Legal",
  "Logistics",
  "Manufacturing",
  "Marketing",
  "Media and Entertainment",
  "Nanotechnology",
  "Networking",
  "Pets & Animals",
  "Printing",
  "Real Estate",
  "Retail",
  "Robotics",
  "Safety",
  "Security",
  "Services",
  "Social Impact",
  "Social Network",
  "Sports",
  "Storage",
  "Transportation",
  "Travel & Tourism",
  "Consulting",
  "Consumer Internet",
  "E-commerce",
  "Engineering",
  "Enterprise mobility",
  "Government",
  "Hyperlocal",
  "Location based services",
  "Marketplace",
  "Mobile",
  "Offline",
  "Online Aggregator",
  "Peer to Peer Platform",
  "Rental",
  "Research",
  "SaaS",
  "Sharing Economy",
  "Subscription Commerce",
]


 export const category = [
  "Accounting", 
  "Analytics", 
  "Bike Rentals",
  "Cloud computing", 
  "Content service", 
  "CRM",
  "Customer engagement", 
  "Customer support" ,
  "E-Learning" ,
  "Email marketing" ,
  "Employee benefit",
  "Finance" ,
  "Fitness" ,
  "Food and Beverage", 
  "Garage service" ,
  "Gifts and Confectionery" ,
  "Health and wellness", 
  "Home and Furnishing",
  "Hospitality" ,
  "Human Resources",
  "Insurance" ,
  "Investment", 
  "IT rental", 
  "Legal", 
  "Loans",
  "Marketing" ,
  "Merchandise",
  "Messaging", 
  "Personal finance", 
  "Printing",
  "Sales support ",
  "Salons and spas",
  "Signing solution ",
  "Travel", 
  "Virtual Assistant",
]


export const investmentStages = [
  "Pre-Seed",
  "Seed",
  "angel",
  "accelerator",
  "MVP",
  "pre series A",
  "series A",
];

export const expBetter = [
  "You have invested in startups before",
  "You come from an entrepreneurial family or have been a founder/co-founder of a business venture family",
  "You have at least 10 years of work experience",
  "I have not made any investments before, but I'm excited to get started",
  "I have invested in one or two businesses and would like to find more opportunities",
  "I am an angel investor / high net worth individual making regular investments",
  "I am an institutional investor, working in Venture Capital / Private Equity",
  "None of the above",
];

export const region = [
  "Africa - the whole continent",
  "North Africa",
  "East Africa",
  "West Africa",
  "Central Africa",
  "Southern Africa",
];

export const funding = [
  "Less than $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "More than $100,000",
  "Less than $10,000",
  "$10,000 - $40,000",
  "$40,000 - $100,000",
  "$100,000 - $300,000",
  "More than $300,000",
];