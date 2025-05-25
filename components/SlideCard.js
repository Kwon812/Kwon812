

'use client'


import {projectInit} from "@/util/data/projectInit";

export default function SlideCard({showDetail,setShowDetail,num}){

    return (
        <div onClick={() => setShowDetail(false)}
             className={`bg-black/30 fixed h-screen w-screen duration-200   z-50  ${showDetail ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-full'}`}>
            <div onClick={e => e.stopPropagation()}
                 className={'h-[60vh] w-2/3 bg-black/85 border-white/20 border p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-white flex flex-col gap-3 text-center '}>
                <p className={' text-3xl font-bold '}>{projectInit[num-1].title}</p>
                <p className={'text-xl font-bold'}>{projectInit[num-1].contents}</p>
                <p className={'text-lg '}>{projectInit[num-1].details}</p>
            </div>

        </div>
    )
}