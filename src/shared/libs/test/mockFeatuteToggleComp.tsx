interface IMockFeatureToggle {
  isOn: boolean
}

type MockTogglerFn = (arg: IMockFeatureToggle) => Promise<void>
const mockFeatureToggle: MockTogglerFn = async ({ isOn }) => {
  const { ToggleFeaturesComponent } = await import('@/shared/libs/features/components/ToggleFeaturesComponent')
  const mockedToggleFeaturesComponent = ToggleFeaturesComponent as jest.MockedFunction<
    typeof ToggleFeaturesComponent
  >

  mockedToggleFeaturesComponent.mockImplementation(({ on, off }: any) => (isOn ? on : off))
}

export const mockFeatureToggleComp = (): MockTogglerFn => {
  jest.mock('@/shared/libs/features/components/ToggleFeaturesComponent', () => ({
    ToggleFeaturesComponent: jest.fn()
  }))

  return mockFeatureToggle
}
