import React from "react";
import Lesson2 from "./Lesson2/Lesson2";

const LessonWrapper = props => {
  console.log(props);
  return (
    <>
      <div className="mt-5 text-center">
        <h5>Lesson {props.lesson.nr}</h5>
        <h1>{props.lesson.title}</h1>
        <p className="lead">{props.lesson.description}</p>
      </div>
      {props.children}
    </>
  );
};

export default LessonWrapper;
