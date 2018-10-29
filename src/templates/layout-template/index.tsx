import * as React from 'react';
import { CssBaseline } from '@material-ui/core';

import * as s from './style.scss';

class LayoutTemplate extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div className={s.layout_template}>
        <CssBaseline />
        {this.props.children}
      </div>
    );
  }
}

export default LayoutTemplate;
