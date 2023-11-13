import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
        <div className="w-full">
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
        <div className="w-full flex flex-col items-center">
          <h1 className="font-bold text-3xl">YouTube MP3 Tool</h1>
          <span>Download MP3 from YouTube videos.</span>
        </div>
        <div>
          <span>Please paste the video link below to download:</span>
        </div>
        <input
          type="text"
          className="p-1 border-2 w-2/3 rounded outline-none text-black dark:bg-slate-600 dark:outline-slate-800 dark:text-white dark:border-slate-800 my-2"
          name="url"
          id="url"
          placeholder="https://www.youtube.com/watch?v=asdfasdf"
        />
        <button className="bg-indigo-600 hover:bg-indigo-800 transition-colors text-white dark:bg-slate-600 py-2 rounded w-1/2">
          Download MP3 from Video
        </button>
      </div>
    </section>
  );
}

export default App;
