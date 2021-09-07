import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as CloudComputingOne, ReactComponent as CloudComputingTwo } from '../../../../assets/collections-icon/profile-icon/cloud-computing.svg';
import { ReactComponent as Computer } from '../../../../assets/collections-icon/profile-icon/computer.svg';
import { ReactComponent as DslrCamera } from '../../../../assets/collections-icon/profile-icon/dslr-camera.svg';
import { ReactComponent as EnergyFive, ReactComponent as EnergyFour, ReactComponent as EnergyOne, ReactComponent as EnergyThree, ReactComponent as EnergyTwo } from '../../../../assets/collections-icon/profile-icon/energy.svg';
import { ReactComponent as LightBulb } from '../../../../assets/collections-icon/profile-icon/light-bulb.svg';
import { ReactComponent as MusicSingleSoundWaveLineOne, ReactComponent as MusicSingleSoundWaveLineTwo } from '../../../../assets/collections-icon/profile-icon/music-sound-single-wave-line.svg';
import { ReactComponent as MusicSoundWaveLineOne, ReactComponent as MusicSoundWaveLineTwo } from '../../../../assets/collections-icon/profile-icon/music-sound-wave-line.svg';
import { ReactComponent as PaintPallete } from '../../../../assets/collections-icon/profile-icon/paint-palette.svg';
import { ReactComponent as PenTablet } from '../../../../assets/collections-icon/profile-icon/pen-tablet.svg';
import { ReactComponent as SeaWaves } from '../../../../assets/collections-icon/profile-icon/sea-waves.svg';
import { ReactComponent as SettingsOne, ReactComponent as SettingsTwo } from '../../../../assets/collections-icon/profile-icon/settings.svg';
import { ReactComponent as Shakespeare } from '../../../../assets/collections-icon/profile-icon/shakespeare.svg';
import { ReactComponent as Skateboarding } from '../../../../assets/collections-icon/profile-icon/skateboarding.svg';
import { ReactComponent as Skull } from '../../../../assets/collections-icon/profile-icon/skull.svg';
import { ReactComponent as Sunset } from '../../../../assets/collections-icon/profile-icon/sunset.svg';
import { ReactComponent as Surf } from '../../../../assets/collections-icon/profile-icon/surf.svg';
import { ReactComponent as Surfing } from '../../../../assets/collections-icon/profile-icon/surfing.svg';
import { ReactComponent as Tools } from '../../../../assets/collections-icon/profile-icon/tools.svg';
import { ReactComponent as ZigzagLinesInSideViewPosition } from '../../../../assets/collections-icon/profile-icon/zigzag-lines-in-side-view-position.svg';
import { ReactComponent as ZigzagMoustacheFive, ReactComponent as ZigzagMoustacheFour, ReactComponent as ZigzagMoustacheOne, ReactComponent as ZigzagMoustacheThree, ReactComponent as ZigzagMoustacheTwo } from '../../../../assets/collections-icon/profile-icon/zigzag-moustache.svg';

const lightBlueColor = '#7ED6E0';
const greenBlueColor = '#18D3AF';
const yellowColor = '#ffee58';
const whiteSmokeColor = '#E3E1E4'
const transformStrokeSvg = keyframes`
                             to {
                               
                                 stroke-dashoffset: 0%;
                             }
`;



export const HomepageCartoonContainer = styled.div`
  width: max-content;
  height: max-content;
`;

const HomepageIconStyles = css`
  position: absolute;
  @media only screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
`;

