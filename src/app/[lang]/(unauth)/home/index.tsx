'use client'

import Banner from '@/components/Banner'
import { useTranslation } from '@/i18n/client'
import { Button } from '@heroui/react'

const Home: React.FC = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <Banner
        image="/assets/home-banner.png"
        extraImage="/assets/home-banner-extra.png"
      >
        <div className="absolute bottom-20 left-1/2 w-full -translate-x-1/2 text-center">
          <div className="text-title mb-14 text-[80px]">智能量化交易，引领未来</div>
          <Button
            color="primary"
            variant="bordered"
            radius="none"
            className="bordered-button h-[80px] w-[400px] text-3xl"
          >
            {t('立即定制')}
          </Button>
        </div>
      </Banner>
      <div className="wrapper bg-foreground text-background">123123</div>
    </>
  )
}

export default Home
