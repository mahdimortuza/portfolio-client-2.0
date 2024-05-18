import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { Button, Modal } from 'antd';
import { useRef, useState } from "react";

const ProjectModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const form = useRef();

  const {
    register,
    handleSubmit,reset, 
    formState: { errors },
  } = useForm()

  
  const onSubmit = (data) => {
   
    console.log(data)
    reset()
  }

  return (
    <>
      <Button  onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Create project"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Cancel"
        cancelText="Cancel"
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
      </Modal>
    </>
  );
};


export default ProjectModal;