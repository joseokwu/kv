
import newApp from "../assets/icons/Star.svg";
import pending from "../assets/icons/invst.svg";
import person1 from "../assets/icons/person1.svg";
import person2 from "../assets/icons/person2.svg";
import person3 from "../assets/icons/person3.svg";


export const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

 export const optionsNumb = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ]

export  const stage = [
    { value: 'series A', label: 'series A' },
    { value: 'series B', label: 'series B' },
    { value: 'series C', label: 'series C' }
  ]

  export const cardData = [
    { icon: newApp, name: "Founders", count: 50, color: "#E5FFE4" },
    { icon: pending, name: "Investors", count: 12, color: "#FAD7DC" },
    { icon: newApp, name: "Mentors", count: 12, color: "#FAD7DC" },
    { icon: pending, name: "Partners", count: 12, color: "#FAD7DC" },


  ];

  export const cardFill = [

    {
      header:'Total Fund',
      amount:'$ 700,000',
      color: '#2E3192'
    },
    {
      header:'Last Funding Round',
      amount:'$ 500,000',
      color:'#00ADEF',
      time:'(9 oct 2021)'
      
    },
    {
      header:'Investors',
      amount:'8',
      color:'#2E3192'
    },
    {
      header:'Valuation',
      amount:'$ 8',
      color:'#00ADEF',
      time:'(9 oct 2021)'
    }
  ]

  export const images = [
    {
      icon:person1
    },
    {
      icon:person2
    },
    {
      icon:person3
    }
  ]