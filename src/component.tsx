import * as React from 'react';
import {StrollableContainer, Stroller} from 'react-stroller';
import {IStrollerBarProps} from "react-stroller/dist/es5/Bar";
import {IStrollerProps} from "react-stroller/dist/es5/Stroller";
import {IContainerProps} from "react-stroller/dist/es5/Container";

import {nyanCatGif} from "./nyan";

const positions = {
  vertical: {
    0: {
      top: 0,
      right: 0,
    },
    1: {
      top: 0,
      left: 0,
    }
  },

  horizontal: {
    0: {
      bottom: 0,
      left: 0,
    },
    1: {
      top: 0,
      left: 0,
    },
  }
};

export const NyanStrollBarComponent: React.SFC<IStrollerBarProps> = ({
                                                    mainScroll,
                                                    targetScroll,
                                                    forwardRef,
                                                    location,
                                                    dragging,
                                                    draggable,
                                                    oppositePosition,

                                                    //axis,
                                                    targetAxis
                                                  }) => {
  const factor = mainScroll.scroll / (mainScroll.scrollSpace - mainScroll.space);
  const length =
    location === 'inside'
      ? (targetScroll!.scrollSpace) * factor
      : (targetScroll!.space- (targetAxis === 'horizontal' ? 26 : 0)) * factor;

  const W = targetAxis === 'horizontal' ? 'width' : 'height';
  const H = targetAxis !== 'horizontal' ? 'width' : 'height';
  return (
    <div
      style={{
        position: location === 'fixed' ? 'fixed' : 'absolute',
        cursor: dragging ? 'grabbing' : (draggable ? 'grab' : 'default'),

        ...(positions[targetAxis!][oppositePosition ? 1 : 0] as any),
        [W]: Math.round(length) + 'px',
        [H]: '16px',
        willChange: 'width,height',
        overflow: 'hidden'
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage:
        'linear-gradient(' + (targetAxis === 'horizontal' ? 0 : -90) + 'deg, transparent, magenta, red, yellow, limegreen, turquoise, blue, magenta, transparent)',
        backgroundPosition: targetAxis === 'horizontal' ? '-16px center' : 'center -16px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}/>
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        [W]: '26px',
        [H]: '16px',
      }}>

        <div
          ref={forwardRef as any}
          style={{
            width: '26px',
            height: '16px',
            backgroundImage: 'url('+nyanCatGif+')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            ...(targetAxis !== 'horizontal' ? {
              transform:'rotate(90deg)',
              transformOrigin:'8px 8px',
            } : {})
          }}/>
      </div>
    </div>
  );
}

export const NyanStrollBar:React.SFC<IStrollerProps> =
  (props) => <Stroller {...props} scrollBar={NyanStrollBarComponent}/>


export const NyanStrollContainer:React.SFC<IContainerProps & IStrollerProps> =
  (props) => <StrollableContainer {...props} scrollBar={NyanStrollBarComponent}/>
