import Head from "next/head";
import Image from "next/image";
// import { Button, ButtonGroup } from "@chakra-ui/react";
// import { Box } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
// import styles from "../styles/Home.module.css";
import Card from "../components/homepage/Card";
import SocialFollow from "../components/homepage/SocialFollow";
import Tilt from "react-tilt";
import ThemeChanger from "../components/Toggler";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Aos from "aos";
// import "aos/dist/aos.css";
import Bighex from "../components/BgAssets/Bighex";
import EllipseBox from "../components/BgAssets/EllipseBox";
import SmallHex from "../components/BgAssets/SmallHex";
import EllipseBox2 from "../components/BgAssets/EllipseBox2";
import Hex1 from "../components/BgAssets/Hex1";
import Hex2 from "../components/BgAssets/Hex2";
import Map from "../components/BgAssets/Map";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>
          GirlScipt Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="Generated by create next app" />
        {/* <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        /> */}
      </Head>
      {/* Bg assets */}
      <div className="hidden lg:block 3xl:hidden">
        <div className="absolute bottom-[60rem] right-0">
          <img
            src="https://user-images.githubusercontent.com/64256342/152650376-d285b39d-3b06-4c46-afad-c15b90074358.svg"
            alt="bg"
          />
        </div>
        <div className="absolute w-full left-0 -top-10 right-0">
          <Bighex />
        </div>
        <div className="absolute top-0 left-0">
          <Hex1 />
        </div>
        <div className="absolute top-0 left-0">
          <Hex2 />
        </div>
        <div className="absolute top-0 left-48">
          <EllipseBox2 />
        </div>
        <div className="absolute top-10 -left-20">
          <EllipseBox />
        </div>
        <div className="absolute top-0">
          <SmallHex />
        </div>
      </div>
      <SocialFollow />
      <div className="absolute object-right text-xs text-right right-1 dark:bg-primary_orange-0 px-2 animate-pulse py-2 rounded-full opacity-80 bg-black top-20 md:hidden">
        <ThemeChanger />
      </div>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2 relative">
            <div className="text-black dark:text-white text-6xl font-sans font-semibold 2.25rem 3rem mb-10">
              <span className="text-primary_orange-0">GSSoC </span>
              2022
              <div className="mt-2">is here!</div>
            </div>
            <div className="font-serif font-medium text-2xl 1.5rem 2rem text-gray-800 dark:text-white mb-24">
              GirlScript Summer of Code is a 3-month long
              <br />
              <span className="text-primary_orange-0">#OpenSource &nbsp;</span>
              program by GirlScript Foundation.
              <br />
              <b> 1st March - 31st May 2022 </b>
            </div>
            <div className="flex items-center mb-10 md:mb-52 lg:mb-56">
              <a className="" href="#card-1">
                <button
                  id="CTA-button"
                  data-aos="fade-down"
                  className=" bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600"
                >
                  Register Here
                </button>
                
                {/* <Box
                  as="button"
                  height="50px"
                  width="200px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="0px"
                  px="8px"
                  borderRadius="15px"
                  fontSize="24px"
                  fontWeight="semibold"
                  bg="#FF7A19"
                  borderColor="##b55712"
                  color="#ffffff"
                  _hover={{ bg: "#b55712" }}
                  _active={{
                    bg: "#FF7A19",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  Register Here
                </Box> */}
              </a>
              <a data-aos="fade-down" href="#about-gssoc">
                <div className="font-serif font-medium text-md text-primary_orange-0 ml-9 md:text-2xl">
                  Learn More
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-down" className="hero__image hidden md:block">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 600, width: 600 }}
            >
              <div className="img__container">
                {theme === "light" ? (
                  <img
                    src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/Logos/hero-lite.svg"
                    alt="hero-image"
                  />
                ) : (
                  <img
                    src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/Logos/hero-dark.svg"
                    alt="hero-image"
                  />
                )}
              </div>
            </Tilt>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap mb-24">
          <div
            className="border-8 rounded drop-shadow-xl border-black dark:border-white"
            data-aos="flip-left"
            data-aos-duration="700"
          >
            <img
              src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/Logos/Rectangle%20(1).png"
              height="453"
              width="420"
              alt="Rectangle light"
            />
          </div>
          <div className="basis-full md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
            {/* <img
              className=" mt-4 mb-8 md:mb-9 md:mt-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
            /> */}
            {theme === "light" ? (
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GirlScript_logo_Black.png?raw=true"
                alt="logo"
              />
            ) : (
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/Logos/GsLogo_White.png"
                alt="logo"
              />
            )}
            <div className="text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
              About <span className="text-primary_orange-0">GirlScript </span>
              Foundation
            </div>
            <p className="dark:text-white font-serif text-1xl text-black-100">
              The GirlScript Foundation is one of the leading foundations in
              India. It has successfully completed Five Years of educating young
              minds through robust initiatives. It aims to change lives by
              imparting tech education and relevant skills while fostering
              diversity. Apart from this, the Foundation is one of the world’s
              largest tech community for students to polish and nurture their
              technical skills. Our tremendous endeavors curb the gap to offer a
              technophilic environment and revolutionize the tech domain by
              promoting, sharing, and spreading knowledge equally to every
              individual.
            </p>
            {/* <button className="bg-primary_orange-0 rounded-xl font-bold py-3 w-full text-white dark:text-gray-800 mt-5">
              Wanna know more about GIRLSCRIPT?
            </button> */}
          </div>
        </div>

        <div
          className="flex flex-row justify-between items-center bg-[#FFECDE] dark:bg-black flex-wrap rounded-xl mb-24"
          id="about-gssoc"
        >
          <div className="w-560px px-4 pt-3 lg:text-right rounded-xl md:w-1/2 lg:my-4 lg:px-10 lg:py-10 lg:w-1/2">
            {theme === "light" ? (
              <img
                id="Learn_more"
                className="mb-10"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
                alt="Learn More light"
              />
            ) : (
              <img
                id="Learn_more"
                className="mb-10"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GS_logo_White.png?raw=true"
                alt="Learn More dark"
              />
            )}
            <div className="text-primary_orange-0 text-left font-semibold font-sans text-4xl 2.25rem 3rem mb-10 lg:w-[570px]">
              <h1 className="dark:text-white text-black text-4xl 2.25rem 3rem">
                About
                <br />
                GirlScript{" "}
              </h1>
              Summer of Code
            </div>
            <p className="dark:text-white font-serif text-left text-xl">
              GirlScript Summer Of Code is a three-month-long Open-Source
              Program conducted every summer by the Girlscript Foundation. With
              constant efforts, participants contribute to numerous projects
              under the extreme guidance of skilled mentors over these months.
              With such exposure, students begin to contribute to real-world
              projects from the comfort of their homes. GirlScript Summer Of
              Code has witnessed active participation over the years, and the
              2022 edition aims to carry the legacy with a promising impact.
            </p>
          </div>

          <div className="pr-8 font-semibold px-4 pt-3 rounded-lg lg:my-4 lg:px-10 lg:py-10 ">
            <div className="dark:bg-darkmode_gray-0 dark:transition-colors bg-stone-50 shadow-lg rounded-lg my-1 px-1 w-64 sm:w-fit">
              <h1 className="mt-8 pt-6 pl-8 text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                GSSoC 2021
              </h1>
              <div className="pl-8 text-2xl text-primary_orange-0 1.5rem 2rem ">
                {" "}
                by the numbers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 mb-4">
                <div className="statscol">
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={8000} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_orange-0 1.5rem 2rem ">
                      {" "}
                      Registrations
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={135} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_orange-0 1.5rem 2rem ">
                      {" "}
                      Institutes
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={10000} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-primary_orange-0 1.5rem 2rem ">
                      Total PRs
                    </p>
                  </div>
                </div>

                <div className="statscol">
                  <div className="mt-4 pt-4 pl-8 pr-4">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={5500} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_orange-0 1.5rem 2rem ">
                      {" "}
                      Participants
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={14} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_orange-0 1.5rem 2rem ">
                      {" "}
                      Countries
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={100} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-primary_orange-0 1.5rem 2rem ">
                      Total Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*   {theme === "light" ? (
              <img
                className="mt-3 mb-3 md:mt-0"
                id="Learn_more"
                src="https://user-images.githubusercontent.com/64256342/152652343-d9c8d7c0-2cb4-401e-aef0-f4aed14f7731.svg"
              />
            ) : (
              <img
                className="mt-3 mb-3 md:mt-0"
                id="Learn_more"
                src="https://user-images.githubusercontent.com/64256342/152652299-9d3ac037-628b-46bb-ba07-fe5f2d4587b9.svg"
              />
            )} */}
          </div>
        </div>
        <div className="organisation">
          <div className="hidden lg:block 3xl:hidden">
            <div className="absolute left-0 top-[130rem]">
              <Map />
            </div>
          </div>

        {/* <p className="font-sans font-semibold dark:text-white text-center text-gray-800 text-4xl 2.25rem 3rem mb-8">
          Some of the previous <br />
          <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
            participating organisations
          </span>
        </p> */}
          <div className="org__box flex flex-row items-center justify-center flex-wrap">
            {/* <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo1.png?raw=true"
              alt="logo"
            />
             <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo2.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo3.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo4.png?raw=true"
              alt="logo"
            /> */}
          </div>
        </div>

        {/* sponsors */}
      <div className="flex flex-row justify-center px-3 mb-20" id="Sponsors">
        <div className="sponsors__wrapper flex flex-col">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="400"
            className="dark:bg-orange-100 bg-white other__sponsors px-9 py-9 shadow-xl rounded flex flex-col justify-center items-center"
          >
            <h3 className=" dark:text-gray-800 text-[#ff7a19] font-sans font-semibold text-3xl  mb-5 place-content-center">
                Platinum Sponsors
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap justify-evenly gap-x-28 justify-between mb-5">
              <a href="https://moralis.io/">
                <img
                  data-aos="fade-up"
                  className="h-20 mb-5 md:mb-0"
                  src="https://user-images.githubusercontent.com/63473496/158809544-c659c3be-79b7-4884-be11-76dcb3874733.png"
                  alt="Moralis"
                />
              </a>
              <a href="https://filecoin.io/">
                <img
                  data-aos="fade-up"
                  className="h-20 mb-5 md:mb-0"
                  src="https://user-images.githubusercontent.com/63473496/163260977-e0a5e8bd-618f-4691-ae13-02b878819def.png"
                  alt="Filecoin"
                />
              </a>
            </div>
            <h3 className=" dark:text-gray-800 text-[#ff7a19] font-sans font-semibold text-3xl  mb-5 place-content-center">
                Silver Sponsors
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap justify-evenly gap-x-28 justify-between mb-5">
              <a href="https://mentro.tech/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-24 mb-5 md:mb-0"
                  src="https://user-images.githubusercontent.com/63473496/163266199-53c5a68a-e6ee-4fc9-8b3d-689d4e32a43b.png"
                  alt="Mentro"
                />
              </a>
            </div>
            <h3 className=" dark:text-gray-800 text-[#ff7a19] font-sans font-semibold text-3xl  mb-10 place-content-center mt-5">
                In Kind Sponsors
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-20 gap-y-4 md:gap-y-8 justify-evenly">
              <a href="https://www.taskade.com/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-16"
                  src="https://user-images.githubusercontent.com/63473496/159113176-704ef486-2091-4440-a89d-1630f6df9cf7.png"
                  alt="Taskade"
                />
              </a>
              <a href="https://gen.xyz/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-16"
                  src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/sponsors/xyz-logo-color.png"
                  alt=".XYZ"
                />
              </a>
              <a href="https://teleporthq.io/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-16"
                  src="https://user-images.githubusercontent.com/63473496/163260136-1e4eb2d0-a217-4d7e-a0f5-dcd63d9ba6a8.svg"
                  alt="TeleportHQ"
                />
              </a>
              <a href="https://www.jetbrains.com/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-28 relative lg:bottom-8"
                  src="https://user-images.githubusercontent.com/64256342/153583220-9fb4a9c2-0b1d-4bce-98f6-37e07125b4d8.svg"
                  alt="JetBrains"
                />
              </a>
              <a href="http://www.datacamp.com/donates">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-12"
                  src="https://user-images.githubusercontent.com/63473496/163257043-e2472c13-905c-4f64-8cbc-f2e3c7b7a59c.png"
                  alt="DataCamp"
                />
              </a>
              <a href="https://www.postman.com/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-20 relative lg:bottom-3"
                  src="https://user-images.githubusercontent.com/63473496/159116990-1674fc0e-c011-405e-a40f-ea9d61d182cf.png"
                  alt="Postman"
                />
              </a>
              <a href="https://fueler.io/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-12 relative lg:bottom-1"
                  src="https://user-images.githubusercontent.com/63473496/158831706-df3cc62b-74c4-491b-85f3-60d92d94f18a.png"
                  alt="Fueler"
                />
              </a>
              <a href="https://www.packtpub.com/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-12 relative lg:bottom-2 mb-5 md:mb-0"
                  src="https://user-images.githubusercontent.com/63473496/163258089-e49de008-dbf3-4c25-ae43-54dab9fdeb51.png"
                  alt="Packt"
                />
              </a>
              <a href="https://www.oreilly.com/">
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="h-8  mb-5 md:mb-0"
                  src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/sponsors/o%20reilly.png"
                  alt="O'Reilly"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

        <div className="be-part-of">
          <p className="font-sans font-semibold text-center dark:text-white text-gray-800 text-4xl 2.25rem 3rem ">
            <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
              Be a part of{" "}
            </span>
            GSSoC 2022
          </p>
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="container my-12 mx-auto"
          >
            <div
              className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4 md:justify-items-stretch"
              id="card-1"
            >
              {/* Card-1 */}
              <Card
                title="Start your Journey"
                content="Participating in GSSoC’22 is an opportunity to upgrade your Github profile. Enrich yourselves to learn, explore, improve, enhance, build connections and become a team player to nourish your skills and personality. Don’t miss a chance to get well-versed with Open-Source and essential tools like Git and Github under the supervision of excellent mentors."
                btntext="Participant Registration Closed"
                link="https://forms.gle/FHtuuhW17hv2dqua8"
                disabled="true"
              />
              {/* Card-2 */}
              <Card
                title="Lead the Pack"
                content="Mentors are the experts and take the lead of the open-source project team. They guide the fellow participants at each stage in a road map of the project. They are the backbone of team and are available throughout the summer to review the pull requests and suggest betterment. Apply to be a mentor at Girlscript summer of code and be the foundation of your team."
                btntext="Mentor Registration Closed"
                link="https://forms.gle/4F3aBfdt6DC6bkVT6"
                disabled="true"
              />
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="container my-12 mx-auto "
          >
            <div className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4">
              {/* Card-3 */}
              <Card
                title="Inviting Projects &amp; NGOs"
                content="If you are an organization with a project idea in mind, a website or an app then this is the golden opportunity to become a part of an awesome community. The budding developers under the guidance of expert mentors will work on your projects and strive to achieve the best version. Apply and let’s collaborate together because Together Everyone Achieves More."
                btntext="Project Submission Closed"
                link="https://forms.gle/vbLVda6KNQGSbzZ59"
                disabled="true"
              />
              {/* Card-4 */}
              <Card
                title="Add a Shade to GSSOC"
                content="Sponsors with their precious resources make it possible for GirlScript to conduct the entire event smoothly, to encourage talent by enabling us to give perks to our top participants. Hence as a token of gratitude, we provide great publicity on our social platforms and exposure on media about our sponsors. Sponsor us to add a bright shade to our program."
                btntext="Sponsor Us"
                link="https://forms.gle/fkzq3xQ7nh2CbrA78"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Schedule */}
      <div className="schedule__container flex flex-col items-center mb-48 ">
        <div className="schedule__overview mt-24 relative">
          <p className="font-sans font-semibold text-3xl ml-5 mb-4 dark:text-white">
            <span className="text-primary_orange-0">Schedule</span> of GSSoC
            2022!
          </p>
          {theme === "light" ? (
            <img
              id="Learn_more"
              className="mb-10"
              src="https://user-images.githubusercontent.com/64256342/152652419-27cc707a-628e-4f6e-bc80-e7157ecfcfe1.svg"
            />
          ) : (
            <img
              id="Learn_more"
              className="mb-10"
              src="https://user-images.githubusercontent.com/64256342/152650154-ddc67996-9855-45e8-b2bc-287a8b07b2fc.svg"
            />
          )}
        </div>
      </div>
    </div>
  );
}
