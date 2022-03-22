export const navStyles = {
  main: "bg-black flex items-center justify-between p-2 md:px-24 md:py-5 fixed w-full top-0 z-50",
  logo: "w-28 md:w-48 lg:w-56",
  btn: "border border-white text-white rounded-md px-5 py-1 md:px-12 md:py-1 lg:py-2 text-sm md:text-2xl font-semibold hover:bg-white hover:text-black ease-in duration-150",
};

export const carouselStyles = {
  main: "mt-24 md:mt-36 lg:mt-44 w-[90vw] md:w-[70vw] lg:w-[60vw] mx-auto my-5",
  img: "w-full h-72 md:h-[350px] lg:h-[400px] rounded-3xl",
  infoMain: "flex flex-col lg:flex-row justify-between px-5 mt-5 gap-y-5",
  title: "text-2xl font-bold text-gray-800",
  additional:
    "font-semibold text-gray-500 flex lg:flex-col items-center justify-between gap-y-3",
  date: "text-gray-400",
};

export const mainBlogsStyles = {
  main: "grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-[90vw] md:w-[70vw] lg:w-[60vw] mt-14",
  img: "h-72 md:h-96 lg:h-80 w-full rounded-3xl",
  head: "text-xl font-bold tracking-wider my-5 ml-5",
  details: "text-xl tracking-wider ml-5 mr-14 text-gray-600",
  bottomMain:
    "flex items-center justify-between mt-5 ml-5 mr-14 font-bold text-gray-400 text-md",
  time: "text-gray-500",
};

export const moreBlogsStyles = {
  main: "mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-[90vw] md:w-[70vw] lg:w-[60vw]",
  img: "h-64 md:h-72 lg:h-60 w-full rounded-3xl",
  head: "text-xl font-bold tracking-wider my-5",
  details: "text-lg tracking-wider mx-2 text-gray-600",
  bottomMain:
    "flex items-center justify-between mt-5 mx-2 font-bold text-gray-400 text-md",
  time: "text-gray-500",
  button:
    "bg-black text-white py-3 px-10 block mx-auto rounded-3xl my-20 text-lg",
};

export const footerStyles = {
  main: "bg-black text-white px-10 py-14",
  wrapper:
    "grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5 border-b-2 border-gray-500 p-8",
  info: "flex flex-col items-center",
  logo: "w-80",
  infoText: "text-gray-400 mt-1",
  iconMain: "flex flex-col md:flex-row mt-12 w-fit mx-auto gap-y-5 gap-x-2",
  iconWrapper: "flex items-center gap-2",
  icon: "w-20 h-20 md:w-12 md:h-12 border-[3px] md:border-[2px] rounded-full flex items-center justify-center text-3xl md:text-2xl",
  linksMain: "flex justify-evenly",
  link: "text-2xl text-gray-400 mb-5 hover:text-white cursor-pointer",
  appMain: "flex flex-col items-center",
  appHead: "text-gray-400 mt-1",
  appBtn:
    "bg-[#343a40] w-fit flex items-center px-5 py-1 border-2 border-white rounded-lg my-4 cursor-pointer",
  appIcon: "text-3xl mr-3",
  download: "text-sm text-gray-300",
  appCatagory: "font-semibold text-lg",
  copyright: "text-center text-gray-400 mt-3",
};
