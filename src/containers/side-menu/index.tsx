import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem } from '@material-ui/core';

import FontIcon from 'components/font-icon';

import * as s from './style.scss';

interface ISideMenuStylesProps {
  paper: string;
}

interface ISideMenuListItem {
  id: string;
  labelKey: string;
  icon: string;
  link: string;
}

interface ISideMenuProps extends React.HTMLAttributes<{}> {
  sideMenuList: ISideMenuListItem[];
  styles: ISideMenuStylesProps;
}

type TSideMenuProps = ISideMenuProps;

class SideMenu extends React.PureComponent<TSideMenuProps> {
  public render(): JSX.Element {
    const { sideMenuList, styles } = this.props;

    return (
      <Drawer
        anchor="left"
        variant="permanent"
        className={s.side_menu}
        classes={{
          paper: styles.paper
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
      <NavLink
        exact={true}
        key={sideMenuListItem.id}
        className={s.side_menu_link}
        activeClassName={s.side_menu_link__active}
        to={sideMenuListItem.link}
      >
        <ListItem classes={{ gutters: s.side_menu_item_gutters, root: s.side_menu_item }}>
          <FontIcon iconName={sideMenuListItem.icon} /> {sideMenuListItem.labelKey}
        </ListItem>
      </NavLink>
    );
  }
}

export default SideMenu;
