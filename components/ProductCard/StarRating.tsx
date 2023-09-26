import React from "react";
import styled from "styled-components";

const StarContainer = styled.div`
  display: inline-flex;
  font-size: 1.25rem;
  color: #ffd700; /* Yellow color for filled stars */
`;

const FullStar = ({ size = 18, color = "#ffd700" }) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

const HalfStar = ({ size = 18, color = "#ffd700" }) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

const EmptyStar = ({ size = 18, color = "#ffd700" }) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

interface StarRatingProps {
  value: number;
}

const StarRating: React.FC<StarRatingProps> = ({ value }) => {
  const filledStars = Math.floor(value);
  const hasHalfStar = value - filledStars >= 0.5;

  return (
    <StarContainer>
      {[...Array(5)].map((_, index) => {
        if (index < filledStars) {
          // Render a filled star
          return <FullStar key={index} />;
        } else if (hasHalfStar && index === filledStars) {
          // Render a half-filled star
          return <HalfStar key={index} />;
        } else {
          // Render an empty star
          return <EmptyStar key={index} />;
        }
      })}
    </StarContainer>
  );
};

export default StarRating;
