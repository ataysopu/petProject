import React from 'react';
import { ProfileContext } from '../../../context/profileContext';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';
import {
  Form,
  FormTitle,
  FormTitleContainer,
  FormWrapper,
  PersonalFormWrapper, SaveBtn,
  StyledInput,
  StyledModal, StyledSelect
} from './styled';
import { useFormik } from 'formik';
import { UserProgressAvatar } from '../account/userProgressAvatar';
import { PassportForm } from '../passportForm';

const OPTIONS = [
  { value: 'female', label: 'Женский' },
  { value: 'male', label: 'Мужской' }
];

interface IPersonalFormProps {
  closeForm: (arg: boolean) => void;
  isOpenForm: boolean;
}

export type PersonalFormValueType = {
  emal: string;
  firstname: string;
  gender: string;
  lastname: string;
  patronymic: string;
};

export const PersonalForm: React.FC<IPersonalFormProps> = ({ closeForm, isOpenForm }) => {
  const { saveSettings } = React.useContext(ProfileContext);

  const [formRef, serFormRef] = React.useState<HTMLFormElement>();

  const isMobile = useDeviceDetected();
  const Component: React.ElementType = isMobile ? StyledModal : PersonalFormWrapper;

  const formik = useFormik({
    initialValues: {} as PersonalFormValueType,
    onSubmit: (values) => console.log(values)
  });
  

  return (
    <PersonalFormWrapper hidden={!isMobile && !isOpenForm}>
      <Component isOpen={isOpenForm} onClose={() => closeForm(false)}>
        <FormWrapper>
          {isMobile && (
            <FormTitleContainer>a
              <FormTitle>Личная информация</FormTitle>
              <UserProgressAvatar svgSize={102} imageSize={60} isOpen={false} openHandler={() => null} />
            </FormTitleContainer>
          )}
          <Form ref={(ref) => ref && serFormRef(ref)}>
            <StyledInput label="Фамилия" name="lastname" onChange={formik.handleChange} />
            <StyledInput label="Имя" name="firstname" onChange={formik.handleChange} />
            <StyledInput label="Отчество" name="patronymic" onChange={formik.handleChange} />
            <StyledSelect placeholder="Пол" options={OPTIONS} onChange={(e) => formik.setFieldValue('gender', e)} />
            <StyledInput label="Email" name="emal" onChange={formik.handleChange} />
          </Form>
          {isMobile && <PassportForm />}
          <SaveBtn type="submit" onClick={() => closeForm(false)}>
            Сохранить данные
          </SaveBtn>
        </FormWrapper>
      </Component>
    </PersonalFormWrapper>
  );
};
