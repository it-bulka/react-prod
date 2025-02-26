import { memo , useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton'

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo(({
  className,
  articleId
}: ArticleRatingProps) => {
    const { t } = useTranslation('articles')
    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ''
    })
    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            // handle error
            console.log(e)
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback)
    }, [handleRateArticle])

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount)
    }, [handleRateArticle])

    if (isLoading) {
        return <Skeleton width="100%" height={120} />
    }

    const rating = data?.[0]

    return (
      <RatingCard
        onCancel={onCancel}
        onAccept={onAccept}
        rate={rating?.rate}
        className={className}
        title={t('rate the article')}
        feedbackTitle={t('leave feedback for quality')}
        hasFeedback={!!rating?.feedback}
      />
    )
})

ArticleRating.displayName = 'ArticleRating'

export default ArticleRating
