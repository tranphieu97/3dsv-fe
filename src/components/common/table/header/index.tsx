import React from 'react';
import { Box } from '@material-ui/core';

interface TableHeaderProps {
  leftSide?: JSX.Element;
  rightSide?: JSX.Element;
}
export default function TableHeader(props: TableHeaderProps) {
  return (
    <Box>
      <div>{props.leftSide}</div>
      <div>{props.rightSide}</div>
    </Box>
  );
}
