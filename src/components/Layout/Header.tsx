'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { useTranslation } from '@/i18n/client'
import { languagesLabel } from '@/i18n/settings'
import { classnames } from '@/utils/classnames'
import { faBars, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from '@heroui/react'

const Header = () => {
  const { t } = useTranslation('layout')
  const { isOpen, onOpenChange, onClose } = useDisclosure()
  const pathname = usePathname()
  const { lang } = useParams<{ lang: string }>()
  const router = useRouter()

  const navItems = useMemo(() => {
    const menus = t('menus', { returnObjects: true }) as string[]
    return [
      { name: menus[0], pathname: '/' },
      {
        name: menus[1],
        pathname: '/products',
      },
      { name: menus[2], pathname: '/services' },
      { name: menus[3], pathname: '/courses' },
      { name: menus[4], pathname: '/cooperate' },
    ]
  }, [t])

  const handleClick = useCallback(
    (item: (typeof navItems)[number]) => () => {
      router.push(item.pathname)
      onClose()
    },
    [onClose, router],
  )

  const switchLang = useCallback(() => {
    router.replace(
      `/${lang === 'zh-CN' ? 'en' : 'zh-CN'}/${pathname.split('/').slice(2).join('/')}`,
    )
  }, [router, lang, pathname])

  const isActive = useCallback(
    (name: string) => {
      const _pathname = pathname.replace(`/${lang}`, '')
      return (_pathname === '' && name === '/') || _pathname === name
    },
    [lang, pathname],
  )

  return (
    <Navbar
      classNames={{
        wrapper: 'max-w-[1520px] md:px-12',
      }}
      isMenuOpen={isOpen}
      onMenuOpenChange={onOpenChange}
      height="100px"
    >
      <NavbarBrand>
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            width={88}
            height={48}
            src="/assets/images/logo.svg"
            alt="Nezha Quant"
            className="h-[24px] w-[44px] md:h-[48px] md:w-[88px]"
          />
          <div className="text-title text-xl text-primary md:text-4xl">{t('siteName')}</div>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-16 md:flex"
        justify="end"
      >
        {navItems.map((item) => (
          <NavbarItem
            key={item.name}
            isActive={isActive(item.pathname)}
          >
            <Link
              href={item.pathname}
              className={classnames(
                'flex items-center gap-2 border-b-3 border-transparent text-medium',
                isActive(item.pathname) ? 'border-primary' : undefined,
              )}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {languagesLabel.length ? (
        <NavbarContent
          justify="end"
          className="md:hidden"
        >
          <NavbarItem>
            <Button
              color="primary"
              variant="light"
              onPress={switchLang}
            >
              {languagesLabel.map((lg, idx) => (
                <div
                  key={lg.lang}
                  className="flex items-center gap-2"
                >
                  {idx ? <div className="h-4 w-[1px] bg-foreground" /> : null}
                  <span className={lang === lg.lang ? 'text-primary' : 'text-foreground'}>
                    {lg.label}
                  </span>
                </div>
              ))}
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : null}

      <NavbarMenuToggle
        className="md:hidden"
        icon={(isOpen) => (
          <FontAwesomeIcon
            className="text-xl text-primary"
            icon={isOpen ? faXmark : faBars}
          />
        )}
      />

      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <div
              onClick={handleClick(item)}
              className="flex h-14 cursor-pointer items-center justify-between border-b-1 border-foreground px-4 text-lg hover:text-primary"
            >
              <div
                className={isActive(item.pathname) ? 'border-b-2 border-primary pb-0.5' : undefined}
              >
                {item.name}
              </div>
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
