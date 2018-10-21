import * as React from 'react';

import Container from '../widgets/container';
import Fillimage from '../features/fillimage';

import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import * as propValidation from 'react-scroll-parallax/lib/utils/propValidation';
propValidation.offsetMin = propValidation.offsetMax = () => null;

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
//  import { ScrollContainer } from 'react-router-scroll';

export const styles: StyleRulesCallback = () => ({
  root: {
    flexGrow: 1,
  },
});

function VerticalMiddle(props) {
  return (
    <div
      style={{
        // width: '100%',
        // height: '100%',
        display: 'table',
        textAlign: 'center',
        border: '1px solid rgba(255,0,0,1)',
      }}
    >
      <div
        style={{
          height: '100%',
          display: 'table-cell',
          verticalAlign: 'middle',
          border: '1px solid rgba(0,255,0,1)',
          ...props.style,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

function Cpl(props) {
  return <span style={{ textTransform: 'uppercase' }}>{props.children}</span>;
}

function Clr(props) {
  return (
    <span
      style={{
        color: 'rgba(125,125,125,0.4)',
        ...props.style,
      }}
    >
      {props.children}
    </span>
  );
}

const Screen: any = (props) => {
  return (
    <div
      style={{
        height: '100vh',
        // width: 'calc(100vw - 15px)',
        width: '100%',
        padding: props.padding,
        // backgroundColor: 'rgb(80,80,80)',
        backgroundColor: props.color,
        backgroundImage: props.bkg,
        boxSizing: 'border-box',
        overflowX: 'hidden',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
Screen.defaultProps = {
  bkg: 'none',
  color: 'rgba(125,125,125,1)', // по умолчанию фон серый
  padding: 25, // padding по умолчанию
};

export const Component = (props: any) => {
  const { classes } = props;
  const containerPadding = 25;
  return (
    <div className={classes.root}>
      {/*<ScrollContainer>*/}
      <Screen
        color="rgba(230,230,210,1.0)"
        style={{
          textAlign: 'center',
          boxShadow: 'inset 0 0 30vh rgba(0,0,0,0.4)',
        }}
      >
        <img
          src="/pages/imagemaker/logo.png"
          style={{
            // marginTop: 'calc(50vh - 197px)',
            animation:
              '2s forwards moveLogo, 1s linear 2s reverse forwards opac',
            /*animationName: 'moveLogo, opac',
            animationDuration: '2s, 3s',
            animationFillMode: 'forwards, forwards',
            animationDiraction: 'normal, reverse',
            animationDelay: '0, 2s',
            animationTimingFunction: 'ease-out'*/
          }}
        />
        <p
          style={{
            fontFamily: 'Alice',
            fontSize: 34,
            color: 'rgba(123,143,87,1.0)',
            animation:
              '2s ease-out forwards moveName, 1s linear 2s reverse forwards opac',
            // animationName: 'moveName',
            // animationDuration: '2s',
            // animationFillMode: 'forwards',
            // animationTimingFunction: 'ease-out',
            margin: 0,
          }}
        >
          Высшая школа стилистики,<br />дизайна и технологий
        </p>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            textAlign: 'center',
            width: '100%',
            height: 40,
            opacity: 0,
            animation: '2s linear 2s forwards opac',
          }}
        >
          <img
            src="/pages/imagemaker/logo.png"
            style={{
              // width: '10%',
              height: 40,
              verticalAlign: 'middle',
            }}
          />
          <span
            style={{
              fontFamily: 'Alice',
              fontSize: 24,
              color: 'rgba(123,143,87,1.0)',
              paddingBottom: 12,
              verticalAlign: 'middle',
            }}
          >
            &nbsp;Высшая школа стилистики, дизайна и технологий
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            top: 'calc(100vh - 350px)',
            left: '10%',
          }}
        >
          <img src="/pages/imagemaker/vk.svg" height="50" width="50" />
          <br />
          <img src="/pages/imagemaker/fb.svg" height="50" width="50" />
          <br />
          <img src="/pages/imagemaker/viber.svg" height="50" width="50" />
          <br />
          <img src="/pages/imagemaker/vapp.svg" height="50" width="50" />
          <br />
          <img src="/pages/imagemaker/ig.svg" height="50" width="50" />
        </div>
      </Screen>
      <Screen
        bkg="linear-gradient(to right, rgb(255,125,125) 45%, rgb(180,180,180) 0%)"
        color="rgba(180,180,180,1.0)"
      >
        <div
          style={{
            // backgroundImage: 'url(/pages/imagemaker/bkg_gr.png)',
            // backgroundRepeat: 'repeat repeat',
            // width: 'calc(100vw - ' + containerPadding + '*2)',
            // height: 'calc(100vh - ' + containerPadding + '*2)'
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            padding: 30,
          }}
        >
          <div
            style={{
              display: 'block',
              width: '40%',
              height: '100%',
              // marginRight: '10%'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                textAlign: 'center',
                margin: 0,
              }}
            >
              <div
                style={{
                  backgroundImage: 'url(/pages/imagemaker/bkg_gr.png)',
                  backgroundRepeat: 'repeat repeat',
                  // marginLeft: '35%',
                  // marginTop: '35%',
                  position: 'relative',
                  left: '10%',
                  top: '10%',
                  width: '70%',
                  height: '70%',
                  // transform: 'rotate(45deg)',
                  overflow: 'hidden',
                  borderRadius: '50%',
                  // opacity: 0,
                  animationName: 'movePortret, opac',
                  animationDuration: '2s, 3s',
                  // animationDelay: '2s',
                  animationFillMode: 'backwards',
                  animationTimingFunction: 'ease-out',
                }}
              >
                <img
                  src="/pages/imagemaker/tutor_efimova.png"
                  style={{
                    height: '70vh',
                    // transform: 'rotate(-45deg)',
                    // marginLeft: 25
                  }}
                />
              </div>
              <p
                style={{
                  textAlign: 'center',
                  fontFamily: '"Istok Web", sans',
                  fontSize: 24,
                  color: 'rgb(255,255,255)',
                  marginTop: 60,
                  marginLeft: '-10%',
                  fontWeight: 'bold',
                }}
              >
                Полина Ефимова
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'block',
              width: '50%',
              height: '100%',
              // marginTop: '2%',
              backgroundColor: 'rgba(200,200,200,1)',
              boxSizing: 'border-box',
              boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
              padding: 60,
              position: 'relative',
              left: '50%',
              top: '-100%',
            }}
          >
            <div
              style={{
                height: '80%',
                width: '100%',
                fontSize: 24,
                fontFamily: '"Istok Web", sans',
                textAlign: 'left',
                color: 'rgb(0,50,70)',
                animationName: 'opac',
                animationDuration: '2s',
                animationFillMode: 'backwards',
                animationTimingFunction: 'ease-out',
              }}
            >
              <h2 style={{ textAlign: 'center' }}>
                <Cpl>Профессиональный инструментарий:</Cpl>
              </h2>
              Путь от выбора идеи до реализации и продвижения, изучение
              источников и современных приемов для создания образа, реализация
              идеи на практике с учетом задач и целей клиента и знаний
              особенности модного рынка, продвижение идеи и услуг с
              использованием цифровых каналов и инструментов.
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default withStyles(styles)(Component);
