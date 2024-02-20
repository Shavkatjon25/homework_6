import { useDispatch, useSelector } from "react-redux"
import Omborchi from "./Omborchi";


function Inpt() {
const Id=useSelector(a=>a.joy.namer)
const valu=useSelector(a=>a.joy.fileSoni[Id].fileName);
const dispach=useDispatch();
function Kilik(e){
  dispach(Omborchi.actions.FileNam(e))
}


  return (
    <div>
        <input type="text" value={valu} onChange={e=>Kilik(e.target.value)}  className="px-1"/>
    </div>
  )
}

export default Inpt