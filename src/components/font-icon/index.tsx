import * as React from 'react';
import classnames from 'classnames';

import * as s from './style.scss';

interface IFontIconProps extends React.HTMLAttributes<{}> {
  iconName: string;
}

type TFontIconProps = IFontIconProps;

class FontIcon extends React.PureComponent<TFontIconProps> {
  public render(): JSX.Element {
    const { iconName } = this.props;

    return <i className={classnames(s.font_icon, s[iconName])} />;
  }
}

export default FontIcon;
