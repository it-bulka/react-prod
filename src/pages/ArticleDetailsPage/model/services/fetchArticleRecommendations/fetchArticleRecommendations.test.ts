import { TestAsyncThunk } from '@/shared/libs/test/TestAsyncThunk/TestAsyncThunk'
import {
  fetchArticleRecommendations
} from './fetchArticleRecommendations'

const articles = Array(4).fill({
  'id': '1',
  'title': 'Javascript news',
  'subtitle': "What's new in JS in 2022?",
  'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  'views': 1022,
  'createdAt': '26.02.2022',
  'userId': '1',
  'type': [
    'IT'
  ],
  'blocks': [
    {
      'id': '9',
      'type': 'TEXT',
      'title': 'Title of this block',
      'paragraphs': [
        "JavaScript is a language that can run in different environments. In our case, we're talking about browsers and the Node.js server platform. If you haven't written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means you are literally seconds away from your first JavaScript program."
      ]
    }
  ]
})

describe('fetchArticleRecommendations', () => {
  it('should work successfully', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations)
    thunk.api.get.mockResolvedValue({ data: articles })
    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(articles)
  })

  it('should work failure', async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations)
    thunk.api.get.mockRejectedValue('error')
    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
