'use client'
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const Content = ({ data }) => {
    const cards = data;
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards?.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards?.length) % cards?.length);
    };
    if (currentIndex > cards?.length - 3) {
        setCurrentIndex(0)
    }
    return (<>
        <h1 className='mt-5 font-extrabold ml-4 underline'>Q U O T E S 4 Y O U</h1>
        <ScrollAnimation animateIn='fadeIn' delay={50}>
            <div className="mt-10">
                <div className="w-11/12 ">
                    <div className="relative">

                        <div className="flex space-x-8 ml-12">
                            {cards?.slice(currentIndex, currentIndex + 3).map((card, index) => (
                                <div className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md" key={index}>
                                    <img className="w-full h-80 object-cover mb-4 rounded-lg" src={card.image} alt="Card" />
                                    <h3 className="text-lg font-bold">{card.title}</h3>
                                    <p className="text-gray-500">{card.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between  ml-14 relative  bottom-60">
                            <button className="w-10 h-10 rounded-full bg-gray-300  relative right-2" onClick={handlePrev}>&lt;</button>
                            <button className="w-10 h-10 rounded-full bg-gray-300 relative left-16" onClick={handleNext}>&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    </>
    );
};

export default Content;