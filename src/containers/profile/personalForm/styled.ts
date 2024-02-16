import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Input } from '../../../components/inputs/input';
import { Select } from '../../../components/select';
import { Button } from '../../../components/button';
import { Modal } from '../../../components';

export const PersonalWrapper = styled.div`
    padding-top: 32px;

    ${mediaQueries('lg')`
    background: var(--grey-0);
    border-radius: 12px;
    box-shadow: var(--shadow);
  `};
`;

export const Column = styled.div`
    display: flex;
    flex-flow: column;
    padding: 28px;
    background: var(--grey-0);
    border-radius: 12px;
    box-shadow: var(--shadow);

    ${mediaQueries('lg')`
    padding: 24px;
    box-shadow: none;
  `};
`;

export const PersonalTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    padding: 20px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaQueries('lg')`
    padding: 0 24px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    margin: 0!important;
  `};
`;

export const PersonalListInfo = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const ListInfoItem = styled.li`
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: 0;
    }

    & div:nth-child(1) {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.1px;
        margin-bottom: 5px;
        color: #868588;

        ${mediaQueries('lg')`
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.1px;
    `};
    }

    & div:nth-child(2) {
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);

        ${mediaQueries('lg')`
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.15px;
    `};
    }

    & svg {
        margin-right: 8px;
        min-width: 24px;
    }
`;

export const Text = styled.div``;

// PERSONAL_FORM

interface IPersonalFormProps {
  hidden: boolean;
}

export const PersonalFormWrapper = styled.div<IPersonalFormProps>`
    display: flex;
    flex-direction: column;
    ${({ hidden }) =>
            hidden &&
            `
    visibility: hidden;
    width: 0;
    height: 0;
  `};

    ${mediaQueries('lg')`
    display: block;
  `};
`;

export const FormWrapper = styled.div`
    padding: 0;

    ${mediaQueries('lg')`
    background: var(--grey-0);
    height: 100%;
    padding: 28px 16px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  `};
`;

export const FormTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
`;

export const FormTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-900);
    margin-bottom: 25px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${mediaQueries('lg')`
    margin-bottom: 16px;
  `};
`;

export const StyledInput = styled(Input)`
    .input {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);
        background: var(--grey-100);
        border-radius: 8px;
        padding-top: 15px;
        height: 56px;
    }

    .inputLabel {
        color: var(--grey-500);
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
    }

    .input:not(:placeholder-shown) {
        background: var(--grey-50);
        border: 2px solid var(--grey-100);
    }

    .input:focus {
        background: var(--grey-50);
        border: 2px solid var(--grey-100);
    }

    .input::placeholder {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: #a0a0a3;
    }
`;

export const StyledSelect = styled(Select)`
    .input {
        height: 56px;
    }

    .dropdownTitle {
        border-radius: 8px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);
        background: var(--grey-100);
        color: var(--grey-500);
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;

        &:not(:empty) {
            background: var(--grey-50);
            border: 2px solid var(--grey-100);
        }
    }

    .dropdownList {
        right: 0px;
        left: 0;
        bottom: initial;
        top: 50px;
    }
`;

export const SaveBtn = styled(Button)`
    background: var(--primary-main);
    border-radius: 16px;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.46px;
    color: var(--grey-0);
    height: 56px;
    padding: 0 22px;
    margin-top: 32px;

    ${mediaQueries('lg')`
    margin-top: auto;
    padding: 14px 0;
    margin-top: 24px;
  `};
`;

export const AddPersonalInfoBtn = styled(Button)`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.46px;
    color: var(--primary-main);

    ${mediaQueries('lg')`
    background: var(--grey-0);
    height: 100%;
    padding: 28px 16px;
    justify-content: flex-start;
  `};
`;

export const StyledModal = styled(Modal)``;
