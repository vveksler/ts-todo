import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="container" data-test-id="queryAllByTestId">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
        animi vitae consequuntur expedita eius ipsam repudiandae
        molestias necessitatibus iusto quos.
            </p>
      <button className="btn" onClick={() => history.push('/')}>
        Return back to todos list
            </button>
    </div>
  );
};
