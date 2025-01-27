import { useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import classnames from '@/shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { Input, Button, ThemeButton } from '@/shared/ui'
import { HStack } from '@/shared/ui/deprecated/Stack'

import cls from './AddCommentForm.module.scss'

import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormReducer, addCommentFormActions } from '../../model/slice/addCommentFormSlice'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation('comment')
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment?.(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack justify="between" max className={classnames(cls.addCommentForm, {}, [className])} data-testid="AddCommentForm">
        <Input
          className={cls.input}
          placeholder={t('write a comment')}
          value={text}
          onChange={onCommentTextChange}
          focus
          autofocus
          data-testid="AddCommentForm.Input"
        />
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onSendHandler}
          data-testid="AddCommentForm.Button"
        >
          {t('send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
