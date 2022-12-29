


const EditAbout = ({editabout,user,refetch}) => {

console.log(user)

const  handleeditAbout=(event)=>{
    event.preventDefault();
const from=event.target;
const  title=from.title.value;
const jobtitle=from.jobtitle.value;
const phone=from.phone.value;
const profileEmail=from.email.value;
const about=from.about.value;

const stady=from.education.value;
const vercity=from.vercity.value;
const eduction= stady + ","+ vercity;

const curentcity=from.curentcity.value;
const location=from.location.value;
const locationfrom=curentcity + "," + location;


const userAbout={
    title:title,
    jobtitle:jobtitle,
    phone:phone,
    profileEmail:profileEmail,
    about:about,
    eduction:eduction,
    curentcity:curentcity,
    locationfrom:locationfrom,

}


fetch(`http://localhost:5000/userabout/${user?.email}`,{
    method:'PUT',
    headers:{
        'Content-Type': 'application/json',
    },
    
        body:JSON.stringify(userAbout),
    
})
   .then((res) => res.json())
   .then((data) => {
       console.log(data);
       refetch()
       
   })










   



}


    return (
        <div>
<input type="checkbox" id="edtiabout-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle ">
  <div className="modal-box ">
    <h3 className="font-bold text-lg">Edit youre About</h3>
    



    <form onSubmit={handleeditAbout}>

    <div className="relative z-0 mb-6 w-full group">
      <input type="text" name="title" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="  "  />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left">Title</label>
  </div>

  <div className="relative z-0 mb-6 w-full group">
     
      <input type="text" name="jobtitle" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"> job-title(Sr maneger) Company (Ex. Google)</label>


  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input type="tel"  name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left">Phone number (123-456-7890)</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
       
    <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left">Email address</label>




    </div>
    <div className="relative z-0 mb-6 w-full group">
       
    <input type="eduction" name="education" id="eduction" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "   />
      <label htmlFor="eduction" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left">Education</label>




    </div>
    <div className="relative z-0 mb-6 w-full group">
       
    <input type="text" name="vercity" id="vercity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="vercity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left">univercity</label>




    </div>
  
    
    <div className="relative z-0 mb-6 w-full group">
       
       <input type="text" name="curentcity" id="curentcity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
         <label htmlFor="curentcity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left">Current City</label>
   
   
   
   
       </div>


    <div className="relative z-0 mb-6 w-full group">
       
    <input type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label htmlFor="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left">Location</label>


    </div>

  

  </div>

 


  <><p><label className='text-left block' htmlFor="w3review">About you</label></p>
  <textarea className='border-gray-700 p-2 border' name="about" id="w3review" placeholder='wriite soomthing about you ??????'  rows={4} cols={50}></textarea></>

  <div className="modal-action">
      <label htmlFor="edtiabout-modal" className="btn" type="submit">Yay!</label>
    </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


   
  </div>
</div>
        </div>
    );
};

export default EditAbout;