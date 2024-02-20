import { useSelector } from "react-redux"


function Jvoblar() {

const arr=useSelector(a=>a.joy.urlApi);
console.log(arr);

  return (
    <div>
        {arr.map(element=>{
          return(
            <div className="border px-1" key={element.id}>
                <p>{'{'}</p>
                <h4>id: {element.id}</h4>
                <h4>category: <p>{'['}id:{element.category.id}, image:{element.category.image}, name:{element.category.name}, creationAt: {element.category.creationAt}{']'}</p></h4>
                <h4>title: {element.title}</h4>
                <h4>price: {element.price}</h4>
                <h4>image: {element.images}</h4>
                <h4>updateAt: {element.updatedAt}</h4>
                <p>{'}'}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Jvoblar