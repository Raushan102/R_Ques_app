import { useState, useCallback, useRef } from "react";
import Questions from "../assets/Question";
import Quiz_completed_logo from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const shuffledAnswers=useRef()
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");

      setUserAnswers((previous_answers) => {
        return [...previous_answers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === Questions[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={Quiz_completed_logo} alt="quiz_completed_image" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  if (!shuffledAnswers.current){
      shuffledAnswers.current = Questions[activeQuestionIndex].answers;
      shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
 

  return (
    <div id="quiz">
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        skipHandleAnswer={handleSkipAnswer}
      />

      <div id="question">
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.current.map((answer, index) => {
            const isSelected=userAnswers[userAnswers.length-1]===answer
            let cssClasses='';

            if(answerState==='answered'&&isSelected)
            {
              cssClasses='selected'
            }

            if((answerState==='correct' || answerState==='wrong')&&isSelected)
            {
              cssClasses=answerState
            }




            return (
              <li className="answer" key={index}>
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClasses}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
