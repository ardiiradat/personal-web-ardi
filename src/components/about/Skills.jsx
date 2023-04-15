import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "JQUERY" },
  { skillClass: "p70", skillPercent: "70", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "BOOTSTRAP" },
  { skillClass: "p70", skillPercent: "70", skillName: "TAILWIND" },
  { skillClass: "p60", skillPercent: "60", skillName: "NEXTJS" },
  { skillClass: "p70", skillPercent: "70", skillName: "REACTJS" },
  { skillClass: "p80", skillPercent: "80", skillName: "AJAX" },
  { skillClass: "p70", skillPercent: "70", skillName: "GIT" },
  { skillClass: "p50", skillPercent: "50", skillName: "PHOTOSHOP" },
  { skillClass: "p70", skillPercent: "70", skillName: "FIGMA" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
