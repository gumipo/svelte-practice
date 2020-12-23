import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "React or Vue",
    answerA: "React",
    answerB: "Vue",
    votesA: 9,
    votesB: 15,
  },
]);
export default PollStore;
