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
  { icon: pending, name: 'Applied', count: 20, color: '#FAD7DC' },
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
