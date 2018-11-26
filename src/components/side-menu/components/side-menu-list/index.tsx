import * as React from 'react';

import { ISideMenuListItem } from 'components/side-menu/model';

import SideMenuListItem from './components/side-menu-list-item';

interface ISideMenuListProps {
  sideMenuList: ISideMenuListItem[];
}

type TSideMenuListProps = ISideMenuListProps;

class SideMenuList extends React.PureComponent<TSideMenuListProps> {
  public render(): JSX.Element[] {
    return this.props.sideMenuList.map((sideMenuListItem: ISideMenuListItem) => (
      <SideMenuListItem sideMenuListItem={sideMenuListItem} />
    ));
  }
}

export default SideMenuList;
