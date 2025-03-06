'use client'

import * as motion from 'framer-motion/client'
import Image from 'next/image'
import { useMemo } from 'react'

import Wrapper from '@/components/Layout/Wrapper'
import { classnames } from '@/utils/classnames'
import { getGridVariant, leftElementVariants, rightElementVariants } from '@/utils/motion'

const Section: React.FC<{ data: I18nObject; dark?: boolean; titleAlign?: 'left' | 'center' }> = ({
  data,
  dark = true,
  titleAlign,
}) => {
  const border = useMemo(() => (dark ? 'border-b-foreground/10' : 'border-b-background/10'), [dark])
  return (
    <>
      <Wrapper dark={dark}>
        {titleAlign === 'center' || !data.cover ? (
          <div className="text-center md:mb-16">
            <div className="text-title mb-8 inline-block border-b-4 border-primary pb-2 text-2xl md:text-4xl">
              {data.title}
            </div>
          </div>
        ) : (
          <div className="text-title mb-10 text-2xl text-primary md:text-[40px]">{data.title}</div>
        )}

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className={classnames(
            'overflow-hidden',
            data.cover
              ? 'flex flex-col gap-7 md:flex-row md:gap-[100px]'
              : 'grid grid-cols-4 gap-12 px-5 md:px-0',
          )}
        >
          {data.cover ? (
            <>
              <motion.div
                className="flex-1 flex justify-center items-center"
                variants={leftElementVariants}
              >
                <Image
                  alt={data.title}
                  src={data.cover}
                  width={720}
                  height={380}
                />
              </motion.div>
              <motion.div
                className="mt-2 flex flex-1 flex-col text-lg md:mt-0"
                variants={rightElementVariants}
              >
                {data.description ? (
                  <div className={classnames('h-16 border-b-1 text-xl font-bold', border)}>
                    {data.description}
                  </div>
                ) : null}
                {data.items?.map((item, idx) => (
                  <div
                    key={item.title}
                    className={classnames('items-center gap-4 border-b-1 py-4', border)}
                  >
                    <div className="mb-4 flex items-baseline text-lg">
                      <div className="text-title">{idx + 1}</div>
                      <div className="md:text-lg">{item.title}</div>
                    </div>
                    {item.description ? (
                      <div className="text-sm md:text-medium">{item.description[0]}</div>
                    ) : null}
                  </div>
                ))}
              </motion.div>
            </>
          ) : (
            data.items?.map((item, idx) => (
              <motion.div
                key={item.title}
                className={classnames(
                  'col-span-4 px-12 py-10 lg:col-span-2 xl:col-span-1',
                  dark ? 'bg-foreground/10' : 'bg-background/5',
                )}
                variants={getGridVariant(idx)}
              >
                <div className="mb-6 flex h-14 items-baseline text-lg">
                  <div className="text-title mr-1 text-4xl text-primary">{idx + 1}</div>
                  <div className="md:text-lg">{item.title}</div>
                </div>
                {item.description ? (
                  <div
                    className={classnames(
                      'text-sm leading-6 md:text-medium md:leading-8',
                      dark ? 'text-foreground/80' : 'text-background/80',
                    )}
                  >
                    {item.description[0]}
                  </div>
                ) : null}
              </motion.div>
            ))
          )}
        </motion.div>
      </Wrapper>
    </>
  )
}

export default Section
