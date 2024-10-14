import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nextForTests'
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider'

interface ComponentRenderOptions {
  route?: string
}
export const componentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = '/'} = options
   return render(
     <StoreProvider>
       <MemoryRouter initialEntries={[route]}>
         <I18nextProvider i18n={i18n}>
           {component}
         </I18nextProvider>
       </MemoryRouter>
     </StoreProvider>
   )
}
