import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { IconButton, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  })
);

function HeaderLeftSide(props: any) {
  const classes = useStyles();

  return (
    <Fragment>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='open drawer'
        onClick={props.handleClickMenuIcon}
      >
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} variant='h6' noWrap>
        Material-UI
      </Typography>
    </Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  state: state,
});

export default connect(mapStateToProps)(HeaderLeftSide);
