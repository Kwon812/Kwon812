'use client'

export default function ContactPage() {

    return (
        <>
            <div className={'h-screen  w-screen text-white p-10  gap-10  animate-slide-in-top'}>
                <div className={'flex flex-col gap-10 '}>
                    <p className={'text-4xl  font-bold'}>Thanks For Your Interest</p>
                    <div className={'flex flex-col gap-5 text-xl  '}>
                        <input type={'email'} placeholder={'Your Email'}
                               className={' bg-black/50 border border-white/50 p-2 rounded-lg outline-none  '}/>
                        <textarea rows={10} placeholder={'Contents'}
                                  className={' bg-black/50 border border-white/50  p-2 rounded-lg outline-none  '}/>
                        <button      className={' bg-black/40 border border-white/50  p-2 rounded-lg outline-none w-fit text-sm font-bold  '}>CONTACT</button>
                    </div>
                </div>
            </div>
        </>
    )
}