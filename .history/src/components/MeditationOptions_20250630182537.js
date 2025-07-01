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
    <div style={{ height: '650px', position: 'relative', width: '100%' }}>
      <ChromaGrid 
        items={chromaItems}
        radius={320}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  </div>
);

};

export default MeditationOptions;
