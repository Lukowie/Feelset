import { useState } from "react";
import axios from 'axios';
import testRegex from './formValidation';

export default function Form() {

    const [links, setLinks] = useState({
        linktree: '',
        spotify: '',
        soundcloud: '',
        instagram: '',
        twitter: '',
      });

      // need to understand this better
    const handleChange = (e) => {
        const { id, value } = e.target;
        setLinks((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
            //stop form from submitting and refreshing page
        if (testRegex(links)){
            
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
                    songPath = response.data.songPath;
                    sendDataToDB(e.target, songPath);
                //}
            }).catch((err) => {
                console.log(err);
            });
        }
    };

const sendDataToDB = async (target, songPath) => {
     //Gathering data to be sent to db query
     const data = {
        artistName: target.artistName.value,
        linktree: target.linktree.value,
        soundcloud: target.soundcloud.value,
        spotify: target.spotify.value,
        twitter: target.twitter.value,
        instagram: target.instagram.value,
        songName: target.songName.value,
        songPath: songPath,
    }
    
    //send file to fsMusic to be put to filesystem
    const JSONdata = JSON.stringify(data);

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
                    <div className="col text-center mx-auto mb-10">
                        <div className="mb-3">
                            <label htmlFor="songName">Song Name</label>
                        </div>
                        <input className="text-black p-1 px-5 w-80 rounded-lg" type="text" id="songName" placeholder="song" name="songName" required />
                        <br />
                    </div>
                    <div className="text-center mb-3">
                        <label htmlFor="description">Social Links</label>
                    </div>
                    <div className="mx-auto">
                        <div className="flex flex-wrap mr-5 ml-5 space-y-5 md:space-y-0 md:gap-4 md:content-evenly mb-10">
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="linktree" onChange={handleChange} placeholder="https://linktr.ee/[name]" name="linktree" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="soundcloud" onChange={handleChange} placeholder="https://soundcloud.com/feelset" name="soundcloud" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="spotify" onChange={handleChange} placeholder="https://open.spotify.com/user/[id]" name="spotify" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="twitter" onChange={handleChange} placeholder="https://twitter.com/feelset" name="twitter" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="instagram" onChange={handleChange} placeholder="https://www.instagram.com/feelset" name="instagram" />
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
                                id="musicfile" name="musicfile" type="file" required>
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