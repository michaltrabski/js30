import Lesson2 from "../pages/Lesson2/Lesson2";
import Lesson1 from "./../pages/Lesson1/Lesson1";

const tag = {
  hooks: "react hooks",
  styled: "styled components"
};

export const lessons_info = [
  {
    id: "matsdfrklsjksfd",
    nr: 1,
    title: "Tu bedzie lekcja 1",
    description: "descr l1",
    tags: [tag.hooks, tag.styled, tag.hooks, tag.styled, "asdasdasd"],
    component: Lesson1
  },
  {
    id: "jnfssafewksd",
    nr: 2,
    title: "Let's build a clock!",
    description:
      "This clock is made with just pure css. The clock's hands are moved by changing it transform properties.",
    tags: [tag.hooks, tag.styled],
    component: Lesson2
  }
];
