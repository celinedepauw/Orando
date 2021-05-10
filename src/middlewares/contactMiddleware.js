import axios from 'axios';
import { CONTACT_WEBSITE } from 'src/actions/contact';

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
