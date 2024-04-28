import QuestionTimer from "./QuestionTimer.js";
import Answers from "./Answers";
import Questions from "../assets/Question";
import { useState } from "react";

export default function Question({
  onSkipAnswer,
  index,
  onSelectAnswer,
  mode,
}) {
  const [answer, setAnswer] = useState({
    isCorrect: null,
    selectedAnswer: "",
  });

  function handleSelectAnswer(pickedAnswer) {
    setAnswer({
      isCorrect: null,
      selectedAnswer: pickedAnswer,
    });

    setTimeout(() => {
      setAnswer({
        isCorrect: Questions[index].answers[0] === pickedAnswer,
        selectedAnswer: pickedAnswer,
      });

      setTimeout(() => {
        onSelectAnswer(pickedAnswer);
      }, 2000);
    }, 1000);
  }

  let time = 10000;

  if (answer.selectedAnswer) {
    time = 1000;
  }

  if (answer.isCorrect !== null) {
    time = 2000;
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="quiz">
      <QuestionTimer
        key={time}
        timeout={time}
        skipHandleAnswer={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
      />

      <div id="question">
        <h2>{Questions[index].text}</h2>
        <Answers
          answers={Questions[index].answers}
          selectedAnswer={answer.selectedAnswer}
          handleSelectAnswer={handleSelectAnswer}
          answerState={answerState}
        />
      </div>
    </div>
  );
}
