import { Variants } from 'framer-motion'

const transition = {
  type: 'tween',
  duration: 0.8,
}

export const leftElementVariants: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition,
  },
}

export const rightElementVariants: Variants = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition,
  },
}

export const getGridVariant = (index: number) => {
  return {
    offscreen: {
      y: index % 2 === 0 ? -100 : 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: index * 0.2,
      },
    },
  }
}
