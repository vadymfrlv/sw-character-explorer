import { motion } from 'framer-motion';

import { useWindowSize } from 'hooks/useWindowSize';

import SWLogo from '../../assets/images/svg/sw-logo.svg';

import { LoaderWrapper } from './LoadingScreen.styled';

export const LoadingScreen = () => {
  const [width] = useWindowSize();

  const getAnimateValues = (width: number) => {
    if (width <= 480) {
      return { opacity: 1, y: -133, scale: 0.2 };
    } else if (width <= 768) {
      return { opacity: 1, y: -133, scale: 0.2 };
    } else if (width <= 1440) {
      return { opacity: 1, y: -133, scale: 0.2 };
    } else {
      return { opacity: 1, y: -133, scale: 0.2 };
    }
  };

  const animateValues = getAnimateValues(width);

  return (
    <LoaderWrapper>
      <motion.div
        initial={{ opacity: 0, y: '100vh', scale: 1 }}
        animate={animateValues}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 2 }}
      >
        <SWLogo style={{ width: '1300px' }} />
      </motion.div>
    </LoaderWrapper>
  );
};
