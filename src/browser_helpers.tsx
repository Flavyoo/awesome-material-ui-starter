import React, { ReactNode } from 'react';

import BaseLayout from './components/layouts/BaseLayout';
import { createTheme } from '@material-ui/core/styles';

// More info on what you can update for the theme here: https://material-ui.com/customization/default-theme/#default-theme
const theme = createTheme({
  palette: {
    primary: {
      main: `#033FB4`,
    },
  },
});

interface ProviderParams {
  element: ReactNode;
}

export const wrapWithProvider = (params: ProviderParams) => {
  return <BaseLayout theme={theme}>{params.element}</BaseLayout>;
};
