import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tabs, Tab, Box } from '@material-ui/core';
import TabPanel from './tab-panel';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props: VerticalTabsProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const tabsName = props.tabs.map((tab: VerticalTab, index: number) => (
    <Tab label={tab.title} {...a11yProps(index)} />
  ));
  const tabsPanel = props.tabs.map((tab: VerticalTab, index: number) => (
    <TabPanel value={value} index={index}>
      {tab.component}
    </TabPanel>
  ));

  return (
    <div className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Admin tabs'
        className={classes.tabs}
      >
        {tabsName}
      </Tabs>
      {tabsPanel}
    </div>
  );
}
