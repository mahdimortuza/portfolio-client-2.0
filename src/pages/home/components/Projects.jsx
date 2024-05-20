import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderObj from "../../../assets/bg-objects/sliderObj.svg";
import event_360 from "../../../assets/projects/Event 360.webp";
import foodieBee from "../../../assets/projects/Foodie Bee.webp";
import oceanCatch from "../../../assets/projects/ocean-catch.webp";
import '../../../common.css';


const Projects = () => {
  const sliderElements = [
    {
      header: "Ocean Catch",
      des: "Seafood e-commerce website.",
      img: oceanCatch,
      clientRepo: "https://github.com/mahdimortuza/ocean-catch-client",
      serverRepo: "https://github.com/mahdimortuza/ocean-catch-server",
      liveLink: "https://ocean-catch-client.vercel.app/",
    },
     {
      header: "Foodie Bee",
      des: "Supply chain management website.",
      img: foodieBee,
      clientRepo: "https://github.com/mahdimortuza/foodie-bee-client",
      serverRepo: "https://github.com/mahdimortuza/foodie-bee-server",
      liveLink: "https://foodie-bee-client-main.vercel.app/",
    },
    {
      header: "Event-360",
      des: "Event-based crowdfunding website.",
      img: event_360,
      clientRepo: "https://github.com/mahdimortuza/event-360-client",
      serverRepo: "https://github.com/mahdimortuza/event-360-server",
      liveLink: "https://event-360-client.vercel.app/",
    },
    
    // {
    //   header: "Sweet Home",
    //   des: "Real estate property management website.",
    //   img: sweetHome,
    //   clientRepo: "https://github.com/mahdimortuza/sweet-home-client",
    //   serverRepo: "https://github.com/mahdimortuza/sweet-home-server",
    //   liveLink: "https://sweet-home-client.vercel.app/",
    // },
    
    // {
    //   header: "UniAid",
    //   des: "Event-based crowdfunding website.",
    //   img: uniAid,
    //   clientRepo: "https://github.com/Eshtiaque/Crowd-Funding-Client",
    //   serverRepo: "https://github.com/Eshtiaque/Crowd-Funding-Server",
    //   liveLink: "https://crowd-funding-dc81b.web.app/",
    // },
  ];

  return (
    <div
      name="projects"
      className="max-w-[1350px] mx-auto relative pb-[35px] md:pb-[40px] px-4 lg:px-8"
    >
   
      <motion.h2
        className="font-playfair text-[38px] md:text-[58px] text-left md:text-center leading-[40px] md:leading-[66px] mt-[100px]"
        // initial={{ opacity: 0, marginBottom: -15 }}
        // whileInView={{ opacity: 1, marginBottom: 0 }}
        // transition={{ delay: 1, duration: 1 }}
      >
        Some of my recent <br /> projects
      </motion.h2>
      <img className="absolute top-0 left-0" src={sliderObj} />

      {/* swiper slider section starts here  */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container mt-10"
      >
        {
        sliderElements.map((sliderElement) => (
          <div className="relative" key={sliderElement.header}>
            <SwiperSlide>
              <div className=" ">
                <img
                  className="h-[300px] md:h-[330px] w-full"
                  src={sliderElement.img}
                />
                <div className="absolute bottom-2 px-[10px]">
                  <h3 className=" font-playfair text-[#132238] text-[18px] md:text-[22px] font-bold">
                    {sliderElement.header}
                  </h3>
                  <p className="  text-[#556070] font-raleway md:text-[16px] ">
                    {sliderElement.des}
                  </p>

                  {/* button  */}
                  <div className="text-[#4285F4] flex gap-[5px] md:gap-[14px] font-raleway text-[14px] md:text-[17px] font-semibold mt-2">
                    
                  <motion.a
                      className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                      href={sliderElement.liveLink}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Live Site
                    </motion.a>

                    <Link
                      className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                      to='/projects'
                      // whileHover={{
                      //   scale: 1.05,
                      //   transition: { duration: 0.1 },
                      // }}
                      // whileTap={{ scale: 0.9 }}
                    >
                      See more
                    </Link>

                    {/* <motion.a
                      className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                      href={sliderElement.clientRepo}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Client Code
                    </motion.a>
                    <motion.a
                      className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                      href={sliderElement.serverRepo}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Server Code
                    </motion.a> */}
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))
        }
        
      </Swiper>
      
      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div> 
    </div>
  );
};

export default Projects;

// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import event_360 from "../../../assets/projects/Event 360.webp";
// import foodieBee from "../../../assets/projects/Foodie Bee.webp";
// // import uniAid from "../../../assets/projects/Uniaid.webp";
// import oceanCatch from "../../../assets/projects/ocean-catch.webp";
// // import sweetHome from "../../../assets/projects/sweet-home.webp";
// import { Link } from "react-router-dom";
// import '../../../common.css';


// const Projects = () => {
//   const sliderElements = [
//     {
//       header: "Ocean Catch",
//       des: "Seafood e-commerce website.",
//       img: oceanCatch,
//       clientRepo: "https://github.com/mahdimortuza/ocean-catch-client",
//       serverRepo: "https://github.com/mahdimortuza/ocean-catch-server",
//       liveLink: "https://ocean-catch-client.vercel.app/",
//     }, {
//       header: "Event-360",
//       des: "Event-based crowdfunding website.",
//       img: event_360,
//       clientRepo: "https://github.com/mahdimortuza/event-360-client",
//       serverRepo: "https://github.com/mahdimortuza/event-360-server",
//       liveLink: "https://event-360-client.vercel.app/",
//     },
//     {
//       header: "Foodie Bee",
//       des: "Supply chain management website.",
//       img: foodieBee,
//       clientRepo: "https://github.com/mahdimortuza/foodie-bee-client",
//       serverRepo: "https://github.com/mahdimortuza/foodie-bee-server",
//       liveLink: "https://foodie-bee-client-main.vercel.app/",
//     },
//     // {
//     //   header: "Sweet Home",
//     //   des: "Real estate property management website.",
//     //   img: sweetHome,
//     //   clientRepo: "https://github.com/mahdimortuza/sweet-home-client",
//     //   serverRepo: "https://github.com/mahdimortuza/sweet-home-server",
//     //   liveLink: "https://sweet-home-client.vercel.app/",
//     // },
   
//     // {
//     //   header: "UniAid",
//     //   des: "Event-based crowdfunding website.",
//     //   img: uniAid,
//     //   clientRepo: "https://github.com/Eshtiaque/Crowd-Funding-Client",
//     //   serverRepo: "https://github.com/Eshtiaque/Crowd-Funding-Server",
//     //   liveLink: "https://crowd-funding-dc81b.web.app/",
//     // },
//   ];

//   return (
//     <div  className="max-w-[1350px] mx-auto relative pb-[35px] md:pb-[40px] px-4 lg:px-8">
//     <Swiper
//       style={{
//         '--swiper-navigation-color': '#fff',
//         '--swiper-pagination-color': '#fff',
//       }}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       speed={400}
//       parallax={true}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Parallax, Pagination, Autoplay, Navigation]}
//       className="mySwiper"
//     >
//       <div
//         slot="container-start"
//         className="parallax-bg"
//         style={{
//           'background-image':
//             'url(https://raw.githubusercontent.com/mahdimortuza/ocean-catch-client/main/src/assets/banner/banner1.png)',
//         }}
//         data-swiper-parallax="-23%"
//       ></div>
      
//       {
//         sliderElements.map((sliderElement) => (
//           <div className="relative" key={sliderElement.header}>
//             <SwiperSlide>
//               <div className=" ">
//                 <img
//                   className="h-[300px] md:h-[330px] w-full"
//                   src={sliderElement.img}
//                 />
//                 <div className="absolute bottom-2 px-[10px]">
//                   <h3 className=" font-playfair text-[#132238] text-[18px] md:text-[22px] font-bold">
//                     {sliderElement.header}
//                   </h3>
//                   <p className="  text-[#556070] font-raleway md:text-[16px] ">
//                     {sliderElement.des}
//                   </p>

//                   {/* button  */}
//                   <div className="text-[#4285F4] flex gap-[5px] md:gap-[14px] font-raleway text-[14px] md:text-[17px] font-semibold mt-2">
                    
//                     <motion.a
//                       className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
//                       href={sliderElement.clientRepo}
//                       whileHover={{
//                         scale: 1.05,
//                         transition: { duration: 0.1 },
//                       }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       Client Code
//                     </motion.a>
//                     <motion.a
//                       className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
//                       href={sliderElement.serverRepo}
//                       whileHover={{
//                         scale: 1.05,
//                         transition: { duration: 0.1 },
//                       }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       Server Code
//                     </motion.a>
//                     <motion.a
//                       className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
//                       href={sliderElement.liveLink}
//                       whileHover={{
//                         scale: 1.05,
//                         transition: { duration: 0.1 },
//                       }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       Live Site
//                     </motion.a>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </div>
//         ))
//         }
//     </Swiper>



//     <div className=" flex flex-col items-center ">
//    <Link to="projects">
//    <motion.button
//               className="mt-16 px-[14px] md:px-5 py-2 md:py-[10px] text-[#4285F4] border-2  border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.1 },
//               }}
//               whileTap={{ scale: 0.9 }}
//             >
//                See more
//             </motion.button>
//    </Link>
//     </div>
//   </div>
//   );
// };

// export default Projects;
