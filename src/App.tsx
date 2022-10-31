import 'bootstrap/dist/css/bootstrap.min.css';
import BannerPages from './components/bannerData';
import CurrencyDataInputPanel from './components/currencyData';
import styled from 'styled-components';
import { Button } from './components/currencyData/SharedComponents';


const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;`;

const RowFlex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;`

const Title = styled.h3``;
const IndentedDiv = styled.div`
  padding-left: 40px;
`;
const TotalPulls = styled.h5`
  margin-bottom: 0px;`
const Text = styled.p`margin-bottom: 0px;`;

const Input = styled.input`
  max-width: 500px;
  padding: 7px;
  height: 36px;
  font-size: 1rem;
  font-weight: 500;

  flex: 1;

  border: 1px solid #ced4da;
  border-radius: 0.375rem;`;

function App() {
  return (
    // <BannerPages />
    // <CurrencyDataInputPanel></CurrencyDataInputPanel>

    <ColumnFlex>
      <Title>
        Character Banner
      </Title>
      <IndentedDiv>
        <RowFlex>
          <Text>Pity:</Text>
          <Input type="number" min={0}></Input>
          <Button>1 pull</Button>
          <Button>10 pull</Button>
        </RowFlex>
        <TotalPulls>Total pulls on Character Banner: {247}</TotalPulls>
        <Text>You can hit hard pity {2} times</Text>
        <Text>You need {3351} primos to reach your next hard pity</Text>
      </IndentedDiv>

    </ColumnFlex>
  );
}

export default App;
