import React, { Fragment } from 'react';
import { IconButton } from '@material-ui/core';
import AppMenu from '../../../../common/app-menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { logoutUser } from 'actions/me.action';

const MORE_ACTIONS_MENU_ID = 'more-action-menu';
const UserActions = function (props: any) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const onClickLogout = async () => {
    await props.logoutUser();
  };

  // Temporary
  const menuItems: MenuItem[] = [
    {
      title: t('layout.header.userActions.profile'),
      onClick: handleCloseMenu,
    },
    {
      title: t('layout.header.userActions.logout'),
      onClick: onClickLogout,
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
        <AccountCircle />
      </IconButton>
      <AppMenu
        anchorEl={anchorEl}
        id={MORE_ACTIONS_MENU_ID}
        items={menuItems}
        onClose={handleCloseMenu}
      ></AppMenu>
    </Fragment>
  );
};

export default connect(null, { logoutUser })(UserActions);
