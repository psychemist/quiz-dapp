import { useState } from "react"
import Button from "./Button";
import QuizAnswer from "./QuizAnswer";
import QuizQuestion from "./QuizQuestion";
import questionSet from "../assets/questions"

const questions = [0, 1, 2, 3, 4, 5, 6]

export default function QuizContainer() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);

  const incrementIndex = (questionIndex) => {
    setQuestionIndex(questionIndex + 1);
  }

  const decrementIndex = (questionIndex) => {
    setQuestionIndex(questionIndex - 1);
  }

  return (
    <>
      <h1 className="text-teal-500">Solidity Quiz</h1>

      <QuizQuestion questionIndex={questionIndex} />

      {!quizStarted && questionIndex === 0 ? <Button className="button">START</Button> : ""}

      {!!quizStarted && questionIndex > 0 ? <Button className="button" index={questionIndex} handleClick={decrementIndex}>Previous</Button> : ""}
      {!!quizStarted && questionIndex < 6 ? <Button className="button" index={questionIndex} handleClick={incrementIndex}>Next</Button> : ""}

      {!!quizStarted && questionIndex === 6 ? <Button className="button">SUBMIT</Button > : ""}

      <p>{questionIndex}</p>
    </>
  )
}
