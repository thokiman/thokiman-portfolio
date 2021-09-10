import styled, { css, keyframes } from 'styled-components';
import {
  ReactComponent as CloudComputingOne,
  ReactComponent as CloudComputingTwo,
} from '../../../../assets/collections-icon/profile-icon/cloud-computing.svg';
import { ReactComponent as Computer } from '../../../../assets/collections-icon/profile-icon/computer.svg';
import { ReactComponent as DslrCamera } from '../../../../assets/collections-icon/profile-icon/dslr-camera.svg';
import {
  ReactComponent as EnergyFive,
  ReactComponent as EnergyFour,
  ReactComponent as EnergyOne,
  ReactComponent as EnergyThree,
  ReactComponent as EnergyTwo,
} from '../../../../assets/collections-icon/profile-icon/energy.svg';
import { ReactComponent as LightBulb } from '../../../../assets/collections-icon/profile-icon/light-bulb.svg';
import {
  ReactComponent as MusicSingleSoundWaveLineOne,
  ReactComponent as MusicSingleSoundWaveLineTwo,
} from '../../../../assets/collections-icon/profile-icon/music-sound-single-wave-line.svg';
import {
  ReactComponent as MusicSoundWaveLineOne,
  ReactComponent as MusicSoundWaveLineTwo,
} from '../../../../assets/collections-icon/profile-icon/music-sound-wave-line.svg';
import { ReactComponent as PaintPallete } from '../../../../assets/collections-icon/profile-icon/paint-palette.svg';
import { ReactComponent as PenTablet } from '../../../../assets/collections-icon/profile-icon/pen-tablet.svg';
import { ReactComponent as SeaWaves } from '../../../../assets/collections-icon/profile-icon/sea-waves.svg';
import {
  ReactComponent as SettingsOne,
  ReactComponent as SettingsTwo,
} from '../../../../assets/collections-icon/profile-icon/settings.svg';
import { ReactComponent as Shakespeare } from '../../../../assets/collections-icon/profile-icon/shakespeare.svg';
import { ReactComponent as Skateboarding } from '../../../../assets/collections-icon/profile-icon/skateboarding.svg';
import { ReactComponent as Skull } from '../../../../assets/collections-icon/profile-icon/skull.svg';
import { ReactComponent as Sunset } from '../../../../assets/collections-icon/profile-icon/sunset.svg';
import { ReactComponent as Surf } from '../../../../assets/collections-icon/profile-icon/surf.svg';
import { ReactComponent as Surfing } from '../../../../assets/collections-icon/profile-icon/surfing.svg';
import { ReactComponent as Tools } from '../../../../assets/collections-icon/profile-icon/tools.svg';
import { ReactComponent as ZigzagLinesInSideViewPosition } from '../../../../assets/collections-icon/profile-icon/zigzag-lines-in-side-view-position.svg';
import {
  ReactComponent as ZigzagMoustacheFive,
  ReactComponent as ZigzagMoustacheFour,
  ReactComponent as ZigzagMoustacheOne,
  ReactComponent as ZigzagMoustacheThree,
  ReactComponent as ZigzagMoustacheTwo,
} from '../../../../assets/collections-icon/profile-icon/zigzag-moustache.svg';

const lightBlueColor = '#7ED6E0';
const greenBlueColor = '#18D3AF';
const yellowColor = '#ffee58';
const whiteSmokeColor = '#E3E1E4';
const maxWidthDesktop = 1675;
const maxWidthSmartphone = 800;
const transformStrokeSvg = keyframes`
                             to {
                               
                                 stroke-dashoffset: 0%;
                             }
`;

