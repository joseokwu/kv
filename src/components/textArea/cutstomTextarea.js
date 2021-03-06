import React  from 'react'
import { Input, Form } from 'antd'

const { TextArea } = Input

export const TextareaCustom = ({
  name,
  value,
  label,
  onChange,
  placeholder,
  onKeyPress,
  required = true,
  min=200,
  maxLength=250,
  showCount = true
}) => {

 


  return (
    <div>
      <Form.Item
        name={name}
        label={label}
        
        initialValue={value}
        rules={[{ required: required, message: `This field is required` }, { min: min , message:`Characters should not be less than ${min} words` }]}
      >
        <TextArea
          rows={4}
          style={{ height: 150 }}
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={onKeyPress}
          showCount = {showCount}
          maxLength={maxLength}
              />
      </Form.Item>
    </div>
  )
}
