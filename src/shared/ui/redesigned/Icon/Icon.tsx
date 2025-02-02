import React, { memo, MouseEventHandler } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Icon.module.scss'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    'data-testid'?: string
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true
  onClick: MouseEventHandler<HTMLButtonElement>
}

type IconProps = NonClickableIconProps | ClickableBaseProps

export const Icon = memo(({
  className,
  Svg,
  width = 32,
  height = 32,
  clickable,
  'data-testid': dataTestId,
  ...rest
}: IconProps) => {
  const icon = (
    <Svg
      className={classnames(cls.icon, {}, [className])}
      width={width}
      height={height}
      {...rest}
      onClick={undefined}
      data-testid={dataTestId && !clickable ? dataTestId : 'icon.svg'}
    />
  )
  if (clickable) {
    return (
      <button
        data-testid={dataTestId || 'icon.btn'}
        type="button"
        className={cls.button}
        onClick={(rest as ClickableBaseProps).onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    )
  }

  return icon
})