export const HomepageCartoonContainer = styled.div`
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    display: block;
    position: relative;
    width: 100%;
    height: 140vh;
    margin-top: 40px;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    margin-top: 40px;
  }

  position: absolute;
  top: 0px;
  width: max-content;
  height: max-content;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'zigzag-lines-inside sunset zigzag-moustache-one zigzag-moustache-one zigzag-moustache-five zigzag-moustache-three zigzag-moustache-three skateboarding sea-waves sea-waves sea-waves'
    'settings-one settings-two zigzag-moustache-two music-soundwave-line-one music-soundwave-line-one skull music-soundwave-line-two zigzag-moustache-four surf shakespeare shakespeare'
    'tools tools energy-three light-bulb light-bulb light-bulb energy-four paint-pallete paint-pallete surfing surfing'
    'cloud-computing-one cloud-computing-one cloud-computing-two cloud-computing-two energy-two . . energy-five surfing surfing'
    'computer computer energy-one . . energy-five dslr-camera dslr-camera pen-tablet pen-tablet pen-tablet'
    'computer computer music-single-soundwave-line-one . . music-single-soundwave-line-two dslr-camera dslr-camera pen-tablet pen-tablet pen-tablet';
`;

const HomepageIconSVG = css`
  stroke-width: 7px;
  stroke-miterlimit: 10;
  stroke-dasharray: 150;
  stroke-dashoffset: 100%;
`;

const HomepageIconStyles = css`
  position: absolute;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    width: 15vw;
    height: 18vh;
  }
`;

export const HomepageComputer = styled(Computer)`
  ${HomepageIconStyles}
  width: 13vw;
  height: 18vh;
  top: 44vh;
  left: -440px;
  grid-area: computer;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: -3vh;
    left: 2vw;
  }
  .computer {
    stroke: ${greenBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite both;
  }
`;

export const HomepageCloudComputingOne = styled(CloudComputingOne)`
  ${HomepageIconStyles}

  width: 7vw;
  height: 10vh;
  top: 345px;
  left: -435px;
  grid-area: cloud-computing-one;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: -2vh;
    left: 23vw;
  }
  .cloud-computing {
    stroke: ${lightBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.5s ease-in-out alternate-reverse infinite both;
  }
`;
export const HomepageCloudComputingTwo = styled(CloudComputingTwo)`
  ${HomepageIconStyles}

  width: 7vw;
  height: 10vh;
  top: 335px;
  left: -320px;
  grid-area: cloud-computing-two;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: -2vh;
    left: 43vw;
  }
  .cloud-computing {
    stroke: ${lightBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.7s ease-in-out alternate-reverse infinite both;
  }
`;

export const HomepageEnergyOne = styled(EnergyOne)`
  ${HomepageIconStyles}

  top: 425px;
  left: -245px;
  width: 7vw;
  height: 9vh;
  transform: rotate(-85deg);
  grid-area: energy-one;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: -2vh;
    left: 62vw;
    transform: rotate(0deg);
  }
  .energy {
    stroke: ${yellowColor};
    stroke-width: 9px;
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) alternate infinite both;
  }
`;

export const HomepageEnergyTwo = styled(EnergyTwo)`
  ${HomepageIconStyles}

  top: 340px;
  left: -220px;
  width: 8vw;
  height: 11vh;
  transform: rotate(-65deg);
  grid-area: energy-two;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: -2vh;
    left: 80vw;
    transform: rotate(0deg);
  }
  .energy {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) alternate-reverse infinite both;
  }
`;

export const HomepageTools = styled(Tools)`
  ${HomepageIconStyles}

  top: 240px;
  left: -460px;
  width: 10vw;
  height: 10vh;
  grid-area: tools;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 25vh;
    left: 2vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 14vh;
    left: 2vw;
  }
  .tools {
    stroke: ${greenBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite both;
  }
`;

export const HomepageSettingsOne = styled(SettingsOne)`
  ${HomepageIconStyles}

  top: 210px;
  left: -290px;
  width: 8vw;
  height: 11vh;
  transform: scaleY(-1) rotate(-65deg);
  grid-area: settings-one;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    transform: rotate(-30deg);
    top: 26vh;
    left: 22vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    transform: rotate(-30deg);
    top: 14vh;
    left: 22vw;
  }
  .settings {
    stroke: ${lightBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.6s ease-in-out alternate-reverse infinite both;
  }
`;

