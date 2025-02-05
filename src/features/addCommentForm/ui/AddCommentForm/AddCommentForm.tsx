import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'

import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormReducer, addCommentFormActions } from '../../model/slice/addCommentFormSlice'
import { AddCommentFormDeprecated } from '../deprecated/AddCommentFormDeprecated'
import { AddCommentFormRedesigned } from '../redesigned/AddCommentFormRedesigned'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment?.(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  const commonProps = {
    text,
    onCommentTextChange,
    onSendHandler
  }
  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<AddCommentFormDeprecated className={className} {...commonProps} />}
        on={<AddCommentFormRedesigned {...commonProps} />}
      />
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
