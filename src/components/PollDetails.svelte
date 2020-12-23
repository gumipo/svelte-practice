<script lang="ts">
  // import { createEventDispatcher } from "svelte";
  import Card from "../shared/Card.svelte";
  import PollStore from "../store/PollStore";
  import Button from "../shared/Button.svelte";

  export let poll;
  // const dispatch = createEventDispatcher();

  interface Poll {
    id: number;
    question: string;
    answerA: string;
    answerB: string;
    votesA: number;
    votesB: number;
  }

  //reactive values
  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

  const handleVote = (option: string, id: number) => {
    //storeのdataを更新してreturn
    PollStore.update((currentPolls): Poll[] => {
      let copiedPolls = [...currentPolls];
      let upvotedPoll = copiedPolls.find((poll) => poll.id === id);
      if (option === "a") {
        upvotedPoll.votesA++;
      }
      if (option === "b") {
        upvotedPoll.votesB++;
      }
      return copiedPolls;
    });
  };

  //delete poll  filterでid以外更新
  const handleDelete = (id: number) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id != id);
    });
  };
</script>

<style>
  h3 {
    margin: 0 auto;
    color: white;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #ddd;
    margin-bottom: 30px;
  }
  .answer {
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 4px solid #d91b42;
    background-color: pink;
    opacity: 0.5;
  }
  .percent-b {
    border-left: 4px solid #45c496;
    background-color: green;
    opacity: 0.6;
  }
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes : {totalVotes}</p>
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a" style="width:{percentA}%" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b" style="width:{percentB}%" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
      <Button
        flat={true}
        type="secondary"
        on:click={() => handleDelete(poll.id)}>
        Delete
      </Button>
    </div>
  </div>
</Card>
