import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Button,
  Box,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';

interface FullscreenDialogProps {
  title: string;
  finishText: string;
  onFinish: () => void;
  onClose: () => void;
  isOpen: boolean;
  children?: JSX.Element;
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullscreenDialog(props: FullscreenDialogProps) {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={props.isOpen}
      onClose={props.onClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={props.onClose}
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {props.title}
          </Typography>
          <Button autoFocus color='inherit' onClick={props.onFinish}>
            {props.finishText}
          </Button>
        </Toolbar>
      </AppBar>
      <Box>{props.children}</Box>
    </Dialog>
  );
}
