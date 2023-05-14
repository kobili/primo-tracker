import 'bootstrap/dist/css/bootstrap.min.css';
import { Screen } from './components/screens/hoyoGameScreen';
import { Games } from './enums/Games';

function App() {
  return (
    <Screen game={Games.GENSHIN} />
  );
}

export default App;
