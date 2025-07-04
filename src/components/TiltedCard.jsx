import { useState } from "react";
import { motion, useSpring } from "framer-motion";
import "./TiltedCard.css";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  showMobileWarning = false,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  onClick, 
}) {
  const scale = useSpring(1, springValues);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    scale.set(1);
    setIsHovered(false);
  }

  return (
    <figure
      onClick={onClick}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
        cursor: 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className={`tilted-card-inner ${isHovered ? "hovered" : ""}`}
        style={{
          width: imageWidth,
          height: imageHeight,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="tilted-card-overlay">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
