import React from 'react';

function Cards({ item }) {
  // Generates filled and unfilled stars based on item.rating
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

  console.log(item);
  return (
    <div className="p-6 ">
      <div className="card w-96 bg-base-100 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105">
        <figure className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
          <img
            loading="lazy"
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-auto object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{item.name}</h2>
          <div className="card-actions justify-end flex flex-wrap gap-2">
            <div className="mr-55 font-medium ">Duration: {item.duration}</div>
            <div className="flex items-center text-xl mr-55 mb-2">
            <div className="flex">{renderStars(item.rating)}</div>
            <span className="text-sm text-gray-500">({item.rating})</span>
          </div>
            <div className="badge badge-secondary font-bold">Free</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
