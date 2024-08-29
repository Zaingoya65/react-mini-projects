//Task 4

import Accordion from "react-bootstrap/Accordion";

function AccordionMenu() {

  const eventsKey = ["0", "1", "2","3"];

  const courseTitle = [
    "HTML Course",
    "CSS Course",
    "JavaScript Course",
    "React.js Course",
  ];

  const courseBody = [
    "This is HTML Course",
    "This is CSS Course",
    "This is JavaScript Course",
    "This is React.js Course"
  ];
  
  return(
    <>
      <Accordion className="accordionMenu container justify-content-center align-items-center">
        {courseTitle.map((courseTitle, index) =>(
          <Accordion.Item eventKey={eventsKey [index]} key={index}>
          <Accordion.Header className="title">
            {courseTitle}
          </Accordion.Header>
            <Accordion.Body>
              {courseBody[index]}
            </Accordion.Body>
        </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}

export default AccordionMenu;
