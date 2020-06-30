import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxHeight: 500,
    flex: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface SlideProps {
  src: string[];
  cycle: number;
}
export default function Slide(props: SlideProps) {
  const classes = useStyles();
  const [currentImg, setCurrentImg] = useState(props.src[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {

  //   }, props.cycle)
  // }, [])

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia></CardMedia>
      </CardContent>
    </Card>
  );
}
