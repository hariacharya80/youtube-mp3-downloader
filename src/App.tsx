import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/Header";
import { BiSolidDownload } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <section className="h-screen w-screen bg-slate-200 dark:bg-slate-800 dark:text-white flex justify-center">
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/3 p-10 dark:bg-slate-900 bg-white items-center">
        <div className="w-full flex justify-end gap-2">
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? (
              <div className="flex justify-center items-center gap-2 border-2 p-2 rounded bg-slate-200 dark:bg-slate-800 dark:border-black hover:dark:bg-slate-600 transition-colors">
                <span>Light Mode</span>
                <BsFillSunFill />
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2 border-2 p-2 rounded bg-slate-200 hover:bg-slate-500 hover:text-white dark:bg-slate-800 dark:border-black hover:dark:bg-slate-900 transition-colors">
                <span>Dark mode</span>
                <BsFillMoonStarsFill />
              </div>
            )}
          </button>
        </div>
        <Header />
        <div className="mt-10">
          <span>Please paste the video link below to download:</span>
        </div>
        <input
          type="text"
          disabled={loading}
          className={
            loading
              ? "p-1 cursor-not-allowed border-2 w-2/3 rounded outline-none text-black dark:bg-slate-600 dark:outline-slate-800 dark:text-white dark:border-slate-800 my-2"
              : "p-1 border-2 w-2/3 rounded outline-none text-black dark:bg-slate-600 dark:outline-slate-800 dark:text-white dark:border-slate-800 my-2"
          }
          name="url"
          id="url"
          placeholder="https://www.youtube.com/watch?v=asdfasdf"
        />
        <button
          onClick={() => setLoading(true)}
          className={
            loading
              ? "mt-5 flex cursor-progress justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-800 transition-colors text-white dark:bg-slate-600 py-2 rounded w-1/2"
              : "mt-5 flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-800 transition-colors text-white dark:bg-slate-600 py-2 rounded w-1/2"
          }
        >
          <span className="text-2xl">
            {loading ? (
              <div className="w-4 border-2 h-4 rounded-full border-black border-b-white animate-spin"></div>
            ) : (
              <BiSolidDownload />
            )}
          </span>
          {loading ? "Processing Video..." : " Download MP3 from Video"}
        </button>
        <Footer />
      </div>
    </section>
  );
}

export default App;
