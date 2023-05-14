import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Screen } from './components/screens/hoyoGameScreen';
import { GENSHIN_GAME_INFO, STAR_RAIL_GAME_INFO } from './GameInfo';

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Genshin</Tab>
          <Tab>Star Rail</Tab>
        </TabList>

        <TabPanel>
          <Screen gameInfo={GENSHIN_GAME_INFO} />
        </TabPanel>
        <TabPanel>
          <Screen gameInfo={STAR_RAIL_GAME_INFO} />
        </TabPanel>
      </Tabs>

    </>
    // <Screen gameInfo={GENSHIN_GAME_INFO} />
  );
}

export default App;
