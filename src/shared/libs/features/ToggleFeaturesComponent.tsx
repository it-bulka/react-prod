import { ReactElement } from 'react'

import { getFeatureFlags } from './setGetFeatures'
import { FeatureFlags } from '../../types/featureFlaga'

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeaturesComponent = (props: ToggleFeaturesProps) => {
  const { on, off, feature } = props
  console.log('ToggleFeaturesComponent', { feature, getFeatureFlags: getFeatureFlags(feature) })
  if (getFeatureFlags(feature)) {
    return on
  }

  return off
}
