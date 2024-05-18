import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";

const Blogs = () => {
  return (
    <Container>
      <h1 className="font-playfair text-[38px] md:text-[40px] text-center md:text-center leading-[40px] md:leading-[66px] my-10">
        Read my blogs here.
      </h1>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="flex flex-col justify-center border border-black rounded-lg p-2">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src="https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/nextui.svg"
          />
          <p className="text-sm mt-2">
            Category: {""}
            <span className="text-xs">Full-stack</span>
          </p>
          <h4 className="font-semibold text-2xl  mt-3">How to learn NextJS</h4>
          <p className=" mt-1">To learn nextjs 6 steps should be followed.</p>
          <div className="flex justify-end mt-2">
            <Link to="">
              <motion.button
                className="px-[8px] md:px-3 py-1 md:py-[4px] text-[#4285F4] border-2  border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                See more 👉
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center border border-black rounded-lg p-4">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src="https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/nextui.svg"
          />
          <p className="text-sm mt-2">
            Category: {""}
            <span className="text-xs">Full-stack</span>
          </p>
          <h4 className="font-semibold text-2xl  mt-3">How to learn NextJS</h4>
          <p className=" mt-1">To learn nextjs 6 steps should be followed.</p>
        </div>

        <div className="flex flex-col justify-center border border-black rounded-lg p-4">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src="https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/nextui.svg"
          />
          <p className="text-sm mt-2">
            Category: {""}
            <span className="text-xs">Full-stack</span>
          </p>
          <h4 className="font-semibold text-2xl  mt-3">How to learn NextJS</h4>
          <p className=" mt-1">To learn nextjs 6 steps should be followed.</p>
        </div>

        <div className="flex flex-col justify-center border border-black rounded-lg p-4">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src="https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/nextui.svg"
          />
          <p className="text-sm mt-2">
            Category: {""}
            <span className="text-xs">Full-stack</span>
          </p>
          <h4 className="font-semibold text-2xl  mt-3">How to learn NextJS</h4>
          <p className=" mt-1">To learn nextjs 6 steps should be followed.</p>
        </div>

        <div className="flex flex-col justify-center border border-black rounded-lg p-4">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src="https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/nextui.svg"
          />
          <p className="text-sm mt-2">
            Category: {""}
            <span className="text-xs">Full-stack</span>
          </p>
          <h4 className="font-semibold text-2xl  mt-3">How to learn NextJS</h4>
          <p className=" mt-1">To learn nextjs 6 steps should be followed.</p>
        </div>

        <div className="flex flex-col justify-center border border-black rounded-lg p-4">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src="https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/nextui.svg"
          />
          <p className="text-sm mt-2">
            Category: {""}
            <span className="text-xs">Full-stack</span>
          </p>
          <h4 className="font-semibold text-2xl  mt-3">How to learn NextJS</h4>
          <p className=" mt-1">To learn nextjs 6 steps should be followed.</p>
        </div>

        <div className="flex flex-col justify-center border border-black rounded-lg p-4">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src="https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/nextui.svg"
          />
          <p className="text-sm mt-2">
            Category: {""}
            <span className="text-xs">Full-stack</span>
          </p>
          <h4 className="font-semibold text-2xl  mt-3">How to learn NextJS</h4>
          <p className=" mt-1">To learn nextjs 6 steps should be followed.</p>
        </div>

        <div className="flex flex-col justify-center border border-black rounded-lg p-4">
          <img
            className="w-[200px] h-[200px] mx-auto"
            src="https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/nextui.svg"
          />
          <p className="text-sm mt-2">
            Category: {""}
            <span className="text-xs">Full-stack</span>
          </p>
          <h4 className="font-semibold text-2xl  mt-3">How to learn NextJS</h4>
          <p className=" mt-1">To learn nextjs 6 steps should be followed.</p>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
