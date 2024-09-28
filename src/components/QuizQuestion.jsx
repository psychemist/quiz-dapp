import questionSet from "../assets/questions";

export default function QuizQuestion({ questionIndex, handleSelect, selectedOption }) {
  const currentQuestion = questionSet[questionIndex];

  return (
    <>
      <div className="bg-white text-teal-600 p-6 rounded-lg shadow-md mb-4">
        {currentQuestion.question}
      </div>

      <div className="choices-container flex flex-col space-y-2 mt-4">
        {currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            className={`py-2 rounded-md shadow transition duration-300 transform focus:outline-none 
              ${selectedOption === index ? 'bg-teal-700 text-white' : 'bg-teal-500 text-white hover:bg-teal-600'}`}
            onClick={() => handleSelect(index, questionIndex)}>
            {choice}
          </button>
        ))}
      </div>
    </>
  );
}
