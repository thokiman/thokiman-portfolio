import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import {
  RightServiceContainer,
  ThokimanHeadColor,
  ThokimanHeadOutlineCream,
} from './service-content.styles';

export const ServiceHomeContent = ({ isSideBarActive }) => {
  return (
    <RightServiceContainer
      className='right-service-container'
      $issidebaractive={isSideBarActive}
    >
      <div className='thokiman-head-service'>
        <ThokimanHeadColor />
      </div>
      <div className='thokiman-head-service'>
        <ThokimanHeadOutlineCream />
      </div>
    </RightServiceContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
});
export default connect(mapStateToProps)(ServiceHomeContent);
