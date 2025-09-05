import React from "react";
import { Star } from "lucide-react"; // small star icon
import type { Review } from "../../store/types";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const formattedDate = new Date(review.date).toLocaleDateString();

  return (
    <div className="border-gray-700 rounded-lg p-4 shadow-sm bg-white">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-700 mb-3">{review.comment}</p>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
        <span>
          {review.reviewerName} <br />({review.reviewerEmail})
        </span>
      </div>
      <span className="text-sm text-gray-500">{formattedDate}</span>
    </div>
  );
};

export default ReviewCard;
