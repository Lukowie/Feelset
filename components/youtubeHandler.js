const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/channels';

export async function getVideos(){
        console.log(process.env.YOUTUBE_API_KEY);
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet,contentDetails,statistics?id=UCWpFY9bOMeqpaS1He4w1IcQ?key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res.json();

    const dataVar = {
        props: {
            data
        }
    }

    return(
        <div>
            {console.log(dataVar.props.data)}
        </div>
    );
}

module.exports = {
    getVideos: getVideos
}