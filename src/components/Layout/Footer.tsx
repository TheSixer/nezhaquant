'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { useTranslation } from '@/i18n/client'
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BorderedButton from '../Button'

const Footer = () => {
  const { lang } = useParams<{ lang: string }>()
  const { t } = useTranslation('layout')
  const footerI18n = useMemo(() => t('footer.slogan', { returnObjects: true }) as string[], [t])

  return (
    <div className="w-full border-t-[20px] border-t-primary px-8 py-16 md:border-t-[40px] md:px-[48px] xl:px-[200px] md:py-20">
      <div className="flex flex-col justify-between gap-9 lg:flex-row">
        <div>
          <div className="flex items-center gap-2">
            <Image
              width={140}
              height={78}
              src="/assets/images/logo.svg"
              alt="Nezha Quant"
              className="h-8 w-14"
            />
            <div className="text-title text-primary">
              <div className="text-xl md:text-4xl">{footerI18n[0]}</div>
              <div className="text-sm md:text-xl">{footerI18n[1]}</div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-6 text-xl md:px-8 md:text-2xl">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 text-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              support@nezhaquant.com
            </div>
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 text-center">
                <FontAwesomeIcon icon={faDiscord} />
              </div>
              support@nezhaquant.com
            </div>
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 text-center">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              18763548908
            </div>
          </div>
        </div>
        <div className="text-center">
          <BorderedButton
            size="lg"
            className="w-60 md:h-20 md:w-[400px] md:text-3xl"
          >
            {t('contactUs')}
          </BorderedButton>
          {lang !== 'zh-CN' ? (
            <div className="mt-8 flex items-center gap-8 text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Footer
