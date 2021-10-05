import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SpinnerLoading from '../../../../components/commons/spinner-loading/spinner-loading.component.jsx';
import {
  ArrowContainer,
  DotsContainer,
  NextArrow,
  PortfolioItemsSliderImage,
  PortfolioItemsSliderImageContainer,
  PrevArrow,
  SingleDotImage,
  WrapperDots,
  WrapperSingleDot,
} from './portfolio-items-slider.styles';

export const PortfolioItemsSlider = ({
  items,

  isLoading,
  loadItems,
  loadItemsFinished,
}) => {
  const [itemsSlider, setItemsSlider] = useState([]);

  useEffect(() => {
    setItemsSlider([...items]);
  }, []);

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
  if (isLoading && itemsSlider.length === 0) {
    return <SpinnerLoading />;
  } else {
    return (
      <Slider {...settings}>
        {itemsSlider.map(({ id, field, iconPath }) => {
          return (
            <PortfolioItemsSliderImageContainer key={id}>
              <PortfolioItemsSliderImage src={iconPath} alt={field} />
            </PortfolioItemsSliderImageContainer>
          );
        })}
      </Slider>
    );
  }
};

export default PortfolioItemsSlider;
