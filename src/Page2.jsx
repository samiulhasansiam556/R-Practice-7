import  {  useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CountContex } from "./CountContex";

function Page2() {

  const {count,setCount} = useContext(CountContex)
  const navigate = useNavigate();

  const handleIncement = () =>{
    if(count<10){
        setCount(count+1)
    }
  }
  const handdleDecrement = () =>{
    if(count>0){
        setCount(count-1)
    }
  }
  return (
    <div>
      <h1 className="text-center text-blue-500 text-3xl font-bold font-serif mt-30 mb-36">
        Welcome to Page2
      </h1>

      <div className="div2 flex justify-center gap-10 items-center">
        <Link className="p-3 rounded-3xl text-white bg-blue-600 " to="/">
          Go Page1
        </Link>
        <button onClick={() => navigate(1)}>Forward</button>
        <button onClick={() => navigate(-1)}>Backward</button>
      </div>

      <div className="text-center">
        <p className="inline-block bg-black text-white p-3 mt-10 rounded-xl">{count}</p>
      </div>

      <div className="flex justify-center gap-10 mt-20">
        <button onClick={handleIncement} 
        className="bg-emerald-500 p-3 rounded-xl text-pretty text-xl text-white">increase</button>
        <button onClick={handdleDecrement} 
        className="bg-emerald-500 p-3 rounded-xl text-pretty text-xl text-white">decrase</button>
      </div>


   
      {count > 0?(
            <div className="text-center mt-20">
              <p className="text-sky-900 text-xl font-bold">
                You got {count} point{count > 1 ? "s" : ""}
              </p>
            </div>
          ):(<div className="text-center mt-20">
              <p className="text-sky-900 text-xl font-bold">
                Sorry, you are not going under {count} point
              </p>
            </div>
        )}

    </div>

  );
}

export default Page2;
