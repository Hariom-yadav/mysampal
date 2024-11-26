import React from 'react'
// import { BiSolidHomeAlt2 } from "react-icons/bi";
import { RiHomeWifiLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
// import { FcSearch } from "react-icons/fc";




 const Navbar = () => {
  return (
    <div>
             <div className='flex justify-center  items-end'>
                
                <div><img src="/images/codingsirji.jpg" width={200} alt="cycle" value='coding'/></div>
                <div className='flex pl-10 text-9xl opacity-60 text-blue-900 '> Coding Sirji</div>
            </div>


            <div className='flex flex-col  bg-blue-200 shadow-blue-300 shadow-2xl '>

           

                        <div className='flex flex-row mt-3 justify-between  border-b-2 border-black'>
                                {/* <div>Menu</div> */}
                                <div className='flex flex-row'>
                                                <div className='bg-blue-200 mb-2 p-1 ml-10 flex 
                                                                hover:bg-white hover:rounded-lg
                                                                hover:outline-yellow-400 
                                                                hover:outline-double outline-3 outline-offset-2
                                                              first-letter:font-bold'><RiHomeWifiLine className=' size-7' />
                                                              <NavLink to="/">Home</NavLink></div>
                                                
                                                <div className='bg-blue-200 mb-2 p-1 ml-10 flex 
                                                                hover:bg-white hover:rounded-lg
                                                                hover:outline-yellow-400 
                                                                hover:outline-double outline-3 outline-offset-2
                                                              first-letter:font-bold'>
                                                              <NavLink to="/about">About</NavLink></div>


                                              
                                                
                                                <div className='flex flex-row mr-10 w-300'>
                                                                        
                                                                        {/* <h6 className='ml-3'></h6> */}
                                                                        <input className='  hover:outline-yellow-400 mb-2 w-300 ml-2
                                                                                        hover:outline-double outline-3 outline-offset-2
                                                                                        rounded-lg' 
                                                                                        ></input>
                                                </div>
                                </div>
                                

                                <div className='flex flex-row mr-5'>
                                          <div className='mr-2  hover:outline-yellow-400 mb-2 w-300 hover:bg-white
                                                                  hover:outline-double outline-3 outline-offset-2
                                                                  rounded-lg p-1'>Log in </div>
                                          <div className='ml-1  hover:outline-yellow-400 mb-2 w-300 hover:bg-white
                                                                  hover:outline-double outline-3 outline-offset-2
                                                                  rounded-lg p-1'>Sing up</div>
                                </div>
                                

                        </div>

                         <div className='flex flex-row justify-evenly mb-2'>       
                                       
                                        <div className=' hover:bg-white 
                                                          outline-green-500
                                                          hover:outline outline-offset-2 outline-1 
                                                          p-1 mt-2 rounded-lg '
                                        >Quizz</div>
                                        
                                        <div className=' hover:bg-white p-1
                                                           outline-green-500
                                                          hover:outline outline-offset-2 outline-1 
                                                           rounded-lg mt-2'>C Programming Language</div>
                                                          
                                        <div className=' hover:bg-white  p-1  outline-green-500
                                                          hover:outline outline-offset-2 outline-1 
                                                           rounded-lg mt-2'>Interview Question</div>



                        </div>
            </div>
    </div>
  )
}
export default Navbar