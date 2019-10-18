import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LessonWrapper from "./pages/LessonWrapper";
import MyTopNav from "./components/MyTopNav";
import { lessons_info } from "./data/Data";

function App() {
  const [lessons] = useState(lessons_info);

  return (
    <>
      <BrowserRouter>
        <Route path="/">
          <MyTopNav lessons={lessons} />
        </Route>
        <Switch>
          <Route exact path="/">
            <Home lessons={lessons} />
          </Route>

          {lessons.map((lesson, i) => (
            <Route
              key={i}
              path={`/lesson-${lesson.nr}`}
              render={() => (
                <LessonWrapper lesson={lesson}>
                  <lesson.component />
                </LessonWrapper>
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
