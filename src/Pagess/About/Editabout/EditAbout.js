import { toast } from 'react-hot-toast'

const EditAbout = ({ user,aboutUserdetails, refetch }) => {

const {title, jobtitle,phone}=aboutUserdetails


  const handleeditAbout = (event) => {
   
      event.preventDefault()
      const from = event.target;
      const title = from.title.value;
      const jobtitle = from.jobtitle.value;
      const phone = from.phone.value;
      const profileEmail = from.email.value;
      const about = from.about.value;
      const eduction = from.education.value;
      const locationfrom = from.curentcity.value;
      const DateOfBirth = from.DateOfBirth.value;
      const name = from.username.value;
       

    



      const userAbout = {
        
        title: title,
        jobtitle: jobtitle,
        phone: phone,
        profileEmail: profileEmail,
        about: about,
        eduction: eduction,
        locationfrom: locationfrom,
        name: name,
        DateOfBirth: DateOfBirth,
      }
 
      fetch(`https://social-server-sooty.vercel.app/userabout/${user?.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(userAbout),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success('user  uptade successfully')
            refetch()
          }
        })
       .catch((err) => {
          console.log(err)
        })

  }

  return (
    <div>
      <input type="checkbox" id="edtiabout-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box ">
          <h3 className="font-bold text-lg">Edit Youre About Details ....</h3>

          <form onSubmit={handleeditAbout}>
            
            <div className="relative z-0 mb-6 w-full group">


 







              <input
                type="text"
                name="username"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="  "
              />
              <label
            
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"
              >
                uptade youre ProfileName
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="DateOfBirth"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="  "
              />
              <label
   
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"
              >
                DateOf-Birth (DD/MM/YYYY)
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="title"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="  "
              />
              <label
              
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"
              >
                Title (like developer)
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="jobtitle"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"
              >
                {' '}
                job-title(Sr maneger) Company (Ex. Google)
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                name="phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
          
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
             
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full ">
              <input
                type="eduction"
                name="education"
                id="eduction"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
            
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"
              >
                curent year (universicty)
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="curentcity"
                id="curentcity"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
              
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block text-left"
              >
                Current City (country)
              </label>
            </div>

            <>
              <p>
                <label className="text-left block" htmlFor="w3review">
                  About you
                </label>
              </p>
              <textarea
                className="border-gray-700 p-2 border"
                name="about"
                id="w3review"
                placeholder="wriite soomthing about you ??????"
                rows={4}
                cols={50}
              ></textarea>
            </>

            <div className="modal-action">
              <label htmlFor="edtiabout-modal" className="btn" type="submit">
                Yay!
              </label>
            </div>

            <button
              htmlFor="edtiabout-modal"
              type="submit"
              className="btn
  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditAbout
