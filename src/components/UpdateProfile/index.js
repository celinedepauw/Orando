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
  updateAvatar,
  updateSignUp,
  userBirthDay,
  userBirthMonth,
  userBirthYear,
  areas,
  userArea,
}) => {
  const userDatas = user.user;

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push({ value: i, label: i });
  }

  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push({ value: i, label: i });
  }

  const years = [];
  for (let i = 1950; i <= 2003; i++) {
    years.push({ value: i, label: i });
  }

  const areasListSelect = areas.map((area) => (
    {
      value: area.id,
      label: area.name,
    }
  ));

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
            updateAvatar(file);
            console.log(`updateAvatar sur picture : file=${file}`);
          }}
        />
        <Field
          identifier="alias"
          placeholder={userDatas.nickname}
          label="Pseudo"
          value={userDatas.nickname}
          changeField={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`changeField sur pseudo : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="firstname"
          placeholder={userDatas.firstname}
          label="Prénom"
          value={userDatas.firstname}
          changeField={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`changeField sur prénom : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="lastname"
          placeholder={userDatas.lastname}
          label="Nom"
          value={userDatas.lastname}
          changeField={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`changeField sur nom : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <div className="update_profil_form_birthdate">
          <SelectField
            label="Jour"
            identifier="userBirthDay"
            options={days}
            value={userBirthDay}
            placeholder="jour"
            manageChange={(identifier, newValue) => {
              updateSignUp(identifier, newValue);
              console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
            }}
          />
          <SelectField
            label="Mois"
            identifier="userBirthMonth"
            options={months}
            value={userBirthMonth}
            placeholder="mois"
            manageChange={(identifier, newValue) => {
              updateSignUp(identifier, newValue);
              console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
            }}
          />
          <SelectField
            label="Année"
            identifier="userBirthYear"
            options={years}
            value={userBirthYear}
            placeholder="année"
            manageChange={(identifier, newValue) => {
              updateSignUp(identifier, newValue);
              console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
            }}
          />
        </div>
        <Field
          identifier="email"
          placeholder={userDatas.email}
          label="Adresse e-mail"
          type="email"
          value={userDatas.email}
          changeField={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <SelectField
          label="Région"
          identifier={userDatas.area.name}
          options={areasListSelect}
          value={userArea}
          placeholder={userDatas.area.name}
          manageChange={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
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
  updateAvatar: PropTypes.func.isRequired,
  updateSignUp: PropTypes.func.isRequired,
  userBirthDay: PropTypes.number,
  userBirthMonth: PropTypes.number,
  userBirthYear: PropTypes.number,
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  userArea: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

UpdateProfile.defaultProps = {
  picture: '',
  userBirthDay: '',
  userBirthMonth: '',
  userBirthYear: '',
};


export default UpdateProfile;
