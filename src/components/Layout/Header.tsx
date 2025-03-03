'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { useTranslation } from '@/i18n/client'
import { classnames } from '@/utils/classnames'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
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
      { name: menus[4], pathname: '/partners' },
    ]
  }, [t])

  const handleClick = useCallback(
    (item: (typeof navItems)[number]) => () => {
      router.push(item.pathname)
      onClose()
    },
    [onClose, router],
  )

  const isActive = useCallback(
    (name: string) => {
      const _pathname = pathname.replace(`/${lang}`, '')
      return (_pathname === '' && name === '/') || _pathname === name
    },
    [lang, pathname],
  )

  return (
    <Navbar
      maxWidth="2xl"
      classNames={{
        wrapper: 'wrapper h-[100px]',
      }}
      className="bg-background"
      isMenuOpen={isOpen}
      height="100px"
      onMenuOpenChange={onOpenChange}
      isBlurred={false}
    >
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <Image
            width={88}
            height={48}
            src="/assets/logo.svg"
            alt="Nezha Quant"
          />
        </div>
        <div className="text-4xl text-primary">哪吒量化 NezhaQuant</div>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-6 md:flex"
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
      {/* <NavbarContent justify="end"> 
        <NavbarItem>
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            href="#"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenuToggle
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
      />

      <NavbarMenu className="bg-background p-0">
        {navItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <div
              onClick={handleClick(item)}
              className={classnames(
                'flex h-[115px] cursor-pointer items-center justify-between border-b-2 border-foreground px-9 text-3xl hover:text-primary',
              )}
            >
              <div
                className={isActive(item.pathname) ? 'border-b-4 border-primary pb-2' : undefined}
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
