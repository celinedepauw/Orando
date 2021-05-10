import { connect } from 'react-redux';
import { participateWalk, walkToEdit } from 'src/actions/walks';

// on importe le composant de présentation
import Walk from 'src/components/Walk';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  walks: state.walksList.walks,
  loadingWalk: state.walksList.loadingWalk,
  walkTitle: state.walksList.walkTitle,
  walkAreaId: state.walksList.walkAreaId,
  walkTags: state.walksList.walkTags,
  walkStartingPoint: state.walksList.walkStartingPoint,
  walkEndPoint: state.walksList.walkEndPoint,
  walkDate: state.walksList.walkDate,
  walkDuration: state.walksList.walkDuration,
  walkDistance: state.walksList.walkDistance,
  walkDifficulty: state.walksList.walkDifficulty,
  walkElevation: state.walksList.walkElevation,
  walkNumberPeople: state.walksList.walkNumberPeople,
  walkDescription: state.walksList.walkDescription,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleParticipation: (walkId) => {
    dispatch(participateWalk(walkId));
  },
  handleClickEdit: (walkId) => {
    dispatch(walkToEdit(walkId));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Walk);
