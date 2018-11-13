import * as React from 'react';

import LayoutTemplate from 'templates/layout-template';
import SideMenu from 'containers/side-menu';

import * as s from './style.scss';

const stubMenu = [
  {
    icon: 'layout',
    id: '0',
    labelKey: 'Dashboard',
    link: '/'
  },
  {
    icon: 'image',
    id: '1',
    labelKey: 'Gallery',
    link: '/gallery'
  }
];

class DefaultTemplate extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <LayoutTemplate>
        <SideMenu sideMenuList={stubMenu} styles={{ paper: s.side_menu }} />
        <div className={s.workspace}>{this.props.children}</div>
      </LayoutTemplate>
    );
  }
}

export default DefaultTemplate;