export const HomepageMusicSingleSoundWaveLineOne = styled(
  MusicSingleSoundWaveLineOne
)`
  ${HomepageIconStyles}

  top: 500px;
  left: 100px;
  width: 5vw;
  height: 6vw;
  transform: rotate(45deg);
  grid-area: music-single-soundwave-line-two;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 26vh;
    left: 43vw;
    transform: rotate(90deg);
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 14vh;
    left: 43vw;
    transform: rotate(90deg);
  }
  .music {
    stroke: ${whiteSmokeColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s cubic-bezier(0.5, 1, 0.89, 1) alternate-reverse infinite both;
  }
`;

export const HomepageEnergyThree = styled(EnergyThree)`
  ${HomepageIconStyles}

  top: 250px;
  left: -190px;
  width: 8vw;
  height: 11vh;
  transform: rotate(-60deg);
  grid-area: energy-three;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 25vh;
    left: 62vw;
    transform: rotate(0deg);
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 14vh;
    left: 62vw;
    transform: rotate(0deg);
  }
  .energy {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s cubic-bezier(0.19, 1, 0.22, 1) alternate infinite both;
  }
`;
export const HomepageEnergyFour = styled(EnergyFour)`
  ${HomepageIconStyles}

  top: 300px;
  left: 10px;
  width: 8vw;
  height: 11vh;
  transform: rotate(-150deg);
  grid-area: energy-four;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 25vh;
    left: 80vw;
    transform: rotate(0deg);
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 14vh;
    left: 80vw;
    transform: rotate(0deg);
  }
  .energy {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s cubic-bezier(0.23, 1, 0.320, 1) alternate-reverse infinite both;
  }
`;
export const HomepageEnergyFive = styled(EnergyFive)`
  ${HomepageIconStyles}

  top: 400px;
  left: 40px;
  width: 8vw;
  height: 11vh;
  transform: rotate(-120deg);
  grid-area: energy-five;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 48vh;
    left: 62vw;
    transform: rotate(0deg);
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 30vh;
    left: 62vw;
    transform: rotate(0deg);
  }
  .energy {
    stroke: ${yellowColor};
    stroke-width: 9px;
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) alternate infinite both;
  }
`;

export const HomepageLightBulb = styled(LightBulb)`
  ${HomepageIconStyles}

  top: 210px;
  left: -80px;
  width: 9vw;
  height: 12vh;
  transform: rotate(10deg);
  grid-area: light-bulb;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 48vh;
    left: 2vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 29vh;
    left: 2vw;
  }
  .light-bulb {
    stroke: ${lightBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.5s ease-in-out alternate infinite both;
  }
`;

export const HomepageSettingsTwo = styled(SettingsTwo)`
  ${HomepageIconStyles}

  top: 245px;
  left: -350px;
  width: 7vw;
  height: 8vh;
  transform: rotate(-38deg);
  grid-area: settings-two;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    transform: rotate(-30deg);
    top: 49vh;
    left: 22vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    transform: rotate(-30deg);
    top: 30vh;
    left: 22vw;
  }
  .settings {
    stroke: ${lightBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s ease-in-out alternate-reverse infinite both;
  }
`;
export const HomepageMusicSingleSoundWaveLineTwo = styled(
  MusicSingleSoundWaveLineTwo
)`
  ${HomepageIconStyles}

  top: 500px;
  left: -230px;
  width: 4vw;
  height: 5vw;
  transform: rotate(-40deg);
  grid-area: music-single-soundwave-line-one;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 49vh;
    left: 43vw;
    transform: rotate(90deg);
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    transform: rotate(90deg);
    top: 30vh;
    left: 43vw;
  }
  .music {
    stroke: ${whiteSmokeColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s cubic-bezier(0.5, 1, 0.89, 1) alternate infinite both;
  }
`;
export const HomepageDslrCamera = styled(DslrCamera)`
  ${HomepageIconStyles}

  top: 500px;
  left: 155px;
  width: 10vw;
  height: 11vh;
  grid-area: dslr-camera;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 50vh;
    left: 82.5vw;
    width: 13vw;
    height: 13vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 32vh;
    left: 82.5vw;
    width: 13vw;
    height: 13vh;
  }
  .dslr-camera {
    stroke: ${greenBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite both;
  }
`;

