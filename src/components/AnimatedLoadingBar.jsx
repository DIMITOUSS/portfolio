import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedLoadingBar = ({ percentage }) => {
  const { width } = useSpring({
    from: { width: '0%' },
    to: { width: `${percentage}%` },
    config: { duration: 3000 },
  });

  return (
    <div style={{ height: 10, backgroundColor: 'pink' }}>
      <animated.div
        style={{
          height: '100%',
          width,
          backgroundColor: 'rgb(3 169 244)',
        }}
      />
    </div>
  );
};

export default AnimatedLoadingBar;
