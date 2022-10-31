import styled from 'styled-components';
import { BannerType } from '../bannerData/BannerEnums';
import { Button } from '../SharedComponents';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { 
  selectPrimogems,
  setPrimogems
} from '../../store/slices/bannerDataSlice';
import { useEffect, useState } from 'react';

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
  pitySelector: (state: RootState) => number;
  pitySetter: ActionCreatorWithPayload<number, string>;
  fatesSelector: (state: RootState) => number;
  fatesSetter: ActionCreatorWithPayload<number, string>,
}

export const BannerInfo = (props: BannerInfoProps) => {
  const { type, pitySelector, pitySetter, fatesSelector, fatesSetter } = props;

  const dispatch = useDispatch();
  const pity = useSelector(pitySelector);
  const fates = useSelector(fatesSelector);
  const primos = useSelector(selectPrimogems);

  const [totalPulls, setTotalPulls] = useState(0);
  const [numberOfHardPities, setNumberOfHardPities] = useState(0);
  const [primosToNextHardPity, setPrimosToNextHardPity] = useState(14400);
  const [canDoSinglePull, setCanDoSinglePull] = useState(false);        // use this state variable to enable/disable single pull button
  const [canDoTenPull, setCanDoTenPull] = useState(false);              // use this state variable to enable/disable ten pull button

  // useEffect to run a function on page load
  useEffect(() => {
    // set the total pulls and hard pity state variables from saved values
    updateTotalPulls(primos, fates, pity);
  });

  const updateTotalPulls = (primos: number, fates: number, pity: number) => {
    let pullsFromPrimos = primos / 160;
    let updatedTotalPulls = Math.floor(pullsFromPrimos + fates + pity);
    setTotalPulls(updatedTotalPulls);

    let pullsRequiredForHardPity = type === BannerType.WEAPON ? 80 : 90;
    let updatedNumberOfHardPities = Math.floor(updatedTotalPulls / pullsRequiredForHardPity);
    setNumberOfHardPities(updatedNumberOfHardPities);

    let primosToNextPity = Math.ceil((pullsRequiredForHardPity - (updatedTotalPulls % pullsRequiredForHardPity)) * 160);
    setPrimosToNextHardPity(primosToNextPity);

    // update whether or not single or ten pulls are possible
    updateCanDoSinglePull();
    updateCanDoTenPull();
  }

  // event handlers for the single and ten pull buttons
  const doSinglePull = () => {
    if (fates >= 1) {
      dispatch(fatesSetter(fates - 1));
    } else if (primos >= 160) {
      dispatch(setPrimogems(primos - 160));
    }
    dispatch(pitySetter(pity + 1))
  }

  const doTenPull = () => {
    if (fates >= 10) {
      dispatch(fatesSetter(fates - 10));
      dispatch(pitySetter(pity + 10));
    } else if (fates > 0) {
      let primosToMakeDifference = 1600 - (fates * 160);
      if (primos >= primosToMakeDifference) {
        dispatch(fatesSetter(0));
        dispatch(setPrimogems(primos - primosToMakeDifference));
        dispatch(pitySetter(pity + 10));
      }
    } else if (primos >= 1600) {
      dispatch(setPrimogems(primos - 1600));
      dispatch(pitySetter(pity + 10));
    }
  }

  // determine if single or ten pulls are possible
  const updateCanDoSinglePull = () => {
    if (fates >= 1 || primos >= 160) {
      setCanDoSinglePull(true);
    } else {
      setCanDoSinglePull(false);
    }
  }

  const updateCanDoTenPull = () => {
    if (fates >= 10) {
      setCanDoTenPull(true);
    } else if (fates > 0) {
      let primosToMakeDifference = 1600 - (fates * 160);
      if (primos >= primosToMakeDifference) {
        setCanDoTenPull(true);
      }
    } else if (primos >= 1600) {
      setCanDoTenPull(true);
    } else {
      setCanDoTenPull(false);
    }
  }

  return (
    <ColumnFlex>
      <Title>
        {`${type} Banner`} 
      </Title>
      <IndentedDiv>
        <RowFlex>
          <Text>Pity:</Text>
          <Input type="number" min={0} onChange={(e) => dispatch(pitySetter(parseInt(e.target.value)))} value={pity !== 0 ? pity : ""}></Input>
          <Button disabled={!canDoSinglePull} onClick={doSinglePull}>1 pull</Button>
          <Button disabled={!canDoTenPull} onClick={doTenPull}>10 pull</Button>
        </RowFlex>
        <TotalPulls>Total pulls on Character Banner: {totalPulls}</TotalPulls>
        <Text>You can hit hard pity {numberOfHardPities} times</Text>
        <Text>You need <BlueText>{primosToNextHardPity}</BlueText> primos to reach your next hard pity</Text>
      </IndentedDiv>

    </ColumnFlex>
  );
}