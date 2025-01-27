import { useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ToggleFeaturesComponent } from '@/shared/libs/features/ToggleFeaturesComponent'
import { Button } from '@/shared/ui/redesigned/Button/Button'

import { Button as ButtonDeprecated, ThemeButton } from '../../shared/ui/deprecated/Button/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLang = useCallback(async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en')
  }, [])

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={(
        <ButtonDeprecated
          className={className}
          theme={ThemeButton.CLEAR}
          onClick={toggleLang}
          data-testid="LangSwitcher.ButtonDeprecated"
        >
          {t(short ? 'lang_short' : 'lang')}
        </ButtonDeprecated>
      )}
      on={(
        <Button
          variant="clear"
          onClick={toggleLang}
          data-testid="LangSwitcher.Button"
        >
          {t(short ? 'lang_short' : 'lang')}
        </Button>
      )}
    />
  )
})

LangSwitcher.displayName = 'LangSwitcher'
