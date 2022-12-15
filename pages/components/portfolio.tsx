import { BsFillMoonStarsFill, BsMoonStars } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import Image from "next/image";
import design from '../../public/skill-icon.jpg'
import code from '../../public/file-icon.jpg';
import consulting from '../../public/trophy-icon.png';
import Img from '../../public/filler-image.png'
import { useState } from 'react';

function Portfolio(props) {
const [darkMode, setDarkMode] = useState(false);
const {info} = props


  return(
    <div className={darkMode ? "dark p-2" : "p-2"}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-black rounded-3xl'>
         <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>{info.name}</h1>
            <ul className='flex items-center'>
              <li className='dark:invert'>
                {darkMode ? <BsMoonStars onClick={() => setDarkMode(!darkMode)} className="bg-white h-6 w-6" /> : <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:bg-white'/> }
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-sm px-4 py-2 rounded-md ml-8' href={info.resumeLink}>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-cyan-500 font-medium md:text-6xl'>{info.name}</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>{info.profession}</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl md:max-w-xl md:mx-auto dark:text-white'>{info.jobDescription}</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <a href={info.linkedInLink}><AiFillLinkedin /></a>
             <a href={info.instagramLink}><AiFillInstagram /></a>
            <a href={info.facebookLink}><AiFillFacebook /></a>
          </div>
          <div className='flex justify-center relative mx-auto  rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 '>
            <Image src={Img} alt="filler" width={500} height={500}/>
          </div>
         </section>
          
          <section>
            <div className='text-center pt-10' >
              <h3 className='text-3xl py-1' >Why Hire Me?</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>{info.reasonToHire}</p>
                <p className='text-sm py-2 leading-8 text-gray-800  dark:text-white'>
                If you have any question please contact me at<span className='text-teal-500'> {info.email}</span>
                </p>
            </div>
            <div className='lg:flex gap-10'>
            <div className='flex flex-col bg-white text-center items-center shadow-lg p-10 rounded-xl my-10'>
                 <Image src={code} alt="design" width={95} height={95} />
                 <h3 className='text-lg font-medium pt-8 pb-2'>Useful Experience</h3>
                 <p className='py-2'>{info.experienceDescription}</p>
                 <h4 className='py-4 text-teal-600'>Examples</h4>
                 <p className='text-gray-800 py-1'>{info.experienceList1}</p>
                 <p className='text-gray-800 py-1'>{info.experienceList2}</p>
                 <p className='text-gray-800 py-1'>{info.experienceList3}</p>
                 <p className='text-gray-800 py-1'>etc.</p>
              </div>
              <div className='flex flex-col bg-white text-center items-center shadow-lg p-10 rounded-xl my-10'>
                 <Image src={design} alt="design" width={105} height={100} className="transform-scale-y-100"/>
                 <h3 className='text-lg font-medium pt-8 pb-2'>Skills</h3>
                 <p className='py-2 '>{info.skillsDescription}</p>
                 <h4 className='py-4 text-teal-600'>Examples</h4>
                 <p className='text-gray-800 py-1'>{info.skillsList1}</p>
                 <p className='text-gray-800 py-1'>{info.skillsList2}</p>
                 <p className='text-gray-800 py-1'>{info.skillsList3}</p>
                 <p className='text-gray-800 py-1'>etc.</p>
              </div>
              <div className='flex flex-col bg-white text-center items-center shadow-lg p-10 rounded-xl my-10'>
                 <Image src={consulting} alt="design" width={100} height={100} />
                 <h3 className='text-lg font-medium pt-8 pb-2'>Achievements</h3>
                 <p className='py-2'>{info.achievementsDescription}</p>
                 <h4 className='py-4 text-teal-600'>Examples</h4>
                 <p className='text-gray-800 py-1'>{info.achievementsList1}</p>
                 <p className='text-gray-800 py-1'>{info.achievementsList2}</p>
                 <p className='text-gray-800 py-1'>{info.achievementsList3}</p>
                 <p className='text-gray-800 py-1'>etc.</p>
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}

export default Portfolio