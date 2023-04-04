/* eslint-disable react/prop-types */
import { Modal, AnimatedVisibility, Button, Box } from '@rocket.chat/fuselage';
import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import {
  UiKitComponent,
  UiKitModal,
  modalParser,
} from '@rocket.chat/fuselage-ui-kit';
import React, { useEffect, useMemo, useRef } from 'react';
import { FocusScope } from 'react-aria';
import { getButtonStyle } from './getButtonStyle';

const focusableElementsString = `
	a[href]:not([tabindex="-1"]),
	area[href]:not([tabindex="-1"]),
	input:not([disabled]):not([tabindex="-1"]),
	select:not([disabled]):not([tabindex="-1"]),
	textarea:not([disabled]):not([tabindex="-1"]),
	button:not([disabled]):not([tabindex="-1"]),
	iframe,
	object,
	embed,
	[tabindex]:not([tabindex="-1"]),
	[contenteditable]`;

const focusableElementsStringInvalid = `
	a[href]:not([tabindex="-1"]):invalid,
	area[href]:not([tabindex="-1"]):invalid,
	input:not([disabled]):not([tabindex="-1"]):invalid,
	select:not([disabled]):not([tabindex="-1"]):invalid,
	textarea:not([disabled]):not([tabindex="-1"]):invalid,
	button:not([disabled]):not([tabindex="-1"]):invalid,
	iframe:invalid,
	object:invalid,
	embed:invalid,
	[tabindex]:not([tabindex="-1"]):invalid,
	[contenteditable]:invalid`;

function ModalBlock({ view, errors, onSubmit, onClose, onCancel }) {
  const id = `modal_id_${useUniqueId()}`;
  const ref = useRef();

  // Auto focus
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (errors && Object.keys(errors).length) {
      const element = ref.current.querySelector(focusableElementsStringInvalid);
      element && element.focus();
    } else {
      const element = ref.current.querySelector(focusableElementsString);
      element && element.focus();
    }
  }, [errors]);
  // save focus to restore after close
  const previousFocus = useMemo(() => document.activeElement, []);
  // restore the focus after the component unmount
  useEffect(
    () => () => previousFocus && previousFocus.focus(),
    [previousFocus]
  );

  return (
    <AnimatedVisibility visibility={AnimatedVisibility.UNHIDING}>
      <FocusScope contain restoreFocus autoFocus>
        <Modal
          open
          id={id}
          ref={ref}
          style={{
            position: 'fixed',
            zIndex: 1000,
            top: '50%',
            left: '50%',
            maxHeight: '80vh',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Modal.Header>
            <Modal.Title>{modalParser.text(view.title)}</Modal.Title>
            <Modal.Close tabIndex={-1} onClick={onClose} />
          </Modal.Header>
          <Modal.Content>
            <Box is="form" method="post" action="#" onSubmit={onSubmit}>
              <UiKitComponent render={UiKitModal} blocks={view.blocks} />
            </Box>
          </Modal.Content>
          <div>
            {view.close && (
              <Button danger={view.close.style === 'danger'} onClick={onCancel}>
                {modalParser.text(view.close.text)}
              </Button>
            )}
            {view.submit && (
              <Button {...getButtonStyle(view)} onClick={onSubmit}>
                {modalParser.text(view.submit.text)}
              </Button>
            )}
          </div>
        </Modal>
      </FocusScope>
    </AnimatedVisibility>
  );
}

export default ModalBlock;
export { modalParser };
