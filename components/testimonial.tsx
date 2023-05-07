"use client";

import { fadeInBottom, fadeInTop, fadeInUp } from "@/lib/animate";
import { ITestimonial } from "@/types";
import { motion, useInView } from "framer-motion";
import { marked } from "marked";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  testimonial: ITestimonial;
}

const Testimonial = ({ testimonial }: Props) => {
  const { title, desc, comments } = testimonial;
  const [render, setRender] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(parentRef, { once: true });

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <section className="section-padding !pb-0">
      <div className="container">
        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="max-w-[685px] mx-auto"
        >
          <motion.h1 variants={fadeInUp} className="section-title text-center">
            {title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="section-description text-center mt-3"
          >
            {desc}
          </motion.p>
        </motion.div>

        <div ref={parentRef}>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
          >
            {comments.map((comment, i) => {
              const isEven = (i + 1) % 2 === 0;
              const variants = isEven ? fadeInBottom : fadeInTop;

              return (
                <SwiperSlide key={i} className="mb-16 mt-11">
                  <motion.div
                    animate={!isInView ? "hidden" : "animate"}
                    variants={variants}
                    className="rounded-xl leading-[34px] font-inter text-xl bg-[#F6F6F6] py-8 px-[29px]"
                  >
                    <Image
                      width={32}
                      height={45}
                      src={"/images/invited-comma.png"}
                      alt="invited-comma"
                      className="mt-4 mb-7"
                    />
                    {render && (
                      <p
                        className="text-xl text-primary leading-[34px]"
                        dangerouslySetInnerHTML={{
                          __html: marked.parse(comment.comment),
                        }}
                      ></p>
                    )}

                    <div className="flex space-x-4 mt-11">
                      <Image
                        width={50}
                        height={50}
                        className="flex-none w-12 h-12 rounded-full"
                        src={comment.img}
                        alt="profile"
                      />
                      <div>
                        <h3 className="text-[22px] font-semibold leading-5 text-heading mb-1">
                          {comment.name}
                        </h3>
                        <span className="text-lg text-heading leading-4">
                          {comment.designation}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
