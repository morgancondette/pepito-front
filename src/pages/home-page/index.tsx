import * as React from 'react';

import DefaultTemplate from 'templates/default-template';

class HomePage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <DefaultTemplate>
        <h1>Dashboard page</h1>
      </DefaultTemplate>
    );
  }
}

export default HomePage;
