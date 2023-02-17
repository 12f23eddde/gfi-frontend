import React, {forwardRef, MutableRefObject, useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {checkIsPercentage} from '../common/checker';

export interface GFIOverlay {
  width?: string;
  height?: string;
  direction: 'left' | 'right' | 'top' | 'bottom';
  children?: React.ReactNode;
  hidden?: boolean;
  id: string;
  callback?: () => void;
  animation?: boolean;
  className?: string;
}

export const GFIOverlay = forwardRef<HTMLDivElement, GFIOverlay>(
  (props: GFIOverlay, ref) => {
    const selfRef = useRef<HTMLDivElement>(null);

    const {
      id,
      width,
      height,
      direction,
      children,
      hidden,
      callback,
      animation,
      className
    } = props;
    const hide = hidden ? 'hidden' : '';

    const resizeHandler = () => {
      if (animation && selfRef.current && direction === 'right') {
        selfRef.current.style.left = '';
      }
    };

    useEffect(() => {
      window.addEventListener('resize', resizeHandler);
      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }, []);

    useEffect(() => {
      const currentRef = (ref as MutableRefObject<HTMLDivElement>).current;
      if (currentRef && !hidden) {
        document
          .getElementsByTagName('html')[0]
          .classList.add('scrollbar-hidden');
        currentRef.style.display = 'block';

        // animation
        // currently only for direction = right & left
        if (
          animation &&
          selfRef.current &&
          direction === 'right' &&
          width &&
          checkIsPercentage(width)
        ) {
          selfRef.current.style.left = '100%';
          currentRef.style.overflowX = 'hidden';
          gsap
            .to(selfRef.current, {
              duration: 0.4,
              left: `${100 - parseFloat(width)}%`,
              ease: 'power3.out'
            })
            .play();
        } else if (
          animation &&
          selfRef.current &&
          direction === 'left' &&
          width &&
          checkIsPercentage(width)
        ) {
          selfRef.current.style.left = `${0 - parseFloat(width)}%`;
          currentRef.style.overflowX = 'hidden';
          gsap
            .to(selfRef.current, {
              duration: 0.4,
              left: '0',
              ease: 'power3.out'
            })
            .play();
        }
      } else if (currentRef) {
        currentRef.style.display = 'none';
      }
    }, [hidden]);

    return (
      <div
        id={id}
        className={`full-overlay ${hide}`}
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
          if (ref) {
            document
              .getElementsByTagName('html')[0]
              .classList.remove('scrollbar-hidden');
            const currentRef = (ref as MutableRefObject<HTMLDivElement>)
              .current;
            if (currentRef) {
              currentRef.style.display = 'none';
            }
            if (callback) {
              callback();
            }
          }
        }}
      >
        <div
          className={`full-overlay-${direction} ${className}`}
          style={{
            width: width || '100%',
            height: height || '100%'
          }}
          onClick={(e) => e.stopPropagation()}
          ref={selfRef}
        >
          {children}
        </div>
      </div>
    );
  }
);

GFIOverlay.displayName = 'GFIOverlay';