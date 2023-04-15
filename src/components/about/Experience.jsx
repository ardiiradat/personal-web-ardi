import React from "react";

const experienceContent = [
  {
    year: "   2019 - Present",
    position: "Front-End Developer",
    companyName: "PT. Binc Teknologi Grup",
    details: "Develop Maintenance Web Analisa.io & Develop Web Hawksight.co",
  },
  {
    year: "2017 - 2018",
    position: "Front-End Developer",
    companyName: "PT. Altavindo",
    details: "Develop Maintenance Web JKT48.com & Maintenance Web Mandirikartukredit.com",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
