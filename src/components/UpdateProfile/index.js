import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import Field from 'src/components/Field';
import SelectField from 'src/components/SignUp/select';
import InputPicture from 'src/components/SignUp/inputPicture';
import fox from 'src/assets/icones/fox.svg';
import sign3 from 'src/assets/icones/sign3.svg';
import update from 'src/assets/icones/update.svg';
import signup from 'src/assets/icones/signup.svg';
import Loader from 'src/components/Loader';

import './updateprofile.scss';


const UpdateProfile = ({
  user,
  loadingUser,
  picture,
  updateAvatar,
  updateSignUp,
  areas,
  userArea,
  lastname,
  firstname,
  alias,
  email,
  dateOfBirth,
  description,
  submitUpdateProfile,
  isUpdated,

}) => {
  const userDatas = user.user;

  /* finally not use this because i put an input type date instead my selectField
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
  */
 

  const areasListSelect = areas.map((area) => (
    {
      value: area.id,
      label: area.name,
    }
  ));
  console.log('date de naissance', moment(dateOfBirth).format('DD/MM/YYYY'));
  const areaSelected = areasListSelect.find((area) => area.value === userDatas.area.id);
  const handleSubmitUpdateProfile = (evt) => {
    evt.preventDefault();
    submitUpdateProfile();
  };

  if (isUpdated) return <Redirect to="/Profile" />;
  return (
    <main className="update_profil" onSubmit={handleSubmitUpdateProfile}>
      {loadingUser && <div> <Loader /></div>}
      {!loadingUser && (
        <>
          <Link to="/profile">
            <img className="update_return_profile" src={sign3} alt="retour" />
          </Link>
          <div className="update_title_container">
            <img className="update_icon" src={update} alt="modification-icone" />
            <h2 className="update_title">Modification Profil</h2>
          </div>
          <form className="update_profil_form">
            <div>
              {userDatas.picture !== '' ? <img className="profile_picture" alt="photography" src={`https://orando.me/o/uploads/profile/${userDatas.picture}`} /> : <img className="profile_avatar" alt="avatar" src={fox} />}
            </div>
            <InputPicture
              identifier="picture"
              placeholder=""
              label="Si modification, veuillez charger une nouvelle photo"
              file={picture}
              manageChangePicture={(file) => {
                updateAvatar(file);
                console.log(`updateAvatar sur picture : file=${file}`);
              }}
            />
            <Field
              identifier="alias"
              placeholder={userDatas.nickname}
              label="Pseudo*"
              value={alias}
              required
              changeField={(identifier, newValue) => {
                updateSignUp(identifier, newValue);
                console.log(`changeField sur pseudo : identifier=${identifier}, newValue=${newValue}`);
              }}
            />
            <Field
              identifier="firstname"
              placeholder={userDatas.firstname}
              label="Prénom*"
              value={firstname}
              required
              changeField={(identifier, newValue) => {
                updateSignUp(identifier, newValue);
                console.log(`changeField sur prénom : identifier=${identifier}, newValue=${newValue}`);
              }}
            />
            <Field
              identifier="lastname"
              placeholder={userDatas.lastname}
              label="Nom*"
              value={lastname}
              required
              changeField={(identifier, newValue) => {
                updateSignUp(identifier, newValue);
                console.log(`changeField sur nom : identifier=${identifier}, newValue=${newValue}`);
              }}
            />
            <Field
              identifier="dateOfBirth"
              label="Date de naissance"
              type="date"
              value={moment(dateOfBirth).format('YYYY-MM-DD')}
              changeField={(identifier, newValue) => {
                updateSignUp(identifier, newValue);
                console.log(`changeField sur nom : identifier=${identifier}, newValue=${newValue}`);
              }}
            />
            <Field
              identifier="email"
              placeholder={userDatas.email}
              label="Adresse e-mail*"
              type="email"
              value={email}
              required
              changeField={(identifier, newValue) => {
                updateSignUp(identifier, newValue);
                console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
              }}
            />
            <SelectField
              label="Région*"
              identifier="userArea"
              options={areasListSelect}
              value={userArea}
              defaultValue={areaSelected}
              manageChange={(identifier, newValue) => {
                updateSignUp(identifier, newValue);
                console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
              }}
            />
            <Field
              identifier="description"
              placeholder={userDatas.description}
              label="Description"
              type="description"
              value={description}
              changeField={(identifier, newValue) => {
                updateSignUp(identifier, newValue);
                console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
              }}
            />
            <button type="submit" className="update_profil_form_submit"> Valider <img className="signUp_form_submit_picture" src={signup} alt="logo-welcome" /></button>
          </form>
        </>
      )}
    </main>

  );
};

UpdateProfile.propTypes = {
  loadingUser: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  picture: PropTypes.object,
  updateAvatar: PropTypes.func.isRequired,
  updateSignUp: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
  dateOfBirth: PropTypes.string,
  submitUpdateProfile: PropTypes.func.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

UpdateProfile.defaultProps = {
  picture: '',
  dateOfBirth: '',
};


export default UpdateProfile;
