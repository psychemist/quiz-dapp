import './App.css'
import ErrorBoundary from './components/errors/ErrorBoundary'
import QuizContainer from './components/QuizContainer'

function App() {
    return (
        <ErrorBoundary>
            <QuizContainer className="container" />
        </ErrorBoundary>
    )
}

export default App
