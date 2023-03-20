export default function Form() {

    const handleSubmit = async(e) => {
        //stop form from submitting and refreshing page
        e.preventDefault();

        //Gathering data from form
        const data = {
            artistName: e.target.artistName.value,
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

        alert(`${result.data.artistName}`);
    }


    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                <div className="leading-8 text-lg w-11/12 md:w-8/12 mx-auto mt-10 bg-gray-700 p-5 rounded-lg">
                    <label htmlFor="artistName">Artist Name</label>
                    <br/>
                    <input className="text-black p-1 w-80 rounded-lg" type="text" id="artistName" name="artistName" required/>
                    <br/>
                </div>
                <div className="leading-8 text-lg text-center mt-5">
                    <button className="bg-green-600 rounded px-60" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}