import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useDevice } from '@/shared/libs/hooks/useDevice/useDevice'
import { Modal, Text } from '@/shared/ui'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation('articles')
  const [isOpen, setIsOpen] = useState(false)
  const { isArticlesPageWasOpened } = useJsonSettings()
  const dispatch = useAppDispatch()
  const isMobile = useDevice()

    useEffect(() => {
      if (!isArticlesPageWasOpened) {
         setIsOpen(true)
         dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }))
      }
    }, [dispatch, isArticlesPageWasOpened])

  const onClose = () => setIsOpen(false)

  const text = (
    <Text
      title={t('articles greetings')}
      text={t('articles greetings content')}
    />
  )

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  )
})
