import React, { useState } from 'react';
import Section from './Feedback/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
// import Notification from './Feedback/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <p>No feedback given</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default Feedback;

//kod przed refakturyzacją
// const Feedback = () => {
//   const [state, setState] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const handleButtonClick = category => {
//     setState(prevState => ({
//       ...prevState,
//       [category]: prevState[category] + 1,
//     }));
//   };

//   const countTotalFeedback = () => {
//     const { good, neutral, bad } = state;
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const { good } = state;
//     const totalFeedback = countTotalFeedback();
//     return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
//   };

//   return (
//     <div>
//       <Section title="Provide Feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={handleButtonClick}
//         />
//       </Section>

//       <Section title="Statistics">
//         {countTotalFeedback() > 0 ? (
//           <Statistics
//             good={state.good}
//             neutral={state.neutral}
//             bad={state.bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// };

// export default Feedback;
