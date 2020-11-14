import React from 'react'
import { Tab, Tabs } from '@material-ui/core';




const ApiTabs = (props) => {
    const [selectedTab, setSelectedTab] = React.useState();

    const handleTabs = (event, newValue) => {
        console.log(newValue)
        setSelectedTab(newValue)
    }


    return (

        <div>

            <Tabs position="static" value={selectedTab} onChange={handleTabs}>
                <Tab label="Endpoints" />
                <Tab label="Python" />
                <Tab label="Ruby" />
                <Tab label="C#" />
            </Tabs>


            {/* <TabPanel value={value} index={0}>
                <pre>
                    <code>
                        var greeting = "hello world!"
                             </code>
                </pre>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}
        </div>

    );
}

export default ApiTabs;