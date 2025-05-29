import Image from "next/image";
import Link from "next/link";

const menu=[
    'About me.','Projects.','Contact.'
]
export default function Home() {
  return (

      <>
          <div className={'h-screen w-screen  text-white grid grid-cols-2   '}>
              <div className={'   flex flex-col animate-slide-in-left items-center justify-center '}>
                  <div className={'h-64 w-64 bg-white/20 rounded-full relative overflow-hidden '}>
                      <div className={'absolute inset-0  z-40'}/>
                      <Image fill className={'absolute object-cover'} src={'/img/face.png'} alt={'logo'}/>
                  </div>
                  <p className={'text-8xl 2xl:text-9xl font-bold '}>Dev<span className={'text-red-700'}>.</span>K
                  </p>
                  <p className={'font-bold text-xl'}>FullStack Engineering</p>
              </div>
              <div className={' flex justify-center items-center animate-slide-in-right '}>
                  <div className={' justify-center  gap-5 flex flex-wrap  '}>
                      {
                          menu.map((x,i)=>{
                              return (
                                  <Link href={`/${['aboutMe','projects','contact'][i]}`} key={i}>
                                  <div className={' cursor-pointer p-1 px-4 rounded-lg bg-white/20 hover:text-red-700 border border-white/10 flex justify-center items-center text-2xl font-bold'}>
                                      <p>{x}</p>
                                  </div>
                                  </Link>
                              )
                          })
                      }
                  </div>

              </div>
          </div>

      </>
  );
}
