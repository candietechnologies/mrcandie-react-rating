import React, { useMemo, useState } from "react";
import { AiFillStar } from "react-icons/ai";

export function Rate({
  count,
  rating,
  color,
  onRating,
  readonly = true,
  size,
}: any) {
  const [hoverRating, setHoverRating]: any = useState(0);

  const getColor = (index: number) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating: any = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx: number) => (
        <AiFillStar
          key={idx}
          size={size ? size : "25px"}
          className="cursor-pointer"
          onClick={() => !readonly && onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => !readonly && setHoverRating(idx)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {starRating}
    </div>
  );
}

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};
