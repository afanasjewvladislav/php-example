import React from 'react';
import { AppBar, AppBarTitle } from 'react-md';

const Header = () => {
  return (
    <AppBar id="simple-usage-app-bar" theme="primary">
      <AppBarTitle
        id="simple-usage-title"
        className="rmd-typography--capitalize"
      >
      </AppBarTitle>
      <AppBarTitle
        id="simple-usage-title"
        className="rmd-typography--capitalize"
      >
        Отдел кадров
      </AppBarTitle>
    </AppBar>
  );
};

export default Header;
