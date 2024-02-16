import { IFormInputProps } from './types';
import React from 'react';
import { Icon, IconsContainer, InputErrText, InputField, InputWrapper, Label, Wrapper } from './styled';
import { Typography } from '../../typography';

import { ReactComponent as ErrIcon } from 'assets/icons/inputIcon/err.svg';
import { ReactComponent as ClearIcon } from 'assets/icons/inputIcon/clear.svg';
import { ReactComponent as ShowPassIcon } from 'assets/icons/inputIcon/passShow.svg';
import { ReactComponent as HiddenPassIcon } from 'assets/icons/inputIcon/passHidden.svg';

export const Input: React.FC<IFormInputProps> = (
  {
    id,
    label,
    err,
    icon,
    onClear,
    placeholder = ' ',
    autoComplete = 'nope',
    className,
    type = 'text',
    disabled = false,
    ...attrs
  }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [inputType, setInputType] = React.useState<string>(type);

  const toggle = () => {
    setShowPassword((show) => !show);
    setInputType((type) => (type === 'text' ? 'password' : 'text'));
  };

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Wrapper className={className}>
      <InputWrapper>
        <InputField
          type={inputType || 'text'}
          className="input"
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          err={err}
          {...attrs}
          style={{ paddingRight: ref?.current?.getBoundingClientRect().width, paddingTop: label ? 15 : 0 }}
        />

        {label && (
          <Label htmlFor={id} className="inputLabel">
            {label}
          </Label>
        )}

        <IconsContainer ref={ref}>
          {err && (
            <Icon className="inputErrorIcon">
              <ErrIcon />
            </Icon>
          )}

          {type === 'password' && attrs.value && (
            <Icon className="inputPasswordIcon" onClick={() => toggle()}>
              {!showPassword ? <ShowPassIcon /> : <HiddenPassIcon />}
            </Icon>
          )}

          {onClear && (attrs.defaultValue || attrs.value) && (
            <Icon className="inputClearIcon" onClick={() => onClear(attrs.name)}>
              <ClearIcon />
            </Icon>
          )}

          {!err && !attrs.defaultValue && !attrs.value && <Icon>{icon}</Icon>}
        </IconsContainer>
      </InputWrapper>
      {err && (
        <InputErrText className="inputErrorText">
          <Typography>{err}</Typography>
        </InputErrText>
      )}
    </Wrapper>
  );
};
