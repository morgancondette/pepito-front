import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface ISideMenuListItem {
  id: string;
  labelKey: string;
  link: string;
}

interface ISideMenuProps {
  sideMenuList: ISideMenuListItem[];
}

type TSideMenuProps = ISideMenuProps;

class SideMenu extends React.PureComponent<TSideMenuProps> {
  public render(): JSX.Element {
    const { sideMenuList } = this.props;

    return (
      <ul>
        {sideMenuList.map((sideMenuListItem: ISideMenuListItem) =>
          this.renderSideMenuListItem(sideMenuListItem)
        )}
      </ul>
    );
  }

  private renderSideMenuListItem(sideMenuListItem: ISideMenuListItem): JSX.Element {
    return (
      <NavLink key={sideMenuListItem.id} to={sideMenuListItem.link}>
        {sideMenuListItem.labelKey}
      </NavLink>
    );
  }
}

export default SideMenu;
