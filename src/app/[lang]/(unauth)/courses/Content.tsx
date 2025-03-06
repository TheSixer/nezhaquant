'use client'

import * as motion from 'framer-motion/client'
import Image from 'next/image'
import { useMemo } from 'react'

import BorderedButton from '@/components/Button'
import Wrapper from '@/components/layout/Wrapper'
import Section from '@/components/Section'
import { useTranslation } from '@/i18n/client'
import { bottomElementVariants, getGridVariant, topElementVariants } from '@/utils/motion'

const Content: React.FC = () => {
  const { t } = useTranslation('courses')
  const { courses, explain, point, free } = useMemo(
    () => ({
      courses: t('courses', { returnObjects: true }) as I18nObject,
      explain: t('explain', { returnObjects: true }) as I18nObject,
      point: t('point', { returnObjects: true }) as I18nObject,
      free: t('free', { returnObjects: true }) as I18nObject,
    }),
    [t],
  )

  return (
    <>
      <Wrapper dark={false}>
        <div className="text-title mb-8 text-[40px] text-primary">{courses.title}</div>
        <div className="mb-16 leading-8 opacity-80">{courses.description[0]}</div>
        <motion.div
          className="flex flex-col justify-between gap-9 md:flex-row"
          initial="offscreen"
          whileInView="onscreen"
        >
          {courses.items?.map((item) => (
            <div
              key={item.title}
              className="mt-3 md:mt-0 md:w-[480px]"
            >
              <motion.div variants={topElementVariants}>
                <Image
                  alt={item.title}
                  src={item.cover!}
                  width={480}
                  height={300}
                  className="w-full"
                />
              </motion.div>
              <motion.div variants={bottomElementVariants}>
                <div className="my-5 text-sm md:text-lg">{item.title}</div>
                {item.description.map((str) => (
                  <div
                    key={str}
                    className="text-sm leading-8 text-background/60"
                  >
                    {str}
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </Wrapper>

      <Section
        data={explain}
        titleAlign="center"
      />
      <Section
        dark={false}
        data={point}
        titleAlign="center"
      />
      <Wrapper>
        <div className="text-center md:mb-16">
          <div className="text-title mb-8 inline-block border-b-4 border-primary pb-2 text-2xl md:text-4xl">
            {free.title}
          </div>
        </div>
        <motion.div
          className="flex flex-col justify-between gap-9 md:flex-row"
          initial="offscreen"
          whileInView="onscreen"
        >
          {free.items?.map((item, idx) => (
            <motion.div
              key={item.title}
              className="mt-3 flex-1 md:mt-0 md:w-[480px]"
              variants={getGridVariant(idx)}
            >
              <Image
                alt={item.title}
                src={item.cover!}
                width={720}
                height={380}
                className="w-full"
              />
              <div className="bg-[#ebebeb]/10 px-12 py-8">
                <div className="mb-5 text-sm md:text-lg">{item.title}</div>
                <div className="text-foreground/80">{item.description[0]}</div>
                <BorderedButton className="mt-8 h-8 w-full md:h-[60px] md:text-3xl">
                  {t('signUp')}
                </BorderedButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </>
  )
}

export default Content
