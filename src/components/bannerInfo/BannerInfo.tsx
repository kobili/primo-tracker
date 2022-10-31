import styled from 'styled-components';
import { BannerType } from '../bannerData/BannerEnums';
import { Button } from '../SharedComponents';

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

const Text = styled.p`
  margin-bottom: 0px;`;

const BlueText = styled.span`
    color: #0d6efd;`;
  
const Input = styled.input`
  max-width: 500px;
  padding: 7px;
  height: 36px;
  font-size: 1rem;
  font-weight: 500;

  flex: 1;

  border: 1px solid #ced4da;
  border-radius: 0.375rem;`;

export interface BannerInfoProps {
  type: BannerType;
}

export const BannerInfo = (props: BannerInfoProps) => {
  const {type} = props;
  return (
    <ColumnFlex>
      <Title>
        {`${type} Banner`} 
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
        <Text>You need <BlueText>{3351}</BlueText> primos to reach your next hard pity</Text>
      </IndentedDiv>

    </ColumnFlex>
  );
}