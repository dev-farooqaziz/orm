"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";
//========== Import Images
import audioImg from "media/audio8.png"
import play from "media/icons/play.png"
import pause from "media/icons/pause.png"
import next from "media/icons/next.png"

const AudioPress = ({ content }) => {
    const { foldBg, title, paragraphs, foldImg } = content;
    //======== Audio
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;

        const updateProgress = () => {
            const currentProgress = (audio.currentTime / audio.duration) * 100;
            setProgress(currentProgress);
            setCurrentTime(audio.currentTime);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    //======== Audio Duration
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <>
            <section className="bg-[#000000] lg:bg-none py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className="text-[40px] md:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-white text-center md:text-left mb-3 xl:mb-5">{title}</h2>
                            {paragraphs.map((para, index) => (
                                <p key={index} className="text-[16px] tracking-wide leading-loose font-poppins text-white mb-5">{para}</p>
                            ))}
                            <div className="flex items-center gap-6 md:gap-10 mt-5 xl:mt-8">
                                <CTA
                                    text="Book a Consultation"
                                    href="tel:123456789"
                                />
                                <CTA
                                    text="Watch Demo"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Image src={foldImg} alt="ORM" />
                            <div className="flex items-center justify-between bg-white p-5 rounded-[10px] mt-5">
                                <div className="flex items-center gap-5 w-full">
                                    <Image src={audioImg} alt="ORM" className="w-[100px]" />
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[20px] font-semibold font-poppins text-black">
                                            SpeakEasy Sessions
                                        </h3>
                                        <span className="text-[16px] tracking-wide font-poppins text-[#ababab]">Episode 1 - Season 2</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-poppins text-black">{formatTime(currentTime)}</span>
                                            <span className='bg-[#D9D9D9] rounded-[10px] h-[4px] w-[300px] relative'>
                                                <span
                                                    className='bg-[#24BF5A] h-full block absolute top-0 left-0 rounded-[10px]'
                                                    style={{ width: `${progress}%` }}
                                                ></span>
                                            </span>
                                            <span className="text-[10px] font-poppins text-black">{formatTime(duration)}</span>
                                            <audio ref={audioRef} src="/Separate-Ways.mp3" type="audio/mpeg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-4 w-max">
                                    <button onClick={togglePlay} className='w-[30%]'>
                                        {isPlaying ? <Image src={pause} alt="ORM" /> : <Image src={play} alt="ORM" />}
                                    </button>
                                    <button className='w-[30%]'>
                                        <Image src={next} alt="ORM" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AudioPress;