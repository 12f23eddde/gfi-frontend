import React from 'react';
import {gsap} from 'gsap';
import {checkIsNumber} from '../common/checker';

export interface GFIProgressBarProps {
  barWidth: string | number;
  height: string;
  onFinished: () => void;
}

interface GFIProgressBarStates {
  barWidth: any;
}

export class GFIProgressBar extends React.Component<GFIProgressBarProps,
  GFIProgressBarStates> {
  private readonly barRef: React.RefObject<any>;

  constructor(props: GFIProgressBarProps) {
    super(props);
    this.barRef = React.createRef();
    this.state = {
      barWidth: '0%'
    };
  }

  checkValidWidth = (width: any) => {
    return (
      (checkIsNumber(width.slice(0, -1)) && width.slice(-1) === '%') ||
      checkIsNumber(width)
    );
  };

  componentDidUpdate(
    prevProps: GFIProgressBarProps,
    prevState: GFIProgressBarStates,
    snapshot: any
  ) {
    const {barWidth, onFinished} = this.props;
    if (
      this.checkValidWidth(barWidth) &&
      this.checkValidWidth(prevProps.barWidth)
    ) {
      if (barWidth === prevProps.barWidth) {
        return;
      }

      gsap
        .to(this.barRef.current, {
          duration: 0.2,
          width: barWidth,
          paused: true
        })
        .eventCallback('onComplete', () => {
          this.setState({
            barWidth
          });
        })
        .play();

      if (barWidth === '100%' || barWidth === window.innerWidth) {
        gsap
          .to(this.barRef.current, {
            duration: 0.2,
            autoAlpha: 0
          })
          .eventCallback('onComplete', () => {
            if (onFinished) {
              onFinished();
            }
          })
          .play();
      }
    }
  }

  render() {
    const {height} = this.props;
    return (
      <div
        style={{
          backgroundColor: '#85a5ff',
          height,
          width: this.state.barWidth,
          borderRadius: '2px'
        }}
        ref={this.barRef}
      />
    );
  }
}