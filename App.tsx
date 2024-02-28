import favoriteStore from './src/stores/FavoriteStore';
import {Provider} from "react-redux"
import Home from './src/screens/Home';

export default function App() {
  return (
      <Provider store={favoriteStore}>
        <Home></Home>
      </Provider>
  );
}
