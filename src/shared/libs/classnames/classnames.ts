type Mods = Record<string, string | boolean>

function classnames(cls: string, mods: Mods, additional: (string | undefined)[]): string {
  return [
    cls,
    ...Object.entries(mods).filter(([className, value]) => Boolean(value)).map(([className, value]) => value),
    ...additional.filter(Boolean)
  ].join(' ')
}

export default classnames