import { useState, useCallback } from "react";
import Questions from "../assets/Question";
import Summary from "./Summary.js";



import Question  from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =userAnswers.length
  const quizIsComplete = activeQuestionIndex === Questions.length;



  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
     

      setUserAnswers((previous_answers) => {
        return [...previous_answers, selectedAnswer];
      });

    },
      
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <Question
      key={activeQuestionIndex}
      onSkipAnswer={handleSkipAnswer}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
    />
  );
}
