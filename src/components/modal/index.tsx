import React from 'react';
import { IModalProps } from './types';
import { useWindowSize } from '../../core/hooks/useWindowSize';
import { useLocation, useNavigate } from 'react-router-dom';
import { BREAKEPOINTS } from '../../core/config/breakpoints';
import { useOutsideClick } from '../../core/hooks/useOutsideClick';
import { Close, Dialog, Overlay, Swipe } from './styled';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

export const Modal: React.FC<IModalProps> = React.memo(
  ({ children, closeIcon = true, isOpen, onClose, outsideClick = true, bg, top, className, ...props }) => {
    const [startAnim, setStartAnim] = React.useState<boolean>(false);
    const { width } = useWindowSize();
    const location = useLocation();
    const navigate = useNavigate();
    const overlayRef = React.useRef<HTMLDivElement>(null);
    const dialogRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setStartAnim(isOpen);
    }, [isOpen]);

    React.useEffect(() => {
      bodyScrollLock();
    }, [isOpen]);

    React.useEffect(() => {
      return () => {
        hideModal();
      };
    }, [location.pathname]);

    function bodyScrollLock() {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    function hideModal() {
      setStartAnim(false);
      setTimeout(() => {
        onClose(false);
      }, 500);
    }

    const animation = () => {
      return width > BREAKEPOINTS.lg
        ? { opacity: `${startAnim ? '1' : '0'}` }
        : { transform: `translateY(${startAnim ? top || '0%' : '100%'})` };
    };

    useOutsideClick(overlayRef, () => hideModal(), outsideClick);
    // useSwipe(dialogRef, () => hideModal(), { axis: 'vertical', sensitivity: 300 });

    return (
      <div className={className}>
        {isOpen && (
          <Dialog style={animation()} ref={dialogRef} bg={bg} top={top} className="dialog-wrapper" {...props}>
            {closeIcon && (
              <Close onClick={() => onClose()} className="dialog-close">
                <CloseIcon />
              </Close>
            )}
            <Swipe className="dialog-swipe-icon" />
            <Overlay ref={overlayRef} className="dialog-overlay">
              {children}
            </Overlay>
          </Dialog>
        )}
      </div>
    );
  }
);
