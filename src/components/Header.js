
import page_logo from '../assets/quiz-logo.png'
export default function Header()
{
    return (
      <header>
        <img src={page_logo} alt="quiz logo" />
        <h1>ReactQuiz</h1>
      </header>
    );
}