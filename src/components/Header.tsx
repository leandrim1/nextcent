const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-5 md:px-10 sm:px-1">
      <div className="flex items-center">
        <img src="./public/logo.svg" alt="Logo" className="w-30 h-10 md:w-30 sm:w-20" />
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-5 font-semibold lg:gap-15 sm:gap-3">
        <div>
          <strong className="text-gray-800 hover:text-gray-700 md:text-sm sm:text-xs">Home</strong>
        </div>
        <div>
          <strong className="text-gray-800 hover:text-gray-700 md:text-sm sm:text-xs">
            Features
          </strong>
        </div>
        <div>
          <strong className="text-gray-800 hover:text-gray-700 md:text-sm sm:text-xs">
            Community
          </strong>
        </div>
        <div>
          <strong className="text-gray-800 hover:text-gray-700 md:text-sm sm:text-xs">Blog</strong>
        </div>
        <div>
          <strong className="text-gray-800 hover:text-gray-700 md:text-sm sm:text-xs">Pricing</strong>
        </div>
        <button className="flex items-center h-10 px-4 rounded-sm bg-green-600 text-amber-50 hover:bg-green-500 lg:h-10 md:text-sm md:w-36 md:h-8 sm:text-xs sm:w-32 sm:h-7 ">
          Register Now
          <img
            src="./public/seta-direita.png"
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
