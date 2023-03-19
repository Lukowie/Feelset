const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/channels';

export default async (req, res) => {
    var key = process.env.YOUTUBE_API_KEY;
    const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=statistics&id=UCWpFY9bOMeqpaS1He4w1IcQ&key=${key}`);
    const data = await response.json();
    const {subscriberCount, viewCount, videoCount} = data.items[0].statistics;
    
    return res.status(200).json({
        subscriberCount,
        videoCount,
        viewCount,
    })
}