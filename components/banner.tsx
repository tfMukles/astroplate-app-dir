"use client";

import { fadeInUpBanner } from "@/lib/animate";
import { IBanner } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  banner: IBanner;
}

const Banner = ({ banner }: Props) => {
  const { button, content, title, image } = banner;

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="max-w-[830px] text-center mx-auto"
        >
          <motion.h1
            variants={fadeInUpBanner}
            className="mx-auto max-w-[645px] font-title font-bold mb-5 text-center text-[40px] leading-[50px] sm:text-[64px] sm:leading-[80px] capitalize"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeInUpBanner}
            className="section-description mb-8"
          >
            {content}
          </motion.p>

          <motion.button
            variants={fadeInUpBanner}
            className="btn-primary px-6 py-[10px] flex mx-auto items-center"
          >
            {button?.label}
            <BsArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeInUpBanner}
          initial={"hidden"}
          whileInView={"animate"}
          viewport={{ once: true }}
          className="mt-[50px]"
        >
          <Image
            width={1272}
            height={403.27}
            className="max-w-[100%] mx-auto"
            src={image}
            alt="banner"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
