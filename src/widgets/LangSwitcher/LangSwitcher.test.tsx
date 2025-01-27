import { screen, fireEvent } from '@testing-library/react'

import i18n from '@/shared/config/i18n/i18nextForTests'
import { componentRender } from '@/shared/libs/test/componentRender'

import { LangSwitcher as LangSwitch } from './LangSwitcher'

jest.mock('@/shared/libs/features/ToggleFeaturesComponent', () => ({
  ToggleFeaturesComponent: jest.fn()
}))

describe('LangSwitcher', () => {
  describe('when feature if off', () => {
    let LangSwitcherComp: typeof LangSwitch
    beforeAll(async () => {
      i18n.changeLanguage('en')
      const { ToggleFeaturesComponent } = await import('@/shared/libs/features/ToggleFeaturesComponent')
      const mockedToggleFeaturesComponent = ToggleFeaturesComponent as jest.MockedFunction<
        typeof ToggleFeaturesComponent
      >
      mockedToggleFeaturesComponent.mockImplementation(({ off }: any) => {
        return off
      })

      const { LangSwitcher } = await import('./LangSwitcher')
      LangSwitcherComp = LangSwitcher
    })

    it('should render ButtonDepecated', async () => {
      componentRender(<LangSwitcherComp />)

      const deprecatedComponent = screen.getByTestId('LangSwitcher.ButtonDeprecated')
      expect(deprecatedComponent).toBeInTheDocument()
    })

    it('should render with long text', () => {
      componentRender(<LangSwitcherComp />)
      const btn = screen.getByRole('button')
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveTextContent('ukrainian')
    })

    it('should render with short text', () => {
      componentRender(<LangSwitcherComp short />)
      const btn = screen.getByRole('button')
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveTextContent('uk')
    })

    it('should switch language', () => {
      componentRender(<LangSwitcherComp />)
      const btn = screen.getByRole('button')
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveTextContent('ukrainian')

      fireEvent.click(btn)
      expect(screen.getByRole('button')).toHaveTextContent('англійська')
    })
  })

  describe('when feature is on', () => {
    let LangSwitcherComp: typeof LangSwitch
    beforeAll(async () => {
      i18n.changeLanguage('en')
      const { ToggleFeaturesComponent } = await import('@/shared/libs/features/ToggleFeaturesComponent')
      const mockedToggleFeaturesComponent = ToggleFeaturesComponent as jest.MockedFunction<
        typeof ToggleFeaturesComponent
      >
      mockedToggleFeaturesComponent.mockImplementation(({ on }: any) => {
        return on
      })

      const { LangSwitcher } = await import('./LangSwitcher')
      LangSwitcherComp = LangSwitcher
    })

    it('should render redesigned Button', async () => {
      componentRender(<LangSwitcherComp />)

      const deprecatedComponent = screen.getByTestId('LangSwitcher.Button')
      expect(deprecatedComponent).toBeInTheDocument()
    })

    it('should render with long text', () => {
      componentRender(<LangSwitcherComp />)
      const btn = screen.getByRole('button')
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveTextContent('ukrainian')
    })

    it('should render with short text', () => {
      componentRender(<LangSwitcherComp short />)
      const btn = screen.getByRole('button')
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveTextContent('uk')
    })

    it('should switch language', () => {
      componentRender(<LangSwitcherComp />)
      const btn = screen.getByRole('button')
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveTextContent('ukrainian')

      fireEvent.click(btn)
      expect(screen.getByRole('button')).toHaveTextContent('англійська')
    })
  })
})
