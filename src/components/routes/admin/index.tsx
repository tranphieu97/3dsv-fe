import React from 'react';
import { Box } from '@material-ui/core';
import VerticalTabs from '../../common/vertical-tabs';
import ManageItems from '../../manage/items';
import ManageUsers from '../../manage/users';

export default function Admin() {
  const tabData: VerticalTab[] = [
    {
      title: 'Items',
      component: <ManageItems />,
    },
    {
      title: 'User',
      component: <ManageUsers />,
    },
  ];

  return (
    <Box>
      <VerticalTabs tabs={tabData}></VerticalTabs>
    </Box>
  );
}
