import React, { Fragment } from 'react';
import { IconButton, Badge, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchField from '../../../common/search-field';
import UserActions from './user-actions';
import { useTranslation } from 'react-i18next';
import { apiAuth } from 'config';
import { connect } from 'react-redux';

const HeaderRightSide = function (props: any) {
  const { t } = useTranslation();

  const LoggedInActions = (
    <div>
      <IconButton aria-label='show 4 new mails' color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label='show 17 new notifications' color='inherit'>
        <Badge badgeContent={17} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <UserActions></UserActions>
    </div>
  );

  const LoggedOutActions = (
    <div>
      <Button variant='contained' href={`${apiAuth}/google`}>
        {t('layout.header.login')}
      </Button>
    </div>
  );

  function renderUserActions() {
    if (props.auth._id) {
      return LoggedInActions;
    }
    return LoggedOutActions;
  }

  return (
    <Fragment>
      <SearchField onChange={(value) => console.log(value)}></SearchField>
      {renderUserActions()}
    </Fragment>
  );
};

function mapStateToProps(state: any) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(HeaderRightSide);
