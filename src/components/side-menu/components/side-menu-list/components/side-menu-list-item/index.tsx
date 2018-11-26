import * as React from 'react';
import FontIcon from 'components/font-icon';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { ISideMenuListItem } from 'components/side-menu/model';

import * as s from './style.scss';

interface ISideMenuListProps {
  sideMenuListItem: ISideMenuListItem;
}

type TSideMenuListProps = ISideMenuListProps;

class SideMenuList extends React.PureComponent<TSideMenuListProps> {
  public render(): JSX.Element {
    const { sideMenuListItem } = this.props;

    return (
      <NavLink
        exact={true}
        to={sideMenuListItem.link}
        activeClassName={s.side_menu_list_item__active}
      >
        <Button
          variant="fab"
          aria-label={sideMenuListItem.labelKey}
          classes={{ fab: s.side_menu_list_item_button }}
        >
          <FontIcon iconName={sideMenuListItem.icon} />
        </Button>
      </NavLink>
    );
  }
}

export default SideMenuList;
