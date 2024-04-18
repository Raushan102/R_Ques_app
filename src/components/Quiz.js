import Questions from "../assets/Question";
import GameOver from "./GameOver";
import { useState, useCallback } from "react";
import ProgressBar from "./ProgressBar";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);

  const activeQuestionIndex = answers.length;
  console.log(activeQuestionIndex);
  const activeQuestion = Questions[activeQuestionIndex];


  const handleSelectedAnswer = useCallback((pickedAnswer) => {
    setAnswers((prevAnswers) => [...prevAnswers, pickedAnswer]);
  }, []);


  const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null);
  }, [handleSelectedAnswer]);

  if (activeQuestionIndex >= Questions.length) {
    return <GameOver />;
  }

  const copyOfAnswerArray=[...activeQuestion.answers]

  const optionOrder = copyOfAnswerArray.sort(() => Math.random() - 0.5);

  return (
    <div className="MainQuestion_container">
      <ProgressBar
        Time={5000}
        onTimeOut={handleSkipAnswer}
        key={activeQuestionIndex}
      />
      <p className="question">{activeQuestion.text}</p>
      <ul>
        {optionOrder.map((answer) => (
          <li key={answer}>
            <button onClick={() => handleSelectedAnswer(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
