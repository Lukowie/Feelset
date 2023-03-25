import {React} from 'react';
import NavBar from '../components/navbar';
import Head from '../components/Head';
import Title from '../components/Title';
import YoutubeStatCards from '../components/youtube/YoutubeStatCards';
import LatestVideos from '../components/youtube/LatestVideos';
import Footer from '../components/footer';

export default function Youtube(){
    return (
        <div className='min-h-screen min-w-screen bg-gray-800 text-gray-300'>
        <Head />
        <NavBar />
            <div className='flex items-center'>
                <Title title="Statistics" />
            </div>
            <div className='leading-8 text-center text-lg w-11/12 md:w-8/12 mx-auto mt-10 rounded-lg'>
                <YoutubeStatCards/>
                <Title title="Latest Uploads"/>
                <LatestVideos />
            </div>
            <Footer/>
      </div>
    )
}