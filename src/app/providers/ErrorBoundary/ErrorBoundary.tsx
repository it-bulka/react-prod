import {
  Component, ErrorInfo, ReactNode, Suspense
} from 'react'
import { ErrorPage } from 'widgets/ErrorPage'

interface ErrorBoundaryProps {
  children: ReactNode
}
interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // log the error to an error reporting service
    // eslint-disable-next-line  no-console
    console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <Suspense fallback="">
          <ErrorPage />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
