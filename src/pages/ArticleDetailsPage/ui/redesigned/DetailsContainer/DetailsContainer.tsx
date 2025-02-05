import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from '@/entities/Article'

export const DetailsContainer = memo(() => {
  const { id } = useParams<{ id: string }>()
  if (!id) return

  return <ArticleDetails id={id} />
})
