import React from 'react';

function Cards({ item }) {
  if (!item) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
    }

    if (halfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }

    return stars;
  };

  return (
    <div className="p-6">
      <div className="card w-92 bg-base-100 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105 relative">
        {/* Image */}
        <figure className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
          <img
            loading="lazy"
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-auto object-contain"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x200?text=Course+Image";
            }}
          />
        </figure>

        {/* Card Body */}
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{item.name}</h2>
          <p className="text-sm mb-4">{item.description}</p>

          {/* Duration line */}
          <div className="text-sm font-lg mb-1">Duration: {item.duration}</div>

          {/* Rating line */}
          <div className="flex items-center gap-2 text-2xl mb-2">
            <div className="flex">{renderStars(item.rating)}</div>
            <span className="text-sm text-gray-500">({item.rating})</span>
          </div>

          {/* Instructor */}
          <div className="text-sm text-gray-600 mt-2">By {item.instructor}</div>

          {/* Free badge (positioned to bottom-right) */}
          <div className="absolute bottom-4 right-4">
            <div className="badge badge-secondary font-bold">Free</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
