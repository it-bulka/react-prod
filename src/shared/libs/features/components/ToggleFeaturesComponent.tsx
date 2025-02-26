import { ReactElement } from 'react'

import { FeatureFlags } from '../../../types/featureFlaga'
import { getFeatureFlags } from '../lib/setGetFeatures'

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeaturesComponent = (props: ToggleFeaturesProps) => {
  const { on, off, feature } = props
  if (getFeatureFlags(feature)) {
    return on
  }

  return off
}
