import {React} from 'react';
import NavBar from '../components/navbar';
import Head from '../components/Head';
import Title from '../components/Title';
import { getVideos } from '../components/youtubeHandler';

export default async function Youtube(){
    getVideos();
    return (
        <div className='min-h-screen min-w-screen bg-gray-800 text-gray-300'>
        <Head />
        <NavBar />
            <div className='flex items-center'>
                <Title title="Youtube" />
            </div>
            <div className='font-mono leading-8 text-lg w-11/12 lg:w-6/12 mx-auto mt-10'>

            </div>
      </div>
    )
}