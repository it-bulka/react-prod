import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { UiDesignSwitcher } from '@/features/UiDesignSwitcher'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { PageWithInfinite as Page } from '@/widgets/PageWithInfinite'

const SettingsPage = memo(() => {
    const { t } = useTranslation()

    return (
      <Page>
        <VStack gap="16" align="center">
          <Text title={t('user settings')} bold />
          <UiDesignSwitcher />
        </VStack>
      </Page>
    )
})

export default SettingsPage
