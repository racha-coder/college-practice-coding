import { useState } from 'react';
import './App.css';
import { data } from './data/App';
import logo from '../public/logo.png'

const App = () => {


  const [questions, setQuestions] = useState(data);
  const [index, setIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [error, setError] = useState("");
  const [isGameOver, setGameOver] = useState(false);
  const { options, correctAnswer, questionNumber, question } = questions[index];

  function handleClick() {
    if (index === questions.length - 1) {
      setGameOver(true);
      return;
    }
    if (index > questions.length - 1) {
      return;
    }
    if (selected < 0) {
      setError("Please select an option and press Next !");
      setTimeout(() => {
        setError("");
      }, 3000)
      return;
    }
    if (options[selected] === correctAnswer) {
      setCorrectAnswerCount(prev => prev + 1);
    }
    setIndex(index + 1);
    setSelected(-1);
  }

  return (
    <>
      <div className="wrapper">
        <header>
          <img src={logo} alt={logo} />
          Quiz App
        </header>
        {
          error &&
          <div className="error">
            {
              error
            }
            <span>i</span>
          </div>
        }
        {!isGameOver
          ?
          <>
            <div className="question-number">{index + 1} / {questions.length}</div>
            <div className='question-wrapper'>
              <h2 className='question'>
                {questionNumber}
                .&nbsp;&nbsp;
                {question}
              </h2>
              <div className="option-wrapper">
                {
                  options.sort().map((option, i) => (
                    <div
                      key={i}
                      className={`option ${selected === i ? 'bg-green' : ''}`}
                      onClick={() => setSelected(i)}
                    >
                      <span className=''>{String.fromCharCode(i + 65)}.</span>
                      <span className="">{option}</span>
                    </div>
                  ))
                }
              </div>
              <div className="button-wrapper">
                <button
                  className='skip'
                  type='button'
                  onClick={() => {
                    if (index === questions.length - 1) {
                      setGameOver(true);
                      return;
                    }
                    if (index > questions.length - 1) {
                      return;
                    }
                    setIndex(index + 1);
                  }}
                >
                  Skip
                </button>
                <button
                  className='next'
                  type='button'
                  onClick={handleClick}
                >
                  Next
                </button>
              </div>
            </div>
          </>
          :
          <>
            <div className="result">
              <div className="">You Answered</div>
              <div className="">{correctAnswerCount} / {questions.length}</div>
              <div className="">Correctly</div>
              <div
                className="go-again"
                onClick={() => {
                  setGameOver(false);
                  setIndex(0);
                }}
              >
                Go Again
              </div>
            </div>
          </>}
      </div>
    </>
  )
}

export default App