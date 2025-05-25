import CardView from "@/components/CardView";

export default function StudyPage() {

    const projects = ['projectOne', 'projectTwo', 'projectThree', 'projectFour', 'projectFive']
    return (
        <>
            <div
                className={'w-screen h-screen bg-black/30 flex  flex-wrap gap-10  justify-center content-center  animate-slide-in-top'}>

                {
                    projects.map((x, i) => {

                        return (
                                <CardView key={i} src={x} title={`project_${i + 1}`}/>

                        )
                    })
                }

            </div>

        </>
    )
}

