import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { useRef } from "react";
import { toast } from "sonner";
const Contact = () => {

  const form = useRef();

  const {
    register,
    handleSubmit,reset, 
    formState: { errors },
  } = useForm()

  
  const onSubmit = (data) => {
    emailjs
    .sendForm(
      "service_loy0dzi",
      "template_lqzb5bt",
      form.current,
      "sJWJP6mnHBszRsI9Q"
    )
    .then(
      (result) => {
        if (result) {
          toast.success("Message sent successfully!")
        }
      },
      (error) => {
        if (error) {
          toast.error("please try again!")
        }
      }
    );
    
    console.log(data)
    reset()
  }


  return (
    <div
      name="contact"
      className="bg-[#FEFAF6] max-w-[1350px] mx-auto flex flex-col md:flex-row md:justify-between items-center md:px-48 pt-[50px] md:pt-[68px] px-4"
    >
      <motion.div
        // initial={{ opacity: 0, marginLeft: -15 }}
        // whileInView={{ opacity: 1, marginLeft: 0 }}
        // transition={{ delay: 1, duration: 0.8 }}
      >
        <h3 className="text-[#3D434D]  font-raleway text-[20px] md:text-[24px] font-semibold leading-[32px]">
          Mail me
        </h3>
        <p className="text-[#222A35] text-[18px] md:text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          mahdi.mortuza1@gmail.com
        </p>
        <h3 className="text-[#3D434D]  font-raleway text-[20px] md:text-[24px] font-semibold leading-[32px] mt-[8px] md:mt-[44px]">
          Contact me
        </h3>
        <p className="text-[#222A35] text-[18px] md:text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          +880 1521549150
        </p>
        <h3 className="text-[#3D434D]  font-raleway text-[20px] md:text-[24px] font-semibold leading-[32px] mt-[8px] md:mt-[44px]">
          Location
        </h3>
        <p className="text-[#222A35] text-[18px] md:text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          Free School Street, <br />
          Dhaka 1205, Bangladesh
        </p>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0, marginRight: -15 }}
        // whileInView={{ opacity: 1, marginRight: 0 }}
        // transition={{ delay: 1, duration: 0.8 }}
      >
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[350px]  md:w-[448px]  p-5 bg-[#EEEAE5] rounded-[8px] mt-[50px] md:mt-[0px]"
        >
          <input
            type="text"
            className="text-[#132238] outline-none font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white w-full rounded-[6px]"
            placeholder="Your Name*"
            name="name"
            {...register('name' , { required: true })}
          /> 
          {errors.name && <span className="text-red-500 text-sm font-thin">Name field is required*</span>}
          <input
            type="email"
            className="text-[#132238] outline-none mt-[10px] font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white w-full rounded-[6px]"
            placeholder="Your Email Address*"
            name="email"
            {...register('email', { required: true })}

          />
          {errors.email && <span className="text-red-500 text-sm font-thin">Email field is required*</span>}

          <textarea
            cols="50"
            type="text"
            className="text-[#132238] outline-none mt-[10px] font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white rounded-[6px]"
            placeholder="What you want to say*"
            name="message"
            {...register('message', { required: true })}

          />
          {errors.message && <span className="text-red-500 text-sm font-thin">Please write your message*</span>}

          <motion.input
            className="bg-gradient-to-r cursor-pointer from-[#75B4F1] to-[#A573F0] hover:border hover:border-[#4285F4]  rounded-[6px] text-white mt-[10px] py-1 font-normal leading-8 font-raleway text-[16px] outline-none"
            type="submit"
            value="Send"
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
          />
        </form> 
      </motion.div>
    </div>
  );
};

export default Contact;
