import 'bootstrap/dist/css/bootstrap.min.css';
import { Screen } from './components/screens/hoyoGameScreen';
import { GameTypes } from './enums/Games';

function App() {
  return (
    <Screen game={GameTypes.GENSHIN} />
  );
}

export default App;
