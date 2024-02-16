export interface IModalProps {
  onClose: any;
  isOpen: boolean;
  closeIcon?: boolean;
  children: React.ReactNode;
  outsideClick?: boolean;
  bg?: string;
  top?: string;
  className?: string;
}

export interface IDialogProps {
  bg?: string;
  top?: string;
}