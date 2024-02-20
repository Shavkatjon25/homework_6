import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Omborchi from "./Omborchi";


function Sorov() {
    const dispach=useDispatch()

    const aydi=useSelector(a=>a.joy.namer);
    const count=useSelector(a=>a.joy.fileSoni[aydi].metodId)
    function Metods(a){
        dispach(Omborchi.actions.Metd(a))
        if (count<4) {
            dispach(Omborchi.actions.metodd(count+1))
        } else{dispach(Omborchi.actions.metodd(1))}

    }
    let urlLink='';
    function Api(a){
        urlLink+=a
    }

  async  function UrlQidr(){
        const data = await fetch(urlLink);
        const datajs=await data.json();
        dispach(Omborchi.actions.Ap(datajs));
    }


  return (
<div className="flex items-center mt-10">
<div className="border-[2px] rounded-md over flex gap-2 flex-1">
        <ul className="w-[90px] pl-2 hover:outline outline-green-500">
            <li className={`text-[28px] cursor-pointer ${count==1 ? '':'hidden'}`} onClick={()=>Metods('Post')}>Get</li>
            <li className={`text-[28px] cursor-pointer ${count==2 ? '':'hidden'}`} onClick={()=>Metods('Put')}>Post</li>
            <li className={`text-[28px] cursor-pointer ${count==3 ? '':'hidden'}`} onClick={()=>Metods('Delete')}>Put</li>
            <li className={`text-[28px] cursor-pointer ${count==4 ? '':'hidden'}`} onClick={()=>Metods('Get')}>Delete</li>
        </ul>
        <input type="text" placeholder="url" onChange={a=>Api(a.target.value)} className="flex-1 p-1 outline-green-500" />
    </div>
    <div>
        <button className="bg-green-500 flex justify-center items-center py-3 px-4 rounded-lg mx-5 text-white" onClick={UrlQidr}>Send</button>
    </div>
</div>
  )
}

export default Sorov