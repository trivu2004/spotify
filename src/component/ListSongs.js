import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handPlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="h-12 text-white">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-center">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="bi bi-file-arrow-down-fill"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12  text-gray-500 hover:bg-slate-400  ${
                idSong === song.id && "bg-slate-400 text-teal-300"
              }`}
              onClick={() => handPlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="bi bi-file-arrow-down-fill"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
