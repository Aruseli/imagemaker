import * as React from 'react';

import Container from '../widgets/container';
import Fillimage from '../features/fillimage';

import { IconButton, Menu, MenuItem, Button, Grid } from '@material-ui/core';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const styles: StyleRulesCallback = () => ({
  root: {
    flexGrow: 1,
  },
});

export const Component = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Fillimage imgSrc="/pages/about/fullscreen.jpg" height={600} positionY="top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          marginTop: 64,
          background: 'rgba(0,0,0,0.5)',
          maxWidth: '50%',
          color: '#fff',
          textAlign: 'center',
          flex: 1,
        }}>
          <h1 style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }}> Высшая Школа Стилистики </h1>
          <p>Профессиональное образование в индустрии моды и дизайна <br />
            Очное, заочное и дистанционное обучение</p>
        </div>
      </Fillimage>
    </div>
  );
};

export default withStyles(styles)(Component);
