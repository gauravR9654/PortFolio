// import {Logo_1} from "../../public/team_computers_logo.png"
import Image from "next/image"

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const Experience = () => {
    return (
        <>
            <ScrollAnimation animateIn='fadeIn' delay={50}>

                <div className="mb-10">
                    <div className=" p-4 rounded-3xl bg-gray-100 ml-28 mr-28">
                        <span className="mt-4 font-bold block font-serif"> E X P E R I E N C E</span>
                        <hr className="border-gray-400 border-t-1" />
                        <div className="flex mt-11 gap-6 px-4">
                            <div className=" h-32 rounded-xl w-32 ml-10">
                                <Image src="/team_computers_logo.jpg" alt="Logo 1" className="mt-3 rounded-xl" width={150} height={200} />
                            </div>
                            <div className=" w-full h-32">
                                <span className="font-bold text-xl font-serif">Front-End Developer (Intern)</span><br />
                                <span className="font-medium mt-2"> Bheeka Ji Cama Palace, New Delhi</span><br />
                                <span className="font-medium mt-2">Jan 24 - April-24 </span><br />
                                <span className="font-serif">Developed responsive user interfaces, collaborated with teams on projects, and gained proficiency in HTML/CSS, JavaScript, and React.js during internship at Team Computers.</span>

                            </div>
                        </div>
                        <div className="flex mt-11 gap-6 pb-10 px-4">
                            <div className=" h-32 rounded-xl w-32 ml-10">
                                <Image src="/katchin_tech.jpg" alt="Logo 1" className="mt-3 rounded-xl" width={150} height={200} />
                            </div>

                            <div className="w-full h-32">
                                <div className=" w-full h-32">
                                    <span className="font-bold text-xl font-serif">Full Stack Developer (Intern)</span><br />
                                    <span className="font-medium mt-2"> Dwarka sector-19, New Delhi</span><br />
                                    <span className="font-medium mt-2">April 24 - onGoing </span><br />
                                    <span className="font-serif"> Lead development across various projects, utilizing frontend technologies (HTML/CSS, JavaScript, React.js) and backend expertise (Node.js, Express, MongoDB) to deliver scalable solutions, foster team collaboration, and achieve project milestones efficiently.
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            <hr />
            </ScrollAnimation>


        </>
    )

}
export default Experience