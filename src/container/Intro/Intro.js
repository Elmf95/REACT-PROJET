import React, { useEffect, useRef } from 'react';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = useRef(null);

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    React.createElement('div', { className: 'app__video' },
      React.createElement('video', {
        ref: vidRef,
        src: meal,
        type: 'video/mp4',
        loop: true,
        controls: false,
        muted: true
      })
    )
  );
};

export default Intro;