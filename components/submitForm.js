export default function Form() {

    const handleSubmit = async(e) => {
        //stop form from submitting and refreshing page
        e.preventDefault();

        //Gathering data from form
        const data = {
            artistName: e.target.artistName.value,
            linktree: e.target.linktree.value,
            soundcloud: e.target.soundcloud.value,
            spotify: e.target.spotify.value,
            twitter: e.target.twitter.value,
            instagram: e.target.instagram.value,
            musicfile: e.target.musicfile.files[0],
        }

        const JSONdata = JSON.stringify(data);

        const endpoint = '/api/formHandler';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);

        const result = await response.json();

    }


    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                <div className="leading-8 text-lg w-11/12 md:w-8/12 mx-auto mt-10 bg-gray-700 pt-5 pb-10 rounded-lg">
                    <div className="col text-center mx-auto mb-10">
                        <div className="mb-3">
                            <label htmlFor="artistName">Artist Name</label>
                        </div>
                        <input className="px-2 text-black p-1 px-5 w-80 rounded-lg" type="text" id="artistName" placeholder="feelset" name="artistName" required />
                        <br />
                    </div>
                    <div className="text-center mb-3">
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="mx-auto">
                        <div className="flex flex-wrap mr-5 ml-5 space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 md:content-evenly">
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="linktree" placeholder="https://linktr.ee/[name]" name="linktree" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="soundcloud" placeholder="https://soundcloud.com/feelset" name="soundcloud" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="spotify" placeholder="https://open.spotify.com/user/[id]" name="spotify" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="twitter" placeholder="https://twitter.com/feelset" name="twitter" />
                            <input className="w-full text-black p-1 px-5 rounded-lg" type="text" id="instagram" placeholder="https://www.instagram.com/feelset" name="instagram" />
                        </div>
                        <input type="file" id="musicfile" name="musicfile" ></input>
                    </div>
                </div>
                <div className="leading-8 text-lg text-center mt-5">
                    <button className="bg-green-600 rounded px-60" type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}