import Image from "next/image"
import CPP from "../../public/CPP.jpg"
import CSS from "../../public/CSS.jpg"
import firebase from "../../public/firebase.jpg"
import HTML from "../../public/HTML.jpg"
import JS from "../../public/JS.jpg"
import Nextjs from "../../public/Nextjs.jpg"
import React from "../../public/React.jpg"
import Tailwind from "../../public/Tailwind.jpg"
import Express from "../../public/express.jpg"
import Node from "../../public/Node.jpg"


const Header = () => {
    return (
        <><div className="h-96 w-full bg-black flex flex-col justify-center items-center">
            <span className="text-white block mb-2 text-8xl"><p>&lt;/&gt;</p></span>
            <div className="flex">
                <span className="text-green-600 text-sm">C O D E</span>
                <span className="text-white ml-2 text-sm">T I L L</span>
                <span className="text-red-600 ml-2 text-sm">E N D</span>
            </div>
        </div>
            <div className="font-bold text-xl mt-5 ml-5 underline font-serif">S K I L L S</div>
            <div className="container mx-auto my-16 px-4">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-6 lg:grid-cols-8 p-4">
                    {/* 1. Large item spanning two columns and two rows */}
                    <div className="col-span-2 row-span-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={CPP} alt="C++ logo" width={140} height={140} />
                    </div>

                    {/* 2. Small item spanning one column */}
                    <div className="col-span-1 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={React} alt="React logo" width={80} height={80} />
                    </div>

                    {/* 3. Medium item spanning one column and two rows */}
                    <div className="col-span-1 row-span-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={Nextjs} alt="Next.js logo" width={100} height={100} />
                    </div>

                    {/* 4. Large item spanning two columns */}
                    <div className="col-span-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={Tailwind} alt="Tailwind CSS logo" width={140} height={140} />
                    </div>

                    {/* 5. Small item spanning one column */}
                    <div className="col-span-1 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={firebase} alt="Firebase logo" width={90} height={90} />
                    </div>

                    {/* 6. Large item spanning two columns and two rows */}
                    <div className="col-span-2 row-span-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={HTML} alt="HTML logo" width={130} height={130} />
                    </div>

                    {/* 7. Small item spanning one column */}
                    <div className="col-span-1 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={CSS} alt="CSS logo" width={70} height={70} />
                    </div>

                    {/* 8. Small item spanning one column */}
                    <div className="col-span-1 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={Express} alt="Express logo" width={110} height={110} />
                    </div>

                    <div className="col-span-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={Node} alt="Node.js logo" width={90} height={90} />
                    </div>
                    {/* 9. Small item spanning one column */}

                    {/* 10. Large item spanning two columns */}
                    <div className="col-span-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image src={JS} alt="JavaScript logo" width={110} height={110} />
                    </div>
                </div>
            </div> </>
    )

}

export default Header