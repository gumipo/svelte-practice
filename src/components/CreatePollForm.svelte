<script lang="ts">
  import PollStore from "../store/PollStore";
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";
  interface Fields {
    question: string;
    answerA: string;
    answerB: string;
  }

  let dispatch = createEventDispatcher();
  let type = "secondary";
  let fields: Fields = { question: "", answerA: "", answerB: "" };
  let errors: Fields = { question: "", answerA: "", answerB: "" };
  let valid: boolean = false;

  $: fields.question.length >= 5 &&
  fields.answerA.length >= 1 &&
  fields.answerB.length >= 1
    ? (type = "primary")
    : (type = "secondary");

  const submitHandler = () => {
    valid = true;

    //validate question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "５文字以上の入力してください";
    } else {
      errors.question = "";
    }
    //validate answer-a
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "AnswerAがありません";
    } else {
      errors.answerA = "";
    }
    //validate answer-a
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "AnswerBがありません";
    } else {
      errors.answerB = "";
    }

    //add new poll
    if (valid) {
      const id = Math.floor(Math.random() * 100);
      let poll = { ...fields, votesA: 0, votesB: 0, id: id };
      //save poll to PollStore
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    }
  };
</script>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
    <Button {type} flat={true}>Add Poll</Button>
  </div>
</form>
