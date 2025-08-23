import React from "react";

const personalInfoContent = [
  { meta: "Name", metaInfo: "Mohammad Ardi Iradat", hasColor: "" },
  { meta: "Age", metaInfo: "31 Years", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Banten, Indonesia", hasColor: "" },
  { meta: "Email", metaInfo: "ardi.iradat@gmail.com", hasColor: "" },
  { meta: "Languages", metaInfo: "Bahasa & English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
