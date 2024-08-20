import React  from 'react'
import './First.css';
function First() {
  function toggle(){
    var a = document.getElementById("link-1");
    a.style.display="block";

    var d = document.getElementById("link-2");
    d.style.display = "flex";

    var g = document.getElementById('open');
    g.style.display='none';

     var i = document.getElementById("close");
     i.style.display='block';
    
  }

  function close() {
    var f = document.getElementById("link-1");
    f.style.display = "none";

    var e = document.getElementById("link-2");
    e.style.display = "none";

    var j = document.getElementById("open");
    j.style.display = "block";

    var h = document.getElementById("close");
    h.style.display = "none";
  }


  return (
    <>
      {/* <div className="lg:h-[585px] md:h-[1030px] h-[670px]" id="back-picture"> */}
        <div className="lg:w-[1280px] w-[full]" id="header">
          <div
            className="lg:w-[1100px]  md:w-[700px] mx-auto py-2 flex justify-between items-center text-white md:px-0 px-2"
            id="main-nav-bar"
          >
            <div>
              <img src={require("./images/logo.png")} alt="" id="logo" />
            </div>

            <nav className="lg:flex hidden ">
              <ul className="flex space-x-10">
                <li className="hover:underline hover:text-black cursor-pointer">
                  Home
                </li>
                <li className="hover:underline hover:text-black cursor-pointer">
                  About us
                </li>
                <li className="hover:underline hover:text-black cursor-pointer">
                  Tour Packages
                </li>
                <li className="hover:underline hover:text-black cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </nav>

            <div className="lg:flex hidden items-center space-x-4">
              <select
                name=""
                id="selector"
                className="text-white cursor-pointer"
              >
                <option value="Eng" className="text-black">
                  Eng
                </option>
                <option className="text-black" value="Urdu">
                  Urdu
                </option>
                <option value="Arbi" className="text-black">
                  Arbi
                </option>
              </select>
              <div className="hover:underline hover:text-black cursor-pointer">
                login
              </div>
              <div>
                <button className="bg-orange-400 py-2 px-4 rounded-[30px]">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="lg:hidden md:flex">
              <div className="lg:hidden md:flex" id="open" onClick={toggle}>
                <i class="fa-solid fa-bars text-[40px] "></i>
              </div>
              <div className="lg:hidden md:flex" id="close" onClick={close}>
                <i class="fa-solid fa-xmark text-[40px]"></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <nav
            className="flex lg:hidden lg:ps-0 md:ps-[6rem] ps-[2rem] text-white"
            id="link-1"
          >
            <ul className="flex flex-col space-y-3 lg:space-x-10">
              <li className="hover:underline hover:text-black cursor-pointer">
                Home
              </li>
              <li className="hover:underline hover:text-black cursor-pointer">
                About us
              </li>
              <li className="hover:underline hover:text-black cursor-pointer">
                Tour Packages
              </li>
              <li className="hover:underline hover:text-black cursor-pointer">
                Contact Us
              </li>
            </ul>
          </nav>
          <div
            className="flex  lg:hidden space-x-9 items-center lg:ps-0 md:ps-[6rem] ps-[2rem] lg:mt-0 mt-6 lg:items-center  lg:space-x-4"
            id="link-2"
          >
            <select
              name=""
              id="selector"
              className="text-white w-[80px] cursor-pointer"
            >
              <option value="Eng" className="lg:text-black text-white">
                Eng
              </option>
              <option className="text-black" value="Urdu">
                Urdu
              </option>
              <option value="Arbi" className="text-black">
                Arbi
              </option>
            </select>
            <div className=" text-white cursor-pointer">login</div>
            <div>
              <button className="bg-orange-400 py-2 px-4 rounded-[30px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default First;
