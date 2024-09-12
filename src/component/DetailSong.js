import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">Sing me to sleep â.aaa</h2>
      <div className="w-[220px] m-auto mt-10">
        <img src={song.links.images[0].url} />
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          className="w-[70px] rounded-full mr-6"
          src={song.links.images[1].url}
        />
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}
