import 'bootstrap/dist/css/bootstrap.min.css';
import { Screen } from './components/screens/hoyoGameScreen';
import { GENSHIN_GAME_INFO, STAR_RAIL_GAME_INFO } from './GameInfo';

function App() {
  return (
    <Screen gameInfo={GENSHIN_GAME_INFO} />
  );
}

export default App;
