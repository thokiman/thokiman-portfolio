import gsap from 'gsap/all';
import React, { memo, useCallback, useState } from 'react';
import {
  HomepageCartoonContainer,
  HomepageCloudComputingOne,
  HomepageCloudComputingTwo,
  HomepageComputer,
  HomepageDslrCamera,
  HomepageEnergyFive,
  HomepageEnergyFour,
  HomepageEnergyOne,
  HomepageEnergyThree,
  HomepageEnergyTwo,
  HomepageLightBulb,
  HomepageMusicSingleSoundWaveLineOne,
  HomepageMusicSingleSoundWaveLineTwo,
  HomepageMusicSoundWaveLineOne,
  HomepageMusicSoundWaveLineTwo,
  HomepagePaintPallete,
  HomepagePenTablet,
  HomepageSeaWaves,
  HomepageSettingsOne,
  HomepageSettingsTwo,
  HomepageShakespeare,
  HomepageSkateboarding,
  HomepageSkull,
  HomepageSunset,
  HomepageSurf,
  HomepageSurfing,
  HomepageTools,
  HomepageZigzagLinesInSideViewPosition,
  HomepageZigzagMoustacheFive,
  HomepageZigzagMoustacheFour,
  HomepageZigzagMoustacheOne,
  HomepageZigzagMoustacheThree,
  HomepageZigzagMoustacheTwo,
} from './homepage-profile-image-cartoon.styles';
import CartoonGsap from './homepage-profile-image-cartoon.utils.transition';

export const HompageProfileImageCartoon = () => {
  const [timeline, setTimeline] = useState(() => gsap.timeline());
  const addAnimation = useCallback(
    (animation, index) => {
      timeline.add(animation, index * 0.6);
    },
    [timeline]
  );

  return (
    <HomepageCartoonContainer>
      <CartoonGsap
        addAnimation={addAnimation}
        index={21}
        yPosition={-140}
        xPosition={0}
      >
        <HomepageZigzagLinesInSideViewPosition />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={30}
        yPosition={-370}
        xPosition={0}
      >
        <HomepageSunset />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={29}
        yPosition={-265}
        xPosition={5}
      >
        <HomepageZigzagMoustacheOne />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={28}
        yPosition={-260}
        xPosition={30}
      >
        <HomepageZigzagMoustacheTwo />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={27}
        yPosition={-480}
        xPosition={-40}
      >
        <HomepageZigzagMoustacheFour />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={26}
        yPosition={-635}
        xPosition={-60}
      >
        <HomepageZigzagMoustacheFive />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={25}
        yPosition={-100}
        xPosition={0}
      >
        <HomepageZigzagMoustacheThree />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={24}
        yPosition={-50}
        xPosition={0}
      >
        <HomepageSkateboarding />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={23}
        yPosition={-425}
        xPosition={15}
      >
        <HomepageSettingsOne />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={22}
        yPosition={-430}
        xPosition={10}
      >
        <HomepageSettingsTwo />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={31}
        yPosition={-100}
        xPosition={0}
      >
        <HomepageMusicSoundWaveLineOne />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={10}
        yPosition={-210}
        xPosition={-5}
      >
        <HomepageSkull />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={19}
        yPosition={-330}
        xPosition={-60}
      >
        <HomepageMusicSoundWaveLineTwo />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={18}
        yPosition={-640}
        xPosition={-515}
      >
        <HomepageSurf />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={17}
        yPosition={-245}
        xPosition={5}
      >
        <HomepageTools />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={16}
        yPosition={-735}
        xPosition={-95}
      >
        <HomepageEnergyThree />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={15}
        yPosition={-600}
        xPosition={-365}
      >
        <HomepageLightBulb />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={14}
        yPosition={-625}
        xPosition={-100}
      >
        <HomepageEnergyFour />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={13}
        yPosition={-830}
        xPosition={-368}
      >
        <HomepageShakespeare />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={12}
        yPosition={-25}
        xPosition={-5}
      >
        <HomepageSeaWaves />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={11}
        yPosition={-905}
        xPosition={-610}
      >
        <HomepagePaintPallete />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={20}
        yPosition={-428}
        xPosition={-5}
      >
        <HomepageSurfing />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={9}
        yPosition={-1015}
        xPosition={5}
      >
        <HomepageCloudComputingOne />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={8}
        yPosition={-1005}
        xPosition={8}
      >
        <HomepageCloudComputingTwo />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={7}
        yPosition={-1165}
        xPosition={110}
      >
        <HomepageEnergyTwo />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={6}
        yPosition={-550}
        xPosition={445}
      >
        <HomepageEnergyOne />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={5}
        yPosition={-1290}
        xPosition={0}
      >
        <HomepageComputer />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={4}
        yPosition={-1070}
        xPosition={150}
      >
        <HomepageMusicSingleSoundWaveLineOne />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={3}
        yPosition={-650}
        xPosition={-15}
      >
        <HomepageMusicSingleSoundWaveLineTwo />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={2}
        yPosition={-430}
        xPosition={-370}
      >
        <HomepageEnergyFive />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={1}
        yPosition={-1325}
        xPosition={-450}
      >
        <HomepageDslrCamera />
      </CartoonGsap>
      <CartoonGsap
        addAnimation={addAnimation}
        index={0}
        yPosition={-1400}
        xPosition={-440}
      >
        <HomepagePenTablet />
      </CartoonGsap>
    </HomepageCartoonContainer>
  );
};

export default memo(HompageProfileImageCartoon);
