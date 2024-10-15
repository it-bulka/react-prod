import { useEffect, PropsWithChildren } from 'react'
import { useAppDispatch, useAppStore } from 'app/providers/StoreProvider/config/store'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
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
