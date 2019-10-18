import React from "react";

const LessonWrapper = props => {
  return (
    <>
      <div className="text-center">
        <h5>Lesson {props.lesson.nr}</h5>
        <h1>{props.lesson.title}</h1>
      </div>

      {props.children}
    </>
  );
};

export default LessonWrapper;
