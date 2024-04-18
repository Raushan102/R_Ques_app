
import GameCompleteLogo from '../assets/quiz-complete.png'

export default function GameOver()
{
    return (
      <div className="quesCompleter_container">
        <div>
          <img src={GameCompleteLogo} alt="gameOverLogo" />
        </div>

        <h1>Quiz completed</h1>
      </div>
    );
}