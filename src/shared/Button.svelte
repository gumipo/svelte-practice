<script lang="ts">
  export let type: string = "primary";
  export let flat: boolean = false;
  export let inverse: boolean = false;
</script>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background-color: #45c496;
    color: white;
  }
  .secondary {
    background-color: #d91b42;
    color: white;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color: #45c496;
    background-color: white;
    border: 2px solid #45c496;
  }
  .secondary.inverse {
    color: #d91b42;
    background-color: white;
    border: 2px solid #d91b42;
  }
</style>

<button class={type} class:flat class:inverse>
  <slot />
</button>
