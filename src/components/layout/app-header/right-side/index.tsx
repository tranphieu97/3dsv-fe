import React, { Fragment } from 'react';
import { IconButton, Badge, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchField from '../../../common/search-field';
import MoreActions from './more-actions';
import { useTranslation } from 'react-i18next';

export default function HeaderRightSide() {
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
      <IconButton
        edge='end'
        aria-label='account of current user'
        aria-haspopup='true'
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
    </div>
  );

  const LoggedOutActions = (
    <div>
      <a href='/auth/google'>
        <Button variant='contained'>{t('layout.header.login')}</Button>
      </a>
    </div>
  );

  return (
    <Fragment>
      <SearchField onChange={(value) => console.log(value)}></SearchField>
      {LoggedOutActions}
      <MoreActions></MoreActions>
    </Fragment>
  );
}
