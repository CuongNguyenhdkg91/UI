// slide frame
// motion media - ref dota2.com
// greeting introduction text
// some hot news (3) that source from any website and reprocess by function - record the datetime of reading
// plan on left side bar - ref. premierleague.com - can use the khenthuong list involving 2023 & 2024
// advertisment on right side bar - ref 24h.com.vn
// image collection in art style

// introduce about yourself

// image and media need to be added by hook and effect not by html link

// insert the document link to code into the element or use function event Onclick fetch link from database server can show list link to pick

// prepare a dark mode

import Image from "next/image"

const home = () => {
    return (
        <div> 
            <div id="sec1" className="relative">
                <div className="bg-gradient-to-r from-blue-900 to-cyan-500">
                    <div className="flex justify-center items-center">
                        <Image src='/smart-factory.png' width={1150} height={816} alt='smart factory industry 4.0' 
                        className="h-[65vh] min-w-0"/>
                    </div>
                </div>

                {/* <div className="absolute bottom-0 w-full h-[25%] flex justify-around">
                    <a href="https://nextjs.org/conf" target="_blank">
                        <img className="h-[20vh]"
                        src = "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1723581090%2Ffront%2Fnext-conf-2024%2Ftakeover.png&w=1920&q=75" />
                    </a>
                    <a href="#sec3">
                        <img className="h-[20vh]"
                        src = "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1723581090%2Ffront%2Fnext-conf-2024%2Ftakeover.png&w=1920&q=75" />
                    </a>
                </div> */}
                
            </div>

        </div>
    )
}

export default home