import * as React from 'react';

import DefaultTemplate from 'templates/default-template';

export default class Home extends React.PureComponent<{}> {
  public render(): JSX.Element {
    return (
      <DefaultTemplate>
        Home page with default template
      </DefaultTemplate>
    );
  }
}
