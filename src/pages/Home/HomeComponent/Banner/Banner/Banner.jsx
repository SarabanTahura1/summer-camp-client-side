import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:h-screen h-fit flex justify-center items-center w-full dark:bg-gray-950 bg-[#4996fb]">
      <div className=" max-w-6xl mx-auto px-5 flex flex-col lg:flex-row justify-center items-center pt-20 lg:pt-0">
        <div className="w-full">
          <h2 className="text-white text-4xl font-extrabold">
            Meet Our Expert Language Tutors
          </h2>
          <p className="text-gray-200 text-sm my-5">
            Discover a world of language and culture at <b>LinguaLearnHub</b>{" "}
            Language Learning School. Immerse yourself in our diverse range of
            courses taught by expert instructors, tailored to your learning
            goals and skill level. Join a supportive community of language
            enthusiasts, access interactive workshops, and gain insights from
            our engaging blog. Enroll today and embark on a transformative
            language journey.
          </p>
          <Link to="/instructors">
            <Button variant="contained">Meet Tutors</Button>
          </Link>
        </div>
        <div className="lg-1/2 w-full">
          <img
            src="https://i.postimg.cc/CLf96FCT/image-removebg-preview.png"
            alt="Banner Image"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
