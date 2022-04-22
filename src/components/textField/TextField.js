import React from "react";
import "./textField.css";
import { Form, Input, Checkbox, message } from "antd";

export const TextField = ({
  label,
  id = "",
  name,

  type,
  disabled = false,
  className,
  required = false,
  placeholder,
  value,
  ...rest
}) => {
  return (
    <div className="field">
      <Form.Item
        name={name}
        style={{ color: "#fe0003" }}
        rules={[
          {
            required: true,
            message: `Please input your ${name}!`,
          },
          {
            type: name === "email" ? name : "",
            message: name === "email" ? `Please input a correct ${name}` : "",
          },
        ]}
        type={type}
        label={label}
      >
        <Input
          id={name}
          className={`${className}`}
          placeholder={placeholder}
          type={type}
          defaultValue={value}
          {...rest}
        />
      </Form.Item>
    </div>
  );
};

export const PasswordField = ({ className, numb, message }) => {
  return (
    <div className="field">
      <Form.Item
        name="password"
        style={{ color: "#fe0003" }}
        rules={[
          {
            required: true,
            message: "Please input your Password!",
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
  );
};
