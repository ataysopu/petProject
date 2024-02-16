import React from 'react';

interface IContext {
  settings: IDefaultSettings;
  saveSettings: (values: IDefaultSettings) => void;
}

const defaultSettings = {
  header: true,
  footer: true
};

export interface IDefaultSettings {
  header?: boolean;
  footer?: boolean;
}

export const LayoutContext = React.createContext<IContext>({} as IContext);

const LayoutProvider: React.FC<any> = ({ children, settings }) => {
  const [currentSettings, setCurrentSettings] = React.useState<IDefaultSettings>(defaultSettings || settings);

  const saveSettings = React.useCallback((values: Partial<IDefaultSettings>) => {
    if (!Object.keys(values).length) {
      setCurrentSettings(defaultSettings);
    }
    setCurrentSettings((v) => ({ ...v, ...values }));
  }, []);

  return (
    <LayoutContext.Provider value={{ settings: currentSettings, saveSettings }}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;