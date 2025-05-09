import React, { useState } from "react";
import { motion } from "framer-motion";

const CardHover = ({ title, shortText, longDescription, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="card text-center h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{shortText}</p>
          {isHovered && (
            <div className="card-text small mt-3">{longDescription}</div>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-3"
          >
            View Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CardHover;
