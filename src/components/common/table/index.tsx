import React from 'react';
import { Box } from '@material-ui/core';
import TableHeader from './header';
import TableContent from './content';

export default function Table() {
  return (
    <Box>
      <TableHeader></TableHeader>
      <TableContent></TableContent>
    </Box>
  );
}
