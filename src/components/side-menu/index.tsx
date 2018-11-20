import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import classnames from 'classnames';

import FontIcon from 'components/font-icon';

interface ISideMenuClassesProps {
  paper?: string;
}

interface ISideMenuListItem {
  id: string;
  labelKey: string;
  icon: string;
  link: string;
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
          paper: classnames(classes && classes.paper)
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
      <NavLink exact={true} key={sideMenuListItem.id} to={sideMenuListItem.link}>
        <ListItem button>
          <ListItemText>
            <FontIcon iconName={sideMenuListItem.icon} /> {sideMenuListItem.labelKey}
          </ListItemText>
        </ListItem>
      </NavLink>
    );
  }
}

export default SideMenu;
