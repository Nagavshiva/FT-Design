import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testmonial = () => {
  
        const projects = [
            {
              img:"https://www.smartpropertyinvestment.com.au/images/podcasts/Sam_Gordon_web.jpg",
              name: "Matias Similä",
              desc:"Our collaboration with Scketch has been absolutely stunning, and their product delivery management is done with utmost professionalism and precision. I would definitely recommend Scketch.",
             
            },
            {
              img:"https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=",
              name: "Ravikanth Eranki",
              desc:"Scketch is undoubtedly a great find for us. The team understood our requirement and vision comprehensively, and were able to execute it very well. Being a start-up, our requirements were dynamic. ",
            },
            {
              img: "https://www.smartpropertyinvestment.com.au/images/podcasts/Faris_Dedic_web.jpg",
              name: "Gautham Kumar",
              desc:"Our experience with Scketch has been incredible. We were impressed by their ability to thoroughly understand us and deliver a mobile app that’s user friendly and technically innovative.",
            },
            {
              img:"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
              name: "Pravalika Manyam",
              desc:"Our experience working with Scketch Logo design team was perfect. We are completely satisfied with their efforts and results for our product logo. I would definitely recommend Scketch.",
            },
          ];
          return (
            <section id="projects" className="text-white  ">
              <div className="text-center">
                <h3 className="text-4xl text-blue-900 font-bold">
                Testimonials
                </h3>
                <p className="text-gray-400 mt-3 text-lg font-semibold"> Read What Others Have To Say</p>
              </div>
              <br />
              <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative justify-center md:z-0 sm:z-0">
                <div className="lg:w-2/3 w-full">
                  <Swiper
                    slidesPerview={1.2}
                    spaceBetween={20}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                    }}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                  >
                    {projects.map((project_info, i) => (
                      <SwiperSlide key={i}>
                        <div className="w-full p-4 bg-slate-700 rounded-xl h-5/6">
                          <img src={project_info.img} alt="" className="rounded-lg w-72 h-56 mx-auto" />
                          <h3 className="text-xl my-4 text-pink-600 font-semibold">{project_info.name}</h3>
                          <div className="flex gap-3">
                           <h5 className='font-bold text-gray-400'>{project_info.desc}</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </section>
          );
  
}

export default Testmonial