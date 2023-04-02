// import { Col } from "react-bootstrap";

// export const ProjectCard3 = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }

// import { Col } from "react-bootstrap";

// export const ProjectCard3 = ({ title, description, imgUrl, link }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <a href={link} target="_blank" rel="noopener noreferrer">
//         <div className="proj-imgbx">
//           <img src={imgUrl} />
//           <div className="proj-txtx">
//             <h4>{title}</h4>
//             <span>{description}</span>
//           </div>
//         </div>
//       </a>
//     </Col>
//   )
// }

import { Col } from "react-bootstrap";

export const ProjectCard3 = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
          <h4 style={{ color: "white" }}>{title}</h4>
            <span style={{ color: "white" }}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};