const Footer = () => {
  return (
    <footer className="w-full h-80 mt-30 flex items-center text-center bg-gray-800">
      <div className="flex flex-col w-100 h-50 pt-3 pl-30">
        <img src="./public/logo branca.svg" alt="" className="w-40 mb-2" />
        <div className="text-left text-gray-500 mt-3 pt-3">
          <span>
            Copyright © 2020 Landify UI Kit. <br />
            All rights reserved
          </span>
        </div>
        <div className="flex flex-row justify-center gap-10 mt-10">
          <div className="rounded-full justify-center content-center pl-1.5 bg-gray-400 w-10 h-10 transition duration-75 ease-in-out hover:scale-110">
            <img src="./public/Instagram.svg" alt="" className="w-7 h-7" />
          </div>
          <div className="rounded-full justify-center content-center pl-1.5 bg-gray-400 w-10 h-10 transition duration-75 ease-in-out hover:scale-110">
            <img src="./public/Path.svg" alt="" className="w-7 h-7" />
          </div>
          <div className="rounded-full justify-center content-center pl-1.5 bg-gray-400 w-10 h-10 transition duration-75 ease-in-out hover:scale-110">
            <img src="./public/Twitter.svg" alt="" className="w-7 h-7" />
          </div>
          <div className="rounded-full justify-center content-center pl-1.5 bg-gray-400 w-10 h-10 transition duration-75 ease-in-out hover:scale-110">
            <img src="./public/Youtube.svg" alt="" className="w-7 h-7" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-left gap-2 ml-100">
        <h1 className="text-2xl text-neutral-50">Company</h1>
        <div className="text-neutral-50 ">About us</div>
        <div className="text-neutral-50">Blog</div>
        <div className="text-neutral-50">Contact us</div>
        <div className="text-neutral-50">Pricing</div>
        <div className="text-neutral-50">Testimonials</div>
      </div>
      <div className="flex flex-col justify-center text-left gap-2 ml-30">
        <h1 className="text-2xl text-neutral-50">Support</h1>
        <div className="text-neutral-50">Help center</div>
        <div className="text-neutral-50">Terms of service</div>
        <div className="text-neutral-50">Legal</div>
        <div className="text-neutral-50">Privacy policy</div>
        <div className="text-neutral-50">Status</div>
      </div>
      <div className="flex flex-col justify-center text-left gap-2 ml-30 mb-25">
        <h1 className="text-2xl text-neutral-50">Stay up to date</h1>
        <input type="text" placeholder="Your email address" className="pl-3 w-70 h-10 rounded-sm bg-gray-400 mt-3"/>
      </div>
    </footer>
  );
};

export default Footer;
