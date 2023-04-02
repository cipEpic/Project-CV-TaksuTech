import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCard1";
import { ProjectCard2 } from "./ProjectCard2";
import { ProjectCard3 } from "./ProjectCard3";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/capbul-ex.png";
import projImg5 from "../assets/img/cisco-ex.png";
import projImg6 from "../assets/img/et-ex.png";
import projImg7 from "../assets/img/indochat-ex.png";
import projImg8 from "../assets/img/optimus-ex.png";
import projImg9 from "../assets/img/rtik-ex.png";
import projImg10 from "../assets/img/snatia-ex.png";
import projImg11 from "../assets/img/unmas-ex.png";
import projImg12 from "../assets/img/capbul-cer.png";
import projImg13 from "../assets/img/cisco-cer.png";
import projImg14 from "../assets/img/festagama-cer.png";
import projImg15 from "../assets/img/iysa-cer.png";
import projImg16 from "../assets/img/lkmmtd-cer.png";
import projImg17 from "../assets/img/mintalk-cer.png";
import projImg18 from "../assets/img/porto-1.png";
import projImg19 from "../assets/img/porto-2.png";
import projImg20 from "../assets/img/porto-3.png";
import projImg21 from "../assets/img/porto-4.png";

// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PROKER Capacity Building BEM FMIPA UDAYANA",
      description: "as Sie Humas",
      imgUrl: projImg4,
    },
    {
      title: "Cisco Networking Academy",
      description: "Students",
      imgUrl: projImg5,
    },
    {
      title: "PROKER Entrepreneurship Training UKM UYEC",
      description: "as Sie PDD",
      imgUrl: projImg6,
    },
    {
      title: "Indochat App",
      description: "as Freelance Content Creator",
      imgUrl: projImg7,
    },
    {
      title: "PROKER OPTIMUS HIMAIF",
      description: "as Sie pendamping kelompok",
      imgUrl: projImg8,
    },
    {
      title: "webinar RTIK Bali Literasi Digital",
      description: "as Participants",
      imgUrl: projImg9,
    },
    {
      title: "Participants of SNATIA",
      description: "as Author paper ",
      imgUrl: projImg10,
    },
    {
      title: "UNMAS Denpasar",
      description: "as Freelance Graphic Designer",
      imgUrl: projImg11,
    },
  ];

  const projects2 = [
    {
      title: "Capacity Building FMIPA 2021",
      description: "as Sie humas",
      imgUrl: projImg12,
    },
    {
      title: "Cisco Networking Academy",
      description: "Students",
      imgUrl: projImg13,
    },
    {
      title: "Festagama Essay competition 2019",
      description: "as winner in position 1",
      imgUrl: projImg14,
    },
    {
      title: "IYSA 2019",
      description: "Gold award",
      imgUrl: projImg15,
    },
    {
      title: "LKMMTD FMIPA Udayana",
      description: "participant",
      imgUrl: projImg16,
    },
    {
      title: "Minitalkshow UYEC",
      description: "Anggota PDD",
      imgUrl: projImg17,
    },
  ];

  const projects3 = [
    {
      title: "E-Banten",
      description: "Distribution Web app",
      imgUrl: projImg18,
      link: "https://drive.google.com/file/d/1IQ65vPdmSEQ3R0Sg9En6Z5f7-98fsYuf/view?usp=share_link",
    },
    {
      title: "E-Happystuff",
      description: "E-commerce Web app",
      imgUrl: projImg19,
      link: "https://e-happystuff.000webhostapp.com/index.html",
    },
    {
      title: "CLI Laundryku",
      description: "Laundry app based CLI python and mysql",
      imgUrl: projImg20,
      link: "https://youtu.be/Se4_1FQ5ZbQ",
    },
    {
      title: "CeritaKu",
      description: "Read and Write Novel Web app" ,
      imgUrl: projImg21,
      link: "https://github.com/cipEpic/CeritaKu",
    },

  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>More</h2>
                <p>Here are some experiences, certifications, and projects that I have done. Some of them I got during my senior high school years as well.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certification</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard1
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Still, there are several certificates, but they are not displayed.</p>
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard3
                                key={index}
                                {...project}
                                // link={}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Some projects are still on localhost and have not been deployed yet. <br></br>Click the image for more informations of the each project.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
