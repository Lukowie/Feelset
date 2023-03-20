import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const LatestVideos = () => {
    const {data, error, isLoading} = useSWR('/api/youtubeLatest', fetcher);

    let videos = [];
    if(data?.hasOwnProperty('ErrorCode')){
        let tempArr = new Array(1,2,3,4,5,6);
        videos = tempArr.map((videoId) =>    
            <div key={'vidSkele'+videoId} className='md:col'>
                <div className="relative aspect-video overflow-hidden mb-4 md:mb-4 lg:md-2">
                <div role="status" class="flex items-center justify-center h-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                    <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
                    <span class="sr-only">Loading...</span>
                </div>
                </div>
            </div>
        );
    } else {
         videos = (data?.videoIds.ids).map((videoId) =>
        <div key={videoId} className='md:col'>
            <div className="relative aspect-video overflow-hidden mb-4 md:mb-4 lg:mb-2">
                    <iframe className="w-full h-full absolute top-0 left-0 align-middle" allow="picture-in-picture; web-share" src={`https://www.youtube.com/embed/${videoId}`}></iframe>
                </div>
        </div>
     );
    }
    return (
        <div>
            <div className='flex-grid mt-10 lg:grid items-center md:gap-4 md:grid-cols-2 lg:grid-cols-2'>
                {videos}
            </div>
        </div>
    )
    
}

export default LatestVideos;