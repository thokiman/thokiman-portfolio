import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { createStructuredSelector } from 'reselect';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  loadWebsiteItemsSlider,
  loadWebsiteItemsSliderFinished,
} from '../../../../redux/collection/collection.actions';
import {
  selectIsLoadingWebsiteItemsSlider,
  selectWebsiteItemsSlider,
} from '../../../../redux/collection/collection.selectors';
import {
  ArrowContainer,
  DotsContainer,
  NextArrow,
  PortfolioItemsSliderImage,
  PortfolioItemsSliderImageContainer,
  PortfolioLoadingState,
  PrevArrow,
  SingleDotImage,
  WrapperDots,
  WrapperSingleDot,
} from './portfolio-items-slider.styles';

export const PortfolioItemsSlider = ({
  items,
  itemsSlider,
  isLoading,
  loadItems,
  loadItemsFinished,
}) => {
  useEffect(() => {
    loadItems(items);
    if (itemsSlider.length !== 0) {
      loadItemsFinished();
    }
  }, [items]);

  const Arrow = ({ typeArrow, onClick }) => {
    return (
      <ArrowContainer
        className={`${typeArrow === 'next' ? 'nextArrow' : 'prevArrow'} arrow`}
        onClick={onClick}
      >
        {typeArrow === 'next' ? <NextArrow /> : <PrevArrow />}
      </ArrowContainer>
    );
  };

  if (isLoading && itemsSlider.length === 0) {
    return (
      <PortfolioLoadingState
        type='Puff'
        color='#e3e1e4'
        height={100}
        width={100}
        visible={isLoading}
      />
    );
  } else {
  }
  const customPaging = (indexAtSingleDot) => {
    return (
      <WrapperSingleDot>
        <SingleDotImage
          src={itemsSlider[indexAtSingleDot].iconPath}
          alt={itemsSlider[indexAtSingleDot].field}
        />
      </WrapperSingleDot>
    );
  };

  const appendDots = (dotsFromCustomPaging) => {
    return (
      <WrapperDots>
        <DotsContainer>{dotsFromCustomPaging}</DotsContainer>
      </WrapperDots>
    );
  };

  const settings = {
    nextArrow: <Arrow typeArrow='next' />,
    prevArrow: <Arrow typeArrow='prev' />,
    customPaging: customPaging,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDots,
  };
  return (
    <Slider {...settings}>
      {items.map(({ id, field, iconPath }) => {
        return (
          <PortfolioItemsSliderImageContainer key={id}>
            <PortfolioItemsSliderImage src={iconPath} alt={field} />
          </PortfolioItemsSliderImageContainer>
        );
      })}
    </Slider>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingWebsiteItemsSlider,
  itemsSlider: selectWebsiteItemsSlider,
});

const mapDispatchToProps = (dispatch) => ({
  loadItems: (items) => dispatch(loadWebsiteItemsSlider(items)),
  loadItemsFinished: () => dispatch(loadWebsiteItemsSliderFinished()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioItemsSlider);
