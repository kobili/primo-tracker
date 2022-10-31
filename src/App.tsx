import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyDataInputPanel from './components/currencyData';
import styled from 'styled-components';
import BannerInfoPanel from './components/bannerInfo';

const RowFlex = styled.div`
  padding: 50px;
  display: flex;
  gap: 10%;
  align-items: flex-start;
  margin-bottom: 10px;
  flex-wrap: wrap;`

function App() {
  return (
    <RowFlex>
      <BannerInfoPanel></BannerInfoPanel>
      <CurrencyDataInputPanel></CurrencyDataInputPanel>
    </RowFlex>
  );
}

export default App;
