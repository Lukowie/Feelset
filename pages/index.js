// index.html
import {useState, React} from 'react';
import Image from 'next/image';
import NavBar from '../components/navbar.js';
import Head from '../components/Head.js';
import Footer from '../components/footer.js';
import feelsetlogo from '../img/feelset-circle.png';

export default function Home() {

  return (
    <div className='min-h-screen min-w-screen bg-gray-800 text-gray-300'>
      <Head />
      <NavBar />
        <div className='min-h-screen'>
          <Image className="mx-auto w-3/6 md:w-2/12 pt-10 md:min-w-[300px]" src={feelsetlogo} alt="feelset logo"/>
        </div>
      <Footer/>
    </div>
  );
}