import { connect } from 'react-redux';
import { fetchWalks } from 'src/actions/walks';

// on importe le composant de présentation
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  loadWalksFromApi: () => {
    const action = fetchWalks();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
