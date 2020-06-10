import React, { Fragment } from 'react';
import MoreIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';

export default function MoreActions() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Fragment>
      <IconButton
        aria-label='show more'
        aria-haspopup='true'
        onClick={handleClickButton}
        color='inherit'
      >
        <MoreIcon />
      </IconButton>
    </Fragment>
  );
}
