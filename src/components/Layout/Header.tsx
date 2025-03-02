'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { useTranslation } from '@/i18n/client'
import { classnames } from '@/utils/classnames'
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
  const params = useParams<{ lang: string }>()
  const router = useRouter()

  const navItems = useMemo(() => {
    const menus = t('menus', { returnObjects: true }) as string[]
    return [
      { name: menus[0], pathname: '' },
      {
        name: menus[1],
        pathname: '/products',
      },
      { name: menus[2], pathname: '/services' },
      { name: menus[3], pathname: '/courses' },
      { name: menus[4], pathname: '/partners' },
    ]
  }, [])

  const handleClick = useCallback(
    (item: (typeof navItems)[number]) => () => {
      router.push(item.pathname)
      onClose()
    },
    [onClose, router],
  )

  const isActive = useCallback(
    (name: string) => pathname.replace(`/${params.lang}`, '') === name,
    [],
  )

  return (
    <Navbar
      maxWidth="2xl"
      classNames={{
        wrapper: 'max-w-7xl',
      }}
      isMenuOpen={isOpen}
      onMenuOpenChange={onOpenChange}
    >
      <NavbarMenuToggle
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
      />
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <Image
            width={88}
            height={48}
            src="/assets/logo.svg"
            alt="Nezha Quant"
          />
        </div>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-6 md:flex"
        justify="center"
      >
        {navItems.map((item) => (
          <NavbarItem
            key={item.name}
            isActive={isActive(item.pathname)}
          >
            <Link
              href={item.pathname}
              className={classnames(
                'flex items-center gap-2',
                isActive(item.pathname) ? 'text-primary' : undefined,
              )}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem>
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
                </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <div
              onClick={handleClick(item)}
              className={classnames(
                'hover:text-primary flex cursor-pointer items-center gap-2',
                isActive(item.pathname) ? 'text-primary' : undefined,
              )}
            >
              {item.name}
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
