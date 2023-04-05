import notekeeper from "./images/Projectimages/notekeeper.png";
import Experience_detail from "./Details/Experience_detail";
import background from "./images/experience.png";
import background2 from "./images/experience2.png";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
function Experience() {
  function Createcard(props) {
    return (
      <Card
        key={props.id}
        img={props.img}
        desc={props.desc}
        title={props.title}
      />
    );
  }
  // .....................
  function Card(props) {
    return (
      <div>
        {/* Card Start here */}
        <div data-aos="fade-up" data-aos-duration="3000" className="  ">
          <div className=" bg-indigo-100 h-full w-full rounded-br-xl overflow-hidden shadow-lg hover:-translate-y-4 hover:shadow-xl">
            <img
              className=" bg-gray-100 mt-4 w-32 h-22  md:w-40 m:h-28 mx-auto rounded-lg shadow-lg"
              src={props.img}
              alt="Img"
            />
            <div className="px-6 py-4">
              <div className="text-bluedark font-bold text-xl mb-2">
                {props.title}
              </div>
              <p className="text-blue-500 text-base">{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // ..........................
  return (
    <div id="experience" className="  ">
      <div>
        <h1 className="text-bluedark flex justify-center text-4xl md:text-5xl pt-10 pb-12 font-Header  ">
          Experience
        </h1>
      </div>

      {/* Project section start from here */}
      <div className=" flex justify-center">
        <div className="grid-flow-row-dense w-2/3 grid grid-cols-1 md:grid-cols-2  gap-x-20 lg:gap-x-48 md:gap-x-32 gap-y-12  ">
          {/* Card Start here */}
          {Experience_detail.map(Createcard)};{/* Card end here */}
        </div>
      </div>
    </div>
  );
}
export default Experience;
