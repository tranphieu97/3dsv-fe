import React, { Fragment } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IconButton, Badge } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchField from '../../../common/search-field';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // sectionDesktop: {
    //   display: 'none',
    //   [theme.breakpoints.up('md')]: {
    //     display: 'flex',
    //   },
    // },
    // sectionMobile: {
    //   display: 'flex',
    //   [theme.breakpoints.up('md')]: {
    //     display: 'none',
    //   },
    // },
    // search: {
    //   position: 'relative',
    //   borderRadius: theme.shape.borderRadius,
    //   backgroundColor: fade(theme.palette.common.white, 0.15),
    //   '&:hover': {
    //     backgroundColor: fade(theme.palette.common.white, 0.25),
    //   },
    //   marginRight: theme.spacing(2),
    //   marginLeft: 0,
    //   width: '100%',
    //   [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(3),
    //     width: 'auto',
    //   },
    // },
    // searchIcon: {
    //   padding: theme.spacing(0, 2),
    //   height: '100%',
    //   position: 'absolute',
    //   pointerEvents: 'none',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // inputRoot: {
    //   color: 'inherit',
    // },
    // inputInput: {
    //   padding: theme.spacing(1, 1, 1, 0),
    //   // vertical padding + font size from searchIcon
    //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //   transition: theme.transitions.create('width'),
    //   width: '100%',
    //   [theme.breakpoints.up('md')]: {
    //     width: '20ch',
    //   },
    // },
  })
);

const MENU_ID = 'primary-search-account-menu';
const MOBILE_MENU_ID = 'primary-search-account-menu-mobile';

export default function HeaderRightSide() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Fragment>
      <SearchField onChange={(value) => console.log(value)}></SearchField>
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
          aria-controls={MENU_ID}
          aria-haspopup='true'
          onClick={handleProfileMenuOpen}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
      </div>
      {/* <IconButton
        aria-label='show more'
        aria-controls={MOBILE_MENU_ID}
        aria-haspopup='true'
        onClick={handleMobileMenuOpen}
        color='inherit'
      >
        <MoreIcon />
      </IconButton> */}
    </Fragment>
  );
}
