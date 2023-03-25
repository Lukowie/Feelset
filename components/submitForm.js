import { useState } from "react";
import axios from 'axios';

export default function Form() {

    const [musicFile, setMusicFile] = useState();

    const handleSubmit = async(e) => {

        //stop form from submitting and refreshing page
        e.preventDefault();

        let songName = "";
        let songPath = "";
        
        const formData = new FormData();
        formData.append('musicfile', e.target.musicfile.files[0]);

        await axios.post("/api/fsMusic", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then((response) => {
            console.log("response: " + JSON.stringify(response.data.message));
            //if(response.data.status === "200"){
                songName = response.data.songName;
                songPath = response.data.songPath;
                sendDataToDB(e.target, songName, songPath);
            //}
        }).catch((err) => {
            console.log(err);
        });
    };

const sendDataToDB = async (target, songName, songPath) => {
     //Gathering data to be sent to db query
     const data = {
        artistName: target.artistName.value,
        linktree: target.linktree.value,
        soundcloud: target.soundcloud.value,
        spotify: target.spotify.value,
        twitter: target.twitter.value,
        instagram: target.instagram.value,
        songName: songName,
        songPath: songPath,
    }
    
    //send file to fsMusic to be put to filesystem
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/formHandler';

    await axios.post("/api/formHandler", JSONdata, {
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response) => {
        console.log("response: " + JSON.stringify(response.data));
        if(response.status === "200"){
           
        }
    }).catch((err) => {
        console.log(err);
    });
}
    return (
        <div className=''>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="leading-8 text-lg w-11/12 md:w-8/12 mx-auto mt-10 bg-gray-700 pt-5 pb-10 rounded-lg">
                    <div className="col text-center mx-auto mb-10">
                        <div className="mb-3">
                            <label htmlFor="artistName">Artist Name</label>
                        </div>
                        <input className="text-black p-1 px-5 w-80 rounded-lg" type="text" id="artistName" placeholder="feelset" name="artistName" required />
                        <br />
                    </div>
                    <div className="text-center mb-3">
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="mx-auto">
                        <div className="flex flex-wrap mr-5 ml-5 space-y-5 md:space-y-0 md:gap-4 md:content-evenly mb-10">
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="linktree" placeholder="https://linktr.ee/[name]" name="linktree" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="soundcloud" placeholder="https://soundcloud.com/feelset" name="soundcloud" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="spotify" placeholder="https://open.spotify.com/user/[id]" name="spotify" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="twitter" placeholder="https://twitter.com/feelset" name="twitter" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="instagram" placeholder="https://www.instagram.com/feelset" name="instagram" />
                        </div>
                        
                        <div className="text-center">
                            <label htmlFor="musicFile">Submit Your Song</label>
                            <div className="flex items-center mt-3">
                                <input className="mx-auto max-w-sm text-sm text-gray-300
                                                    file:mr-4 file:py-2 file:px-4
                                                    file:rounded-md file:border-0
                                                    file:text-sm file:font-semibold
                                                    file:bg-blue-700 file:text-white
                                                    hover:file:bg-blue-900"
                                id="musicfile" name="musicfile" type="file">
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leading-8 text-lg text-center mt-5">
                    <button className="bg-green-600 rounded px-60" type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}