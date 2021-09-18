import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'

import PrimogemCalc from './components/PrimogemCalc';
import TalentMatTracker from './components/TalentMatTracker';

function App() {
  return (
    // <>
    //   <PrimogemCalc />
    //   <TalentMatTracker />
    // </>

    <Tabs defaultActiveKey="primogem-calc" id="application-tab" className="mb-3">
      <Tab eventKey="primogem-calc" title="Primogem Tracker">
        <PrimogemCalc />
      </Tab>
      <Tab eventKey="talent-mat-tracker" title="Talent Material Tracker">
        <TalentMatTracker />
      </Tab>
    </Tabs>
  );
}

export default App;
