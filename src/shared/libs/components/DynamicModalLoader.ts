import { Reducer } from '@reduxjs/toolkit'
import { useEffect, PropsWithChildren } from 'react'

import { StateSchemaKey, StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { useAppDispatch, useAppStore } from '@/app/providers/StoreProvider/config/store'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: PropsWithChildren<DynamicModuleLoaderProps>) => {
  const {
    children,
    reducers,
    removeAfterUnmount
  } = props

  const store = useAppStore()
  const dispatch = useAppDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      const stateKey = name as StateSchemaKey
      store.reduceManager.add(stateKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          const stateKey = name as StateSchemaKey
          store.reduceManager.remove(stateKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
  }, [])

  return children
}
