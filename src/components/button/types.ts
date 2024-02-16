export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  onClick: (e?: React.MouseEvent) => void;
  primary?: boolean;
  style?: React.CSSProperties;
  transparent?: boolean;
  fullWidth?: boolean;
  center?: boolean;
}