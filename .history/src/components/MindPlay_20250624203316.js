import { useEffect, useState } from 'react';
import DecryptedText from './DecryptedText';

const MindPlay = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setShouldAnimate(true), 800); // small delay
  }, []);

  return (
    <section className="mindplay-section">
      <DecryptedText
        text="MindPlay"
        animateOn={shouldAnimate ? 'hover' : 'none'}
        revealDirection="center"
        speed={40}
      />
      <p>Tap into fun. Tune out stress.</p>
    </section>
  );
};

export default MindPlay;
