import 'bootstrap/dist/css/bootstrap.min.css';
import BannerPages from './components/bannerData';
import { FatesInput } from './components/FatesInput';
import { PrimogemInput } from './components/PrimogemInput';
import pinkFate from './icons/pink_fate.png';
import blueFate from './icons/blue_fate.png';
import styled from 'styled-components';

const ColumnFlex = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;`;

function App() {
  return (
    // <BannerPages />
    <ColumnFlex>
      <PrimogemInput></PrimogemInput>
      <FatesInput icon={blueFate}></FatesInput>
      <FatesInput icon={pinkFate}></FatesInput>
    </ColumnFlex>
    
  );
}

export default App;
