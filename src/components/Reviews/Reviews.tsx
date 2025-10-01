'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Aayush",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The villa looked even better than the photos. Some spaces weren't even shown but were clean and well-maintained. The caretaker, Mulayam Bhaiya, was helpful and made amazing breakfast!"
  },
  {
    id: 2,
    name: "Adarsh",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Rehan was an amazing host. The villa was much better than the photos! Mulayam ensured everything was clean and taken care of. The location was perfect. We had a smooth stay!"
  },
  {
    id: 3,
    name: "Aman",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The stay was amazing. The caretakers made a delicious breakfast, the best food we had in Goa. The owner also checked in multiple times to ensure we had no issues. A wonderful experience!"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section className="bg-black py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Reviews Badge */}
        <div className="flex justify-center mb-8">
          <span 
            className="text-black px-4 py-2 rounded-full text-sm font-medium inline-block"
            style={{ backgroundColor: '#E4DD60' }}
          >
            Reviews
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            See what people have<br />
            to say about their<br />
            experience
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {getVisibleReviews().map((review, index) => (
            <div
              key={`${review.id}-${currentIndex}-${index}`}
              className="bg-gray-800 rounded-3xl p-8 h-full flex flex-col min-h-[320px]"
              style={{ backgroundColor: '#2D2D2D' }}
            >
              {/* Review Text */}
              <p className="text-white text-lg leading-relaxed mb-8 flex-grow font-normal">
                {review.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">{review.name}</h4>
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-gray-800 transition-colors bg-transparent"
            aria-label="Previous reviews"
            style={{ borderColor: '#666666' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-gray-800 transition-colors bg-transparent"
            aria-label="Next reviews"
            style={{ borderColor: '#666666' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;