import {React} from 'react';
import NavBar from '../components/navbar';
import Head from '../components/Head';
import Title from '../components/Title';

export default function About(){
    return (
        <div className='min-h-screen min-w-screen bg-gray-800 text-gray-300'>
        <Head />
        <NavBar />
            <div className='flex items-center'>
                <Title title="About" />
            </div>
            <div className='leading-8 text-lg w-11/12 lg:w-6/12 mx-auto mt-10'>
                <p>On January 28th, 2017 <span className="text-purple-400">feelset</span> was born. At the time, it's purpose was to give me something to work on consistently and to help me through a hard time.</p>
                <br/>
                <p>Through comments I found that the music I promoted helped more than just myself. Many viewers found that the music helped them through tough times. While it's not the music I produced, I felt good knowing I was expanding the listening pool of these artists.</p>
                <br/>
                <p>It's been 6 years since the inception of feelset. I planned to keep it going for as long as I could, but life took a turn!
                A little crazy concept called a job was where all of my focus had to go to. Since I'm much more secured in that front of my life, 
                    it's time to <span className="text-vermillion">re-ignite</span> this project.</p>
                <br/>
                <p>This website is where all submissions will be recieved! Have a look at the <span className="text-peach">Submissions</span> page</p>
            </div>
      </div>
    )
}