import React from 'react';

import { AuthProvider } from './auth';

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
