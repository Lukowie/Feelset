import { useState } from "react";
import axios from 'axios';
import testRegex from './formValidation';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

        //stop form from submitting and refreshing page if inputs are not valid
        if (testRegex(links)){
            const formData = new FormData();
            formData.append('musicfile', e.target.musicfile.files[0]);


            // send data to filsystem
            await axios.post("/api/fsMusic", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }).then((response) => {
                    let songPath = response.data.songPath;
                    toast.success("Uploaded Song to Server", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    // send data to database
                    sendDataToDB(e.target, songPath);
            }).catch((err) => {
                toast("Error Uploading File: " + err, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });

            await axios.post('/api/processJob');//data.jobId);
        }
    };

    // axios/ fetch to send inputs/data to database
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
    
    const JSONdata = JSON.stringify(data);

    await axios.post("/api/formHandler", JSONdata, {
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response) => {
        //console.log("response: " + JSON.stringify(response.data));
            toast.success("Data inserted into database", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
        });
        
    }).catch((err) => {
        toast("Error with inserting into database: " + err, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
        });
    });
}
    return (
        <div className=''>
            <ToastContainer />
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="text-lg w-11/12 lg:w-8/12 xl:w-7/12 2xl:w-4/12 mx-auto mt-5 bg-gray-700 pt-5 pb-5 rounded-lg">
                    <div className="col text-center mx-auto mb-5">
                        <div className="mb-2">
                            <label htmlFor="artistName">Artist Name</label>
                        </div>
                        <input className="text-black p-1 px-2 w-80 rounded-lg" type="text" id="artistName" placeholder="feelset" name="artistName" required />
                        <br />
                    </div>
                    <div className="col text-center mx-auto mb-5">
                        <div className="mb-2">
                            <label htmlFor="songName">Song Name</label>
                        </div>
                        <input className="text-black p-1 px-2 w-80 rounded-lg" type="text" id="songName" placeholder="song" name="songName" required />
                        <br />
                    </div>
                    <div className="text-center mb-3">
                        <label htmlFor="description">Social Links</label>
                    </div>
                    <div className="mx-auto">
                        <div className="grid space-y-5 mr-5 ml-5 md:mr-0 md:ml-0 md:space-y-0 md:gap-4 md:content-evenly mb-10">
                            <input className="mx-auto w-full md:w-8/12 text-black p-1 px-2 rounded-lg" type="text" id="linktree" onChange={handleChange} placeholder="https://linktr.ee/[name]" name="linktree" />
                            <input className="mx-auto w-full md:w-8/12 text-black p-1 px-2 rounded-lg" type="text" id="soundcloud" onChange={handleChange} placeholder="https://soundcloud.com/feelset" name="soundcloud" />
                            <input className="mx-auto w-full md:w-8/12 text-black p-1 px-2 rounded-lg" type="text" id="spotify" onChange={handleChange} placeholder="https://open.spotify.com/user/[id]" name="spotify" />
                            <input className="mx-auto w-full md:w-8/12 text-black p-1 px-2 rounded-lg" type="text" id="twitter" onChange={handleChange} placeholder="https://twitter.com/feelset" name="twitter" />
                            <input className="mx-auto w-full md:w-8/12 text-black p-1 px-2 rounded-lg" type="text" id="instagram" onChange={handleChange} placeholder="https://www.instagram.com/feelset" name="instagram" />
                        </div>
                        
                        <div className="text-center">
                            <div className="flex items-center mt-3">
                                <input className="mx-auto text-base max-w-sm text-gray-300
                                                    file:mr-4 file:py-2 file:px-4 file:text-base
                                                    file:rounded-md file:border-0
                                                    file:font-semibold
                                                    file:bg-blue-700 file:text-white
                                                    hover:file:bg-blue-900"
                                id="musicfile" name="musicfile" type="file" required>
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                <div className="leading-8 mt-5 text-lg w-11/12 lg:w-8/12 xl:w-7/12 2xl:w-4/12">
                    <button className="bg-green-600 py-2 rounded-lg w-full" type="submit">Submit</button>
                </div>
                </div>
            </form>
            </div>
    )
}