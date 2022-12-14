import Head from 'next/head'
import Portfolio from './components/portfolio';
import Form from './components/form'
import {useState} from 'react'

export default function Home() {
 
 const intitalInfo = {name:'',
  resumeLink:'',
  profession: '',
  jobDescription:'',
  linkedInLink:'',
  instagramLink:'',
  facebookLink:'',
  photo:'',
  reasonToHire:'',
  email:'',
  experienceDescription:'',
  experienceList1: '',
  experienceList2: '',
  experienceList3: '',
  skillsDescription:'',
  skillsList1:'',
  skillsList2:'',
  skillsList3:'',
  achievementsDescription:'',
  achievementsList1:'' ,
  achievementsList2:'' ,
  achievementsList3:'' ,
}
 
  const [ info, setInfo] = useState(intitalInfo)
  
  const update = (inputValue, inputName) =>{


    setInfo({...info, [inputName]: inputValue})
  }

  
  const onChange = (evt) =>{
     
   const name = evt.target.name

   const {value } = evt.target

   update(value, name)

  }
 
  return (
    <div className='bg-gradient-to-br from-blue-600 to-teal-400 min-h-screen'>
      <Head>
        <title>Build Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/hammer-icon.png" />
      </Head>
      <main className=' flex flex-col px-10 md:px-20 lg:px-40 dark:bg-black items-center min-h-screen'>
      <h1 className='text-8xl'>WELCOME!</h1>
      <Form onChange={onChange} info={info}/>
      <div className='text-4xl p-5'>What the Website will look like</div>
      <Portfolio info={info}/>
      </main>
      </div>
  );
}