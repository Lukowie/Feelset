import React from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import Card from './Card';

const SubscriberCount = () => {
    const {data, error, isLoading} = useSWR('/api/youtubeHandler', fetcher);
    if(error){
            return (
                <div>
                    <p>Subscribers</p>
                    <p>Error!</p>
                </div>
            )
        } /*else if(isLoading) {
            return (
                <div role="status" className="max-w-sm animate-pulse">
                    <p>Subscribers</p>
                    <p className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></p>
                </div>
            )
        }*/

    const subs = data?.subscriberCount;
    return (
        <div>
            <Card 
            title={{title: "Subscribers"}}
            info= {subs}/>
        </div>
    )
}

export default SubscriberCount;