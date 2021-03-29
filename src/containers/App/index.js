import { connect } from 'react-redux';
import { fetchAreas } from 'src/actions/areas';
import { fetchWalks } from 'src/actions/walks';
import { fetchUser, checkUser } from 'src/actions/users';

// on importe le composant de présentation
import App from 'src/components/App';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  loadAreasFromApi: () => {
    const action = fetchAreas();
    dispatch(action);
  },

  loadWalksFromApi: () => {
    const action = fetchWalks();
    dispatch(action);
  },

  loadUserFromApi: () => {
    const action = fetchUser();
    dispatch(action);
  },
  checkUserAuth: () => {
    const action = checkUser();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
