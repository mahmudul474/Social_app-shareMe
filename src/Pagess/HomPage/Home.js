import React from 'react';
import { Outlet } from 'react-router-dom';
import Rightside from '../../components/righttSideComponent/Rightside';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Middle from '../Middle/Middle';



const Home = () => {
    return (
        <div>
       <Header></Header>
      
        <div className=" grid grid-cols-1 lg:grid-cols-12 md:grid-cols-8 border">
          
          {/* left side  */}
          <div className="hidden md:block lg:block lg:col-span-3 border md:col-span-2">
           

            <ul>
               <li>
                 <h1 className="text-lg font-semibold mt-5 mb-3"> <i className="fa-solid fa-user-group"></i> Friends</h1>
               </li>

               <li>
                 <h1 className="text-lg font-semibold mt-5 mb-3"> <i className="fa-solid fa-calendar-minus"></i> Most Resent  </h1>
               </li>

              <li>
                <h1 className="text-lg font-semibold mt-5 mb-3"> <i className="fa-solid fa-flag-checkered"></i> Pages </h1>
              </li>

              <li>
                <h1  className="text-lg font-semibold mt-5 mb-3"> <i className="fa-solid fa-users-rectangle"></i> Groups</h1>
              </li>
               
               
            </ul>
          </div>
           
           {/* middel side */}
          <div className="col-span-12 lg:col-span-6 border md:col-span-5">
            <Outlet></Outlet>
            <Middle></Middle>
          </div>
            
            {/* right side */}
          <div className="hidden lg:block lg:col-span-2">
            <Rightside></Rightside>
          </div>

        </div>


<Footer></Footer>


      </div>


    );
};

export default Home;