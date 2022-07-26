import React from "react";
import { Input, Form } from "antd";
import { css } from "styled-components/macro";

const { TextArea } = Input;

export const TextareaCustom = ({
    errName,
    name,
    value,
    label,
    onChange,
    placeholder,
    onKeyPress,
    required = true,
    min = 200,
    maxLength = 250,
    showCount = true,
}) => {
    return (
        <div>
            <Form.Item
                name={name}
                label={label}
                initialValue={value}
                rules={[
                    {
                        required: required,
                        message: `Please enter your ${errName || label}`,
                    },
                    {
                        min: min,
                        message: `Characters should not be less than ${min} words`,
                    },
                ]}
            >
                <TextArea
                    rows={4}
                    style={{ height: 150, marginLeft: 0 }}
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    showCount={showCount}
                    maxLength={maxLength}
                    css={css`
                        textarea {
                            margin-left: 0 !important;
                        }
                    `}
                />
            </Form.Item>
        </div>
    );
};
