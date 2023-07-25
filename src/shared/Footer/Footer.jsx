import {
  MapOutlined,
  LanguageOutlined,
  SmartphoneOutlined,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#1976D2] dark:bg-gray-950 w-full pt-10 pb-2 px-5 text-white">
      <div className="max-w-6xl mx-auto  h-fit w-full">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-5 h-full pb-6">
          {/* 1st column */}
          <div className="col-span-2">
            <div className="flex items-center">
              <img
                src="https://i.postimg.cc/76BqpZY3/logo.png"
                className="h-20"
              />
              <div className="grid text-white">
                <span className="text-2xl font-semibold">LinguaLearnHub</span>
                <span className="text-lg">Unlock Your Language Potential</span>
              </div>
            </div>
            <div className="my-2">
              <p>
                Discover the power of language at our immersive school. Learn,
                connect, and explore new cultures through our expert-led
                courses. Start your journey to fluency and global understanding
                with us today!
              </p>
            </div>
            <div className="flex items-start flex-col gap-2 md:justify-between  md:flex-row lg:flex-col md:flex-wrap ">
              <div className="flex gap-4 items-center">
                <SmartphoneOutlined />
                <span>+1 026-1354-8888</span>
              </div>
              <div className="flex gap-4 items-center">
                <LanguageOutlined />
                <span className="lowercase"> www.learning-language.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <MapOutlined />
                <span className="capitalize"> 11660, Legacy, Frisco.</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-2 items-start  mt-3">
              <span>Connect With US : </span>
              <div className="flex gap-1 items-center ">
                <FaFacebook className="icon-hover-color" />
                <FaInstagram className="icon-hover-color" />
                <FaYoutube className="icon-hover-color" />
                <FaLinkedin className="icon-hover-color" />
              </div>
            </div>
          </div>
          {/* 2nd column */}
          <div className="mt-2">
            <div className="pr-20">
              <h4 className="text-lg font-semibold pb-2 border-b-2 ">
                Courses
              </h4>
            </div>
            <div className="grid mt-3 text-md space-y-3">
              <span>
                Beginner Courses
                <ul className="list-disc list-inside ">
                  <li className="min-w-max">Basic Conversation</li>
                  <li className="min-w-max">Vocabulary Building</li>
                  <li className="min-w-max">Grammar Fundamentals</li>
                </ul>
              </span>
              <span>
                Intermediate Courses
                <ul className="list-disc list-inside ">
                  <li className="min-w-max">Conversational Fluency</li>
                  <li className="min-w-max">Writing Skills</li>
                  <li className="min-w-max">Cultural Appreciation</li>
                </ul>
              </span>
              <span>
                Advanced Courses
                <ul className="list-disc list-inside ">
                  <li className="min-w-max">Advanced Speaking</li>
                  <li className="min-w-max">Business Language</li>
                  <li className="min-w-max">Literature and Film Analysis</li>
                </ul>
              </span>
            </div>
          </div>
          {/* 3rd column */}
          <div className=" mt-2	">
            <div className="pr-16">
              <h4 className="text-lg font-semibold min-w-max pb-2 border-b-2 ">
                Language Levels
              </h4>
            </div>
            <div className="grid mt-3 text-md space-y-3">
              <span>
                A1 - Beginner
                <ul className="list-disc list-inside ">
                  <li className="whitespace-break-spaces	">
                    Introduction to the Language
                  </li>
                  <li className="min-w-max">Basic Vocabulary </li>
                  <li className="min-w-max">Basic Phrases</li>
                  <li className="min-w-max">Fluency Development</li>
                </ul>
              </span>
              <span>
                B1 - Intermediate
                <ul className="list-disc list-inside ">
                  <li className="min-w-max">Expanded Vocabulary</li>
                  <li className="">Complex Sentence Construction</li>
                  <li className="min-w-max">Cultural Appreciation</li>
                </ul>
              </span>
              <span>
                C2 - Advance
                <ul className="list-disc list-inside ">
                  <li className="">Fluency Development</li>
                  <li className="overflow-hidden text-ellipsis">
                    Reading and Writing Practice
                  </li>
                </ul>
              </span>
            </div>
          </div>
          {/* fourth column */}
          <div className=" mt-2 col-span-2 lg:col-span-1">
            <div className="pr-28">
              <h4 className="text-lg font-semibold min-w-max pb-2 border-b-2">
                Subscribe
              </h4>
            </div>
            <p className="text-sm mt-3 max-w-sm">
              Enter your email address below to recieve our monthly fun-full
              language quiz
            </p>
            <div className="mt-4 w-56 relative flex items-center overflow-hidden rounded">
              <input
                type="text"
                placeholder="email@example.com"
                className="bg-transparent w-full py-1 px-3 border-2 border-rose-600 text-gray-100 placeholder:text-sm placeholder:text-gray-300 focus:outline-0 max-w-xl"
              />
              <button className="absolute right-0 bg-rose-600  px-3 h-full  rounded justify-self-end">
                <AiOutlineSend />
              </button>
            </div>
            <div className="mt-4 flex items-center lg:flex-col justify-center">
              <img
                src="https://i.postimg.cc/8fcHVv3F/en-badge-web-generic-removebg-preview.png"
                alt="en-badge-web-generic-removebg-preview"
                className="w-44"
              />
              <img
                src="https://i.postimg.cc/vTdN4SfB/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo-removebg-preview.png"
                alt="en-badge-web-generic-removebg-preview"
                className="w-44"
              />
            </div>
          </div>
        </div>
        <Divider color="gray" />
        <div className="text-center pt-2 text-gray-300">
          &copy; copyright 2023, all rights reserved - LinguaLearnHub{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
