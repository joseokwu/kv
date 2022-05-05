import React from 'react'
import { Input, Form } from 'antd'

const { TextArea } = Input

export const TextareaCustom = ({
  name,
  value,
  label,
  onChange,
  placeholder,
  onKeyPress,
}) => {
  return (
    <div>
      <Form.Item
        name={name}
        label={label}
        
        initialValue={value}
        rules={[{ required: true, message: `This field is required` }, { min: 200 , message:'Characters should not be less than 200 words' }]}
      >
        <TextArea
          rows={4}
          style={{ height: 150 }}
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={onKeyPress}
          showCount
          maxLength={250}
        />
      </Form.Item>
    </div>
  )
}
