import React, { useEffect, useState } from 'react';
import { getRandomColor } from '../../../../utils/about.component.utils';
import {
  AboutPersonalityBox,
  AboutPersonalityContainer,
  AboutPersonalityTextBox,
  AboutPersonalityTitle,
} from './about-education-personality.styles';

export const AboutEducationPersonality = ({ personality }) => {
  const [backgroundColor, setBackgroundColor] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
  });
  const [color, setColor] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      getRandomBackgroundColor();
    }, 400);

    return () => clearInterval(timerId);
  });

  const getRandomBackgroundColor = () => {
    const h_range = [0, 360];
    const s_range = [30, 40];
    const l_range = [25, 25];
    const a_range = [1, 1];
    const color = getRandomColor(h_range, s_range, l_range, a_range);

    const h_range_background_color = [0, 360];
    const s_range_background_color = [80, 90];
    const l_range_background_color = [60, 75];
    const a_range_background_color = [1, 1];

    const backgroundColor = getRandomColor(
      h_range_background_color,
      s_range_background_color,
      l_range_background_color,
      a_range_background_color
    );
    setBackgroundColor({
      1: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      2: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      3: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      4: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      5: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      6: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      7: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      8: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      9: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      10: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      11: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      12: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      13: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      14: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      15: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });
    setBackgroundColor({
      16: `hsla(${backgroundColor.h + Math.random() * backgroundColor.h}, ${
        backgroundColor.s
      }%, ${backgroundColor.l + Math.random() * backgroundColor.l}%, ${
        backgroundColor.a
      })`,
    });

    setColor({
      1: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      2: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      3: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      4: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      5: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      6: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      7: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      8: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      9: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      10: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      11: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      12: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      13: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      14: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      15: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
    setColor({
      16: `hsla(${color.h + Math.random() * color.h}, ${color.s}%, ${
        color.l + Math.random() * color.l
      }%, ${color.a})`,
    });
  };

  return (
    <AboutPersonalityContainer className='about-personality-content'>
      <AboutPersonalityTitle>Personality</AboutPersonalityTitle>
      {personality.map(({ id }, i) => {
        return (
          <AboutPersonalityBox
            className='about-personality-box'
            key={id}
            style={{
              color: `${color[i + 1]}`,
              backgroundColor: `${backgroundColor[i + 1]}`,
            }}
          >
            <AboutPersonalityTextBox>
              {personality[i].description}
            </AboutPersonalityTextBox>
          </AboutPersonalityBox>
        );
      })}
    </AboutPersonalityContainer>
  );
};

export default AboutEducationPersonality;
