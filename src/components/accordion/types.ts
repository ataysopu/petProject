export interface IAccordionProps {
  title?: string | React.ReactNode;
  content?: string;
  children?: React.ReactNode;
  Icon?: any;
  className?: string;
  getActiveState?: (key: boolean) => void;
  isOpen?: boolean;
}
