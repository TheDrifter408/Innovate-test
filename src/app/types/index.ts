import { StaticImageData } from "next/image"

export type CardProps = {
    colorGradient:string,
    colStart:number,
    colSpan:number,
    rowStart:number,
    rowSpan:number,
    image: StaticImageData
}