export const HomepagePenTablet = styled(PenTablet)`
  ${HomepageIconStyles}

  top: 455px;
  left: 260px;
  width: 13vw;
  height: 15vh;
  transform: rotate(90deg);
  grid-area: pen-tablet;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    transform: rotate(0deg);
    top: 76vh;
    left: 82vw;
    width: 13vw;
    height: 13vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    transform: rotate(0deg);
    top: 50vh;
    left: 82vw;
    width: 13vw;
    height: 13vh;
  }
  .pen-tablet {
    stroke: ${greenBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite both;
  }
`;
export const HomepagePaintPallete = styled(PaintPallete)`
  ${HomepageIconStyles}

  top: 340px;
  left: 125px;
  width: 14vw;
  height: 15vh;
  grid-area: paint-pallete;
  transform: rotate(45deg);
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 73vh;
    left: 62vw;
    width: 15vw;
    height: 18vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 48vh;
    left: 62vw;
    width: 15vw;
    height: 18vh;
  }
  .paint-pallete {
    stroke: ${lightBlueColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.5s ease-in-out alternate-reverse infinite both;
  }
`;
export const HomepageShakespeare = styled(Shakespeare)`
  ${HomepageIconStyles}

  top: 120px;
  left: 125px;
  width: 12vw;
  height: 26vh;
  translate: rotate(45deg);
  grid-area: shakespeare;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 74vh;
    left: 42vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 48vh;
    left: 42vw;
  }
  .shakespeare {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1) alternate infinite both;
  }
`;

export const HomepageSurf = styled(Surf)`
  ${HomepageIconStyles}

  top: 210px;
  left: 220px;
  width: 18vw;
  height: 20vh;
  transform: rotate(-44deg);
  grid-area: surf;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 75vh;
    left: 24vw;
    width: 15vw;
    height: 15vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 50vh;
    left: 24vw;
    width: 15vw;
    height: 15vh;
  }
  .surf {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.6s cubic-bezier(0.33, 1, 0.68, 1) alternate-reverse infinite both;
  }
`;

export const HomepageSkateboarding = styled(Skateboarding)`
  ${HomepageIconStyles}

  top: 25px;
  left: 275px;
  width: 11vw;
  height: 13vh;
  transform: rotate(0) scaleX(-1);
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 72vh;
    left: 4vw;
    width: 17vw;
    height: 19vh;
    transform: rotate(0deg) scaleX(1);
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 47vh;
    left: 4vw;
    width: 17vw;
    height: 19vh;
    transform: rotate(0deg) scaleX(1);
  }

  grid-area: skateboarding;

  .skateboarding {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.5s 	cubic-bezier(0.61, 1, 0.88, 1) alternate infinite both;
  }
`;

export const HomepageSkull = styled(Skull)`
  ${HomepageIconStyles}
  top: 120px;
  left: -165px;
  width: 6vw;
  height: 15vh;
  grid-area: skull;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 96vh;
    left: 42vw;
    transform: rotate(0deg);
  }

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 66vh;
    left: 42vw;
    transform: rotate(0deg);
  }
  .skull {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.5s cubic-bezier(0.61, 1, 0.88, 1) alternate-reverse infinite both;
  }
`;
export const HomepageSunset = styled(Sunset)`
  ${HomepageIconStyles}

  top: 125px;
  left: -430px;
  width: 8vw;
  height: 11vh;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 96vh;
    left: 4vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 66vh;
    left: 4vw;
  }

  grid-area: sunset;

  .sunset {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite both;
  }
`;

