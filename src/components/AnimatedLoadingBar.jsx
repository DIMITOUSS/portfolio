import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedLoadingBar = ({ percentage }) => {
  const { width } = useSpring({
    from: { width: '0%' },
    to: { width: `${percentage}%` },
    config: { duration: 1000 },
  });

  return (
    <div style={{ height: 10, backgroundColor: '#ddd' }}>
      <animated.div
        style={{
          height: '100%',
          width,
          backgroundColor: '#AEB6BF',
        }}
      />
    </div>
  );
};

export default AnimatedLoadingBar;
