import Inpt from "./Inpt"
import Jvoblar from "./Jvoblar"
import Phb from "./Phb"
import Sorov from "./Sorov"
import Yonalsh from "./Yonalsh"


function Metod() {
  return (
    <div className=" flex flex-col p-5">
        <Inpt/>
        <Sorov/>
        <Yonalsh/>
        <Phb></Phb>
        <Jvoblar/>
    </div>
  )
}

export default Metod