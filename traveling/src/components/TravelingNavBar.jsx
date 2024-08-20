import React from 'react'
import './TravelingNavBar.css';

function TravelingNavBar() {
    function enter(){
        var z= document.getElementById("main-lisk");
        z.style.display="block";
        z.style.display="flex"
        z.style.cursor="pointer"
    }
    function leave(){
        var v = document.getElementById("main-lisk");
        v.style.display="none"
    }

    function under(){
        var time= document.getElementById("time");
        time.style.display="block"
    }
    function out(){
        var time1= document.getElementById("time");
        time1.style.display='none'
    }

      function tourEnter() {
        var tour = document.getElementById("tour");
        tour.style.display = "block";
      }
      function Tourout() {
        var tour1 = document.getElementById("tour");
        tour1.style.display = "none";
      }

            function tranEnter() {
              var tran = document.getElementById("transport");
              tran.style.display = "block";
            }
            function tranout() {
              var tran1 = document.getElementById("transport");
              tran1.style.display = "none";
            }


  return (
    <>
      <div
        id="main-div"
        className="w-[1100px] mx-auto  p-5 mt-[2rem] rounded-[10px]"
      >
        <div className="flex">
          <div onMouseEnter={enter} onMouseLeave={leave}>
            <div
              id="main-public"
              className="flex space-x-3 w-[150px] p-2 text-white hover:text-orange-600"
            >
              <div className="">
                <i class="fa-solid fa-earth-americas"></i>
              </div>
              <div>Public Tours</div>
            </div>

            <div
              id="main-lisk"
              className="bg-white w-[1050px]  h-[80px] p-3  items-center flex justify-between px-4"
            >
              <div className="flex space-x-4 items-center w-[100px]" id="side">
                <i class="fa-solid fa-calendar"></i>
                <div>Data</div>
              </div>

              <div className="flex flex-col">
                <div id="side" onMouseEnter={tourEnter} onMouseLeave={Tourout}>
                  <div
                    className="flex space-x-4 items-center w-[150px]"
                    id="side"
                  >
                    <i class="fa-regular fa-flag"></i>
                    <div>Tour</div>
                  </div>

                  <div
                    className="border bg-slate-50 w-[150px] mt-[1rem] ps-2"
                    id="tour"
                  >
                    <div className="py-1">Lucca Bike Tour</div>
                    <hr />
                    <div className="py-1">Book a bike</div>
                    <hr />
                    <div className="py-1">
                      Tour in the outside <br />
                      of Lucca
                    </div>
                    <hr />
                    <div className="py-1">
                      Wine Tasting in <br />
                      Tuscany
                    </div>
                    <hr />
                    <div className="py-1">Cinque Terre Tour</div>
                    <hr />
                    <div className="py-1">
                      Siena and <br /> Surroundings
                      <hr />
                      <div className="py-1">Pisa & Lucca</div>
                      <hr />
                      <div className="py-1"> Italy Special Trips</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div id="side" onMouseEnter={under} onMouseLeave={out}>
                  <div className="flex  space-x-4 items-center w-[100px]">
                    <i class="fa-regular fa-clock"></i>
                    <div>Time</div>
                  </div>

                  <div
                    className="border bg-slate-50 w-[100px] mt-[1rem] ps-2"
                    id="time"
                  >
                    <div className="py-1">1:00</div>
                    <hr />
                    <div className="py-1">2:00</div>
                    <hr />
                    <div className="py-1">3:00</div>
                    <hr />
                    <div className="py-1">4:00</div>
                    <hr />
                    <div className="py-1">5:00</div>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div id="side" onMouseEnter={tranEnter} onMouseLeave={tranout}>
                  <div
                    className="flex space-x-4 items-center w-[170px]"
                    id="side1"
                  >
                    <i class="fa-solid fa-car"></i>
                    <div>Transportation</div>
                  </div>

                  <div
                    className="border bg-slate-50 w-[170px]  py-2 mt-[1rem] ps-2"
                    id="transport"
                  >
                    <div className="py-1">Minivan and Bus </div>
                    <hr />
                    <div className="py-1">Transfers & NCC </div>
                    <hr />
                    <div className="py-1">Luxury Experience</div>
                  </div>
                </div>
              </div>

              <div className="w-[80px]  rounded-[20px] bg-orange-500 items-center justify-center flex text-[40px] text-white">
                <i class="fa-solid fa-magnifying-glass py-3"></i>
              </div>
            </div>
          </div>

          {/* <div
            id="main-public1"
            className="flex space-x-2 w-[150px] p-2  text-white hover:text-orange-600"
          >
            <div>
              <i class="fa-solid fa-users"></i>
            </div>
           
            <div>Private Tours</div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default TravelingNavBar;
