import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../redux/header/header.selectors';
import {
  selectArtService,
  selectDevService,
  selectEngineerService,
  selectPhotoService,
} from '../../../redux/service/service.selectors';
import {
  DirectoryService,
  DirectoryServiceTextEng,
  DirectoryServiceTextFsd,
  DirectoryServiceTextGd,
  DirectoryServiceTextPg,
  LeftServiceContainer,
} from './service-header.styles';

export const ServiceHeader = ({
  location: { pathname },
  art,
  photo,
  engineer,
  dev,
  isSideBarActive,
}) => {
  return (
    <LeftServiceContainer
      className='left-service-container'
      $issidebaractive={isSideBarActive}
    >
      <DirectoryService>
        <DirectoryServiceTextEng
          className='directory-service-header'
          to={engineer.routeName}
          $matchpath={!!pathname.match(RegExp(`${engineer.routeName}$`))}
        >
          chemical
          <br />
          engineer
        </DirectoryServiceTextEng>
        <DirectoryServiceTextFsd
          className='directory-service-header'
          to={dev.routeName}
          $matchpath={!!pathname.match(RegExp(`${dev.routeName}$`))}
        >
          full
          <br />
          stack
          <br />
          developer
        </DirectoryServiceTextFsd>
        <DirectoryServiceTextGd
          className='directory-service-header'
          to={art.routeName}
          $matchpath={!!pathname.match(RegExp(`${art.routeName}$`))}
        >
          graphic
          <br />
          designer
        </DirectoryServiceTextGd>
        <DirectoryServiceTextPg
          className='directory-service-header'
          to={photo.routeName}
          $matchpath={!!pathname.match(RegExp(`${photo.routeName}$`))}
        >
          photo
          <br />
          grapher
        </DirectoryServiceTextPg>
      </DirectoryService>
    </LeftServiceContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  art: selectArtService,
  photo: selectPhotoService,
  engineer: selectEngineerService,
  dev: selectDevService,
  isSideBarActive: selectIsSideBarActive,
});

export default withRouter(connect(mapStateToProps)(ServiceHeader));
