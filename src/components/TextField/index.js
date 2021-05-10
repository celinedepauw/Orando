import React from 'react';
import PropTypes from 'prop-types';

import './textField.scss';

const TextField = ({
  identifier,
  placeholder,
  label,
  type,
  value,
  changeField,
  required,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    changeField(name, inputValue);
  };

  return (
    <div className="textField">
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
      <textarea
        className="input"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
};

TextField.propTypes = {
  /** identifier for the input : used both for name and id => must be unique */
  identifier: PropTypes.string.isRequired,
  /** text used as placeholder */
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  /** text used as label */
  label: PropTypes.string.isRequired,
  /** type of the input */
  type: PropTypes.string,
  /** text used as value for the input */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** called when onChange event is received by the input, two parameters :
   * - identifier
   * - new value
   */
  changeField: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  type: 'text',
  value: '',
};

export default TextField;
