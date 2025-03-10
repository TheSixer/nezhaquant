'use client'

import { useMemo } from 'react'

import Section from '@/components/Section'
import { useTranslation } from '@/i18n/client'

const Content: React.FC = () => {
  const { t } = useTranslation('products')
  const { wheel, belt, ai, risk } = useMemo(
    () => ({
      wheel: t('风火轮', { returnObjects: true }) as I18nObject,
      belt: t('混天绫', { returnObjects: true }) as I18nObject,
      ai: t('ai', { returnObjects: true }) as I18nObject,
      risk: t('risk', { returnObjects: true }) as I18nObject,
    }),
    [t],
  )

  return (
    <>
      <Section data={wheel} />
      <Section
        dark={false}
        data={belt}
      />
      <Section data={ai} />
      <Section
        dark={false}
        data={risk}
      />
    </>
  )
}

export default Content
