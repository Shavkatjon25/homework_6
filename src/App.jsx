import { Provider } from "react-redux"
import Fayls from "./Fayls"
import Metod from "./Metod"
import Ombor from "./Ombor"


function App() {
  return (
    <Provider store={Ombor}>
    <div className="grid grid-cols-[2fr_5fr] h-full">
      <Fayls/>
      <Metod/>
    </div>
    </Provider>
  )
}

export default App