import React from "react";
import Image from "next/image";

const skillsContent = [
  { img: "/assets/img/skills/html5.png", skillName: "HTML", padding: "0", filter: "grayscale(1)" },
  { img: "/assets/img/skills/sass.png", skillName: "SASS", padding: "14px 0", filter: "grayscale(1)" },
  { img: "/assets/img/skills/jquery.png", skillName: "JQUERY", padding: "4px 0", filter: "grayscale(1)" },
  { img: "/assets/img/skills/javascript.png", skillName: "JAVASCRIPT", padding: "3px 0", filter: "grayscale(1)" },
  { img: "/assets/img/skills/bootstrap.png", skillName: "BOOTSTRAP", padding: "10px 0", filter: "grayscale(1)" },
  { img: "/assets/img/skills/tailwind.png", skillName: "TAILWIND", padding: "0", filter: "grayscale(1)" },
  { img: "/assets/img/skills/nextjs.png", skillName: "NEXTJS", padding: "19.5px 0", filter: "contrast(0)" },
  { img: "/assets/img/skills/react.png", skillName: "REACTJS", padding: "1.5px 0", filter: "grayscale(1)" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className="w-100 d-flex justify-content-center" style={{padding: val.padding, filter: val.filter}}>
            <img
              src={val.img}
              alt="image icon skills"
              style={{width: "100px"}}
            />
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            <b>{val.skillName}</b>
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
