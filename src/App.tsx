import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles/react-tabs.css';
import { Screen } from './components/screens/hoyoGameScreen';
import { GENSHIN_GAME_INFO, STAR_RAIL_GAME_INFO } from './GameInfo';
import { GameTypes } from './enums/Games';

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>{GameTypes.GENSHIN}</Tab>
          <Tab>{GameTypes.HONKAI_STAR_RAIL}</Tab>
        </TabList>

        <TabPanel>
          <Screen gameInfo={GENSHIN_GAME_INFO} />
        </TabPanel>
        <TabPanel>
          <Screen gameInfo={STAR_RAIL_GAME_INFO} />
        </TabPanel>
      </Tabs>

    </>
  );
}

export default App;
