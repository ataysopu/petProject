import React from 'react';

export interface IFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  err?: string;
  id?: string;
  icon?: React.ReactNode;
  onClear?: any;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
  disabled?: boolean;
}
