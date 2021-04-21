import React from 'react';
import PropTypes from 'prop-types';


const InputPicture = ({
  label,
  manageChangePicture,
  placeholder,
  identifier,
  file,
}) => {
  const handleChangePicture = (evt) => {
    console.log(evt);
    console.log(evt.target.files[0]);
    manageChangePicture(evt.target.files[0]);
  };

  return (
    <div className="inputPicture">
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}

      </label>
      <input
        className="input_picture"
        id={identifier}
        type="file"
        placeholder={placeholder}
        file={file}
        onChange={handleChangePicture}
      />
    </div>

  );
};

InputPicture.propTypes = {
  /** identifier for the input : used both for name and id => must be unique */
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  manageChangePicture: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
};


export default InputPicture;
