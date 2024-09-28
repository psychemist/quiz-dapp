import React from 'react';

export default function ScoreDisplay({ score, totalQuestions, onRestart }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-teal-600 mb-2">Quiz Completed!</h2>
            <p className="text-lg mb-4">Your Score: {score} out of {totalQuestions}</p>
            <button
                className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300"
                onClick={onRestart}
            >
                Restart Quiz
            </button>
        </div>
    );
}