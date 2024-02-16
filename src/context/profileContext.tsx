import React from 'react';
import { PersonalFormValueType } from '../containers/profile/personalForm/personalForm';

interface IContext {
  settings: ISettingsValues;
  saveSettings: (values: ISettingsValues) => void;
}

interface ISettingsValues {
  personalValues?: any;
  personalRef?: React.ReactNode;
}

interface IProviderProvider {
  settings?: ISettingsValues;
  children: React.ReactNode; // вставил изменения в отличие от исходника
}

const defaultSettings = {
  personalValues: null,
  personalRef: null
};

export const ProfileContext = React.createContext<IContext>({} as IContext);

const ProfileProvider: React.FC<IProviderProvider> = ({ children, settings }) => {
  const [currentSettings, setCurrentSettings] = React.useState<ISettingsValues>({
    personalValues: settings?.personalValues,
    personalRef: settings?.personalRef
  });

  const saveSettings = React.useCallback((values: Partial<ISettingsValues>) => {
    if (!Object.keys(values).length) {
      setCurrentSettings(defaultSettings);
    }
    setCurrentSettings((v) => ({ ...v, ...values }));
  }, []);

  return (
    <ProfileContext.Provider value={{ settings: currentSettings, saveSettings }}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
