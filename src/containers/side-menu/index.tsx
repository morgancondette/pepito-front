import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem } from '@material-ui/core';

interface ISideMenuListItem {
  id: string;
  labelKey: string;
  link: string;
}

interface ISideMenuProps extends React.HTMLAttributes<{}> {
  sideMenuList: ISideMenuListItem[];
}

type TSideMenuProps = ISideMenuProps;

class SideMenu extends React.PureComponent<TSideMenuProps> {
  public render(): JSX.Element {
    const { sideMenuList, className } = this.props;

    return (
      <Drawer
        anchor="left"
        variant="permanent"
        classes={{
          paper: className
        }}
      >
        <List>
          {sideMenuList.map((sideMenuListItem: ISideMenuListItem) =>
            this.renderSideMenuListItem(sideMenuListItem)
          )}
        </List>
      </Drawer>
    );
  }

  private renderSideMenuListItem(sideMenuListItem: ISideMenuListItem): JSX.Element {
    return (
      <ListItem key={sideMenuListItem.id}>
        <NavLink to={sideMenuListItem.link}>{sideMenuListItem.labelKey}</NavLink>
      </ListItem>
    );
  }
}

export default SideMenu;
