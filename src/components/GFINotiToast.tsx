import {Button, Toast, ToastContainer} from 'react-bootstrap';
import {UserOutlined} from '@ant-design/icons';
import React from 'react';

export interface GFINotiToastProps {
  userName: string;
  userAvatarUrl?: string;
  onClose: () => void;
  context?: string;
  buttonContext?: string;
  onClick?: () => void;
  show: boolean;
}

export function GFINotiToast(props: GFINotiToastProps) {
  const {
    userName,
    userAvatarUrl,
    onClose,
    show,
    context,
    buttonContext,
    onClick,
  } = props;

  return (
    <ToastContainer
      position="top-end"
      style={{
        zIndex: '9999',
      }}
    >
      <Toast show={show} animation onClose={() => onClose()}>
        <Toast.Header>
          {userAvatarUrl ? (
            <img
              src={userAvatarUrl}
              alt=""
              className="rounded me-2"
              style={{width: '30px'}}
            />
          ) : (
            <UserOutlined style={{fontSize: '30px'}}/>
          )}
          <strong className="me-auto" style={{marginLeft: '5px'}}>
            {' '}
            Hello, {userName}{' '}
          </strong>
        </Toast.Header>
        <Toast.Body>{context || 'Welcome to GFI-Bot'}</Toast.Body>
        {buttonContext ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingRight: '1rem',
              paddingBottom: '0.5rem',
            }}
          >
            <Button variant="outline-primary" size="sm" onClick={onClick}>
              {buttonContext}
            </Button>
          </div>
        ) : (
          <></>
        )}
      </Toast>
    </ToastContainer>
  );
}