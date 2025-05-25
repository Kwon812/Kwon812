'use client'

import Image from "next/image";
import {useState} from "react";
import SlideCard from "@/components/SlideCard";

export default function CardView({src, title}) {

    const [showDetail, setShowDetail] = useState(false)

    function bundle(){
        return {
            showDetail,
            setShowDetail
        }
    }
    return (
        <>
            <div
                onClick={() => setShowDetail(true)}
                className={' hover:translate-y-2  duration-200 rounded-lg  gap-1'}>

                <div className={'w-52 h-40 bg-white/30 relative rounded-lg overflow-hidden'}>
                    <Image src={`/img/${src}.png`} fill alt={'e'}/>
                </div>
            </div>
           <SlideCard {...bundle()} num={Number(title.split('_')[1])}/>
        </>
    )
}