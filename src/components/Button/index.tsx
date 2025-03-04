import React from 'react'

import { classnames } from '@/utils/classnames'
import { Button, ButtonProps } from '@heroui/react'

import styles from './styles.module.scss'

const BorderedButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      color="primary"
      variant="bordered"
      radius="none"
      {...props}
      className={classnames(styles['bordered-button'], 'border-1', className)}
    >
      {children}
    </Button>
  )
}

export default BorderedButton
