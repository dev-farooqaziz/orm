"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
//========== Import Images
import play from "media/icons/play2.png";
import pause from "media/icons/pause2.png";
import next from "media/icons/next1.png";
import next2 from "media/icons/next2.png";
//==========
import audioImg1 from "media/audio1.png";
import audioImg2 from "media/audio2.png";
import audioImg3 from "media/audio3.png";
import audioImg4 from "media/audio4.png";
import audioImg5 from "media/audio5.png";
import audioImg6 from "media/audio6.png";
import audioImg7 from "media/audio7.png";
import audioImg8 from "media/audio8.png";
import audioImg9 from "media/audio9.png";

//========== Tabs Data with Categories
const tabsData = [
    { title: "All" },
    { title: "Technology" },
    { title: "Business" },
    { title: "Music" },
];

//========== Audio Data with Categories
const audioEpisodes = [
    // Technology Episodes
    { img: audioImg1, title: "SoundWave Chronicles", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Technology" },
    { img: audioImg4, title: "MindCast Weekly", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Technology" },
    { img: audioImg7, title: "Vibe & Vision", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Technology" },

    // Business Episodes
    { img: audioImg2, title: "Insightful Echoes", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Business" },
    { img: audioImg5, title: "Echoes of Inspiration", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Business" },
    { img: audioImg8, title: "SpeakEasy Sessions", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Business" },

    // Music Episodes
    { img: audioImg3, title: "The Voice Vault", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Music" },
    { img: audioImg6, title: "The Audio Pulse", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Music" },
    { img: audioImg9, title: "Resonance Radio", season: "Episode 1 - Season 2", src: "/Separate-Ways.mp3", category: "Music" },
];

const OurAudios = () => {
    const [playingIndex, setPlayingIndex] = useState(null);
    const [progress, setProgress] = useState(Array(audioEpisodes.length).fill(0));
    const [currentTime, setCurrentTime] = useState(Array(audioEpisodes.length).fill(0));
    const [duration, setDuration] = useState(Array(audioEpisodes.length).fill(0));
    const audioRefs = useRef(Array(audioEpisodes.length).fill(null));

    const [activeTab, setActiveTab] = useState("All");

    // Filter audio episodes based on the active tab
    const filteredEpisodes = activeTab === "All"
        ? audioEpisodes
        : audioEpisodes.filter(item => item.category === activeTab);

    const togglePlay = (index) => {
        const audio = audioRefs.current[index];
        if (playingIndex === index) {
            audio.pause();
            setPlayingIndex(null);
        } else {
            if (playingIndex !== null) {
                audioRefs.current[playingIndex].pause();
                audioRefs.current[playingIndex].currentTime = 0; // Reset previous audio
            }
            audio.currentTime = 0; // Reset audio to start
            audio.play();
            setPlayingIndex(index);
        }
    };

    useEffect(() => {
        // Pause and reset audio when the active tab changes
        if (playingIndex !== null) {
            const audio = audioRefs.current[playingIndex];
            audio.pause();
            audio.currentTime = 0; // Reset audio to start
            setPlayingIndex(null);
        }

        // Reset progress and current time when the active tab changes
        setCurrentTime(Array(audioEpisodes.length).fill(0));
        setProgress(Array(audioEpisodes.length).fill(0));

        filteredEpisodes.forEach((_, index) => {
            const audio = audioRefs.current[index];
            if (audio) {
                const updateProgress = () => {
                    const currentProgress = (audio.currentTime / audio.duration) * 100;
                    setProgress(prev => {
                        const newProgress = [...prev];
                        newProgress[index] = currentProgress;
                        return newProgress;
                    });
                    setCurrentTime(prev => {
                        const newTime = [...prev];
                        newTime[index] = audio.currentTime;
                        return newTime;
                    });
                };

                const handleEnded = () => {
                    setPlayingIndex(null);
                    setProgress(prev => {
                        const newProgress = [...prev];
                        newProgress[index] = 0;
                        return newProgress;
                    });
                    setCurrentTime(prev => {
                        const newTime = [...prev];
                        newTime[index] = 0;
                        return newTime;
                    });
                };

                const handleLoadedMetadata = () => {
                    setDuration(prev => {
                        const newDuration = [...prev];
                        newDuration[index] = audio.duration;
                        return newDuration;
                    });
                };

                audio.addEventListener('timeupdate', updateProgress);
                audio.addEventListener('ended', handleEnded);
                audio.addEventListener('loadedmetadata', handleLoadedMetadata);

                return () => {
                    audio.removeEventListener('timeupdate', updateProgress);
                    audio.removeEventListener('ended', handleEnded);
                    audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                };
            }
        });
    }, [activeTab]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <section className="bg-[#ffffff] py-12 lg:py-20">
            <div className="container">
                <div className="md:w-max mx-auto flex items-center justify-center flex-wrap gap-x-6 lg:gap-x-16 gap-y-6 px-10 mb-8 lg:mb-12 pb-8 border-b border-[#E3E3E3]">
                    {tabsData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTab(item.title)}
                            className={`border border-[#E3E3E3] px-10 py-2 rounded-lg cursor-pointer ${activeTab === item.title ? 'bg-[#24BF5A]' : 'hover:bg-[#24BF5A]'}`}
                        >
                            <p className="text-[16px] font-poppins text-[#E3E3E3] text-center">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredEpisodes.map((episode, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between border border-[#E6E6E6] p-3 rounded-[10px] ${playingIndex === index ? 'bg-[#24BF5A]' : ''}`}
                        >
                            <div className="flex items-center gap-4 w-full">
                                <Image src={episode.img} alt={`Episode ${index + 1}`} className="w-[70px]" />
                                <div className="flex flex-col gap-2">
                                    <h3 className={`text-[16px] font-semibold font-poppins ${playingIndex === index ? 'text-white' : 'text-black'}`}>
                                        {episode.title}
                                    </h3>
                                    <span className={`text-[14px] tracking-wide font-poppins ${playingIndex === index ? 'text-white' : 'text-[#ababab]'}`}>
                                        {episode.season}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-[10px] font-poppins ${playingIndex === index ? 'text-white' : 'text-black'}`}>
                                            {formatTime(currentTime[index])}
                                        </span>
                                        <span className='bg-[#D9D9D9] rounded-[10px] h-[4px] w-[120px] relative'>
                                            <span className='bg-black h-full block absolute top-0 left-0 rounded-[10px]' style={{ width: `${progress[index]}%` }}></span>
                                        </span>
                                        <span className={`text-[10px] font-poppins ${playingIndex === index ? 'text-white' : 'text-black'}`}>
                                            00:14
                                        </span>
                                        <audio ref={el => audioRefs.current[index] = el} src={episode.src} type="audio/mpeg" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-4 w-max">
                                <button onClick={() => togglePlay(index)} className='w-[25%]'>
                                    {playingIndex === index ? <Image src={pause} alt="Pause" /> : <Image src={play} alt="Play" />}
                                </button>
                                <button onClick={() => togglePlay(index)} className='w-[25%]'>
                                    {playingIndex === index ? <Image src={next2} alt="Next" /> : <Image src={next} alt="Next" />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurAudios;
