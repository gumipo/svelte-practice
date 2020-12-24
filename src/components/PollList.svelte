<script lang="ts">
  // import { onDestroy, onMount } from "svelte";
  import { fade, slide, scale, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "../store/PollStore";
  import PollDetails from "./PollDetails.svelte";

  // export let polls: Poll[] = [];

  // const unSub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // //mount
  // onMount(() => {
  //   console.log(polls);
  // });

  // //unmount
  // onDestroy(() => {
  //   console.log("destroy");

  //   unSub();
  // });
</script>

<style>
  .poll_list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .poll_list .no_poll {
    text-align: center;
  }
</style>

<div class="poll_list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {:else}
    <div class="center">
      <p class="no_poll">まだ投票先がありません</p>
    </div>
  {/each}
</div>
