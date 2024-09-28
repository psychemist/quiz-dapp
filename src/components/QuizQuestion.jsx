import questionSet from "../assets/questions"

export default function QuizQuestion({ questionIndex }) {
  const currentQuestion = questionSet[questionIndex]

  return (
    <>
      <div>
        {currentQuestion.question}
      </div >
      <ul>
        {currentQuestion.choices.map((choice, index) => (
          <li key={index}>{choice}</li>
        ))}
      </ul>
    </>
  )
}