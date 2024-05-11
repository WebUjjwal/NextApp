import AudioPlayer from "../VoiceComponent/viceCard"

import style from './FindVoice.module.css'

export const FindVoice = () => {
    const FindViceData = [
        {
            id: 0,
            tittle: 'Customer Support',
            bg: "/images/bg1.jpeg",
            audioClip: '/voice/Play.ht+-+conversational.wav'
        },

        {
            id: 1,
            tittle: 'Social Media',
            bg: "/images/bg2.jpeg",
            audioClip: '/voice/Play.ht+-+videos.wav'
        },

        {
            id: 2,
            tittle: 'Narrative',
            bg: "/images/bg3.jpeg",
            audioClip: '/voice/Play.ht+-+short+story.wav'
        },

        {
            id: 3,
            tittle: 'Characters',
            bg: "/images/bg4.jpeg",
            audioClip: '/voice/advertisting-cloning-audio.mp3'
        },

        {
            id: 4,
            tittle: 'Clone a voice',
            bg: "/images/CUBE.svg",
            audioClip: 'Play.ht+-+videos.wav'
        },
    ]
    return (
        <>
            <div className="find_voice_main_container mt-[100px]">
                <div className="container">
                    <div className="tittle">
                        <h4 className="text-[48px] leading-[48px] font-semibold font-degular text-center">Find the best voice for your needs </h4>
                    </div>
                    <div className="find_voice_inner mt-[64px] px-[130px] py-[24px] 1199px:px-[70px] 991px:px-[0]">
                        <ul className="flex items-start justify-center gap-[40px] flex-wrap ">
                            {FindViceData.map(data => (
                                <li className="w-full max-w-[calc(100%/5-32px)] relative flex items-center justify-center flex-col 991px:max-w-[calc(100%/4-32px)] 716px:max-w-[calc(100%/3-27px)]">
                                    <div className={`${style.heaxgon_clip_path} h-[160px] w-[160px] bg-[#000000] flex items-center justify-center`}>
                                        <figure className="h-[150px] w-[150px] overflow-hidden">
                                            <img src={data.bg} alt="" className={`${style.heaxgon_clip_path} w-full h-full object-center`} />
                                        </figure>
                                    </div>
                                    <p className="mt-[20px] font-sfMono text-18px leading-[18px] text-center text-nowrap">{data.tittle}</p>
                                    <div className="icon absolute bottom-[35px] left-[-8px]">
                                        <AudioPlayer audioVoice={data.audioClip} />
                                    </div>
                                </li>
                            ))}



                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
