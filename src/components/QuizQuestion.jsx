import questionSet from "../assets/questions"

export default function QuizQuestion({ questionIndex, handleSelect }) {
  const currentQuestion = questionSet[questionIndex];

  return (
    <>
      <div>
        {currentQuestion.question}
      </div>

      <div className="choices-container">
        {currentQuestion.choices.map((choice, index) => (
          <button
            className="py-2 px-4 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors choice-button"
            key={index}
            // className="choice-button"
            onClick={() => handleSelect(index, questionIndex)}>
            {choice}
          </button>
        ))}
      </div>
    </>
  );
}
