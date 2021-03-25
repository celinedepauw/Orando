import { connect } from 'react-redux';
import { fetchWalks } from 'src/actions/walks';
import { fetchUser } from 'src/actions/users';

// on importe le composant de présentation
import App from 'src/components/App';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  loadWalksFromApi: () => {
    const action = fetchWalks();
    dispatch(action);
  },

  loadUserFromApi: () => {
    const action = fetchUser();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
