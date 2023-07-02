'use client';

import { motion as m } from 'framer-motion';

interface LoadingScreenProps {
  hasMounted: boolean;
}

export const LoadingScreen = ({ hasMounted }: LoadingScreenProps) => {
  return (
    <div
      aria-label="loading-screen"
      className="flex justify-center items-center text-white min-h-screen w-full bg-neutral-900"
    >
      <m.h1
        animate={{
          opacity: 0,
        }}
        initial={{
          opacity: 1,
        }}
        transition={{ duration: 2 }}
        className="uppercase text-[9vh] md:text-8xl font-extrabold"
      >
        mendoza
      </m.h1>
    </div>
  );
};

export default LoadingScreen;
