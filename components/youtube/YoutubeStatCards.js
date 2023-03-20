import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import Card from '../Card';

const YoutubeStatCards = () => {
    const {data, error, isLoading} = useSWR('/api/youtubeStats', fetcher);

    let subs, views, videos = "";

    // if ErrorCode comes back, push that instead
    if(data?.hasOwnProperty('ErrorCode')){
        subs = views = videos = data.ErrorCode;
    } else {
        subs = data?.subscriberCount;
        views = data?.viewCount;
        videos = data?.videoCount;
    }
    return (
        <div>
            <div className='flex-grid items-center lg:grid md:gap-4 md:grid-cols-3 lg:grid-cols-3'>
                    <div className="md:col mb-5">
                    <Card 
                        title={{title: "Subscribers"}}
                        desc={subs}/>
                    </div>
                    <div className="md:col mb-5">
                    <Card 
                        title={{title: "View Count"}}
                        desc={views}/>
                    </div>
                    <div className="md:col mb-5">
                    <Card 
                        title={{title: "Video Count"}}
                        desc={videos}/>
                    </div>
                </div>
        </div>
    )
}

export default YoutubeStatCards;