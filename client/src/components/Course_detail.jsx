import React from 'react';

function Course_detail() {
  const courseList = [
    {
      title: "LIVE CLASSES",
      description: "Thrive in a vibrant learning environment with live classes that foster interaction and immersive learning",
      image: "https://d502jbuhuh9wk.cloudfront.net/orgData/63720d30e4b06ff06d1f4547/pages/assets/images/7ySOVonlinelearning.png"
    },
    {
      title: "INDUSTRY BASED CURRICULUM",
      description: "Dive deep with a meticulously crafted curriculum that navigates the realms of data science with precision and clarity",
      image: "https://d502jbuhuh9wk.cloudfront.net/orgData/63720d30e4b06ff06d1f4547/pages/assets/images/TtwaPsyllabus.png"
    },
    {
      title: "PRACTICAL TRAINING",
      description: "Immerse yourself with tasks, quizzes, and projects following each topic, ensuring that theory marries practice seamlessly.",
      image: "https://d502jbuhuh9wk.cloudfront.net/orgData/63720d30e4b06ff06d1f4547/pages/assets/images/R1sVjworkorder.png"
    },
    {
      title: "EASY TO FOLLOW LANGUAGE",
      description: "Experience the comfort of learning in Hinglish, making complex concepts seem like a friendly chat.",
      image: "https://d502jbuhuh9wk.cloudfront.net/orgData/63720d30e4b06ff06d1f4547/pages/assets/images/nDZmNlanguages.png"
    },
    {
      title: "ROBUST DOUBT SUPPORT",
      description: "Erase uncertainties with robust doubt support, turning every question into a stepping stone toward mastery.",
      image: "https://d502jbuhuh9wk.cloudfront.net/orgData/63720d30e4b06ff06d1f4547/pages/assets/images/H4UPiclient.png"
    },
    {
      title: "REAL-TIME PROJECTS",
      description: "Elevate your expertise with real-time projects that propel your practical understanding into the professional universe.",
      image: "https://d502jbuhuh9wk.cloudfront.net/orgData/63720d30e4b06ff06d1f4547/pages/assets/images/16yJ5presentation.png"
    },
    {
      title: "DEDICATED JOB PREPARATION",
      description: "Harness the power of strategic job preparation that polishes your profile and preps you for your dream job.",
      image: "https://d502jbuhuh9wk.cloudfront.net/orgData/63720d30e4b06ff06d1f4547/pages/assets/images/B5P9Xuntitleddesign20231102t133236.473.png"
    },
    {
      title: "AFFORDABLE FEE STRUCTURE",
      description: "Unlock a treasure trove of knowledge without breaking the bank, with fees that champion affordability and value.",
      image: "https://d502jbuhuh9wk.cloudfront.net/orgData/63720d30e4b06ff06d1f4547/pages/assets/images/16yJ5presentation.png"
    }
  ];

  return (
    <div className="w-full flex justify-center px-4 lg:px-20 ml-10 mb-20 ">
      <div className="max-w-[1400px] w-full">
        <h1 className="text-center text-5xl font-bold mb-13 mt-25 ">Course Details</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseList.map((course, index) => (
            <div
              key={index}
              className="card w-56 h-80 bg-base-100 shadow-md flex flex-col items-center text-center"
            >
              <figure className="w-full h-32 overflow-hidden flex justify-center items-center mt-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full object-contain"
                />
              </figure>
              <div className="card-body px-3 py-2 flex flex-col justify-center items-center">
                <h2 className="card-title text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-md">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course_detail;
