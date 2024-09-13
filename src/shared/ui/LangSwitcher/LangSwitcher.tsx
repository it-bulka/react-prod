import { type FC, useCallback } from 'react'
import classnames from 'shared/libs/classnames/classnames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggleLang = useCallback(async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en')
  }, [])

  return (
    <Button
      className={classnames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLang}
    >
      {t('lang')}
    </Button>
  )
}