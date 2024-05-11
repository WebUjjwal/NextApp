import { useRef, useState } from 'react';


const AudioPlayer = ({ audioVoice }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false)
    }

    const handleNewAudio = () => {
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            if (audio !== audioRef.current) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }

    const handlePauseAudio = () => {
        setIsPlaying(false)
    }

    return (
        <div>
            <audio ref={audioRef} src={audioVoice} onEnded={handleAudioEnded}
                onPlay={handleNewAudio} onPause={handlePauseAudio}
            />
            <a className='w-[60px] h-[60px] bg-[#C7FFA1] flex items-center justify-center rounded-[100%] cursor-pointer border-[7px] border-solid border-[#000000]' onClick={togglePlay}>
                <img src={isPlaying ? '/images/pause.png' : '/images/play.svg'} alt="" />
            </a>
        </div>
    );
};

export default AudioPlayer;



