import React, { useState } from 'react';

const questions = [
  {
    questionText: 'What is the first letter of the English alphabet?',
    answerOptions: [
      { answerText: 'A', isCorrect: true },
      { answerText: 'B', isCorrect: false },
      { answerText: 'C', isCorrect: false },
      { answerText: 'D', isCorrect: false },
    ],
  },
  {
    questionText: 'How many legs does a spider have?',
    answerOptions: [
      { answerText: '6', isCorrect: false },
      { answerText: '8', isCorrect: true },
      { answerText: '4', isCorrect: false },
      { answerText: '10', isCorrect: false },
    ],
  },
  {
    questionText: 'What color do you get by mixing red and yellow?',
    answerOptions: [
      { answerText: 'Green', isCorrect: false },
      { answerText: 'Orange', isCorrect: true },
      { answerText: 'Purple', isCorrect: false },
      { answerText: 'Brown', isCorrect: false },
    ],
  },
  {
    questionText: 'Which number comes after 5?',
    answerOptions: [
      { answerText: '6', isCorrect: true },
      { answerText: '7', isCorrect: false },
      { answerText: '8', isCorrect: false },
      { answerText: '4', isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQues = currentQues + 1;
    if (nextQues < questions.length) {
      setCurrentQues(nextQues);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQues(0);
    setScore(0);
    setShowScore(false);
  };

  // Simple styles
  const containerStyle = {
    fontFamily: '"Comic Sans MS", cursive',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  };

  const questionStyle = { fontSize: '1.5rem', marginBottom: '20px' };
  const buttonStyle = {
    padding: '10px 20px',
    margin: '8px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: 'white',
    fontSize: '1rem',
  };
  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#2196f3',
  };

  return (
    <div style={containerStyle}>
      {showScore ? (
        <>
          <h2>
            You scored {score} out of {questions.length}!
          </h2>
          <button style={resetButtonStyle} onClick={resetQuiz}>
            Restart Quiz
          </button>
        </>
      ) : (
        <>
          <div style={questionStyle}>
            <span>
              Question {currentQues + 1}/{questions.length}:
            </span>
            <h3>{questions[currentQues].questionText}</h3>
          </div>
          <div>
            {questions[currentQues].answerOptions.map((option, index) => (
              <button
                key={index}
                style={buttonStyle}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;

