import React from 'react';
import Typed from 'typed.js';

function ImaTxt() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['\&nbsp;Developer', 'n\&nbsp;AI Enthusiast', '\&nbsp;Data Analyst', '\&nbsp;Prompt Engineer', '\&nbsp;Digital Artist'],
      typeSpeed: 100,
      backSpeed: 57,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default ImaTxt;
