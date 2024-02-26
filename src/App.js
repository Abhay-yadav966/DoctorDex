import { lazy } from "react";
import "./App.css";
import data from "./data";
import { useState } from "react";

function App() {

  // state veriable to select
  const [ select, setSelect ] = useState(data[0].id);

  return (
    <div className="bg-[#f6f8ff]" >
      <div className=" mx-auto w-10/12 max-w-7xl flex flex-col gap-28 " >
        {/* upper part */}
        <div className="flex flex-col gap-3 mt-10 " >
          {/* heading */}
          <h1 className="text-5xl font-semibold text-center  " >Select Doctor</h1>
          <div className="border border-green w-[15%] mx-auto " ></div>
        </div>

        {/* lower part */}
        <div className="flex flex-wrap gap-x-3 gap-y-10 items-center justify-center pb-10" >
            {
              data.map( (doctorDetail) => (
                <div key={doctorDetail.id} onClick={() => setSelect(doctorDetail.id)} className={` ${select === doctorDetail.id ? "shadow-2xl" : "shadow-inner"} cursor-pointer rounded-lg `} >
                  {/* image */}
                  <img src={doctorDetail.url} loading={lazy} className="h-[250px] w-[250px] object-cover rounded-t-lg " />
                  {/* data */}
                  <div className = {`${ select === doctorDetail.id ? "bg-green" : "bg-[#EEE8EE]"} rounded-b-lg py-3`}>
                    <p className={`${select === doctorDetail.id ? "text-white" : "text-gray"} text-center text-xl font-medium `} >{doctorDetail.name}</p>
                    <p className={`${select === doctorDetail.id ? "text-white" : "text-gray"} text-center text-base font-normal `} >{doctorDetail.specialist}</p>
                  </div>
                </div>
              ) ) 
            }
        </div>
      </div>
    </div>
  );
}

export default App;
