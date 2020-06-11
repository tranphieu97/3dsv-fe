import React, { Fragment } from 'react';
import MoreIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import AppMenu from '../../../../common/app-menu';

const MORE_ACTIONS_MENU_ID = 'more-action-menu';
export default function MoreActions() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Temporary
  const menuItems: MenuItem[] = [
    {
      title: 'Profile',
      onClick: handleCloseMenu,
    },
  ];

  return (
    <Fragment>
      <IconButton
        aria-controls={MORE_ACTIONS_MENU_ID}
        aria-haspopup='true'
        onClick={handleClickButton}
        color='inherit'
      >
        <MoreIcon />
      </IconButton>
      <AppMenu
        anchorEl={anchorEl}
        id={MORE_ACTIONS_MENU_ID}
        items={menuItems}
        onClose={handleCloseMenu}
      ></AppMenu>
    </Fragment>
  );
}
