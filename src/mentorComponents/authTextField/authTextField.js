import React, {useState} from 'react'
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


export const AuthPasswordField = ({ className, numb, message, placeholder, label='Password', id, name, type }) => {

  // const[eye, setEye] = useState(true);
  // const [showPassword, setShowPassword] = useState();
  // const[pass, setPass] = useState(false);

  // const Eye = () => {
  //   if(showPassword === "password") {
  //     setShowPassword("text");
  //     setEye(false);
  //     setPass(true);
  //   } else {
  //     setShowPassword("password");
  //     setEye(true);
  //     setPass(false);
  //   }
  //   console.log(pass)
  // }

  return (
    <div className="mentor_field">
              {/* <i onClick={Eye} className={`pass-eye fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i> */}

      <Form.Item
        name={id}
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
        label={label}
      >
        <Input
          type={type}
          // type={showPassword ? "text" : "password"}
          id={id}
          className={`${className}`}
          placeholder={placeholder}
          label={label}
          name={name}
        />
      </Form.Item>
    </div>
  )
}
