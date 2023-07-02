'use client';

import { motion as m } from 'framer-motion';
import Sunset from './components/Sunset';

export default function Home() {
  return (
    <m.main aria-label="coming-soon" className="overflow-hidden">
      <Sunset />
      <m.div className="text-center min-h-[75vh] md:h-screen w-full text-white">
        <m.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="text-xl md:text-3xl uppercase font-bold relative top-4 md:top-8"
        >
          mendoza
        </m.h1>
        <m.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-[10vw] lg:text-8xl capitalize font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
        >
          coming soon
        </m.p>
        <m.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1.5, delay: 2 }}
          className="text-center text-base md:text-2xl absolute bottom-4 left-0 w-full"
        >
          <p className="font-bold capitalize">contact</p>
          <p className="text-sm md:text-base">test@gmail.com</p>
        </m.div>
      </m.div>
    </m.main>
  );
}
