import { useSpring, config, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import {
 memo, PropsWithChildren, useCallback, useEffect
} from 'react'

import { withAnimationProvider, useAnimationLibs } from '@/shared/libs/components/AnimationProvider'

import cls from './Drawer.module.scss'

import classnames, { Mods } from '../../../libs/classnames/classnames'
import { useTheme } from '../../../libs/const/useTheme'
import { Overlay } from '../../redesigned/Overlay/Overlay'
import { Portal } from '../../redesigned/Portal/Portal'

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const height = window.innerHeight - 100

/**
 * @deprecated
 */
const DrawerContent = memo(({
  className,
  isOpen = false,
  onClose,
  children
}: PropsWithChildren<DrawerProps>) => {
  const { theme } = useTheme()
  const [{ y }, api] = useSpring(() => ({ y: height}))

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [])

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [api, isOpen, openDrawer])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity, precision: 0.0001 },
      onResolve: onClose
    })
  }

  const bind = useDrag(
    state => {
      const {
        last,
        velocity: [, vy],
        direction: [, dy],
        movement: [, my],
        cancel
      } = state
      if (my > 70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
  },
    {
 from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true
}
  )

  if (!isOpen) {
    return null
  }

  const display = y.to(py => (py < height ? 'block' : 'none'))

  const mods: Mods = {
    [cls.opened]: isOpen
  }

  return (
    <Portal>
      <div className={classnames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <animated.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()
        }
        >
          {children}
        </animated.div>
      </div>
    </Portal>
  )
})

const DrawerWithAnim = memo((props: PropsWithChildren<DrawerProps>) => {
  const { isLoaded } = useAnimationLibs()

  if(!isLoaded) return null
  return <DrawerContent {...props} />
})

export const Drawer = withAnimationProvider(DrawerWithAnim)
