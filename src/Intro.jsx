// import TypeWriterEffect from "react-typewriter-effect";
// import Typewriter from "react-typewriter-effect";
import Typewriter from "typewriter-effect";
function Intro() {
  // function Typer() {
  //   return (
  //    <div>
  //     <TypeWriterEffect
  //       multiTextLoop
  // textStyle={{
  //   fontFamily: "Tilt Warp",
  //   color: "#64748b",
  //   fontWeight: 500,
  //   fontSize: "1.8em",
  // }}
  // startDelay={1000}
  // deleteSpeed={100}
  //       cursorColor="#3F3D56"
  //       multiText={[
  //         "I am a Web Developer",
  //         "And a Competitive Programmer",
  //         "Currently I am a pre final year student",
  // "I enjoy participating in coding competitions ",
  // "And challenges to enhance my problem solving abilities.",
  //       ]}
  //       multiTextDelay={500}
  //       typeSpeed={60}
  //     />
  //     </div>
  //   );
  // }
  return (
    <div
      id="aboutme"
      className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 flex justify-start sm:justify-center w-full "
    >
      <div className="pl-8 md:pl-0 pt-6 md:pt-10 text-white">
        <h1 className="  pt-10 lg:pt-16   text-bluelight text-4xl sm:5xl md:text-6xl lg:text-7xl  font-Alkatra">
          Hi, It 's me
        </h1>
        <br />
        <h1 className=" text-bluelight text-4xl sm:5xl md:text-6xl lg:text-7xl font-Alkatra">
          Utkarsh Sathawane
        </h1>
        <br />
        {/* <Typer /> */}
        {/* ........................................ */}
        <div className="text-2xl md:text-4xl lg:5xl text-gray-500 font-TiltWarp">
          <Typewriter
            options={{
              delay: 40,
              strings: [
                "I am a Web Developer",
                "And a Competitive Programmer",
                "I enjoy participating in competitions",
                "And challenges to enhance ",
                "My problem solving abilities.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* ........................................ */}

        {/* <h1 className="text-2xl md:text-4xl text-gray-600 font-TiltWarp">
                       I am a frontend Developer And Competitive Programmer
                     </h1> */}
        <br />
        <a href="https://drive.google.com/file/d/1H1_cHf7OFrDFKUgoLoAepZa5wzLR3n_T/view">
          <button className="lg:mb-10 lg:mt-5 rounded-lg bg-blue-900 hover:bg-sky-900 hover:rounded-xl">
            <p className="p-2"> My Resume </p>
          </button>
        </a>
        {/* <h1 className="md:pb-10 text-base md:text-lg  text-bluemid font-Kanit">
                       I'm an enthusiastic web developer who enjoys exploring and solving
                       algorithmic problems.
                     </h1> */}
      </div>
    </div>
  );
}
export default Intro;
