type Mods = Record<string, string | boolean>

function classnames(cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string {
  return [
    cls,
    ...Object.entries(mods).filter(([_, value]) =>
      Boolean(value)).map(([className, _]) => className),
    ...additional.filter(Boolean)
  ].join(' ')
}

export default classnames
