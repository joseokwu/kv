import React from 'react'
import { date } from 'yup'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'
import {
  AuthButton,
  Select,
  TextArea,
  TextField,
} from '../../../../mentorComponents'

export const RescheduleModal = () => {

  const industry = [
    "Category: All",
    'Accounting',
    'Analytics',
    'Bike Rentals',
    'Cloud Computing',
    'Cloud Telephony',
    'Content Services',
    'CRM',
    'Customer Engagement',
    'Customer Support',
    'E-Learning',
    'Email Marketing',
    'Employee Benefit',
    'Finance',
    'Fitness',
    'Food and Beverages',
    'Garage Services',
    'Gifts and Confectionery',
    'Health and Wellness',
    'Home and Furnishing',
    'Hospitality',
    'Human Resources',
    'Insurance',
    'Investments',
    'IT Rentals',
    'Legal',
    'Loans',
    'Marketing',
    'Merchandise',
    'Messaging',
    'Personal Finance',
    'Printing',
    'Sales Support',
    'Salons and Spas',
    'Signing Solutions',
    'Travel',
    'Virtual Assistant',
  ]

  return (
    <div className="px-4 pb-5">
      <section className="mb-3">
        <TextField
          label="Date"
          placeholder={'Thursday 17th Oct 2021'}
          rows={1}
          type={'date'}
        />
      </section>

      <div className="row">
        <section className="col-lg-6">
          <label htmlFor="">Start time</label>
          <TimePickerComponent className="px-3"
            placeholder={'00 : 00 : 00'}
          ></TimePickerComponent>
          {/* <Select label="Start time" placeholder="Time" /> */}
        </section>
        <section className="col-lg-6">
          <label htmlFor="">End time</label>
          <TimePickerComponent className="px-3"
            placeholder={'00 : 00 : 00'}
          ></TimePickerComponent>
        </section>
      </div>

      <div className="mt-4">
        <AuthButton label="Send" />
      </div>
    </div>
  )
}
