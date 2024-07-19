
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"



const Intro = () => {

    return (
        <>
            <ScrollAnimation animateIn='fadeIn'>
                <div className="flex  gap-4 m-20">
                    <div className="h-96 w-full flex justify-end items-center">
                        {/* HEllooo */}
                        <h1><span className="text-4xl">This is my story</span> <br /> <span className='text-gray-500'>In 2024, I graduated with an Btech CSE degree from Chandigarh Group of College. Though I loved the freedom of tangible design practice, I was greatly dissatisfied with just how slow the industry actually moved.<br />
                            But I wanted more<br />
                            It’s all about the right choices - who to work with and how. You'll never stop learning. my employment at Katchin Tech and Team Computers motivated me to explore more and immersive media tech.<br />
                        </span></h1><br />

                    </div>
                    <div className="bg-red-300 h-96 w-full">
                        <img src="https://i.pinimg.com/736x/0a/8e/05/0a8e054ffb323625f237baddae4a3182.jpg" alt='' className='object-cover h-96 w-full' />

                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'>
                <div className="flex  gap-4 m-20">
                    <div className="bg-red-300 h-96 w-full">
                        <img src="https://i.pinimg.com/564x/83/81/5c/83815cafe3576db2c29df1fbe1446a1d.jpg" alt='' className='object-cover h-96 w-full'/>
                    </div>
                    <div className="h-96 w-full flex justify-end items-center">
                        {/* HEllooo */}
                        <h1><span className="text-4xl">Making it all happen</span><span className='text-gray-500'> <br />Long story short, I was able to leverage my design background and rational mindset
                            Freedom to explore at the workplace, failing early in the process, paying meticulous attention to detail, and translating design decisions into business decisions that meets the user's goals.</span></h1><br />

                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'>
                <div className="flex  gap-4 m-20">
                    <div className="h-96 w-full flex justify-end items-center">
                        {/* HEllooo */}
                        <h1><span className="text-4xl">My background in Tech Industry </span> <span className='text-gray-500'> <br />Long story short, I was able to leverage my design background and rational mindset
                            Freedom to explore at the workplace, failing early in the process, paying meticulous attention to detail, and translating design decisions into business decisions that meets the user's goals.
                        </span></h1><br />
                    </div>
                    <div className="bg-red-300 h-96 w-full">
                        <img src="https://i.pinimg.com/474x/fc/c0/5e/fcc05e6a6f031866a705ab705368bc99.jpg" alt='' className='object-cover h-96 w-full' />
                    </div>
                </div>
            </ScrollAnimation >
            <ScrollAnimation animateIn='fadeIn'>

                <div>
                    <div className='w-full h-40'>
                        <span className='flex justify-center items-center py-3 text-4xl font-serif font-bold'>
                            Besides professional work
                        </span>
                        <span className='flex justify-center text-center text-gray-400 items-center py-3 px-6 text-lg font-serif '>
                            When I'm not working on projects, you'll find me at the gym or travelling the world. Exploring nature or trekking provides never-ending inspiration and curiosity for my creative endeavours
                        </span>
                    </div>
                    <div className=' w-full h-96 px-28 mb-32'>
                        <img src='https://framerusercontent.com/images/0x7uKIzvAYcjaThbG7zWqYTY.png' alt='' className='h-full w-full object-cover rounded-3xl' />

                        <div className='text-center font-bold mt-2 font-serif'> Thanks for Stopping by !</div>
                    </div>
                </div>
            </ScrollAnimation >

        </>
    )

}

export default Intro;