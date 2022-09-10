import 'bootstrap/dist/css/bootstrap.min.css';
import BannerInfo from './components/bannerData/bannerInfo';
import { BannerType } from './components/bannerData/BannerTypes';

import { 
  selectPrimogems, 
  selectIntertwinedFates,
  selectAcquaintFates,
  selectCharacterBannerPulls,
  selectWeaponBannerPulls,
  selectStandardBannerPulls,
  setPrimogems,
  setIntertwinedFates,
  setAcquaintFates,
  setCharacterBannerPulls,
  setWeaponBannerPulls,
  setStandardBannerPulls
} from './store/slices/bannerDataSlice';

function App() {
  return (
    <BannerInfo 
      bannerName={'Character Banner'}
      bannerType={BannerType.CHARACTER}
      fateSelector={selectIntertwinedFates}
      pullSelector={selectCharacterBannerPulls}
      fateSetter={setIntertwinedFates}
      pullSetter={setCharacterBannerPulls}
    />
  );
}

export default App;
