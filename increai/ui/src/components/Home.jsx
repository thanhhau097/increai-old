import { useState } from 'react';
import { Tabs } from '@mantine/core';


function Home() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <Tabs active={activeTab} onTabChange={setActiveTab}>
            <Tabs.Tab label="Projects">Project Content</Tabs.Tab>
        </Tabs>
    );
}

export default Home;