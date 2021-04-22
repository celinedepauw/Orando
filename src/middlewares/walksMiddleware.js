import axios from 'axios';
import {
  FETCH_WALKS,
  DELETE_WALK,
  saveWalks,
  fetchWalks,
  saveCreatedWalk,
  PARTIPATE_WALK,
  CANCEL_PARTICIPATE,
  CREATE_WALK,
} from 'src/actions/walks';
import { saveUserAuth, saveUser } from 'src/actions/users';

const walksMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans walkMiddleware: ', action);
  switch (action.type) {
    case FETCH_WALKS: {
      // console.log('il faut récupérer les randonnées');
      const authenticationToken = localStorage.getItem('Token');
      axios.get('https://orando.me/o/api/walks', { headers: { Authorization: `Bearer ${authenticationToken}` } })

        .then((response) => {
          // console.log(response.data);
          if (response.status === 401) {
            localStorage.clear();
            store.dispatch(saveUserAuth(false));
          }
          store.dispatch(saveWalks(response.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    case DELETE_WALK: {
      // console.log('il faut effacer une randonnée');

      const authenticationToken = localStorage.getItem('Token');
      axios.delete(`https://orando.me/o/api/walks/${action.walkId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })

        .then((response) => {
          // const walkId = response.data.id;
          // console.log(response);
          // const walks2 = store.getState().walksList.walks;
          // console.log(typeof walks2);
          // console.log('tableau des randos', walks2);
          if (response.status === 200) {
            alert('Votre randonnée a bien été supprimée !');
            const currentUserId = localStorage.getItem('currentUserId');
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                store.dispatch(saveUser(response.data));
              })
              .catch((error) => {
                console.log('error: ', error);
              });
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    case PARTIPATE_WALK: {
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');
      console.log(action.walkId);
      axios.post('https://orando.me/o/api/participant', {
        user: currentUserId,
        walk: action.walkId,
      }, {
        headers: {
          Authorization: `Bearer ${authenticationToken}`,
        },
      })
        .then((response) => {
          if (response.status === 201) {
            alert(response.data.message);
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                store.dispatch(saveUser(response.data));
              })
              .catch((error) => {
                console.log('error: ', error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
          alert('Votre participation a déjà été prise en compte');
        });
      next(action);
      break;
    }
    case CANCEL_PARTICIPATE: {
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');
      axios.patch('https://orando.me/o/api/participant', {
        user: currentUserId,
        walk: action.walkId,
        requestStatus: 2,
      }, {
        headers: {
          Authorization: `Bearer ${authenticationToken}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            alert(response.data.message);
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                store.dispatch(saveUser(response.data));
              })
              .catch((error) => {
                console.log('error: ', error);
              });
          }
          console.log('toto aimerait sa', response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case CREATE_WALK: {
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');
      const {
        walkTitle,
        walkAreaId,
        walkTags,
        walkStartingPoint,
        walkEndPoint,
        walkDate,
        walkDuration,
        walkDescription,
        walkDistance,
        walkDifficulty,
        walkElevation,
        walkNumberPeople,
      } = store.getState().walksList;
      if (
        walkTitle
        && walkAreaId
        && walkStartingPoint
        && walkDate
        && walkDuration
        && walkDescription
        && walkDifficulty) {
        axios.post('https://orando.me/o/api/walks', {
          title: walkTitle,
          area: walkAreaId,
          creator: currentUserId,
          tags: walkTags,
          startingPoint: walkStartingPoint,
          endPoint: walkEndPoint,
          date: walkDate,
          duration: walkDuration,
          description: walkDescription,
          kilometre: Number(walkDistance),
          difficulty: walkDifficulty,
          elevation: Number(walkElevation),
          maxNbPersons: Number(walkNumberPeople),
        }, {
          headers: {
            Authorization: `Bearer ${authenticationToken}`,
          },
        })
          .then((response) => {
            // console.log('réponse après envoi pour création', response.data);
            if (response.data[0] === 201) {
              alert('Votre randonnée a été créée avec succès !');
              axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
                .then((response) => {
                  store.dispatch(saveUser(response.data));
                  store.dispatch(fetchWalks());
                  store.dispatch(saveCreatedWalk(true));
                })
                .catch((error) => {
                  console.log('error: ', error);
                });
            }
          })
          .catch((error) => {
            console.log('error: ', error);
          }); // end of AXIOS request
      } // end of if
      else if (!walkTitle) {
        alert('veuillez saisir le titre de la randonnée avant de valider');
      }
      else if (!walkAreaId) {
        alert('veuillez saisir la région de la randonnée avant de valider');
      }
      else if (!walkStartingPoint) {
        alert('veuillez saisir le point de départ de la randonnée avant de valider');
      }
      else if (!walkDate) {
        alert('veuillez saisir la date et l\'heure de la randonnée avant de valider');
      }
      else if (!walkDuration) {
        alert('veuillez saisir la durée de la randonnée avant de valider');
      }
      else if (!walkDescription) {
        alert('veuillez saisir la description et infos pratiques de la randonnée avant de valider');
      }
      else if (!walkDifficulty) {
        alert('veuillez saisir le niveau de difficulté de la randonnée avant de valider');
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default walksMiddleware;
