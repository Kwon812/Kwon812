'use client'


import Image from "next/image";

export default function aboutMePage() {

    return (
        <div className={'w-full h-[85vh]  m-10  grid grid-rows-[1fr_auto] gap-5 animate-slide-in-top text-lg '}>
            <div
                className={' border border-white/30 overflow-y-auto  bg-black/50 backdrop-blur-lg flex flex-col text-white  rounded-2xl p-5 '}>
                <div className={'border-b border-b-white/20 p-3  flex items-center gap-10 '}>
                    <div className={'h-48 w-48 border border-white/30 rounded-full relative'}>
                        <Image className={'absolute'} fill src={'/img/face.png'} alt={'error'}/>
                    </div>
                    <div className={'gap-3  flex flex-col '}>
                        <p className={'text-4xl font-bold'}>Kwon Do Hyeong</p>
                        <div>
                            <p className={'text-xl font-bold '}>-Web developer</p>
                            <p className={''}> &nbsp; &nbsp; FullStack Engineering / FE / BE </p>
                        </div>
                        <div>
                            <p className={'text-xl font-bold '}>-Hannam University</p>
                            <p className={''}> &nbsp; &nbsp; departments of Electronic</p>
                        </div>
                    </div>
                </div>
                <div className={'p-3 grid grid-cols-[auto_1fr] gap-3 '}>

                    <div className={'flex flex-col gap-5 font-medium'}>
                        <div className={'flex flex-col  gap-3'}>
                            <p className={'text-2xl font-bold '}>FE</p>
                            <div className={'flex flex-col border-l border-l-white/30 pl-3 '}>
                                <p>Js</p>
                                <p>React</p>
                                <p>Next</p>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3 '}>
                            <p className={'text-2xl font-bold '}>BE</p>
                            <div className={'flex flex-col border-l border-l-white/30 pl-3 '}>
                                <p>Java</p>
                                <p>SpringBoot</p>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <p className={'text-2xl font-bold '}>PD/UX</p>
                            <div className={'flex flex-col border-l border-l-white/30 pl-3 '}>
                                <p>Figma</p>
                            </div>
                        </div>
                    </div>
                    <div className={' flex flex-wrap gap-3 justify-center content-center'}>

                        <div className={'w-32 h-32 relative  rounded-xl overflow-hidden'}>
                            <Image src={'/img/jsLogo.png'} fill className={'absolute'} alt={'e'}/>
                        </div>
                        <div className={'w-32 h-32 relative  rounded-xl overflow-hidden bg-white'}>
                            <Image src={'/img/reactLogo.png'} fill className={'p-1 '} alt={'e'}/>
                        </div>
                        <div className={'w-32 h-32 relative  rounded-xl overflow-hidden  bg-white'}>
                            <Image src={'/img/nextLogo.png'} fill className={'absolute p-2 '} alt={'e'}/>
                        </div>
                        <div className={'w-32 h-32 relative  rounded-xl overflow-hidden '}>
                            <Image src={'/img/javaLogo.png'} fill className={'absolute bg-transparent'} alt={'e'}/>
                        </div>

                        <div className={'w-32 h-32 relative  rounded-xl overflow-hidden'}>
                            <Image src={'/img/bootLogo.png'} fill className={'absolute '} alt={'e'}/>
                        </div>
                        <div className={'w-32 h-32 relative  rounded-xl overflow-hidden'}>
                            <Image src={'/img/figmaLogo.png'} fill className={'absolute '} alt={'e'}/>
                        </div>
                    </div>
                </div>

            </div>
            <div className={'text-white/30 flex justify-center  '}>
                <span className="material-symbols-outlined text-4xl">add_circle</span>
            </div>

        </div>
    )
}