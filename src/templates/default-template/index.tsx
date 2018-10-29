import * as React from 'react';
import SideMenu from 'containers/side-menu';

const stubMenu = [
  {
    id: '0',
    labelKey: 'Home',
    link: '/'
  },
  {
    id: '1',
    labelKey: 'Gallery',
    link: '/gallery'
  }
];

class DefaultTemplate extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div>
        <SideMenu sideMenuList={stubMenu} />
        {this.props.children}
      </div>
    );
  }
}

export default DefaultTemplate;
