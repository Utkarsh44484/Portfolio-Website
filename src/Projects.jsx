import { useEffect } from "react";
import project_list from "./Details/projects.jsx";
import background from "./images/project.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Project() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
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
  function Card(props) {
    return (
      // style={{ backgroundImage: `url(${background})`}}
      <div>
        <section data-aos="zoom-in-up" className="parent-section">
          <div
            data-aos="zoom-in-up"
            className="h-fit md:h-32 rounded-xl mb-14 w-2/3 lg:w-2/4  bg-bluedark shadow-xl card flex flex-col md:flex-row mx-auto overflow-hidden items-center"
          >
            <img
              className="my-3 h-16 w-20  md:p-2  mx-auto md:mx-0 md:my-0 md:h-24 md:w-32  "
              src={props.img}
            ></img>
            <div className="card-details h-fit mx-5 md:mx-10  grid content-center">
              <div className="text-bluemid top font-Kanit text-2xl ">
                {props.title}
              </div>
              <div className="my-2 md:my-0 middle text-md text-bluelight">
                {props.desc}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div id="projects" className=" ">
      <div>
        <h1 className="flex text-4xl md:text-5xl justify-center   pt-20 pb-10 font-Header text-bluedark">
          Projects
        </h1>
      </div>
      {project_list.map(Createcard)};
    </div>
  );
}
export default Project;
