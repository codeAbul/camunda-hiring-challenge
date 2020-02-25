import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import React, { Fragment, useEffect, useRef } from "react";
import styles from "./ModelerPage.module.scss";

// create modeler instance

const Modeler = () => {
  const modelerInstance = useRef(new BpmnJS());
  const containerClass = styles["container"];
  // Attach modeler to the container
  // once the component mounts
  useEffect(() => {
    modelerInstance.current.attachTo(`.${containerClass}`);
  }, [containerClass]);

  // Update the document title

  useEffect(() => {
    document.title = "Modeler Page";
  }, []);

  return (
    <Fragment>
      <h1 id="modeler__title"> Modeler </h1>
      <article className={containerClass} aria-labelledby="modeler__title" />
    </Fragment>
  );
};

export default Modeler;
