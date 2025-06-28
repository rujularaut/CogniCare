import React, { useRef } from 'react';
import './MindPlay.css';
import DecryptedText from './DecryptedText';
import { motion, useInView } from 'framer-motion';
import TiltedCard from './TiltedCard';
import recallImg from '../assets/recall.png';
import reactionImg from '../assets/reaction.png';
import { useNavigate } from 'react-router-dom';

const MindPlay = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="mindplay-section" id="mindplay" ref={ref}>
      <div className="mindplay-heading">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <DecryptedText
            text="MINDPLAY"
            animateOn="view"
            revealDirection="center"
            speed={200}
            maxIterations={60}
            sequential={true}
            className="revealed"
            encryptedClassName="encrypted"
          />
        </motion.div>
      </div>

      <div className="mindplay-cards">
        <div className="card-with-text">
        <TiltedCard
          imageSrc={recallImg}
          altText="Number Recall Game"
          captionText="Click to play"
          containerHeight="350px"
          containerWidth="320px"
          imageHeight="350px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text">Number Recall</p>}
        />
        <p className="card-description">Quick! Memorize the numbers and tap them in order before time runs out. Levels get trickier—can you keep up?</p>
  </div>


  <div className="card-with-text">
        <TiltedCard
          imageSrc={reactionImg}
          altText="Reaction Game"
          captionText="Click to play"
          containerHeight="350px"
          containerWidth="320px"
          imageHeight="350px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text">Focus Flick</p>}
        />
        <p className="card-description">See a circle? Tap fast! You’ve got 3 lives, and every miss costs one. How long can you keep up?</p>
      </div>
    </div>  
    </section>
  );
};

export default MindPlay;
