import { FeatureFlags } from '@/shared/types/featureFlaga'

// FEATURES DOES NOT CHANGE via SESSION. NOT NECESSARY TO MAKE REACTIVE
let featureFlags: FeatureFlags = {
  isAppRedesigned: true
}

export function setFeatureFlags(newFeatureFlags?: FeatureFlags): void {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export function getFeatureFlags(
  flag?: keyof FeatureFlags | undefined
): FeatureFlags[keyof FeatureFlags] | undefined {
  if (!flag) {
    return undefined
  }

  return featureFlags?.[flag]
}

export function getAllFeatureFlags() {
  return featureFlags
}
