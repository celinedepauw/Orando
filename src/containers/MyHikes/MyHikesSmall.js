import { connect } from 'react-redux';
import { deleteWalk } from 'src/actions/walks';

// on importe le composant de présentation
import MyHikesSmall from 'src/components/MyHikes/MyHikesSmall';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  walkId: state.walksList.walkId,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleDelete: () => {
    // console.log('delete dans le container');
    const action = deleteWalk();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MyHikesSmall);
