import React, {useState} from 'react'
import { Tab, TabContainer, TabContent, TabImage, TabP, TabWrapper } from './TabsElements';
import Vintage from '../../pages/Vintage';
import Modern from '../../pages/Modern';

function Tabs() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    return (
        <TabContainer>
            <TabWrapper>
                <Tab className={activeTab === 1 && 'active-tab'} onClick={() => handleTabClick(1)}>
                    <TabImage src={`${process.env.PUBLIC_URL}/assets/cars/images/car1.jpg`} alt="Tab 1" />
                    <TabP>Classic cars</TabP>
                </Tab>
                <Tab className={activeTab === 2 && 'active-tab'} onClick={() => handleTabClick(2)}>
                    <TabImage src={`${process.env.PUBLIC_URL}/assets/cars/images/car2.jpg`} alt="Tab 2"  />
                    <TabP>Modern cars</TabP>
                </Tab>
            </TabWrapper>
            {activeTab === 1 && (
                <TabContent>
                    <Vintage />
                </TabContent>
            )}
            {activeTab === 2 && (
                <TabContent>
                    <Modern />
                </TabContent>
            )}
        </TabContainer>
  )
}

export default Tabs
