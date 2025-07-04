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
  loading="lazy",
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

  const handleMouseEnter = () => {
    scale.set(scaleOnHover);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    setIsHovered(false);
  };

  return (
    <figure
      className="tilted-card-figure"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        height: containerHeight,
        width: containerWidth,
        cursor: "pointer",
      }}
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
        <img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
          loading="lazy"
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="tilted-card-overlay">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <figcaption
          className="tilted-card-caption"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}