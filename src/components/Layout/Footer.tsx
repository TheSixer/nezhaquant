'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'

import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@heroui/react'

const Footer = () => {
  const { lang } = useParams<{ lang: string }>()
  return (
    <div className="w-full border-t-[40px] border-t-primary px-8 py-16 md:px-[200px] md:py-20">
      <div className="flex flex-col justify-between gap-9 md:flex-row">
        <div>
          <div className="flex items-center gap-2">
            <Image
              width={140}
              height={78}
              src="/assets/logo.svg"
              alt="Nezha Quant"
            />
            <div className="text-primary">
              <div className="text-4xl">关注哪吒量化，开启你的智能量化之旅！</div>
              <div className="text-xl">我命由我，不由天 My Fate is Mine, Not Heaven’s</div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-6 px-8 text-2xl">
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
          <Button
            size="lg"
            color="primary"
            variant="bordered"
            radius="none"
            className="h-20 w-[400px] text-3xl"
          >
            联系我们
          </Button>
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
