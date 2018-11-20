import * as React from 'react';

import DefaultTemplate from 'templates/default-template';

import Typography from '@material-ui/core/Typography';

class HomePage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <DefaultTemplate>
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
      </DefaultTemplate>
    );
  }
}

export default HomePage;
