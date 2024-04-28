import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, skipHandleAnswer }) {
  const [RemainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("set timeout execute");
    const timer = setTimeout(skipHandleAnswer, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, skipHandleAnswer]);




  useEffect(() => {
    console.log("set interval use");
    const interval = setInterval(() => {
      setRemainingTime((previousTime) => previousTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id='question-time' max={timeout} value={RemainingTime} />;
}
