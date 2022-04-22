import React from "react";
import { Input , Form  } from 'antd';

const { TextArea } = Input;

export const TextareaCustom = ({ name , value , label , onChange , placeholder }) =>{

    return (
    <div>
  <Form.Item
        name={name}
        label={label}
       initialValue={value}
        rules={[{ required: true, message: `This field is required` }]}
      >

<TextArea
            rows={4}
              style={{ height: 150 }}
            placeholder={placeholder}
            onChange={onChange}
             
          />

      </Form.Item>
    </div>
    )
}