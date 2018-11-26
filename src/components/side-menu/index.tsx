import * as React from 'react';
import { Drawer } from '@material-ui/core';
import classnames from 'classnames';

import * as s from './style.scss';
import { ISideMenuListItem } from './model';
import SideMenuList from './components/side-menu-list';

interface ISideMenuClassesProps {
  paper?: string;
}

interface ISideMenuProps extends React.HTMLAttributes<{}> {
  sideMenuList: ISideMenuListItem[];
  classes?: ISideMenuClassesProps;
}

type TSideMenuProps = ISideMenuProps;

class SideMenu extends React.PureComponent<TSideMenuProps> {
  public render(): JSX.Element {
    const { sideMenuList, classes } = this.props;

    return (
      <Drawer
        anchor="left"
        variant="permanent"
        classes={{
          paper: classnames(s.side_menu, classes && classes.paper)
        }}
      >
        <SideMenuList sideMenuList={sideMenuList} />
      </Drawer>
    );
  }
}

export default SideMenu;
