export const filterObjectKeys = <T extends Object>(obj: T): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => value !== undefined && value !== null)
  ) as Partial<T>
}
