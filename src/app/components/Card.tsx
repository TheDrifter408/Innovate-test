import Image, { StaticImageData } from "next/image"

import { CardProps } from "@/app/types/index";

export default function Card({ colorGradient,colStart,colSpan,rowStart,rowSpan,image } : CardProps){
    return (
        <div className={`col-start-${colStart} row-start-${rowStart} ${colorGradient} col-span-${colSpan} row-span-${rowSpan} rounded-xl relative`}>
            <p className="text-center mt-4 text-2xl text-white">Photo One</p>
            <div className="absolute h-10 bg-white w-10 -right-5 -bottom-5 rounded-full">
                <Image src={image} height={30} width={30} alt="image" />
            </div>
        </div>
    )
}