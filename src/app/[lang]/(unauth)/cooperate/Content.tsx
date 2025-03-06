'use client'

import Image from 'next/image'
import { useMemo } from 'react'

import Wrapper from '@/components/Layout/Wrapper'
import { useTranslation } from '@/i18n/client'

const Content: React.FC = () => {
  const { t } = useTranslation('cooperate')
  const { profile, mission, vision } = useMemo(
    () => ({
      profile: t('profile', { returnObjects: true }) as I18nObject,
      mission: t('mission', { returnObjects: true }) as I18nObject,
      vision: t('vision', { returnObjects: true }) as I18nObject,
    }),
    [t],
  )

  return (
    <>
      <Wrapper dark={false}>
        <div className="text-title mb-4 text-2xl text-primary md:mb-8 md:text-[40px]">
          {profile.title}
        </div>
        <div className="flex flex-col gap-6 leading-8 opacity-80 md:w-1/2">
          {profile.description.map((str) => (
            <div key={str}>{str}</div>
          ))}
        </div>
      </Wrapper>

      <Wrapper
        dark={false}
        className="flex flex-col gap-7 md:flex-row md:gap-[100px]"
      >
        <div>
          <Image
            src="/assets/images/cooperate-1.png"
            width={738}
            height={380}
            alt="cooperate"
          />
        </div>
        <div>
          <div className="text-title mb-4 text-2xl text-primary md:mb-8 md:text-[40px]">
            {mission.title}
          </div>
          <div className="flex flex-col gap-6 leading-8 text-background opacity-80">
            {mission.description.map((str) => (
              <div key={str}>{str}</div>
            ))}
          </div>
        </div>
      </Wrapper>

      <Wrapper
        dark={false}
        className="flex flex-col-reverse gap-7 md:flex-row md:gap-[100px]"
      >
        <div>
          <div className="text-title mb-4 text-2xl text-primary md:mb-8 md:text-[40px]">
            {vision.title}
          </div>
          <div className="flex flex-col gap-6 leading-8 text-background opacity-80">
            {vision.description.map((str) => (
              <div key={str}>{str}</div>
            ))}
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/cooperate-2.png"
            width={738}
            height={380}
            alt="cooperate"
          />
        </div>
      </Wrapper>
    </>
  )
}

export default Content
