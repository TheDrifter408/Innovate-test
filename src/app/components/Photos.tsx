import Image, { StaticImageData } from "next/image";
import ImageOne from "@/app/public/1.png";
import ImageTwo from "@/app/public/2.png";
import ImageThree from "@/app/public/3.png";
import { CardProps } from "@/app/types/index";
import Card from "./Card";
import { Fragment } from "react";

const photos:CardProps[] = [
    {
        colorGradient:"bg-gradient-to-r from-cyan-500 to-blue-500",
        colStart:2,
        colSpan:5,
        rowStart:1,
        rowSpan:5,
        image:ImageOne
    },
    {
        colorGradient:"bg-gradient-to-r from-cyan-500 to-blue-500",
        colStart:8,
        colSpan:5,
        rowStart:5,
        rowSpan:5,
        image:ImageTwo
    },
    {
        colorGradient:"bg-gradient-to-r from-cyan-500 to-blue-500",
        colStart:3,
        colSpan:4,
        rowStart:8,
        rowSpan:4,
        image:ImageThree
    },
];


export default function Photos(){
    return(
        <Fragment>
        {
            photos.map((card:CardProps,idx) => (
                <Card key={idx} {...card} />
            ))
        }
        </Fragment>
        
    )
}