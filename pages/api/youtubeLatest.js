const YOUTUBE_LATEST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';

export default async (req, res) => {
    try {
        var key = process.env.YOUTUBE_API_KEY;
        const response = await fetch(`${YOUTUBE_LATEST_ITEMS_API}?part=snippet&channelId=UCWpFY9bOMeqpaS1He4w1IcQ&maxResults=6&order=date&type=video&key=${key}`);
        const data = await response.json();

        let videoIds = {ids:[]};
        (data.items).forEach ((video) => {
            (videoIds.ids).push(video.id.videoId);
        });

        return res.status(200).json({
            videoIds
        })
    } catch (error){
        return res.status(500).json({
            'ErrorCode': 'API Limit Reached',
        })
    }
}