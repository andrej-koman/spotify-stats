<script>
  import { createEventDispatcher } from "svelte";
  export let active = false;

  const dispatch = createEventDispatcher();

  const toggleSwitch = (e) => {
    dispatch("toggleSwitch", e.target.innerHTML);
  };

  const toggleItems = (e) => {
    dispatch("toggleItems", e.target.innerHTML);
  };

  $: classList = active ? "range-button active" : "range-button";

  const handleClick = (e) => {
    toggleSwitch(e);
    toggleItems(e);
  };
</script>

<span class={classList} on:keydown={handleClick} on:click={handleClick}>
  <slot />
</span>

<style>
  .range-button {
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 10px;
    padding-bottom: 2px;
    line-height: 1.5;
    white-space: nowrap;
    transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  }
  .active {
    border-bottom: 1px solid rgb(255, 255, 255);
  }
  .range-button:hover {
    border-bottom: 1px solid rgb(255, 255, 255);
  }
</style>