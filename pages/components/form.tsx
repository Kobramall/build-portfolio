import Link from 'next/link'

const Form = (props) =>{
   
    const {onChange, info, photoDrop, handleDragOver} = props



    
    return(
        <div className="bg-black text-white w-3/6 p-3 rounded-2xl px-10 md:px-20 lg:px-40">
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center flex-col text-center text-lg">
                <h2 className="p-2">Enter Name</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text' name='name'value={info.name} onChange={onChange}/>
                <h2 className="p-2">Enter Resume Link</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text' name='resumeLink'value={info.resumeLink} onChange={onChange}/>
                <h2 className="p-2">Enter Professional Title</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text'name='profession'value={info.profession} onChange={onChange}/>
                <h2>Enter Job Search Description</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text' name='jobDescription'value={info.jobDescription} onChange={onChange}/>
                <h2 className="p-2">Enter LinkedIn Link</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text'name='linkedInLink'value={info.linkedInLink} onChange={onChange}/>
                <h2 className="p-2">Enter Facebook Link</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text'name='facebookLink'value={info.facebookLink} onChange={onChange}/>
                <h2 className="p-2">Enter Instagram Link</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text'name='instagramLink'value={info.instagramLink} onChange={onChange}/>
                <h2 className="p-2">Enter Email</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text' name='email'value={info.email} onChange={onChange}/>
                <h2 className="p-2">Reason to Hire</h2>
                <input className="border-4 w-36  border-black text-black md:w-64 lg:w-96" type='text'name='reasonToHire'value={info.reasonToHire} onChange={onChange}/>
                <h2 className="p-2">Enter Experience Description</h2>
                <input className="border-4 w-36 border-black text-black md:w-64 lg:w-96" type='text'name='experienceDescription'value={info.experienceDescription} onChange={onChange}/>
                <h2 className="p-2">Enter Experience</h2>
                <div className="flex justify-center mr-12 mt-3 md:w-64 lg:w-96 ">
                 <h3 className="p-1">Item 1</h3>   
                <input className="border-4 h-10 w-32  lg:w-84 border-black text-black md:w-64" type='text' name='experienceList1'  value={info.experienceList1} onChange={onChange}/>
                </div>
                <div className="flex justify-center mr-12 mt-3 md:w-64 lg:w-96 ">
                <h3 className="p-1">Item 2</h3> 
                <input className="border-4 h-10 w-32 border-black text-black md:w-64" type='text'name='experienceList2'value={info.experienceList2} onChange={onChange}/>
                </div>
                <div className="flex justify-center mr-12 mt-3 md:w-64 lg:w-96">
                <h3 className="p-1">Item 3</h3> 
                <input className="border-4 h-10 w-32  border-black text-black md:w-64" type='text'name='experienceList3' value={info.experienceList3} onChange={onChange}/>
                </div>
                <h2 className="p-2 mt-3">Enter Skills Description</h2>
                <input className="border-4 border-black text-black w-32 md:w-64 lg:w-96" type='text'name='skillsDescription'value={info.skillsDescription} onChange={onChange}/>
                <h2 className="p-2">Enter Skill</h2>
                <div className="flex justify-center mr-12 mt-3 md:w-64 lg:w-96">
                 <h3 className="p-1">Item 1</h3>   
                <input className="border-4 h-10 w-32 border-black text-black md:w-64" type='text' name='skillsList1' value={info.skillsList1} onChange={onChange}/>
                </div>
                <div className="flex justify-center mr-12 mt-3 md:w-64 lg:w-96">
                <h3 className="p-1">Item 2</h3> 
                <input className="border-4 h-10 w-32 border-black text-black md:w-64" type='text'name='skillsList2' value={info.skillsList2} onChange={onChange}/>
                </div>
                <div className="flex justify-center mr-12 mt-3 md:w-64 lg:w-96 ">
                <h3 className="p-1">Item 3</h3> 
                <input className="border-4 h-10 w-32 border-black text-black md:w-64" type='text'name='skillsList3' value={info.skillsList3} onChange={onChange}/>
                </div>
                <h2 className="p-2 mt-4">Enter Acheivements Description</h2>
                <input className="border-4 border-black text-black w-32 md:w-64 lg:w-96" type='text'name='achievementsDescription'value={info.achievementsDescription} onChange={onChange}/>
                <h2 className="p-2">Enter Acheivement</h2>
                <div className="flex justify-center mr-12 mt-3 lg:w-96">
                 <h3 className="p-1">Item 1</h3>   
                <input className="border-4 h-10 w-32 border-black text-black md:w-64" type='text' name='achievementsList1' value={info.achievementsList1} onChange={onChange}/>
                </div>
                <div className="flex justify-center mr-12 mt-3 lg:w-96">
                <h3 className="p-1">Item 2</h3> 
                <input className="border-4 h-10 w-32 border-black text-black md:w-64" type='text' name='achievementsList2' value={info.achievementsList2} onChange={onChange}/>
                </div>
                <div className="flex justify-center mr-12 mt-3 lg:w-96">
                <h3 className="p-1 mb-3">Item 3</h3> 
                <input className="border-4 h-10 w-32 border-black text-black md:w-64" type='text'name='achievementsList3' value={info.achievementsList3} onChange={onChange}/>
                </div>
            </form>
        </div>
    )
}

export default Form