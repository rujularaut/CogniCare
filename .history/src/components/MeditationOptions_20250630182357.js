import React from 'react';
import TiltedCard from './TiltedCard';
import { useNavigate } from 'react-router-dom';
import './MeditationOptions.css'; // You'll style it here
import calmImg from '../assets/calm.png';
import breatheImg from '../assets/breathe.png';
import './MeditationOptions.css';
import ChromaGrid from '../components/ChromaGrid';



const MeditationOptions = () => {
  const navigate = useNavigate();
  const chromaItems = [
  {
    image: calmImg,
    title: "Cosmic Touch",
    subtitle: "Cursor Meditation",
    handle: "@cosmic",
    borderColor: "#B38BFF",
    gradient: "linear-gradient(145deg, #B38BFF, #1a1a2e)",
    url: "/meditationroom"
  },
  {
    image: breatheImg,
    title: "Meditation Room",
    subtitle: "Choose sound + wallpaper",
    handle: "@ambient",
    borderColor: "#A066FF",
    gradient: "linear-gradient(145deg, #A066FF, #1a1a2e)",
    url: "/breathing"
  }
];


  return (
    <div className="meditation-options-page">
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
    </div>
  );
};

export default MeditationOptions;
