import { connect } from 'react-redux';
import { participateWalk } from 'src/actions/walks';

// on importe le composant de présentation
import Walk from 'src/components/Walk';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  walks: state.walksList.walks,
  loadingWalk: state.walksList.loadingWalk,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleParticipation: (walkId) => {
    dispatch(participateWalk(walkId));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Walk);
