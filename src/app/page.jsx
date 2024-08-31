"use client";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { IoLogoGithub } from "react-icons/io5";
import { FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTensorflow, SiTypescript } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Montserrat = localFont({ src: "./Montserrat-VariableFont_wght.ttf" });
const VT323 = localFont({ src: "./VT323-Regular.ttf" });
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Testomies = [
  {
    id: 1,
    name: "Yitbarek Tsegaye",
    text: "Working with this website and app development company has been an absolute pleasure. Their team of talented developers understood my vision and translated it into a stunning website and user-friendly app.",
    work: "Co-founder of Ethio-Euro Trading PLC",
    imgName: "yetb.jpg",
  },
  {
    id: 2,
    name: "Eyob Beyene",
    text: "I approached this development company with a complex project, and they delivered beyond my expectations. Their expertise in website and app development is evident in the seamless functionality and beautiful design they",
    work: "Assistance Professor",
    imgName: "eyob.jpg",
  },
  {
    id: 3,
    name: "Yeabsira Gebriel",
    text: "I couldn't be happier with the website and app developed by this company. They took the time to understand my business needs and provided innovative solutions that have greatly enhanced my online presence.",
    work: "Business Man",
    imgName: "te6.jpg",
  },
  {
    id: 4,
    name: "Yeti Tefera",
    text: "I am extremely impressed with the professionalism and expertise of this development company. From the initial consultation to the final product, their team was with me every step of the way, ensuring that my website and app met my business goals.",
    work: "Co-founder of Ethio-Euro Trading PLC",
    imgName: "te1.jpg",
  },
  {
    id: 5,
    name: "Eliyas Workneh",
    text: "I  had a fantastic experience working with this website and app development company. Their team was not only highly skilled but also extremely patient and accommodating throughout the entire process.",
    work: "Business Man",
    imgName: "elias.jpg",
  },
];

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col bg-[#05060f]">
      <div className="w-[100%]">
        <div
          className={`${
            isFixed ? "fixed top-0 left-0 w-full z-50 bg-[#12141E]" : "relative"
          } w-[100%] h-16 flex flex-row  gap-2  items-center border-b-1 border-[#3b425f]`}
        >
          {/* Logo */}
          <div className="w-[30%] ">
            <h3
              className={`${VT323.className} ml-3 text-[#fff] font-bold md:text-6xl text-4xl logoText`}
            >
              BITS HUB
            </h3>
          </div>
          {/* Navigations */}
          <div
            className={` ${
              isMobileMenu ? "flex" : "hidden"
            } md:w-[70%]  md:flex md:relative absolute md:mt-0 mt-28  w-[100%] md:p-0 p-2 md:bg-transparent bg-[#101010]  bg-opacity-95`}
          >
            {/* Button 1 */}
            <div className="flex md:gap-4  gap-7 w-[100%] md:overflow-auto overflow-scroll md:pb-0 pb-2 md:justify-end scrollbar-hide">
              <Button
                onClick={() =>
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className={`${Montserrat.className} `}
              >
                Home
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className={`${Montserrat.className} `}
              >
                Services
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className={`${Montserrat.className} `}
              >
                Projects
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("testimonial")
                    .scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className={`${Montserrat.className} `}
              >
                Testimonials
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className={`${Montserrat.className} mr-8`}
              >
                Contact
              </Button>
            </div>
          </div>
          <div className="md:hidden w-[60%] flex justify-end">
            <Button
              onClick={() => setIsMobileMenu(isMobileMenu ? false : true)}
              variant="outline"
              className={`${Montserrat.className} hover:bg-[#554646]`}
            >
              {isMobileMenu ? (
                <IoCloseOutline size={20} color="#fff" />
              ) : (
                <CiMenuBurger size={20} color="#fff" />
              )}
            </Button>
          </div>
          {/* Nav-Buttons */}
        </div>
        <div id="home" className="w-[100%] flex flex-col items-center ">
          <div className="flex md:w-[90%] w-[99%] md:border-l-1 md:border-[#3b425f] md:border-r-1 justify-center">
            <div className="md:w-[90%] w-[98%] flex flex-col items-center md:border-l-1 md:border-[#3b425f] md:border-r-1 p-2">
              <img
                src="/BitsHubImgs/Rectangle 782.png"
                width={420}
                height={420}
                className="md:-mt-20 -mt-16"
              />
              <img
                src="/BitsHubImgs/WorldImg.png"
                width={520}
                height={420}
                className="-mt-36"
              />
              <div className="flex  justify-center justify-items-center">
                <h3
                  className={`${Montserrat.className} text-[#fff] md:text-6xl text-4xl -mt-20 w-[90%] absolute left-1/2 transform -translate-x-1/2 text-center`}
                >
                  Innovative AI and Software Solutions for the Future
                </h3>
              </div>
              <img
                src="/BitsHubImgs/mainCpuWitCircuit2.png"
                width={520}
                height={420}
                className="-mt-8 "
              />
            </div>
          </div>
        </div>
        {/* Codes Logos */}
        <div id="services" className="w-[100%] flex justify-center">
          <div className="md:w-[70%] w-[95%]  flex flex-row justify-between mt-10 p-4 gap-5">
            <FaReact size={60} color="#424147" />
            <SiNextdotjs size={60} color="#424147" />
            <FaJsSquare size={60} color="#424147" />
            <FaPython size={60} color="#424147" />
            <SiTypescript size={60} color="#424147" />
          </div>
        </div>
        {/* Services */}
        <div className="w-[100%] flex flex-col items-center mt-8 ">
          <h3
            className={`${Montserrat.className} font-semibold text-[#fff] shadow-md text-4xl `}
          >
            OUR SERVICES
          </h3>

          {/* First Section Card */}
          <div className="w-[100%] md:flex p-4 md:gap-10">
            <div className="md:w-[40%] border-[#3b425f] rounded-xl h-96 w-[100%] border-1 md:ml-[5%]">
              <Image
                src="/BitsHubImgs/Group 481830.png"
                width={260}
                height={420}
                className="ml-16 mt-2"
              />
              <div className="md:w-[98%] w-[100%] mt-1 flex justify-center">
                <div className="md:w-[95%] w-[99%] bg-[#121420] md:mt-1 mt-2 md:h-24 h-24 rounded-xl">
                  <h3
                    className={`${Montserrat.className} text-[#fff] font-semibold shadow-lg p-2  text-xl `}
                  >
                    CONSULTING
                  </h3>
                  <p
                    className={`${Montserrat.className} text-[#e3e3e3] shadow-lg p-5 -mt-5 `}
                  >
                    Rely on BitsHub as your trusted advisors.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-[40%] border-[#3b425f] rounded-xl h-96 w-[100%] border-1 md:mt-0 mt-7">
              <Image
                src="/BitsHubImgs/Group.png"
                width={260}
                height={420}
                className="ml-16 mt-2"
              />
              <div className="md:w-[98%] w-[100%] mt-1 flex justify-center">
                <div className="md:w-[95%] w-[99%] bg-[#121420] md:mt-1 mt-2 md:h-24 h-24 rounded-xl">
                  <h3
                    className={`${Montserrat.className} text-[#fff] font-semibold shadow-lg p-2  text-xl `}
                  >
                    Mobile Apps
                  </h3>
                  <p
                    className={`${Montserrat.className} text-[#e3e3e3] shadow-lg p-5 -mt-5 `}
                  >
                    Elevate your bussiness online presence with captive mobile
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second Section Card  */}
          <div className="w-[100%] md:flex p-4 md:gap-5">
            <div className="md:w-[30%] border-[#3b425f] rounded-xl h-96 w-[100%] border-1 ">
              <Image
                src="/BitsHubImgs/OBJECTS.svg"
                width={260}
                height={420}
                className="ml-16 mt-2"
              />
              <div className="md:w-[98%] w-[100%] mt-1 flex justify-center">
                <div className="md:w-[95%] w-[99%] bg-[#121420] md:mt-1 mt-2 md:h-24 h-24 rounded-xl">
                  <h3
                    className={`${Montserrat.className} text-[#fff] font-semibold shadow-lg p-2  text-xl `}
                  >
                    Data Analytics
                  </h3>
                  <p
                    className={`${Montserrat.className} text-[#e3e3e3] shadow-lg p-5 -mt-5 `}
                  >
                    Unlock the potential of your data with our comprehensive
                    analytical services
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] border-[#3b425f] rounded-xl h-96 w-[100%] border-1 md:mt-0 mt-7">
              <Image
                src="/BitsHubImgs/ai.jpg"
                width={207}
                height={420}
                className="ml-16 mt-2 rounded-2xl"
              />
              <div className="md:w-[98%] w-[100%] mt-1 flex justify-center">
                <div className="md:w-[95%] w-[99%] bg-[#121420] md:mt-1 mt-2 md:h-24 h-24 rounded-xl">
                  <h3
                    className={`${Montserrat.className} text-[#fff] font-semibold shadow-lg p-2  text-xl `}
                  >
                    Ai and Machine Learning
                  </h3>
                  <p
                    className={`${Montserrat.className} text-[#e3e3e3] shadow-lg p-5 -mt-5 `}
                  >
                    Harness the power of Artifical intelligence and machine
                    learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] md:mt-0 mt-7 border-[#3b425f] rounded-xl h-96 w-[100%] border-1 ">
              <Image
                src="/BitsHubImgs/OBJCTS.svg"
                width={197}
                height={370}
                className="ml-16 mt-2"
              />
              <div className="md:w-[98%] w-[100%] mt-1 flex justify-center">
                <div className="md:w-[95%] w-[99%] bg-[#121420] md:mt-1 mt-2 md:h-24 h-24 rounded-xl">
                  <h3
                    className={`${Montserrat.className} text-[#fff] font-semibold shadow-lg p-2  text-xl `}
                  >
                    Website And Digital Marketing
                  </h3>
                  <p
                    className={`${Montserrat.className} text-[#e3e3e3] shadow-lg p-5 -mt-5 `}
                  >
                    Crafts a compelling online presense with Bitshub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div
          id="projects"
          className="w-[100%] flex flex-col items-center mt-20 "
        >
          <h3
            className={`${Montserrat.className} font-semibold text-[#fff] shadow-md text-4xl ml-2`}
          >
            Our Projects
          </h3>
          <Image
            src="/BitsHubImgs/Frame6.png"
            width={520}
            height={420}
            className=" md:w-[80%] md:mt-0 mt-3 w-[90%] "
          />
          <div className="w-[100%]">
            <div className="w-[100%] md:mt-20 mt-10">
              <div className="flex flex-row border-l-2 border-[#fff] shadow-md md:ml-20">
                <FaHtml5 size={30} color="#fff" className="ml-3" />
                <h3
                  className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 `}
                >
                  Html,Css,Vue & Php WebApp
                </h3>
              </div>
            </div>
            <div className="w-[100%] md:flex ">
              <div className="md:w-[50%] w-[100%] mt-10">
                <h3
                  className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 text-4xl md:ml-7`}
                >
                  Detail Chicken Potering And Mangement WebApp
                </h3>
                <p
                  className={`${Montserrat.className} font-semibold text-[#3f3f3f] ml-2 mt-1 text-xl md:ml-12`}
                >
                  Manage your potering with the bestUi and responsive webApp
                </p>
              </div>
              <div className="md:w-[50%] w-[100%] md:-mt-6 mt-14">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/jfph89QAH-k?si=us74WlN88bcIggZU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="md:w-[85%] w-[100%]"
                ></iframe>
              </div>
            </div>
          </div>
          <Image
            src="/BitsHubImgs/Frame6.png"
            width={520}
            height={420}
            className=" md:w-[80%] md:mt-8 mt-9 w-[95%] "
          />
          <div className="w-[100%]">
            <div className="w-[100%] md:mt-20 mt-10">
              <div className="flex flex-row border-l-2 border-[#fff] shadow-md md:ml-20">
                <FaReact size={30} color="#fff" className="ml-3" />
                <h3
                  className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 `}
                >
                  React Native & Node WebApp
                </h3>
              </div>
            </div>
            <div className="w-[100%] md:flex ">
              <div className="md:w-[50%] w-[100%] mt-10">
                <h3
                  className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 text-4xl md:ml-7`}
                >
                  Modern E-Commerce Mobile App
                </h3>
                <p
                  className={`${Montserrat.className} font-semibold text-[#3f3f3f] ml-2 mt-1 text-xl md:ml-12`}
                >
                  Best Ui E-commerce Mobile App for Both Android and IOS Users
                </p>
              </div>
              <div className="md:w-[50%] w-[100%] md:-mt-6 mt-14">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5fLDy6rUC2Y?si=rsZd5pUmaiFYWASr"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="md:w-[85%] w-[100%]"
                ></iframe>
              </div>
            </div>
          </div>
          <Image
            src="/BitsHubImgs/Frame6.png"
            width={520}
            height={420}
            className=" md:w-[80%] md:mt-8 mt-9 w-[95%] "
          />
          <div className="w-[100%]">
            <div className="w-[100%] md:mt-20 mt-10">
              <div className="flex flex-row border-l-2 border-[#fff] shadow-md md:ml-20">
                <VscGraph size={30} color="#fff" className="ml-3" />
                <h3
                  className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 `}
                >
                  Data Analysis
                </h3>
              </div>
            </div>
            <div className="w-[100%] md:flex ">
              <div className="md:w-[50%] w-[100%] mt-10">
                <h3
                  className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 text-4xl md:ml-7`}
                >
                  Data Analysis
                </h3>
                <p
                  className={`${Montserrat.className} font-semibold text-[#3f3f3f] ml-2 mt-1 text-xl md:ml-12`}
                >
                  Partner with us to harness your data assets effectively
                </p>
              </div>
              <div className="md:w-[50%] w-[100%] md:-mt-6 mt-14">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FRHcbjDx4Z4?si=Tmts43-97_QN5Fkr"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <Image
            src="/BitsHubImgs/Frame6.png"
            width={520}
            height={420}
            className=" md:w-[80%] md:mt-8 mt-9 w-[95%] "
          />
          <div className="w-[100%]">
            <div className="w-[100%] md:mt-20 mt-10">
              <div className="flex flex-row border-l-2 border-[#fff] shadow-md md:ml-20">
                <SiTensorflow size={30} color="#fff" className="ml-3" />
                <h3
                  className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 `}
                >
                  Ai With TensorFlow
                </h3>
              </div>
            </div>
            <div className="w-[100%] md:flex ">
              <div className="md:w-[50%] w-[100%] mt-10">
                <h3
                  className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 text-4xl md:ml-7`}
                >
                  AI Detection For All Projects Using Tensor Flow
                </h3>
                <p
                  className={`${Montserrat.className} font-semibold text-[#3f3f3f] ml-2 mt-1 text-xl md:ml-12`}
                >
                  Partner with us to harness to use ai easly with our best UI
                </p>
              </div>
              <div className="md:w-[50%] w-[100%] md:-mt-6 mt-14">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KZzLFh6aIiU?si=vQft3hsyi4REY3Lu"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="md:w-[85%] w-[100%]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/*Bithub Bottom  */}
        <div className="w-[100%] md:flex md:flex-row mt-20">
          <div className="flex  md:w-[20%] w-[100%] justify-end">
            <img
              src="/BitsHubImgs/Vector.png"
              width={120}
              height={220}
              className=" md:w-[80%] md:mt-4 md:h-auto h-20 mt-4 w-[95%] "
            />
          </div>
          <div className="md:w-[50%] w-[100%] border-[#3b425f] rounded-xl  border-1 h-80 flex flex-row shadow-white shadow-sm">
            <div className="w-[60%] p-2">
              <h3
                className={`${VT323.className} ml-3 md:mt-0 mt-5 text-[#fff] font-bold md:text-6xl text-4xl`}
              >
                BITS HUB
              </h3>
              <p
                className={`${Montserrat.className} text-[#fff] text-sm md:mt-0 mt-2 md:ml-0 ml-1`}
              >
                Your tech partner in Hawassa, Ethiopia. We craft innovative
                software solutions fueled by AI, data analytics, and
                cutting-edge technology. From enterprise software to mobile apps
                and strategic consulting, we drive business transformation with
                a global-local approach, blending expertise and cultural
                insights
              </p>
            </div>
            <div className="w-[40%]">
              <img
                src="/BitsHubImgs/CircleStrokeWithPl.png"
                width={120}
                height={220}
                className=" md:w-[100%] md:mt-4 mt-16 w-[100%] "
              />
            </div>
          </div>
          <div className="md:w-[30%] w-[100%]">
            <img
              src="/BitsHubImgs/Vector2.png"
              width={120}
              height={220}
              className=" md:w-[100%] md:mt-4 md:h-auto h-20 mt-4 w-[100%] "
            />
          </div>
        </div>
        {/*Testmonials  */}
        <div
          id="testimonial"
          className="w-[100%] mt-16 flex items-center flex-col"
        >
          <h3
            className={`${Montserrat.className} font-semibold text-[#fff]  text-4xl `}
          >
            TESTIMONAILS
          </h3>
          <Carousel
            opts={{
              align: "start",
            }}
            className="md:w-[85%] w-[75%]  mt-14"
          >
            <CarouselContent>
              {Testomies.map((data) => (
                <CarouselItem
                  key={data.id}
                  className="md:basis-1/2 lg:basis-1/3 w-[100%]"
                >
                  <div className="p-1">
                    <div class="relative bg-transparent rounded-lg shadow-lg max-w-sm mx-auto p-6">
                      <div class="absolute top-0 left-0 border-t-4 border-l-4 border-white w-6 h-6 rounded-tl-lg"></div>
                      <div class="absolute top-0 right-0 border-t-4 border-r-4 border-white w-6 h-6 rounded-tr-lg"></div>
                      <div class="absolute bottom-0 left-0 border-b-4 border-l-4 border-white w-6 h-6 rounded-bl-lg"></div>
                      <div class="absolute bottom-0 right-0 border-b-4 border-r-4 border-white w-6 h-6 rounded-br-lg"></div>

                      <div class="relative z-10">
                        <div className="w-[100%]">
                          <div className="flex flex-row border-l-2 border-[#fff] shadow-md ">
                            <h3
                              className={`${Montserrat.className} font-semibold text-[#fff] ml-2 mt-1 `}
                            >
                              {data.work}
                            </h3>
                          </div>
                        </div>
                        <p class={`${Montserrat.className} text-[#fff] mt-4`}>
                          {data.text}
                        </p>
                        <div className="flex flex-row mt-2">
                          <Avatar>
                            <AvatarImage
                              src={`/Testomines/${data.imgName}`}
                              alt="@shadcn"
                            />
                            <AvatarFallback className="text-[#fff]">
                              CN
                            </AvatarFallback>
                          </Avatar>
                          <h3
                            className={`${Montserrat.className} text-[#fff] mt-2 ml-2`}
                          >
                            {data.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:block" />
            <CarouselNext className="md:block " />
          </Carousel>
        </div>
        {/* Contacts */}
        <div id="contact" className="w-[100%] flex justify-center mt-14">
          <div className="w-[90%] md:flex md:flex-row  border-[#3b425f] border-1 p-2 rounded-xl">
            <div className="md:w-[30%] mt-8 ml-3">
              <h3
                className={`${Montserrat.className} font-semibold text-[#fff] text-4xl `}
              >
                Contact Us Via Email
              </h3>
              <p className={`${Montserrat.className} text-[#fff] mt-5`}>
                You contact us using our email bitshub2022@gmail.com
              </p>
              <div className="h-16 w-[100%]"></div>
            </div>
            <div className="md:w-[30%] flex justify-center items-center border-[#3b425f] border-l-1">
              <img
                src="/BitsHubImgs/GetIntouchComImg.png"
                width={120}
                height={220}
                className=" md:w-[60%] md:mt-4 md:h-auto h-auto mt-4 w-[70%] "
              />
            </div>
            <div className="md:w-[30%] md:mt-0 mt-20 border-[#3b425f] border-l-1 md:pr-0 pr-2">
              <div className="h-1p w-2 bg-[#3b425f] absolute mt-8"></div>
              <Input
                type="email"
                placeholder="Email"
                className={`${Montserrat.className} text-[#fff] ml-2 mt-7`}
              />
              <div className="h-1p w-2 bg-[#3b425f] absolute mt-8"></div>
              <Textarea
                placeholder="Type your message here."
                className={`${Montserrat.className} text-[#fff] ml-2 mt-4`}
              />
              <Button className={`${Montserrat.className} mt-5 ml-[56%] `}>
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Send the Email
              </Button>
              <div className="w-[100%] h-28"></div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-5"></div>
      </div>
    </main>
  );
}
