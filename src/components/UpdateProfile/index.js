import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import Field from 'src/components/Field';
import SelectField from 'src/components/SignUp/select';
import InputPicture from 'src/components/SignUp/inputPicture';
import fox from 'src/assets/icones/fox.svg';

import './updateprofile.scss';


const UpdateProfile = ({
  user,
  loadingUser,
  picture,
}) => {
  const userDatas = user.user;

  return (
    <main className="update_profil">
      <form className="update_profil_form">
        <div>
          {userDatas.picture !== null ? <img className="profile_picture" alt="photography" src={`https://orando.me/o/uploads/profile/${userDatas.picture}`} /> : <img className="profile_avatar" alt="avatar" src={fox} />}
        </div>
        <InputPicture
          identifier="picture"
          placeholder=""
          label="Photo de profil"
          file={picture}
          manageChangePicture={(file) => {
           
            console.log(`updateAvatar sur picture : file=${file}`);
          }}
        />
        <Field
          identifier="alias"
          placeholder={userDatas.nickname}
          label="Pseudo"
          value={userDatas.nickname}
          changeField={(identifier, newValue) => {
            
            console.log(`changeField sur pseudo : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
      </form>
    </main>

  );
};

UpdateProfile.propTypes = {
  loadingUser: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  picture: PropTypes.object,
};

UpdateProfile.defaultProps = {
  picture: '',
};


export default UpdateProfile;