export const HomepageSurfing = styled(Surfing)`
  ${HomepageIconStyles}

  top: 67px;
  left: -325px;
  width: 10vw;
  height: 12vh;
  transform: scaleX(-1);
  grid-area: surfing;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 96vh;
    left: 23vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 66vh;
    left: 23vw;
  }
  .surfing {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.6s cubic-bezier(0.65, 0, 0.35, 1) alternate infinite both;
  }
`;

export const HomepageSeaWaves = styled(SeaWaves)`
  ${HomepageIconStyles}

  top: -15px;
  left: 120px;
  width: 11vw;
  height: 15vh;
  grid-area: sea-waves;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 96vh;
    left: 62vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 66vh;
    left: 62vw;
  }
  .sea-waves {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 2s ease-in-out alternate-reverse infinite both;
  }
`;
export const HomepageMusicSoundWaveLineOne = styled(MusicSoundWaveLineOne)`
  ${HomepageIconStyles}

  top: 15px;
  left: -140px;
  width: 20vw;
  height: 19vh;
  grid-area: music-soundwave-line-one;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 96vh;
    left: 82vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 66vh;
    left: 82vw;
  }
  .music {
    stroke: ${whiteSmokeColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s ease-in-out alternate-reverse infinite both;
  }
`;
export const HomepageMusicSoundWaveLineTwo = styled(MusicSoundWaveLineTwo)`
  ${HomepageIconStyles}

  top: 200px;
  left: 25px;
  width: 9vw;
  height: 9vh;
  grid-area: music-soundwave-line-two;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 118vh;
    left: 82vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 85vh;
    left: 82vw;
  }
  .music {
    stroke: ${whiteSmokeColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.4s ease-in-out alternate infinite both;
  }
`;
export const HomepageZigzagLinesInSideViewPosition = styled(
  ZigzagLinesInSideViewPosition
)`
  ${HomepageIconStyles}

  top: 15px;
  left: -430px;
  width: 8vw;
  height: 10vh;

  grid-area: zigzag-lines-inside;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 118vh;
    left: 62vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 85vh;
    left: 62vw;
  }
  .zigzag-lines-inside {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite both;
  }
`;

export const HomepageZigzagMoustacheOne = styled(ZigzagMoustacheOne)`
  ${HomepageIconStyles}

  top: 60px;
  left: -150px;
  width: 6vw;
  height: 8vh;

  grid-area: zigzag-moustache-one;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 118vh;
    left: 42vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 85vh;
    left: 42vw;
  }
  .zigzag-moustache {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.5s ease-in-out alternate-reverse infinite both;
  }
`;
export const HomepageZigzagMoustacheTwo = styled(ZigzagMoustacheTwo)`
  ${HomepageIconStyles}

  top: 30px;
  left: -200px;
  width: 7vw;
  height: 5vh;
  grid-area: zigzag-moustache-two;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 118vh;
    left: 23vw;
    transform: scaleY(-1);
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 85vh;
    left: 23vw;
    transform: scaleY(-1);
  }
  .zigzag-moustache {
    stroke: ${whiteSmokeColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.6s ease-in-out alternate infinite both;
  }
`;
export const HomepageZigzagMoustacheThree = styled(ZigzagMoustacheThree)`
  ${HomepageIconStyles}

  top: 5px;
  left: -285px;
  width: 5vw;
  height: 6vh;
  transform: scaleY(-1);

  grid-area: zigzag-moustache-three;

  @media only screen and (max-width: ${maxWidthDesktop}px) {
    top: 118vh;
    left: 4vw;
    transform: scaleY(1);
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: 85vh;
    left: 4vw;
    transform: scaleY(1);
  }
  .zigzag-moustache {
    stroke: ${yellowColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 1s ease-in-out alternate-reverse infinite both;
  }
`;
export const HomepageZigzagMoustacheFour = styled(ZigzagMoustacheFour)`
  ${HomepageIconStyles}

  top: 480px;
  left: 135px;
  width: 4vw;
  height: 4vh;
  transform: scaleY(-1);
  grid-area: zigzag-moustache-four;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    display: none;
  }
  .zigzag-moustache {
    stroke: ${whiteSmokeColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.5s ease-in-out alternate infinite both;
  }
`;
export const HomepageZigzagMoustacheFive = styled(ZigzagMoustacheFive)`
  ${HomepageIconStyles}

  top: 165px;
  left: 90px;
  width: 3vw;
  height: 3vh;
  transform: scaleY(-1);
  grid-area: zigzag-moustache-five;
  @media only screen and (max-width: ${maxWidthDesktop}px) {
    display: none;
  }
  .zigzag-moustache {
    stroke: ${whiteSmokeColor};
    ${HomepageIconSVG}
    animation: ${transformStrokeSvg} 0.6s ease-in-out alternate-reverse infinite both;
  }
`;