export const HomepageCloudComputingOne = styled(CloudComputingOne)`
  ${HomepageIconStyles}
   width: 7vw;
  height: 10vh;
  top: 295px;
  left: 165px;
  
  .cloud-computing {
    stroke: ${lightBlueColor};
    stroke-width: 7px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageCloudComputingTwo = styled(CloudComputingTwo)`
  ${HomepageIconStyles}
   width: 7vw;
  height: 10vh;
  top: 315px;
  left: 55px;
  
  .cloud-computing {
    stroke: ${lightBlueColor};
    stroke-width: 7px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageComputer = styled(Computer)`
  ${HomepageIconStyles}
   width: 15vw;
  height: 21vh;
  top: 390px;
  left: 30px;
  
  .computer {
    stroke: ${greenBlueColor};
    stroke-width: 2.5px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageDslrCamera = styled(DslrCamera)`
  ${HomepageIconStyles}
  top: 470px;
  right: 176px;
  width: 10vw;
  height: 13vh;
  
  .dslr-camera {
    stroke: ${greenBlueColor};
    stroke-width: 7px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;


export const HomepagePenTablet = styled(PenTablet)`
  ${HomepageIconStyles}
  top: 425px;
  right: -30px;
  width: 15vw;
  height: 18vh;
  
  .pen-tablet {
    stroke: ${greenBlueColor};
    stroke-width: 7px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepagePaintPallete = styled(PaintPallete)`
  ${HomepageIconStyles}
  top: 300px;
  right: 110px;
  width : 14vw;
  height: 16vh;
  
  .paint-pallete {
    stroke: ${lightBlueColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;

export const HomepageEnergyOne = styled(EnergyOne)`

  ${HomepageIconStyles}
  top: 380px;
  left: 260px;
  width: 6vw;
  height: 8vh;
  rotate: -85deg;
  .energy {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;

export const HomepageEnergyTwo = styled(EnergyTwo)`
  
  ${HomepageIconStyles}
  top: 320px;
  left: 280px;
  width: 4.5vw;
  height: 7vh;
  rotate: -80deg;
  .energy {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;


export const HomepageEnergyThree = styled(EnergyThree)`

  ${HomepageIconStyles}
  top: 255px;
  left: 300px;
    width: 6vw;
  height: 8vh;
  rotate: -55deg;
  .energy {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageEnergyFour = styled(EnergyFour)`

  ${HomepageIconStyles}
  top: 300px;
  right: 320px;
    width: 6vw;
  height: 9vh;
  rotate: 25deg;
  .energy {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageEnergyFive = styled(EnergyFive)`

  ${HomepageIconStyles}
  top: 390px;
  right: 310px;
  width: 6vw;
  height: 8vh;
  rotate: 55deg;
  .energy {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageLightBulb = styled(LightBulb)`
  ${HomepageIconStyles}
  top: 200px;
  left: 370px;
  width: 9vw;
  height: 12vh;
  rotate: 10deg;
  .light-bulb {
    stroke: ${lightBlueColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;


export const HomepageTools = styled(Tools)`
  ${HomepageIconStyles}
  top: 210px;
  left: 40px;
  width: 10vw;
  height: 10vh;
  
  .tools {
    stroke: ${greenBlueColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;

export const HomepageSettingsOne = styled(SettingsOne)`
  ${ HomepageIconStyles }
  top: 125px;
  left: 130px;
   width: 5vw;
  height: 9vh;
  transform : scaleY(-1) rotate(30deg);
  .settings {
    stroke: ${lightBlueColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageSettingsTwo = styled(SettingsTwo)`
  ${ HomepageIconStyles }
  top: 125px;
  left: 50px;
   width: 6vw;
  height: 7vh;
  transform: rotate(-30deg);
  .settings {
    stroke: ${lightBlueColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;


export const HomepageMusicSoundWaveLineOne = styled(MusicSoundWaveLineOne)`
  ${HomepageIconStyles}
  top: 90px;
  left: 65px;
  width: 25vw;
  height: 20vh;
  
  .music {
    stroke: ${whiteSmokeColor};
    stroke-width: 5px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageMusicSoundWaveLineTwo = styled(MusicSoundWaveLineTwo)`
  ${HomepageIconStyles}
  top: 100px;
  right: 45px;
  width: 25vw;
  height: 20vh;
  
  .music {
    stroke: ${whiteSmokeColor};
    stroke-width: 5px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;


export const HomepageMusicSingleSoundWaveLineOne = styled(MusicSingleSoundWaveLineOne)`
  ${HomepageIconStyles}
  top: 440px;
  left: 280px;
  width: 2vw;
  height:2vw;
  transform : rotate(-20deg);
  .music {
    stroke: ${whiteSmokeColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageMusicSingleSoundWaveLineTwo = styled(MusicSingleSoundWaveLineTwo)`
  ${HomepageIconStyles}
  top: 415px;
  right: 300px;
  width: 3vw;
  height:5vw;
  transform: rotate(-45deg);
  .music {
    stroke: ${whiteSmokeColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageSeaWaves = styled(SeaWaves)`
  ${HomepageIconStyles}
  top: 5px;
  right: 0px;
  width: 11vw;
  height: 15vh;
  .sea-waves {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;

export const HomepageShakespeare = styled(Shakespeare)`
  ${HomepageIconStyles}
  top: 100px;
  right: 0px;
  width: 7vw;
  height: 25vh;
  translate: rotate(90deg);
  .shakespeare {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageSkateboarding = styled(Skateboarding)`
  ${HomepageIconStyles}
  top: 30px;
  right: 160px;
  width: 8vw;
  height: 10vh;
  .skateboarding {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageSkull = styled(Skull)`
  ${HomepageIconStyles}
  top: 55px;
  left: 400px;
  width: 6vw;
  height: 15vh;
  transform: rotate(-5deg);
  .skull {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageSunset = styled(Sunset)`
  ${HomepageIconStyles}
  top: 40px;
  left: 140px;
  width: 6vw;
  height: 8vh;
  .sunset {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageSurf = styled(Surf)`
  ${HomepageIconStyles}
  top: 170px;
  right: 80px;
  width: 8vw;
  height: 12vh;
  transform: rotate(-43deg);
  .surf {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;
export const HomepageSurfing = styled(Surfing)`
  ${HomepageIconStyles}
  top: 300px;
  right: 0px;
  width: 10vw;
  height: 12vh;
  transform: scaleX(-1);
  .surfing {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;

export const HomepageZigzagLinesInSideViewPosition = styled(ZigzagLinesInSideViewPosition)`
  ${HomepageIconStyles}
  top: 40px;
  left: 80px;
  width: 4vw;
  height: 8vh;
  
  .zigzag-lines-inside {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }
`;

export const HomepageZigzagMoustacheOne = styled(ZigzagMoustacheOne)`
  ${HomepageIconStyles}
  top: 15px;
  left: 235px;
  width: 8vw;
  height: 10vh;
  
  .zigzag-moustache {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }`;
export const HomepageZigzagMoustacheTwo = styled(ZigzagMoustacheTwo)`
  ${HomepageIconStyles}
  top: 80px;
  left: 310px;
  width: 4vw;
  height: 5vh;
  
  .zigzag-moustache {
    stroke: ${whiteSmokeColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }`;
export const HomepageZigzagMoustacheThree = styled(ZigzagMoustacheThree)`
  ${HomepageIconStyles}
  top: 15px;
  right: 280px;
  width: 6vw;
  height: 8vh;
  transform: scaleY(-1);
  .zigzag-moustache {
    stroke: ${yellowColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }`;
export const HomepageZigzagMoustacheFour = styled(ZigzagMoustacheFour)`
  ${HomepageIconStyles}
  top: 65px;
  right: 310px;
  width: 4vw;
  height: 4vh;
  transform: scaleY(-1);
  .zigzag-moustache {
    stroke: ${whiteSmokeColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }`;
export const HomepageZigzagMoustacheFive = styled(ZigzagMoustacheFive)`
  ${HomepageIconStyles}
  top: 30px;
  right: 420px;
  width: 4vw;
  height: 4vh;
  transform: scaleY(-1);
  .zigzag-moustache {
    stroke: ${whiteSmokeColor};
    stroke-width: 9px;
    stroke-miterlimit: 10;
    stroke-dasharray: 150;
    stroke-dashoffset: 100%;
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite;
  }`;
