import { useState } from "react"
import Button from "./Button";
import QuizQuestion from "./QuizQuestion";
import useQuiz from "../hooks/useQuiz";
import questionSet from "../assets/questions"

export default function QuizContainer() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
  }

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


  const incrementIndex = (questionIndex) => {
    setQuestionIndex(questionIndex + 1);
  }

  const decrementIndex = (questionIndex) => {
    setQuestionIndex(questionIndex - 1);
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


  return (
    <>
      <h1 className="text-teal-500">Solidity Quiz</h1>

      {!!quizStarted
        ? <QuizQuestion questionIndex={questionIndex} handleSelect={updateQuizAnswers} />
        : ""}

      {!quizStarted && questionIndex === 0
        ? <Button className="button" check={quizStarted} handleClick={startQuiz}>START</Button>
        : ""}

      {/* {!!quizStarted && questionIndex > 0 ? <Button className="button" index={questionIndex} handleClick={decrementIndex}>Previous</Button> : ""}
      {!!quizStarted && questionIndex < 6 ? <Button className="button" index={questionIndex} handleClick={incrementIndex}>Next</Button> : ""} */}

      {!!quizStarted && questionIndex > 0 && (
        <Button className="button" index={questionIndex} handleClick={decrementIndex}>
          Previous
        </Button>
      )}

      {!!quizStarted && questionIndex < questionSet.length - 1 && (
        <Button className="button" index={questionIndex} handleClick={incrementIndex}>
          Next
        </Button>
      )}

      {!!quizStarted && questionIndex === 6
        ? <Button className="button" check={quizStarted} handleClick={endQuiz}>SUBMIT</Button >
        : ""}

      <p>{questionIndex}</p>
      <p>{playerScore}</p>
    </>
  )
}