HomepageCartoonContainer.displayName = 'HomepageCartoonContainer';
HomepageCartoonContainer.displayName = 'HomepageCartoonContainer';
HomepageCloudComputingOne.displayName = 'HomepageCloudComputingOne';
HomepageCloudComputingTwo.displayName = 'HomepageCloudComputingTwo';
HomepageComputer.displayName = 'HomepageComputer';
HomepageDslrCamera.displayName = 'HomepageDslrCamera';
HomepageEnergyFive.displayName = 'HomepageEnergyFive';
HomepageEnergyFour.displayName = 'HomepageEnergyFour';
HomepageEnergyOne.displayName = 'HomepageEnergyOne';
HomepageEnergyThree.displayName = 'HomepageEnergyThree';
HomepageEnergyTwo.displayName = 'HomepageEnergyTwo';
HomepageLightBulb.displayName = 'HomepageLightBulb';
HomepageMusicSingleSoundWaveLineOne.displayName =
  'HomepageMusicSingleSoundWaveLineOne';
HomepageMusicSingleSoundWaveLineTwo.displayName =
  'HomepageMusicSingleSoundWaveLineTwo';
HomepageMusicSoundWaveLineOne.displayName = 'HomepageMusicSoundWaveLineOne';
HomepageMusicSoundWaveLineTwo.displayName = 'HomepageMusicSoundWaveLineTwo';
HomepagePaintPallete.displayName = 'HomepagePaintPallete';
HomepagePenTablet.displayName = 'HomepagePenTablet';
HomepageSeaWaves.displayName = 'HomepageSeaWaves';
HomepageSettingsOne.displayName = 'HomepageSettingsOne';
HomepageSettingsTwo.displayName = 'HomepageSettingsTwo';
HomepageShakespeare.displayName = 'HomepageShakespeare';
HomepageSkateboarding.displayName = 'HomepageSkateboarding';
HomepageSkull.displayName = 'HomepageSkull';
HomepageSunset.displayName = 'HomepageSunset';
HomepageSurf.displayName = 'HomepageSurf';
HomepageSurfing.displayName = 'HomepageSurfing';
HomepageTools.displayName = 'HomepageTools';
HomepageZigzagLinesInSideViewPosition.displayName =
  'HomepageZigzagLinesInSideViewPosition';
HomepageZigzagMoustacheFive.displayName = 'HomepageZigzagMoustacheFive';
HomepageZigzagMoustacheFour.displayName = 'HomepageZigzagMoustacheFour';
HomepageZigzagMoustacheOne.displayName = 'HomepageZigzagMoustacheOne';
HomepageZigzagMoustacheThree.displayName = 'HomepageZigzagMoustacheThree';
HomepageZigzagMoustacheTwo.displayName = 'HomepageZigzagMoustacheTwo';
