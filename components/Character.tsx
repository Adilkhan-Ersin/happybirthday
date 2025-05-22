// import { useScroll, useTransform, motion } from 'framer-motion';
// import React, { useRef } from 'react';
// import type { MotionValue } from 'framer-motion';

// export default function Paragraph({paragraph}: {paragraph: string}) {

//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start 0.9", "start 0.7"]
//   })

//   const words = paragraph.split(" ")
//   return (
//     <p 
//       ref={container}         
//       className="flex flex-wrap"
//     >
//     {
//       words.map( (word, i) => {
//         const start = i / words.length
//         const end = start + (1 / words.length)
//         return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
//       })
//     }
//     </p>
//   )
// }

// const Word = ({children, progress, range}: {children: string, progress: MotionValue<number>, range: number[]}) => {
//   const amount = range[1] - range[0]
//   const step = amount / children.length
//   return (
//     <span className="relative mr-[10px]">
//       {
//         children.split("").map((char, i) => {
//           const start = range[0] + (i * step);
//           const end = range[0] + ((i + 1) * step)
//           return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
//         })
//       }
//     </span>
//   )
// }

// const Char = ({children, progress, range}: {children: string, progress: MotionValue<number>, range: number[]}) => {
//   const opacity = useTransform(progress, range, [0,1])
//   return (
//     <span>
//       <span className="absolute opacity-20">{children}</span>
//       <motion.span style={{opacity: opacity}}>{children}</motion.span>
//     </span>
//   )
// }

import { useScroll, useTransform, motion, useInView, motionValue } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import type { MotionValue } from 'framer-motion';

// Helper to ensure progress is a MotionValue, defaulting to a static 0 if null
const ensureMotionValue = (progress: MotionValue<number> | null | undefined) => {
  if (progress && typeof progress.get === 'function') {
    return progress;
  }
  // If progress is not a motion value (e.g., null or undefined initially),
  // return a static motion value of 0. This can happen before useScroll initializes
  // or if we intentionally pass null.
  const staticProg = motionValue(0);
  return staticProg;
};


export default function Paragraph({ paragraph, itemIndex = 0, delaySeconds = 0.5 }: { paragraph: string, itemIndex?: number, delaySeconds?: number }) {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, amount: 0.1 }); // Trigger once when 10% is visible
  const [isDelayOver, setIsDelayOver] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsDelayOver(true);
      }, itemIndex * delaySeconds * 1000); // delay in milliseconds
      return () => clearTimeout(timer);
    }
  }, [isInView, itemIndex, delaySeconds]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.7"] // Adjust as needed
  });

  const words = paragraph ? paragraph.split(" ") : [];

  return (
    <p
      ref={container}
      className="flex flex-wrap" // Ensure p-5 gives enough padding if needed
      style={{ minHeight: '1em' }} // Ensure paragraph has some height for useInView
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word
            key={i}
            progress={scrollYProgress} // Pass the actual scrollYProgress
            range={[start, end]}
            isDelayOver={isDelayOver} // Pass the delay status
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range, isDelayOver }: { children: string; progress: MotionValue<number>; range: number[]; isDelayOver: boolean }) => {
  const wordText = children || "";
  const characters = wordText.split("");
  if (characters.length === 0) return <span className="relative mr-[6px]">&nbsp;</span>; // Handle empty words

  const amount = range[1] - range[0];
  const step = characters.length > 0 ? amount / characters.length : 0;

  return (
    <span className="relative mr-[6px]">
      {characters.map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return (
          <Char
            key={`c_${i}`}
            progress={progress}
            range={[start, end]}
            isDelayOver={isDelayOver}
          >
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range, isDelayOver }: { children: string; progress: MotionValue<number>; range: number[]; isDelayOver: boolean }) => {
  // Ensure progress is a valid MotionValue before passing to useTransform
  const validProgress = ensureMotionValue(progress);

  // useTransform must be called unconditionally.
  const animatedOpacity = useTransform(validProgress, range, [0, 1]);

  // Create a static motion value that always resolves to 0 opacity.
  const staticOpacity = motionValue(0);

  // Choose which motion value to use based on whether the delay is over.
  // When isDelayOver becomes true, this will switch from staticOpacity to animatedOpacity.
  const opacityToUse = isDelayOver ? animatedOpacity : staticOpacity;

  return (
    <span>
      <span className="absolute opacity-0">{children}</span>
      <motion.span style={{ opacity: opacityToUse }}>{children}</motion.span>
    </span>
  );
};