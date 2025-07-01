import React from 'react';
import TiltedCard from './TiltedCard';
import { useNavigate } from 'react-router-dom';
import './MeditationOptions.css'; // You'll style it here
import calmImg from '../assets/calm.png';
import breatheImg from '../assets/breathe.png';
import './MeditationOptions.css';


const MeditationOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="meditation-options-page">
  {/* Cosmic Touch Card */}
  <div className="card-with-tagline">
    <TiltedCard
      imageSrc={calmImg}
      altText="Splash Cursor Meditation"
      captionText="Click to begin"
      containerHeight="320px"
      containerWidth="300px"
      imageHeight="320px"
      imageWidth="300px"
      scaleOnHover={1.1}
      rotateAmplitude={12}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text">Cosmic Touch</p>}
      onClick={() => navigate('/meditationroom')}
    />
    <p className="meditation-tagline">
      Move your cursor. Paint with light. Flow with your energy.
    </p>
  </div>

  {/* Meditation Room Card */}
  <div className="card-with-tagline">
    <TiltedCard
      imageSrc={breatheImg}
      altText="Breathing Meditation"
      captionText="Click to begin"
      containerHeight="320px"
      containerWidth="300px"
      imageHeight="320px"
      imageWidth="300px"
      scaleOnHover={1.1}
      rotateAmplitude={12}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text">Meditation Room</p>}
      onClick={() => navigate('/breathing')}
    />
    <p className="meditation-tagline">
      Choose your sound. Set your space. Begin your inner journey.
    </p>
  </div>
</div>

  );
};

export default MeditationOptions;
