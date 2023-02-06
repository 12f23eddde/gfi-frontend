import { Variant as AlertPanelVariants } from 'react-bootstrap/types';
import React, { createRef } from 'react';
import { gsap } from 'gsap';
import { Alert } from 'react-bootstrap';

export type GFIAlertPanelVariants = AlertPanelVariants;

export interface GFIAlertProps {
  onClose?: () => void;
  title?: string;
  variant?: AlertPanelVariants;
  className?: string;
  children?: React.ReactNode;
}

export class GFIAlert extends React.Component<GFIAlertProps> {
  private readonly selfRef: React.RefObject<any>;

  constructor(props: GFIAlertProps) {
    super(props);
    this.selfRef = createRef();
  }

  componentDidMount() {
    const alarmTimeline = gsap.timeline();
    alarmTimeline
      .from(this.selfRef.current, {
        duration: 0.4,
        autoAlpha: 0,
        y: -25
      })
      .play();
  }

  alarmOnClose = () => {
    const timeline = gsap.timeline();
    timeline
      .to(this.selfRef.current, {
        duration: 0.4,
        autoAlpha: 0,
        y: -25
      })
      .eventCallback('onComplete', () => {
        if (this.props.onClose) {
          this.props.onClose();
        }
      })
      .play();
  };

  render() {
    const { title } = this.props;
    return (
      <Alert
        variant={this.props.variant ? this.props.variant : 'danger'}
        dismissible
        ref={this.selfRef}
        onClick={this.alarmOnClose}
        style={{
          borderRadius: '5px'
        }}
        className={this.props?.className}
      >
        {title}
        {this.props?.children}
      </Alert>
    );
  }
}