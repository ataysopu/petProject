export interface ISelectProps {
  placeholder?: string;
  label?: string;
  options: Array<any>;
  selected?: string;
  onChange: (data: string) => void;
  className?: string;
  Icon?: any;
  CustomOptionComponent?: any;
  showSelectedValueIcon?: boolean;
  showSelectedValue?: boolean;
  name?: string;
  readOnly?: boolean;
  disabled?: boolean;
  defaultValue?: string;
}

export interface IDropdownListItem {
  selected?: boolean;
}

export type Option = {
  label: string;
  value: string;
};
