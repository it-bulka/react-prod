import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/shared/config/i18n/i18nextForTests'
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'
import { StateSchema } from '@/app/providers/StoreProvider'
import { ReducersList } from '../components/DynamicModalLoader'

interface ComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: ReducersList
}
export const componentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = '/', asyncReducers, initialState} = options
   return render(
     <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
       <MemoryRouter initialEntries={[route]}>
         <I18nextProvider i18n={i18n}>
           {component}
         </I18nextProvider>
       </MemoryRouter>
     </StoreProvider>
   )
}
