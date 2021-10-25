import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component.jsx';
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
import {
  measureSideBarOneStyles,
  measureSideBarThreeStyles,
} from './sidebar-icon.utils.style.js';

export const SideBarIcon = ({
  toggleSideBarActive,
  isSideBarHidden: isSideBarActive,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  return (
    <SideBarHeaderIcon
      $issidebaractive={isSideBarActive}
      onClick={() => toggleSideBarActive()}
    >
      <SideBarOne
        $measuresidebarone={measureSideBarOneStyles(viewWidth, viewHeight)}
        $issidebaractive={isSideBarActive}
      />
      <SideBarTwo $issidebaractive={isSideBarActive} />
      <SideBarThree
        $measuresidebarthree={measureSideBarThreeStyles(viewWidth, viewHeight)}
        $issidebaractive={isSideBarActive}
      />
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
