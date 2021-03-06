import React from 'react';
import Select from 'react-select';

export const CustomSelect = ({
  options,
  onChange,
  value,
  name,
  className,
  ...props
}) => {
  const defaultValue = (option, value) => {
    return option ? option.find((option) => option.value === value) : '';
  };

  return (
    <div>
      <Select
        value={defaultValue(options, value)}
        name={name}
        // onChange={(value) => onChange(value)}
        onChange={value}
        options={options}
        className={className}
        {...props}
      />
    </div>
  );
};
