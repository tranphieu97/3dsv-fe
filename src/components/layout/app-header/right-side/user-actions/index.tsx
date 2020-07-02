import React, { Fragment } from 'react';
import { IconButton, Avatar } from '@material-ui/core';
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

  const userPhoto = () => {
    const { auth } = props;
    if (auth.photo) {
      return <Avatar alt={auth.name} src={auth.photo} />;
    }
    return <AccountCircle />;
  };

  return (
    <Fragment>
      <IconButton
        aria-controls={MORE_ACTIONS_MENU_ID}
        aria-haspopup='true'
        onClick={handleClickButton}
        color='inherit'
      >
        {userPhoto()}
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

const mapStateToProps = (state: any) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { logoutUser })(UserActions);
