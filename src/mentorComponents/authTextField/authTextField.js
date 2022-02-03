import React from 'react'
import './authTextField.css'
import { Form, Input, Checkbox, message } from 'antd'

export const AuthTextField = ({
  label,
  id = '',
  name,
  type,
  value,
  disabled = false,
  className,
  required = false,
  placeholder,
}) => {
  return (
    <div className="mentor_field">
      <Form.Item
        name={name}
        value={value}
        style={{ color: '#fe0003' }}
        rules={[
          {
            required: true,
            message: `Please input your ${name}!`,
          },
          {
            type: name === 'email' ? name : '',
            message: name === 'email' ? `Please input a correct ${name}` : '',
          },
        ]}
        type={type}
        label={label}
      >
        <Input id={name} className={`${className}`} placeholder={placeholder} />
      </Form.Item>
    </div>
  )
}

export const AuthPasswordField = ({ className, numb, message }) => {
  return (
    <div className="mentor_field">
      <Form.Item
        name="password"
        style={{ color: '#fe0003' }}
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
          {
            min: numb,
            message: message,
          },
        ]}
        label="Password"
      >
        <Input
          type="password"
          id="password"
          className={`${className}`}
          placeholder="Password"
        />
      </Form.Item>
    </div>
  )
}
