<script>
  import { Link } from "svelte-navigator";
  export let style = "";
  export let to = "";
  export let onClick = () => {};
  style = style + "text-decoration: none;";
</script>

<Link {style} {to} on:click={onClick}>
  <div class="button-style">
    <slot />
  </div>
</Link>

<style>
  .button-style {
    background-color: transparent;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 30px;
    padding: 12px 30px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  }

  .button-style:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
</style>