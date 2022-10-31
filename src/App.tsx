import 'bootstrap/dist/css/bootstrap.min.css';
import BannerPages from './components/bannerData';
import CurrencyDataInputPanel from './components/currencyData';
import styled from 'styled-components';

const ColumnFlex = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;`;

function App() {
  return (
    // <BannerPages />
    <CurrencyDataInputPanel></CurrencyDataInputPanel>
  );
}

export default App;
