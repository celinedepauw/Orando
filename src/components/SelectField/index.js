import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import './selectField.scss';

const SelectField = ({
  label,
  manageChange,
  identifier,
  placeholder,
  options,
  defaultValue,
  required,
}) => {
  const handleChange = (evt) => {
    console.log(evt.value);
    manageChange(identifier, evt.value);
  };

  return (
    <div className="selectField">
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}

      </label>
      <Select
        options={options}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="select_input"
        onChange={handleChange}
        required={required}
      />
    </div>
  );
};

SelectField.propTypes = {
  identifier: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  manageChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  required: PropTypes.bool.isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

SelectField.defaultProps = {
  defaultValue: undefined,
};

export default SelectField;
