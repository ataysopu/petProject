import React from 'react';
import { ISelectProps, Option } from './types';
import { useOutsideClick } from '../../core/hooks/useOutsideClick';
import {
  DropdownContainer,
  DropdownList,
  DropdownListItem,
  DropdownTitleContainer,
  DropdownWrapper,
  IconContainer,
  IconValueContainer,
  Label,
  StyledInput
} from './styled';
import { IconVerticalChevron } from '../icons/chevron';

export const Select: React.FC<ISelectProps> = React.memo(
  ({
     className,
     placeholder,
     label,
     options = [],
     selected,
     name,
     Icon,
     readOnly = true,
     disabled = false,
     showSelectedValueIcon = false,
     showSelectedValue = true,
     defaultValue,
     CustomOptionComponent = undefined,
     onChange
   }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [selectedValue, setSelectedValue] = React.useState<any>({});

    const ref = React.useRef<HTMLDivElement>(null);

    // React.useEffect(() => {
    //   if (!selected) return;
    //   options.map((v) => {
    //     if (v.value === selected) {
    //       onChange(v.value);
    //       setSelectedValue(v);
    //     }
    //   });
    // }, [selected]);

    const handleChange = (data: Option) => {
      setSelectedValue(data);
      setOpen(!open);
      onChange(data.value);
    };

    useOutsideClick(
      ref,
      () => {
        setOpen(false);
      },
      true
    );

    return (
      <DropdownWrapper className={className}>
        <DropdownContainer ref={ref} onClick={() => !disabled && setOpen(!open)} className="dropdonwContainer">
          {label && <Label className="inputLabel">{label}</Label>}
          <DropdownTitleContainer className="title-container">
            {selectedValue.icon && showSelectedValueIcon && (
              <IconValueContainer className="icon-value-container">
                <img src={selectedValue?.icon} />
              </IconValueContainer>
            )}
            <StyledInput
              className="input"
              name={name}
              placeholder={placeholder}
              defaultValue={(showSelectedValue && selectedValue.label) || defaultValue}
              readOnly={readOnly}
              disabled={disabled}
              hasLabel={!!label}
              showSelectedValueIcon={showSelectedValueIcon}
            />
            <IconContainer className="icon-container">
              {Icon && <Icon style={{ transform: (open && 'rotate(180deg)') || 'rotate(0deg)' }} />}
              {!Icon && <IconVerticalChevron open={open} />}
            </IconContainer>
          </DropdownTitleContainer>
          {open && (
            <DropdownList className="dropdownList">
              {options.map((v) =>
                CustomOptionComponent ? (
                  <CustomOptionComponent
                    data={v}
                    className="dropdownItem"
                    key={v.value}
                    selected={selectedValue?.value === v.value}
                    onClick={() => handleChange(v)}
                  />
                ) : (
                  <DropdownListItem
                    className="dropdownItem"
                    key={v.value}
                    selected={selectedValue?.value === v.value}
                    onClick={() => handleChange(v)}
                  >
                    {v.label}
                  </DropdownListItem>
                )
              )}
            </DropdownList>
          )}
        </DropdownContainer>
      </DropdownWrapper>
    );
  }
);