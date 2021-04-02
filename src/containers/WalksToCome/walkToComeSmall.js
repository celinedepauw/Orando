import { connect } from 'react-redux';


import WalkToComeSmall from 'src/components/WalksToCome/WalkToComeSmall';

// === mapStateToProps
// if we need to read informations in the state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// if we need to update the state dispatching actions to the store
const mapDispatchToProps = (dispatch) => ({
  // prop name: function that dispatch the action

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(WalkToComeSmall);
