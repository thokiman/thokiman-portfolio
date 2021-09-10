import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleSideBarActive } from '../../../redux/header/header.actions.js';
import { selectIsSideBarActive } from '../../../redux/header/header.selectors';
import {
  SideBarHeaderIcon,
  SideBarOne,
  SideBarThree,
  SideBarTwo,
} from './sidebar-icon.styles';

export const SideBarIcon = ({
  toggleSideBarActive,
  isSideBarHidden: isSideBarActive,
}) => {
  return (
    <SideBarHeaderIcon
      $issidebaractive={isSideBarActive}
      onClick={() => toggleSideBarActive()}
    >
      <SideBarOne $issidebaractive={isSideBarActive} />
      <SideBarTwo $issidebaractive={isSideBarActive} />
      <SideBarThree $issidebaractive={isSideBarActive} />
    </SideBarHeaderIcon>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarHidden: selectIsSideBarActive,
});
const mapDispatchToProps = (dispatch) => ({
  toggleSideBarActive: () => dispatch(toggleSideBarActive()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarIcon);
