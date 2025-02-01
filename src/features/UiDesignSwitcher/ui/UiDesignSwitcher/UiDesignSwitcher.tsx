import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { getUserAuthData } from '@/entities/User'
import { getFeatureFlags } from '@/shared/libs/features/lib/setGetFeatures'
import { updateFeatureFlag } from '@/shared/libs/features/services/updateFeatureFlags'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo(({ className }: UiDesignSwitcherProps) => {
  const { t } = useTranslation('settings')
  const isAppRedesigned = getFeatureFlags('isAppRedesigned')
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const [isLoading, setIsLoading] = useState(false)

  const items = [
    {
      content: t('new'),
      value: 'new'
    },
    {
      content: t('old'),
      value: 'old'
    }
  ]

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true)
      await dispatch(
        updateFeatureFlag({
          userId: authData.id,
          newFeatures: {
            isAppRedesigned: value === 'new'
          }
        })
      ).unwrap()
        setIsLoading(false)
      }
    }

    return (
      <HStack align="center" gap="8" justify="start">
        <Text text={t('interface variant')} size="s" />
        {isLoading ? (
          <Skeleton width={100} height={40} />
          ) : (
            <ListBox
              onChange={onChange}
              items={items}
              value={isAppRedesigned ? 'new' : 'old'}
              className={className}
            />
          )}
      </HStack>
    )
})
