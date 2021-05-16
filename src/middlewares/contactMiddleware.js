import axios from 'axios';
import { CONTACT_WEBSITE, CONTACT_USER, saveMessageSent } from 'src/actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
  // console.log('je suis dans contactMiddleware', action);
  switch (action.type) {
    case CONTACT_WEBSITE: {
      // console.log('je suis dans le case de contact website');
      const {
        subject,
        email,
        message,
      } = store.getState().contactInfo;
      axios.post('https://orando.me/o/api/contact', {
        subject: subject,
        mail: email,
        message: message,
      })
        .then((response) => {
          // console.log('réponse dans contact middleware', response);
          if (response.status === 200) {
            alert('Votre message a bien été envoyé !');
            store.dispatch(saveMessageSent(false));
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    case CONTACT_USER: {
      console.log('je suis dans le case de contact USER');
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');
      const {
        messageUser,
        creatorId,
      } = store.getState().contactInfo;
      axios.post(`https://orando.me/o/api/contact-user/${creatorId}`, {
        user: currentUserId,
        message: messageUser,
      }, {
        headers: {
          Authorization: `Bearer ${authenticationToken}`,
        },
      })
        .then((response) => {
          console.log('réponse dans contact middleware', response);
          if (response.status === 200) {
            alert('Votre message a bien été envoyé !');
            store.dispatch(saveMessageSent(false));
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default contactMiddleware;
