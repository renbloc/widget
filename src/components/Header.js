import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  Header_div: {
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom:100,
  },
  Header: {
    fontSize: 50,
    fontWeight: 200,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.Header_div}>
        <h1 className={classes.Header}>
            .renbloc
        </h1>
    </div>
  );
}

