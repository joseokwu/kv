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
    onFocus,
    onBlur,
    value,
    onChange,
    errName,
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
                        message: `Please input your ${errName || name}!`,
                    },
                    {
                        type: name === "email" ? name : "",
                        message:
                            name === "email"
                                ? `Please input a correct ${name}`
                                : "",
                    },
                ]}
                type={type}
                label={label}
            >
                <Input
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    type={type}
                    id={name}
                    name={name}
                    className={`${className}`}
                    placeholder={placeholder}
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
