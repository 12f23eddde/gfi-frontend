import {Button, Toast, ToastContainer} from 'react-bootstrap';
import {UserOutlined} from '@ant-design/icons';
import React, {createContext, useState, useContext, useCallback, useEffect, useMemo} from 'react';
import {globalWrappers} from '../common/wrapper';
import {nanoid} from 'nanoid';

export interface GFIToastProps {
  title: string;
  text: string;
  iconUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onToastClose?: () => void;
  closeDelay?: number;
}

export function GFIToast({
  title,
  iconUrl,
  text,
  buttonText,
  onButtonClick,
  onToastClose,
  closeDelay = 5000,
}: GFIToastProps) {
  const [show, setShow] = useState(true);
  const onClose = () => {
    if (typeof onToastClose === 'function') {
      onToastClose();
    }
    setShow(false);
  }

  // close after delay
  useEffect(() => {
    if (show && closeDelay > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, closeDelay);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <Toast show={show} animation onClose={() => onClose()}>
      <Toast.Header>
        {iconUrl ? (
          <img
            src={iconUrl}
            alt=""
            className="rounded me-2"
            style={{width: '30px'}}
          />
        ) : (
          <UserOutlined style={{fontSize: '30px'}}/>
        )}
        <strong className="me-auto" style={{marginLeft: '5px'}}>
          &nbsp; {title} &nbsp;
        </strong>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
      {buttonText ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '1rem',
            paddingBottom: '0.5rem',
          }}
        >
          <Button
            variant="outline-primary"
            size="sm"
            onClick={typeof onButtonClick === 'function' ? onButtonClick : onClose}
          >
            {buttonText}
          </Button>
        </div>
      ) : (
        <></>
      )}
    </Toast>
  );
}

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const GFIToastContext = createContext({
  addToast: (params: GFIToastProps) => {
    console.error('GFIToastContext not initialized')
  }
});

type ExtendedGFINotiToastProps = GFIToastProps & {
  id: string;
}

export const GFIToastContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ExtendedGFINotiToastProps[]>([]);
  const addToast = (props: Omit<GFIToastProps, 'onToastClose'>) => {
    const id = nanoid(10);
    setToasts(toasts => [...toasts, {...props, id}]);
  }
  const removeToast = (id: string) => {
    setTimeout(() => {
      setToasts(toasts => toasts.filter((toast) => toast.id !== id));
    }, 1000);
  }

  return (
    <GFIToastContext.Provider value={{addToast}}>
      <ToastContainer
        position="top-end"
        style={{
          zIndex: '9999',
        }}
      >
        {toasts.map((toast) => (
          <GFIToast
            key={toast.id}
            onToastClose={() => removeToast(toast.id)}
            {...toast}
          />
        ))}
      </ToastContainer>
      {children}
    </GFIToastContext.Provider>
  )
}

// register context provider
globalWrappers.push(GFIToastContextProvider);