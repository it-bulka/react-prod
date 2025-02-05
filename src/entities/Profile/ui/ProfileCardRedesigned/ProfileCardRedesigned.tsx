import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { Card } from '@/shared/ui/redesigned/Card/Card'
import { Input } from '@/shared/ui/redesigned/Input/Input'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton'
import { HStack , VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { ProfileCardProps } from '../../model/types/profile'

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation()

  return (
    <HStack justify="center" max>
      <Text
        variant="error"
        title={t('upload error')}
        text={t('try to update page')}
        align="center"
      />
    </HStack>
  )
}

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding="24" max>
      <VStack gap="32">
        <HStack max justify="center">
          <Skeleton border="100%" width={128} height={128} />
        </HStack>
        <HStack gap="32" max>
          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>

          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
}

export const ProfileCardRedesigned = memo(({
  className,
  data,
  readOnly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency
}: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  return (
    <Card padding="24" max className={className}>
      <HStack gap="24" max>
        <VStack gap="16" max>
          <Input
            value={data?.first}
            label={t('Имя')}
            onChange={onChangeFirstname}
            readonly={readOnly}
            data-testid="ProfileCard.firstname"
          />
          <Input
            value={data?.lastname}
            label={t('Фамилия')}
            onChange={onChangeLastname}
            readonly={readOnly}
            data-testid="ProfileCard.lastname"
          />
          <Input
            value={data?.age}
            label={t('Возраст')}
            onChange={onChangeAge}
            readonly={readOnly}
          />
          <Input
            value={data?.city}
            label={t('Город')}
            onChange={onChangeCity}
            readonly={readOnly}
          />
        </VStack>
        <VStack gap="16" max align="stretch">
          <Input
            value={data?.username}
            label={t('your username')}
            onChange={onChangeUsername}
            readonly={readOnly}
            data-testid="ProfileCard.username"
          />
          <Input
            value={data?.avatar}
            label={t('your avatar')}
            onChange={onChangeAvatar}
            readonly={readOnly}
          />
          <CurrencySelect
            value={data?.currency}
            onChange={onChangeCurrency}
            readOnly={readOnly}
          />
          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readOnly}
          />
        </VStack>
      </HStack>
    </Card>
  )
})
