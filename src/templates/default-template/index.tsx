import * as React from 'react';

class DefaultTemplate extends React.PureComponent<{}> {
  public render(): JSX.Element {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default DefaultTemplate;
