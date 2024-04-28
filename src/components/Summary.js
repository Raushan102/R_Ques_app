import Quiz_completed_logo from "../assets/quiz-complete.png";
import Questions from "../assets/Question";
export default function Summary({ userAnswers }) {
  let skippedAnswer = userAnswers.filter((answer) => answer === null);
  let correctAnswer = userAnswers.filter(
    (answer, index) => Questions[index].answers[0] === answer
  );
  let incorrectAnswer = userAnswers.filter(
    (answer, index) => Questions[index].answers[0] !== answer && answer !== null
  );

  let skippedAnswerPercentage = Math.round(
    (skippedAnswer.length / Questions.length) * 100
  );
  let correctAnswerPercentage = Math.round(
    (correctAnswer.length / Questions.length) * 100
  );
  let incorrectAnswerPercentage = Math.round(
    (incorrectAnswer.length / Questions.length) * 100
  );

  return (
    <div id="summary">
      <img src={Quiz_completed_logo} alt="quiz_completed_image" />
      <h2>Quiz completed</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerPercentage}%</span>
          <span className="text">correct answer</span>
        </p>
        <p>
          <span className="number">{incorrectAnswerPercentage}%</span>
          <span className="text">incorrect answer</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === Questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className={cssClass}>{answer === null ? "skipped" : answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
