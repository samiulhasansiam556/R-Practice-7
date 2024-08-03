import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CountContex } from "./CountContex";

function Page1() {
  const { count, setCount } = useContext(CountContex);
  const navigate = useNavigate();

  const handleIncement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const handdleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-red-600 pb-36 pt-10">
        Welcome to Page1
      </h1>

      <div className="div1 flex justify-center gap-10">
        <Link className="p-3 rounded-3xl text-white bg-red-600 " to="Page2">
          Go Page2
        </Link>
        <button onClick={() => navigate(1)}>Forward</button>
        <button onClick={() => navigate(-1)}>Backward</button>
      </div>

      <div className="text-center">
        <p className="inline-block bg-black text-white p-3 mt-10 rounded-xl">
          {count}
        </p>
      </div>

      <div className="flex justify-center gap-10 mt-20">
        <button
          onClick={handleIncement}
          className="bg-emerald-500 p-3 rounded-xl text-pretty text-xl text-white"
        >
          increase
        </button>
        <button
          onClick={handdleDecrement}
          className="bg-emerald-500 p-3 rounded-xl text-pretty text-xl text-white"
        >
          decrase
        </button>
      </div>

       
       
       
        {count > 0 && (
            <div className="text-center mt-20">
              <p className="text-sky-900 text-xl font-bold">
                You got {count} point{count > 1 ? "s" : ""}
              </p>
            </div>
          )}
    
          {count <= 0 && (
            <div className="text-center mt-20">
              <p className="text-sky-900 text-xl font-bold">
                Sorry, you are not going under {count} point
              </p>
            </div>
          )}

    
    </div>
  );
}

export default Page1;
