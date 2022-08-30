import React from "react";
import "./textField.css";
import { Form, Input, Checkbox, message } from "antd";

export const TextField = ({
    label,
    id = "",
    name,
    defaultValue,
    value,
    onBlur,
    type,
    disabled,
    className,
    required,
    placeholder,
    onChange,
    onFocus,
    onKeyPress,
    errorMessage,
    ...rest
}) => {
    return (
        <div className="field">
            <Form.Item
                style={{ color: "#fe0003" }}
                rules={[
                    {
                        required: required,
                        message: errorMessage
                            ? errorMessage
                            : `Please input your ${label}!`,
                    },
                    {
                        type:
                            name === "email"
                                ? name
                                : type === "url"
                                ? "url"
                                : "",
                        message: errorMessage
                            ? errorMessage
                            : name === "email"
                            ? `Please input a correct ${name}`
                            : type === "url"
                            ? `Please enter a valid ${name} url`
                            : "",
                    },
                ]}
                type={type}
                initialValue={value}
                label={label}
            >
                <Input
                    name={name}
                    id={name}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={`${className}`}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    defaultValue={value}
                    onKeyPress={onKeyPress}
                    disabled={disabled}
                    // required={required}
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
