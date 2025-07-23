import React from 'react'
import list from "../list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards.jsx'

function FreeCourse() {
    console.log("Raw list data:", list); // Debug: Check if JSON loads
    const filterData = list.filter((data)=> data.price === 0);
    console.log("Filtered data:", filterData); // Debug: Check filtered data

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
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20'> {/* Added mt-20 to account for fixed navbar */}
            <div>
                <h1 className='font-bold text-4xl pb-2'>Free Course Offered</h1>
                <p className='font-semibold text-xl pb-2 pt-2'>Explore our collection of free courses and enhance your skills.</p>
            </div>
        
            <div>
                {filterData.length > 0 ? (
                    <div className="slider-container">
                        <Slider {...settings}>
                            {filterData.map((item) => (
                                <Cards item={item} key={item.courseId}/>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <p>No free courses available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default FreeCourse