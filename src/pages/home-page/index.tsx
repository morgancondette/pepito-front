import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import DefaultTemplate from 'templates/default-template';

interface IHomePageRouterProps {
  name: string
}

interface IHomePageProps extends RouteComponentProps<IHomePageRouterProps> { }

type THomePageProps = IHomePageProps;

class HomePage extends React.PureComponent<THomePageProps> {
  public render(): JSX.Element {
    return (
      <DefaultTemplate>
        <h1>Home page with default template with param = {this.props.match.params.name}</h1>
      </DefaultTemplate>
    );
  }
}

export default withRouter(HomePage);