import Image1 from "../../../public/assets/img/portfolio/analisa-white.png";
import Image2 from "../../../public/assets/img/portfolio/hawsight-white.png";
import Image3 from "../../../public/assets/img/portfolio/mandirikartukredit-white.png";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";
import Image7 from "../../../public/assets/img/portfolio/project-7.jpg";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Analisa.io",
    image: Image1,
    tag: ["website"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "analisa",
        language: "HTML, CSS, Javascript, Bootstrap, jQuery, Saas",
        preview: "www.analisa.io",
        link: "https://www.analisa.io/",
      },
    ],
  },
  {
    id: 2,
    type: "Hawksight.co",
    image: Image2,
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "hawksight",
        language: "Nextjs, Tailwind, Sass",
        preview: "www.hawksight.co",
        link: "https://www.hawksight.co",
      },
    ],
  },
  {
    id: 3,
    type: "MandiriKartuKredit.com",
    image: Image3,
    tag: ["website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Mandiri",
        language: "HTML, CSS, Javascript, Bootstrap, jQuery",
        preview: "www.mandirikartukredit.com",
        link: "https://www.mandirikartukredit.com",
      },
    ],
  },
  {
    id: 4,
    type: "Coming Soon on Codepen",
    image: Image4,
    tag: ["codepen"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Codepen",
        client: "Codepen",
        language: "HTML, CSS, jQuery",
        preview: "https://codepen.io/ardiiradat",
        link: "https://codepen.io/ardiiradat",
      },
    ],
  },
  {
    id: 5,
    type: "Maps animation dots on Codepen",
    image: Image5,
    tag: ["codepen"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Codepen",
        client: "Codepen",
        language: "HTML, CSS, Javascript",
        preview: "https://codepen.io/ardiiradat",
        link: "https://codepen.io/ardiiradat",
      },
    ],
  },
];

export default PortfolioData;
