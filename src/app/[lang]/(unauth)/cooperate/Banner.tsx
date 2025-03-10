'use client'

import Banner from '@/components/Banner'
import BorderedButton from '@/components/Button'
import { useTranslation } from '@/i18n/client'

const CooperateBanner: React.FC = () => {
  const { t } = useTranslation('cooperate')

  return (
    <Banner image="/assets/images/cooperate-banner.webp">
      <div className="absolute bottom-7 left-1/2 w-full -translate-x-1/2 text-center md:bottom-20">
        <div className="text-title mb-2 text-2xl md:mb-14 md:text-7xl">{t('slogan')}</div>

        <BorderedButton className="h-8 w-32 md:h-[80px] md:w-[400px] md:text-3xl">
          {t('立即定制')}
        </BorderedButton>
      </div>
    </Banner>
  )
}

export default CooperateBanner
