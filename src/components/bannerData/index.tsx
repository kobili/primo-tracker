import BannerInfo from './bannerInfo';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { 
  selectIntertwinedFates,
  selectAcquaintFates,
  selectCharacterBannerPulls,
  selectWeaponBannerPulls,
  selectStandardBannerPulls,
  setIntertwinedFates,
  setAcquaintFates,
  setCharacterBannerPulls,
  setWeaponBannerPulls,
  setStandardBannerPulls
} from '../../store/slices/bannerDataSlice';

function BannerPages() {
    return (
        <Tabs defaultActiveKey="character-banner" id="application-tab" className="mb-3">
            <Tab eventKey="character-banner" title="Character Banner">
            <BannerInfo
                fateSelector={selectIntertwinedFates}
                pullSelector={selectCharacterBannerPulls}
                fateSetter={setIntertwinedFates}
                pullSetter={setCharacterBannerPulls}
            />
            </Tab>
            <Tab eventKey="weapon-banner" title="Weapon Banner">
            <BannerInfo
                fateSelector={selectIntertwinedFates}
                pullSelector={selectWeaponBannerPulls}
                fateSetter={setIntertwinedFates}
                pullSetter={setWeaponBannerPulls}
            />
            </Tab>
            <Tab eventKey="standard-banner" title="Standard Banner">
            <BannerInfo
                fateSelector={selectAcquaintFates}
                pullSelector={selectStandardBannerPulls}
                fateSetter={setAcquaintFates}
                pullSetter={setStandardBannerPulls}
            />
            </Tab>
    </Tabs>
  );
}

export default BannerPages;