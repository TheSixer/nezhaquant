'use client'

import Image from 'next/image'
import { useMemo } from 'react'

import { useTranslation } from '@/i18n/client'
import {
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BorderedButton from '../Button'

const Footer = () => {
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
              <FontAwesomeIcon icon={faEnvelope} size="sm" />
                <a href="mailto:NeZhaQuant.services@gmail.com" className="text-md" target="_blank">
                NeZhaQuant.services@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} size="sm" />
              <a href="tel:+61490470976" className="text-md" target="_blank">+61 490470976</a>
            </div>
            <div className="mt-4 flex items-center gap-8 text-2xl">
              {/* <a href="https://www.instagram.com/nezhaquant/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a> */}
              {/* <a href="https://www.facebook.com/profile.php?id=61561484344142" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a> */}
              <a href="https://t.me/NeZhaQuant" target="_blank">
                <i className="tmrwdao-icon-telegram text-2xl text-inherit"></i>
              </a>
              <a href="https://x.com/NeZhaQuant" target="_blank">
                <i className="tmrwdao-icon-twitter text-2xl text-inherit"></i>
              </a>
              <a href="https://wa.me/61490470976" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} size="sm" />
              </a>
              <a href="https://www.tiktok.com/@nezhaquant" target="_blank">
                <FontAwesomeIcon icon={faTiktok} size="sm" />
              </a>
              {/* <a href="https://www.youtube.com/@NeZhaQuant" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a> */}
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

          <div className="mt-12 flex justify-center items-center gap-6">
            <a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=nezhalianghua" target="_blank">
              <Image src="/assets/images/logo.svg" alt="钉钉" width={200} height={200} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
