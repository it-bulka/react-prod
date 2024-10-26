import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import { addCommentFormReducer, addCommentFormActions } from 'features/addCommentForm/model/slice/addCommentFormSlice'
import { Input, Button, ThemeButton } from 'shared/ui'
import { useSelector } from 'react-redux'
import { useCallback, memo } from 'react'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import cls from './AddCommentForm.module.scss'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'

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
      <div className={classnames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('write a comment')}
          value={text}
          onChange={onCommentTextChange}
          focus
          autofocus
        />
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onSendHandler}
        >
          {t('send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
