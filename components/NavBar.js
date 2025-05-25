'use client'


import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {useState} from "react";

export default function NavBar() {

    return (
        <div
            className={` animate-slide-in-bottom bg-white/20 backdrop-blur-sm w-1/5 h-[6vh] fixed bottom-3 rounded-2xl left-1/2  flex justify-center items-center gap-12  border-white/10 border`}>

            <Link className={'flex items-center'} href={'/'}>
                <span
                    className="material-symbols-outlined text-3xl text-white/70 cursor-pointer hover:text-red-700">home</span>
            </Link>


            <div className={'flex flex-col group relative items-center'}>
                <div
                    className={'flex  invisible opacity-0 group-hover:opacity-100 duration-100 group-hover:visible  absolute -mt-10 font-bold  text-white gap-3 h-[8vh]'}>
                    <Link className={'h-fit '} href={'/aboutMe'}>
                        <p className={'cursor-pointer hover:text-red-700 '}>ABOUT.ME</p>
                    </Link>
                    <Link className={'h-fit'} href={'/projects'}>
                        <p className={'cursor-pointer hover:text-red-700 '}>PROJECTS</p>
                    </Link>

                </div>
                <span
                    className="material-symbols-outlined text-3xl text-white/70 cursor-pointer group-hover:text-red-700">dashboard</span>
            </div>

        </div>
    )
}