const YOUTUBE_LATEST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
import { toastContainer, toast } from "react-toastify";

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
        toast.error(`API Limit Reached. Come back later.` , {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        return res.status(500).json({
            'ErrorCode': 'API Limit Reached',
        })
    }
}