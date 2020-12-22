<script lang="ts">
  interface Polls {
    id: number;
    question: string;
    answerA: string;
    answerB: string;
    votesA: number;
    votesB: number;
  }

  export let polls: Polls[] = [];
</script>

<style>
  .poll_list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="poll_list">
  {#each polls as poll (poll.id)}
    <div>{poll.question}?</div>
  {/each}
</div>
