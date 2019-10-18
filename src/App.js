import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LessonWrapper from "./pages/LessonWrapper";
import Lesson1 from "./pages/Lesson1/Lesson1";
import Lesson2 from "./pages/Lesson2/Lesson2";
import MyTopNav from "./Components/Navbar";

function App() {
  const [lessons] = useState([
    {
      id: 1,
      title: "Lesson 1"
    },
    {
      id: 2,
      nr: 2,
      title: "Let's build a clock!",
      description: "a"
    }
  ]);

  return (
    <>
      <BrowserRouter>
        <Route path="/" component={MyTopNav} />
        <Switch>
          <Route exact path="/">
            <Home lessons={lessons} />
          </Route>
          {/* {lessons.map(lesson => (
          <Route path={`/lesson-${lesson.id}`}>
            <LessonWrapper lesson={lesson}>
              <Lesson1 />
            </LessonWrapper>
          </Route>
        ))} */}
          <Route path={`/lesson-1`}>
            <LessonWrapper lesson={lessons[0]}>
              <Lesson1 />
            </LessonWrapper>
          </Route>
          <Route path={`/lesson-2`}>
            <LessonWrapper lesson={lessons[1]}>
              <Lesson2 />
            </LessonWrapper>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
