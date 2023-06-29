import React from 'react';
// import styles from './Feedback/Feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Section;
