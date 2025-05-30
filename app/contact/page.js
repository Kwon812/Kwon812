'use client'

import {useState} from "react";

export default function ContactPage() {

    const [contacts, setContacts] = useState([])
    return (
        <>
            <div
                className={'h-screen w-screen text-white  flex justify-center p-10  animate-slide-in-top   relative '}>
                {/*<div className={'absolute right-2 bottom-2 flex border-2 flex-wrap gap-2  max-w-96'}>*/}
                {/*    {*/}
                {/*        contacts.map((x, i) => {*/}
                {/*            return (*/}

                {/*                <p>1</p>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</div>*/}
                <div className={'flex flex-col gap-10 mt-10  w-2/3'}>
                    <p className={'text-4xl  font-bold'}>Thanks For Your Interest</p>
                    <form  onSubmit={e=>{
                        e.preventDefault();
                        const formData=new FormData(e.target)
                        const temp={}
                        let vail=true
                        formData.forEach((x,i)=>{
                            if(x.length===0){
                               vail=false
                            }
                            temp[i]=x
                        })
                         vail?setContacts(e=>[...e,temp]): alert('모든 항목을 입력해주세요.')

                    }} className={'w-full  '}>
                        <div className={'flex flex-col gap-5 text-xl  '}>

                            <div className={'flex gap-3 '}>
                                <input name={'email'} type={'email'} placeholder={' Email'}
                                       className={' text-center bg-black/50 border border-white/50 p-2 rounded-lg outline-none  '}/>

                                <input name={'number'}  placeholder={' PhoneNumber'}
                                       className={' text-center  bg-black/50 border border-white/50 p-2 rounded-lg outline-none  '}/>
                            </div>
                            <textarea name={'contents'} rows={13} placeholder={'Desc'}
                                      className={'w-full  bg-black/50 border border-white/50  p-2 rounded-lg outline-none  '}/>
                            <div className={' flex justify-center'}>
                                <button
                                    className={' bg-black/40 border border-white/50  p-2 rounded-lg outline-none w-fit text-sm font-bold  '}>CONTACT
                                </button>
                            </div>


                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}