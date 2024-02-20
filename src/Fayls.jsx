import { useDispatch, useSelector } from "react-redux"
import Omborchi from "./Omborchi";


function Fayls() {
  const dispach=useDispatch();
  const Newfl=()=>{
    dispach(Omborchi.actions.New())
    dispach(Omborchi.actions.metodd(1))
  }

  function Id(a){
    dispach(Omborchi.actions.Namr(a))
  }

const {fileName, metod, fileSoni}=useSelector(a=>a.joy);

  return (
    <div className="h-full bg-slate-200 p-5">
        <button className="text-[36px]" onClick={Newfl}>+</button>
        <div>
          {fileSoni.map(a=>{
            return a.id==0 ? '': (          <h2 key={a.id} onClick={()=>Id(a.id)} className='cursor-pointer'>
              {a.id}.{fileSoni[a.id].metod}.{fileSoni[a.id].fileName}
            </h2>)
          })}
        </div>
    </div>
  )
}

export default Fayls