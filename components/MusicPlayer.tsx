import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const songList = [
  {
    number: 0,
    title: "BAR Rainy - Yakuza 5",
    track:
      "https://vgmsite.com/soundtracks/ryu-ga-gotoku-5-yume-kanaeshi-mono-original-soundtrack-vol.2-yakuza-5/aryjbdgg/36-BAR%E3%82%AF%E3%83%AC%E3%82%B9%E3%83%88%20-%20Rainy%20-.mp3",
  },

  {
    number: 1,
    title: "Baka Mitai Jazz Version - Yakuza 5",
    track:
      "https://vgmsite.com/soundtracks/ryu-ga-gotoku-5-yume-kanaeshi-mono-original-soundtrack-vol.2-yakuza-5/hexoyyhl/42-%E3%81%B0%E3%81%8B%E3%81%BF%E3%81%9F%E3%81%84%20%5BJazz%20Version%5D.mp3",
  },
  {
    number: 2,
    title: "Money Makes Money - Yakuza 0",
    track:
      "https://vgmsite.com/soundtracks/ryu-ga-gotoku-zero-yakuza-0-ost-a-and-b-sides/wvpwrpiv/1-09%20Money%20Makes%20Money.mp3",
  },
  {
    number: 3,
    title: "Bar Crossroads - Persona 5",
    track:
      "https://vgmsite.com/soundtracks/persona-5/otsewrek/2-13.%20BAR%20Yuu%20Comer.mp3",
  },
  {
    number: 4,
    title: "Sleepy Eyes - Yakuza 5",
    track:
      "https://vgmsite.com/soundtracks/ryu-ga-gotoku-5-yume-kanaeshi-mono-original-soundtrack-vol.2-yakuza-5/ygbldbro/40-Sleepy%20Eyes.mp3",
  },
];

export default function MusicPlayer({}: Props) {
  const [song, setSong] = useState(songList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [currentSong, setCurrentSong] = useState({
  //   track: song.track,
  //   title: song.title,
  //   trackLength: 0,
  //   progress: 0,
  // });

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  // const handleTime = () => {
  //   const duration = audioElem.current.duration;
  //   const currentTime = audioElem.current.currentTime;
  //   setCurrentSong({
  //     ...currentSong,
  //     progress: (currentTime / duration) * 100,
  //     trackLength: duration,
  //   });
  // };

  const handleSkip = () => {
    if (song.number == songList.length - 1) {
      setSong(songList[0]);
    } else {
      setSong(songList[song.number + 1]);
    }

    audioElem.current.currentTime = 0;
    audioElem.current.load();
    setIsPlaying(true);
    audioElem.current.play();
  };

  const handleBack = () => {
    if (song.number == 0) {
      setSong(songList[songList.length - 1]);
    } else {
      setSong(songList[song.number - 1]);
    }

    console.log(audioElem);

    audioElem.current.currentTime = 0;
    audioElem.current.load();
    setIsPlaying(true);
    audioElem.current.play();
  };

  const audioElem = useRef<HTMLMediaElement>();
  return (
    <motion.div
      initial={{ opacity: 1, y: 40 }}
      whileHover={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="sticky bottom-0 max-w-[300px] mx-auto rounded-md bg-neutral-900/70 flex items-center justify-center p-4"
    >
      <div className="flex flex-col gap-2 overflow-hidden">
        <div className="flex gap-2 items-center self-center">
          <BackwardIcon
            onClick={handleBack}
            className="text-[#006aff] w-8 h-8 cursor-pointer"
          />
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-10 w-10 bg-white rounded-full text-center flex items-center justify-center cursor-pointer"
          >
            {isPlaying ? (
              <PauseIcon className="text-[#006aff] w-6 h-6" />
            ) : (
              <PlayIcon className="text-[#006aff] w-6 h-6" />
            )}
          </div>
          <ForwardIcon
            onClick={handleSkip}
            className="text-[#006aff] w-8 h-8 cursor-pointer"
          />
        </div>

        <p className="text-sm text-neutral-500 truncate">{song.title}</p>

        {/* <div className="w-full">
          <div className="h-1 bg-neutral-600 min-w-full rounded-sm cursor-pointer">
            <div
              className={`w-[${
                currentSong.progress + "%"
              }] rounded-sm bg-[#006aff]`}
            ></div>
          </div>

          <p className="text-sm text-neutral-500">{currentSong.title}</p> 
        </div> */}
      </div>

      <audio ref={audioElem}>
        <source src={song.track} />
      </audio>
    </motion.div>
  );
}
