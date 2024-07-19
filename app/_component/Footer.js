import { useState } from "react";

const Footer = () => {
    const [img, setImg] = useState("https://i.pinimg.com/564x/5d/b2/67/5db26738a3ef7bfdf3cbdc06fdc82a51.jpg")
    const handleImageChange = () => {
        setImg("https://i.pinimg.com/564x/3a/e1/40/3ae1404bdd82de7aac7afc3a8e2f121c.jpg");
    }

    const handleImageChangeonLeave = () => {
        setImg("https://i.pinimg.com/564x/5d/b2/67/5db26738a3ef7bfdf3cbdc06fdc82a51.jpg");
    }

    return (
        <>
            <div className="mt-10 ">

                <div className="flex">
                    <div className="" onMouseEnter={handleImageChange} onMouseLeave={handleImageChangeonLeave}>
                        <img src={img} alt="image" className="object-cover h-36 w-36 ml-10  brightness-110  rounded-xl" />
                        <span className="ml-10 font-serif font-semibold">2024 Gaurav Rawat</span><br />
                        <span className="ml-10 font-serif font-semibold">Made with <span className="text-red-500">❤</span></span><br />

                    </div>

                    <div className="flex gap-10 ml-auto mr-10">
                        <div className="h-34 w-36">
                            <span className="font-semibold text-gray-400">N A V I G A T E </span>
                            <span className="font-extralight cursor-pointer">Work</span><br />
                            <span className="font-extralight cursor-pointer">Info</span><br />
                            <span className="font-extralight cursor-pointer">Resume</span><br />
                        </div>
                        <div className=" h-34 w-36">

                            <span className="font-semibold text-gray-400">C O N T A C T </span>
                            <span className="font-extralight cursor-pointer">LINKED IN</span><br />
                            <span className="font-extralight cursor-pointer">EMAIL</span><br />
                            {/* <span className="font-extralight cursor-pointer">Resume</span><br/> */}
                        </div>



                    </div>
                </div>


                <div className=" mt-10 mb-4 text-center">
                    Let's Get In Touch Send Me an Email
                </div>
            </div>


        </>)
}

export default Footer