<script>
  import Main from "./UI/Main.svelte";
  import RangeButton from "./UI/RangeButton.svelte";

  export let title = "";
  export let currentlyActive = "All time";
  export let toggleSwitch;
  export let toggleItem;
</script>

<Main>
  <div class="top-container">
    <div class="top-header">
      <span>{title}</span>
      <div class="top-range-select">
        <RangeButton
          active={currentlyActive === "All time"}
          on:toggleSwitch={toggleSwitch}
          on:toggleItems={toggleItem}>All time</RangeButton
        >
        <RangeButton
          active={currentlyActive === "6 months"}
          on:toggleSwitch={toggleSwitch}
          on:toggleItems={toggleItem}>6 months</RangeButton
        >
        <RangeButton
          active={currentlyActive === "4 weeks"}
          on:toggleSwitch={toggleSwitch}
          on:toggleItems={toggleItem}>4 weeks</RangeButton
        >
      </div>
    </div>
    <div class="top-content">
      <slot />
    </div>
  </div>
</Main>

<style>
  .top-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .top-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .top-header > span {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }
  .top-content {
    margin-top: 20px;
    width: 100%;
  }
</style>
