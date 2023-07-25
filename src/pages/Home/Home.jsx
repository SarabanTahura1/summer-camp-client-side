import AccordionComponent from "./HomeComponent/Accordion/AccordionComponent";
import Banner from "./HomeComponent/Banner/Banner/Banner";
import PopularClass from "./HomeComponent/PopularClass/PopularClass";
import PopularInstructor from "./HomeComponent/PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularClass />
      <PopularInstructor />
      <div className="max-w-6xl mx-auto mt-20 py-10 px-5">
        <h3 className="dark:text-white text-3xl text-center mb-10 font-bold">
          Frequenty <span className="text-sky-400"> Asked </span>Question ?
        </h3>
        <div className="grid lg:grid-cols-2 gap-10 ">
          <div>
            <img
              src="https://i.postimg.cc/kXxJ0z9g/faq-removebg-preview.png"
              alt=""
            />
          </div>
          <AccordionComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
