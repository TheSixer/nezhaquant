'use client'

import * as motion from 'framer-motion/client'
import Image from 'next/image'
import { useMemo } from 'react'

import Wrapper from '@/components/Layout/Wrapper'
import { useTranslation } from '@/i18n/client'
import {
  bottomElementVariants,
  leftElementVariants,
  rightElementVariants,
  topElementVariants,
} from '@/utils/motion'

const Content: React.FC = () => {
  const { t } = useTranslation('home')
  const { service, superiority } = useMemo(
    () => ({
      superiority: t('superiority', { returnObjects: true }) as I18nObject,
      service: t('service', { returnObjects: true }) as I18nObject,
    }),
    [t],
  )

  return (
    <>
      <Wrapper dark={false}>
        <div className="text-title mb-8 text-[40px] text-primary">{service.title}</div>
        <div className="mb-16 leading-8 opacity-80">{service.description[0]}</div>
        <div className="flex flex-col justify-between gap-9 md:flex-row">
          {service.items?.map((item) => (
            <motion.div
              key={item.title}
              className="mt-3 md:mt-0 md:w-[480px]"
              initial="offscreen"
              whileInView="onscreen"
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
            </motion.div>
          ))}
        </div>
      </Wrapper>

      <Wrapper>
        <div className="mb-16 text-center">
          <div className="text-title mx-auto mb-8 inline-block border-b-4 border-primary text-[40px]">
            {superiority.title}
          </div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="flex flex-col md:flex-row md:gap-[100px]"
        >
          <motion.div
            variants={leftElementVariants}
            className="flex-1"
          >
            <Image
              alt={superiority.title}
              src={superiority.cover!}
              width={720}
              height={380}
            />
          </motion.div>
          <motion.div
            variants={rightElementVariants}
            className="flex flex-1 flex-col text-lg"
          >
            {superiority.description.map((str) => (
              <div
                key={str}
                className="border-b border-b-foreground/10 leading-[96px]"
              >
                {str}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Wrapper>
    </>
  )
}

export default Content
