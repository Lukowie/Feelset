
require('dotenv').config();

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/channels';

export async function getVideos(){
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet,contentDetails,statistics?id=UCWpFY9bOMeqpaS1He4w1IcQ?key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

modules.export = {
    getVideos: getVideos
}