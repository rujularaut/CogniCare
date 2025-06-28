import React from 'react';
import './MindPlay.css';
import DecryptedText from './DecryptedText';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TiltedCard from './TiltedCard';
import recallImg from '../assets/recall.png';
import reactionImg from '../assets/reaction.png';




const MindPlay = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="mindplay-section">
  <div className="mindplay-layout">
    
    {/* Left: Title */}
    <motion.div
      className="vertical-decrypt"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <DecryptedText
        text="MINDPLAY"
        animateOn={isInView ? 'hover' : 'none'}
        revealDirection="center"
        speed={250}
        maxIterations={50}
        sequential={true}
        className="revealed"
        encryptedClassName="encrypted"
      />
    </motion.div>

    {/* Right: Game Cards */}
    <div className="mindplay-cards">
  <TiltedCard
    imageSrc={recallImg}
    altText="Number Recall Game"
    captionText="Number Recall"
    containerHeight="300px"
    containerWidth="280px"
    imageHeight="300px"
    imageWidth="280px"
    rotateAmplitude={12}
    scaleOnHover={1.1}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={<p className="tilted-card-demo-text">Click to Play</p>}
  />

  <TiltedCard
    imageSrc={reactionImg}
    altText="Reaction Game"
    captionText="Reaction Speed"
    containerHeight="300px"
    containerWidth="280px"
    imageHeight="300px"
    imageWidth="280px"
    rotateAmplitude={12}
    scaleOnHover={1.1}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={<p className="tilted-card-demo-text">Click to Play</p>}
  />
</div>
    </section>
  );
};


export default MindPlay;
