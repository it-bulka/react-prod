import 'whatwg-fetch' // mock fetch in jest
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Profile , profileReducer } from '@/entities/Profile'
import { api } from '@/shared/api/api'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { Currency , Country } from '@/shared/const/common'
import { componentRender } from '@/shared/libs/test/componentRender'

import { EditableProfileCard } from './EditableProfileCard'

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.France,
  city: 'Kyiv',
  username: 'admin213'
}

const options = {
  route: `${RoutePath.profile}1`,
  initialState: {
    profile: {
      readOnly: true,
      data: profile,
      form: profile
    },
    user: {
      authData: { id: '1', username: 'admin' }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}

describe('EditableProfileCard', () => {
  window.ResizeObserver = MockResizeObserver
  it('should switch from read only mood to edit one', async () => {
    componentRender(<EditableProfileCard />, options)

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'))
    expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument()
  })

  it('should be prev data in input after undoing', async () => {
    componentRender(<EditableProfileCard />, options)
    const inputUsername = 'ProfileCard.username'

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'))

    await userEvent.clear(screen.getByTestId(inputUsername))

    await userEvent.type(screen.getByTestId(inputUsername), 'user')

    expect(screen.getByTestId(inputUsername)).toHaveValue('user')

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'))

    expect(screen.getByTestId(inputUsername)).toHaveValue('admin213')
  })

  it('should show error', async () => {
    componentRender(<EditableProfileCard />, options)

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.ApplyButton'))

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  it('should be put request if no error', async () => {
    const mockPutReq = jest.spyOn(api, 'put')
    componentRender(<EditableProfileCard />, options)
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.ApplyButton'))

    expect(mockPutReq).toHaveBeenCalled()
  })
})
