import React from "react";
import { AiFillStar } from "react-icons/ai";

export function Rating({
  rating,
  color,
  onRating,
  readonly = true,
  size,
  hoverRating,
  setHoverRating,
}: any) {
  const getColor = (index: number) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {[1, 1, 1, 1, 1].map((el: any, idx: number) => (
        <AiFillStar
          key={idx}
          size={size ? size : "25px"}
          className="cursor-pointer"
          onClick={() => !readonly && onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => !readonly && setHoverRating(idx)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
        />
      ))}
    </div>
  );
}

Rating.defaultProps = {
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};
