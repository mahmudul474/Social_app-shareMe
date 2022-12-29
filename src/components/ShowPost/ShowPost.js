import React from 'react';

const ShowPost = () => {
    return (
        <div className="bg-white shadow mt-4 p-3 pb-0 relative">
        <div className="flex items-center">
            <div>
                <img alt="" className="w-10 h-10 rounded-full" src="https://gravatar.com/avatar/b19536334f76e904381e09b5a8776646?s=512&d=https://static.codepen.io/assets/avatars/user-avatar-512x512-6e240cf350d2f1cc07c2bed234c3a3bb5f1b237023c204c782622e80d6b212ba.png" />
                
            </div>
            <div className="ml-2">
                <h5>
                    <a className="text-blue no-underline hover:underline" href="#">
                        Partho Bfmv
                    </a>
                   
                    .
                </h5>
                <p className="text-xs font-normal text-grey mt-1">
                    <span className="cursor-pointer hover:underline">
                        December 8, 2017
                    </span>

                    
                </p>
            </div>
        </div>
        <h5 className="text-sm font-normal my-3">
            Brotherhood.
        </h5>
        <div className="">
            <img alt="" src="https://gravatar.com/avatar/b19536334f76e904381e09b5a8776646?s=512&d=https://static.codepen.io/assets/avatars/user-avatar-512x512-6e240cf350d2f1cc07c2bed234c3a3bb5f1b237023c204c782622e80d6b212ba.png" />
        </div>
        <div className="flex py-1">
            <button className="appearance-none flex-1 flex items-center justify-center py-2 text-center text-red hover:bg-grey-lighter">
                Love
            </button>
            <button className="appearance-none flex-1 flex items-center justify-center py-2 text-center text-grey-darker hover:bg-grey-lighter">
               
    
                Comment
            </button>
            <button className="appearance-none flex-1 flex items-center justify-center py-2 text-center text-grey-darker hover:bg-grey-lighter">
                
                <svg className="w-4 h-4 mr-1" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98 0-175.5 6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123 0 6 2.5 23.5t2.5 26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451 0-199 53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z">
                    </path>
                </svg>
               Dettails
            </button>
        </div>

        <div className="bg-grey-lighter p-2 -mx-3 border">    
            <span className="text-xs text-blue cursor-pointer hover:underline">
                You, Abu Talha Khan and 139 others
            </span>
        </div>

        <div className="bg-grey-lighter flex flex-between py-3 -mx-3 p-2">
            <img className="w-8 h-8 rounded-full" src="https://scontent.fdac15-1.fna.fbcdn.net/v/t1.0-1/p160x160/38471710_1864466673590219_2505239258227277824_n.jpg?_nc_cat=0&oh=5baabd619722f307c947f407dae0c308&oe=5C2DC290" alt="" />

            <textarea name="body" placeholder="Write a comment..." className="appearance-none w-full mx-2 bg-grey-lighter rounded-full border bg-white h-8 px-2 pt-2 text-xs" />
        </div>
    </div>
    );
};

export default ShowPost;