import React from 'react'
import list from "../list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards.jsx'

function FreeCourse() {
    const filterData = list.filter((data)=> data.price=== 0);

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4'>
       <div>
         <h1 className='font-bold text-4xl pd-2 bg '>Free Course Offered</h1>
        <p className='font-semibold text-xl pd-2 pt-2'>Explore our collection of free courses and enhance your skills.</p>

       </div>
    
    <div>
        <div className="slider-container">
      <Slider {...settings}>
       {filterData.map((item) => (
         <Cards item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </div>
    </>
  )
}

export default FreeCourse