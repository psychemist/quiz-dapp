import { useState } from "react"
import Button from "./Button";
import QuizQuestion from "./QuizQuestion";
import ScoreDisplay from "./ScoreDisplay";
import questionSet from "../assets/questions"

export default function QuizContainer() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
  }

  const decrementIndex = (questionIndex) => {
    setQuestionIndex(questionIndex - 1);
  }

  const incrementIndex = (questionIndex) => {
    setQuestionIndex(questionIndex + 1);
  }

  const updateQuizAnswers = (selectedOption, questionIndex) => {
    const updatedAnswers = [...quizAnswers];

    updatedAnswers[questionIndex] = {
      questionIndex,
      selectedOption,
      correctOption: questionSet[questionIndex].answer,
    };

    setQuizAnswers(updatedAnswers);
  };

  const endQuiz = () => {
    let score = 0;

    quizAnswers.forEach((answer) => {
      if (answer.selectedOption === answer.correctOption) {
        score++;
      }
    });

    setPlayerScore(score);
    setQuizStarted(false);
  }


  return (
    <>
      <h1 className="text-4xl font-bold mb-8 p-2.5 shadow-lg text-teal-500">Solidity Quiz</h1>

      {!!quizStarted
        ? <QuizQuestion
          questionIndex={questionIndex}
          handleSelect={updateQuizAnswers}
          selectedOption={quizAnswers[questionIndex]?.selectedOption} />
        : ""}

      {!quizStarted && questionIndex === questionSet.length - 1
        ? (
          <ScoreDisplay
            score={playerScore}
            totalQuestions={questionSet.length}
            onRestart={() => {
              setQuestionIndex(0);
              setQuizStarted(true);
              setQuizAnswers([]);
              setPlayerScore(0);
            }}
          />)
        : null}

      <div className="flex flex-row justify-evenly content-center mt-3">
        {!quizStarted && questionIndex === 0
          ? <Button
            className="button mt-5 text-teal-400"
            check={quizStarted}
            handleClick={startQuiz}>START</Button>
          : ""}

        {!!quizStarted && questionIndex > 0 && (
          <Button
            className="button mt-5"
            index={questionIndex}
            handleClick={decrementIndex}>
            Previous
          </Button>
        )}

        {!!quizStarted && questionIndex < questionSet.length - 1 && (
          <Button
            className="button mt-5 text-teal-400"
            index={questionIndex}
            handleClick={incrementIndex}>
            Next
          </Button>
        )}

        {!!quizStarted && questionIndex === 6
          ? <Button
            className="button mt-5 text-teal-400"
            check={quizStarted}
            handleClick={endQuiz}>SUBMIT</Button >
          : ""}
      </div>
    </>
  )
}
