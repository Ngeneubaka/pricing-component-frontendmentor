import { useState } from "react";
import bgBottom from "./images/bg-bottom.svg";
import bgTop from "./images/bg-top.svg";

function App() {
  const [annually, setAnnually] = useState(false);
  return (
    <>
      <div className="absolute top-0 right-0 -z-10">
        <img src={bgTop} alt="" className="w-full max-w-full" />
      </div>
      <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen">
        <h1 className="text-center text-slate-700 mb-8 text-4xl">Our Pricing</h1>
        <div class="toggle lg:mb-10">
          <label class="name">Annually</label>
          <input
            type="checkbox"
            class="checkbox"
            id="checkbox"
            checked={annually}
            onChange={() => setAnnually(!annually)}
          />

          <label for="checkbox" class="label">
            <div class="ball"></div>
          </label>

          <label class="name">Monthly</label>

        </div>
        <div className="flex flex-wrap flex-col justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
          <article className="p-8 rounded bg-white shadow lg:w-full">
            <h2 className="text-slate-700 text-xl mb-5">Basic</h2>
            {annually && <h3 className="flex items-center justify-center text-slate-700 text-5xl"><span className="mr-3 text-3xl">$</span>19.99</h3>}
            {!annually && <h3 className=" flex items-center justify-center text-slate-700 text-5xl"><span  className="mr-3 text-3xl">$</span>199.99</h3>}
            <ul className="flex flex-col m-8">
              <li className="border-t border-slate-300 py-3 text-slate-600">500 GB</li>
              <li className="border-t border-slate-300 py-3 text-slate-600">2 Users Allowed</li>
              <li className="border-y border-slate-300 py-3 text-slate-600">Send up to 3 GB</li>
            </ul>
            <button className="linear-gradient bg-white text-white py-3 w-full rounded-lg border-2 btn
               border-white uppercase cursor-pointer hover:border-2">Learn More</button>
          </article>
          <article className="linear-gradient p-8 rounded shadow lg:w-full lg:scale-110">
            <h2 className="text-xl mb-5 text-white">Professional</h2>
            {annually && <h3 className=" flex items-center justify-center text-white text-5xl"><span className="mr-3 text-3xl">$</span>24.99</h3>}
            {!annually && <h3 className=" flex items-center justify-center text-white text-5xl"><span className="mr-3 text-3xl">$</span>249.99</h3>}
            <ul className="flex  flex-col m-8">
              <li className="border-t border-white py-3 text-white">1 TB Storage</li>
              <li className="border-t border-white py-3 text-white">5 Users Allowed</li>
              <li className="border-y border-white py-3 text-white">Send up to 10 GB</li>
            </ul>
            <button className="bg-white text-slate-700 py-2 w-full rounded-lg border-2
               border-white uppercase cursor-pointer hover:bg-transparent hover:text-white transition-all duration-200">Learn More</button>
          </article>
          <article className="p-8 rounded bg-white shadow lg:w-full">
            <h2 className="text-slate-700 text-xl mb-5">Master</h2>
            {annually && <h3 className=" flex items-center justify-center text-slate-700 text-5xl"><span className="mr-3 text-3xl">$</span>39.99</h3>}
            {!annually && <h3 className=" flex items-center justify-center text-slate-700 text-5xl"><span className="mr-3 text-3xl">$</span>399.99</h3>}
            <ul className="flex  flex-col m-8">
              <li className="border-t border-slate-300 py-3 text-slate-600">2 TB Storage</li>
              <li className="border-t border-slate-300 py-3 text-slate-600">10 Users Allowed</li>
              <li className="border-y border-slate-300 py-3 text-slate-600">Send up to 20 GB</li>
            </ul>
            <button className="linear-gradient bg-white text-white py-3 w-full rounded-lg border-2 btn
               border-white uppercase cursor-pointer hover:border-2">Learn More</button>
          </article>
        </div>
        <br/>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="/">Ubaka Ngene</a>.
        </div>
      </section>
      <div className="absolute left-0 bottom-0 -z-10">
        <img src={bgBottom} alt="" className="w-full max-w-full" />
      </div>
    </>
  );
}

export default App;
