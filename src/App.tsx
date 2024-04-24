import { Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Task from "./task/task-select";

function App() {
  return (
    <>
      <section className="flex flex-col w-full  items-center justify-center">
        <nav className="flex flex-row justify-between gap-2 px-4 mx-auto border-none items-center bg-primary h-[84px] w-screen">
          {/* back */}
          <img src="../src/assets/arrow-left-02-sharp.svg" alt="" />
          {/* logo */}
          <Link to="/">
            <img src="../src/assets/Primary Logo White 1.svg" alt="" />
          </Link>
          {/* navbar */}
          <img src="../src/assets/menu-01.svg" alt="" />
        </nav>


        <div className="flex flex-row gap-1 w-full justify-between items-center mt-3 p-[5%]">
          {/* Render 10 span elements with conditional styling */}
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className={`w-7 h-1.5 rounded ${
                index < 2 ? "bg-primary" : "bg-[#F0F5F4]"
              }`}
            ></span>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-start justify-center w-full px-[5%] py-3 mx-auto">
        <h1 className="font-syne font-semibold text-[20px] leading-[30px] text-primary">What service would you like to book?</h1>
        <p className="font-normal text-xs text-primary ">You can select one type of cleaning and extra tasks</p>

        </div>

        {/* form  */}

<Task />

      </section>
    </>
  );
}

export default App;
