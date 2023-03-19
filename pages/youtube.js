import {React} from 'react';
import NavBar from '../components/navbar';
import Head from '../components/Head';
import Title from '../components/Title';
import SubscriberCount from '../components/SubscriberCount';

export default function Youtube(){
    return (
        <div className='min-h-screen min-w-screen bg-gray-800 text-gray-300'>
        <Head />
        <NavBar />
            <div className='flex items-center'>
                <Title title="Youtube" />
            </div>
            <div className='leading-8 text-lg w-11/12 md:w-8/12 mx-auto mt-10 rounded-lg p-5'>
                <div className='md:grid md:grid-cols-3'>
                    <div className="md:col">
                        <SubscriberCount/>
                    </div>
                </div>
            </div>
      </div>
    )
}