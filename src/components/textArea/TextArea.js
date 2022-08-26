import React from 'react';

export const TextArea = ({
  label = '',
  id = '',
  className = '',
  rows = '8',
  cols = '',
  placeholder = '',
  defaultValue = '',
  onChange = () => {},
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id} className='d-block form-label'>
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        cols={cols}
        defaultValue={defaultValue}
        className={`w-100 form-textarea ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        {...{ ...rest }}
      ></textarea>
    </div>
  );
};
