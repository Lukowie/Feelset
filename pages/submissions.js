import {React} from 'react';
import NavBar from '../components/navbar';
import Head from '../components/Head';
import Title from '../components/Title';
import Footer from '../components/footer';
import Form from '../components/submitForm';

export default function Submissions(){
    return (
        <div className='min-h-screen min-w-screen bg-gray-800 text-gray-300'>
        <Head />
        <NavBar />
            <div className='hidden sm:block'>
                <Title title="Submit Your Music" />
            </div>
                <Form />
            <Footer/>
      </div>
    )
}