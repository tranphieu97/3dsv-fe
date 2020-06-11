import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import clsx from 'clsx';
import { drawerWidth } from '../../../styles';
import HeaderLeftSide from './left-side';
import HeaderRightSide from './right-side';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flex: 1,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
);

export default function PrimarySearchAppBar(props: any) {
  const classes = useStyles();

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.openDrawer,
      })}
    >
      <Toolbar>
        <HeaderLeftSide
          handleClickMenuIcon={props.toggleDrawer}
        ></HeaderLeftSide>
        <div className={classes.grow} />
        <HeaderRightSide></HeaderRightSide>
      </Toolbar>
    </AppBar>
  );
}
