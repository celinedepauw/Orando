import React from 'react';
import PropTypes from 'prop-types';

import './field.scss';

/**
 * A field to be used inside a form : label and input
 */
const Field = ({
  identifier,
  placeholder,
  label,
  type,
  value,
  min,
  changeField,
  pattern,
  minLength,
  maxLength,
  required,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    changeField(name, inputValue);
  };

  return (
    <div className="field">
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
      <input
        className="input"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        min={min}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
};

Field.propTypes = {
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
  value: PropTypes.string,
  /** called when onChange event is received by the input, two parameters :
   * - identifier
   * - new value
   */
  changeField: PropTypes.func.isRequired,
  min: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  value: '',
  min: '',
};

export default Field;
