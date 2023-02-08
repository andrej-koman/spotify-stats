<script>
    import {createEventDispatcher} from "svelte";
    import { v4 as uuidv4 } from 'uuid';
    import {Link} from "svelte-navigator";
    export let to = "";
    export let iconClass = "";
    export let isMiddle = false;
    export let isActive = false;

    const dispatch = createEventDispatcher();
    const id = uuidv4();
    let navItemClass = "nav-item";
    $: if (isActive) {
        navItemClass = navItemClass + " active";
    } else {
        navItemClass = navItemClass.replace(" active", "");
    }
    iconClass = iconClass + " icon";

    const handleClick = (e) => {
        dispatch("toggle-active", document.getElementById(id).innerHTML);
    };
</script>

{#if isMiddle}
<Link {to} style="text-decoration: none;">
    <div class={navItemClass} on:click={handleClick} on:keydown={handleClick}>
        <i class={iconClass}></i>
        <span class="nav-item-text" id={id}><slot /></span>
    </div>
</Link>
{:else}
<Link {to} style="text-decoration: none;" >
    <i class={iconClass}></i>
</Link>
{/if}

<style>
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding-bottom: 1rem;
    color: rgb(175, 175, 175);
    transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  }

  .nav-item:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }

  .nav-item-text {
    font-size: 0.7rem;
  }

  .icon {
    font-weight: 900;
    margin-top: 1rem;
    margin-bottom: 3px;
  }
  .nav-item > .icon {
    font-size: 20px;
  }
  .active {
    background-color: rgb(0, 0, 0);
    color: white;
  }
</style>