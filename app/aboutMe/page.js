'use client'
import Image from "next/image";
import {useRef, useState} from "react";

export default function aboutMePage() {

    const [show, setShow] = useState(false);
    const [details, setDetails] = useState(['한남대 정보통신공학과 졸업', 'SSAFY 16기 수료', '해커톤 수상']);
    const ref = useRef(null)
    return (
        <>
            <div className={'w-full h-screen  p-10  animate-slide-in-top text-lg  flex justify-center  '}>
                <div
                    className={' border border-white/30 overflow-y-auto  bg-black/50 backdrop-blur-lg flex flex-col text-white h-fit max-h-[80vh] rounded-2xl p-5  '}>
                    <div className={'p-3  flex items-center gap-10 '}>
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
                    <div className={'p-3 grid grid-cols-[auto_1fr]   border-y border-white/50 '}>

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
                        <div className={' flex flex-wrap gap-3 justify-center content-center mx-20  '}>

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
                    <div className={'p-3  flex flex-col gap-3'}>
                        <p className={'text-2xl font-bold'}>경력&수상</p>
                        <div className={' border-l border-l-white/30 pl-3'}>
                            {
                                details.map((x, i) => {
                                    return (
                                        <p key={i}>{x}</p>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>

                <span onClick={() => setShow(true)}
                      className="material-symbols-outlined text-white fixed right-3 bottom-3 border p-2 rounded-full cursor-pointer border-white/30">edit</span>


            </div>
            <div onClick={e => setShow(false)}
                 className={`fixed w-screen h-screen bg-black/30  ${show ? 'opacity-100 visible' : 'opacity-0 invisible'} duration-200 `}>
                <div onClick={e => e.stopPropagation()}
                     className={'p-10 absolute right-0 w-1/3 h-screen bg-black/80 text-white flex flex-col gap-3'}>
                    <div className={'flex flex-col gap-5 border-b border-white/50 pb-5'}>
                        <p className={'text-xl text-bold '}> 경력 추가하기 </p>
                        <div className={'flex  gap-3 '}>
                            <input
                                ref={ref}
                                className={'focus:border-blue-700 w-full outline-none bg-transparent border border-white/30 rounded-lg text-lg p-1'}/>
                            <button onClick={e => {
                                const text=ref.current.value
                                text.length <=0?
                                    alert('경력입력해주세요'):
                                setDetails(e => {
                                    const t = [...e]
                                    t.push(ref.current.value)
                                    return t
                                })
                            }}
                                    className={' hover:border-blue-700 hover:text-blue-700 duration-200 border border-white/30 rounded-lg px-2'}>ADD
                            </button>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                        {
                            details.map((x, i) => {
                                return (
                                    <div key={i} className={'flex gap-3 justify-between'}>
                                        <p>{x}</p>
                                        <p onClick={() => {
                                            setDetails(s => {
                                                const t = [...s]
                                                t.splice(i, 1)
                                                return t
                                            })
                                        }} className={'cursor-pointer text-red-500'}>delete</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}