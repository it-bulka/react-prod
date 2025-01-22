import { FeatureFlags } from '@/shared/types/featureFlaga'

// FEATURES DOES NOT CHANGE via SESSION. NOT NECESSARY TO MAKE REACTIVE
let featureFlags: FeatureFlags = {}

export function setFeatureFlags(newFeatureFlags?: FeatureFlags): void {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export function getFeatureFlags(
  flag?: keyof FeatureFlags | undefined
): FeatureFlags[keyof FeatureFlags] | undefined {
  console.log('flag', flag)
  if (!flag) {
    return undefined
  }

  return featureFlags?.[flag]
}
