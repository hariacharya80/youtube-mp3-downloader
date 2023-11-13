function Footer() {
  return (
    <div className="absolute bottom-0 mb-10 text-slate-400 dark:text-slate-200 ">
      Copyright &copy;
      <a
        href="https://www.hari-acharya.com.np"
        target="_blank"
        className="underline hover:text-slate-700 dark:hover:text-indigo-600 transition-colors"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.hari-acharya.com.np", "_blank");
        }}
      >
        Hari Acharya
      </a>{" "}
      2023
    </div>
  );
}

export default Footer;
