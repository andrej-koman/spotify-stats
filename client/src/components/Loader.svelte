<script>
</script>

<div class="loader">
  <div class="r1" />
  <div class="r2" />
  <div class="r3" />
  <div class="r4" />
  <div class="r5" />
</div>

<style>
  .loader {
    margin: auto;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: 40px;
  }

  .loader > div {
    background: #1ed760;
    height: 100%;
    width: 2px;
    float: left;
    margin: 0 1px;
    animation: stretch 2s infinite;
    animation-timing-function: cubic-bezier(0.62, 0.28, 0.23, 0.99);
  }

  .loader .r1 {
    animation-delay: -1s;
  }

  .loader .r2 {
    animation-delay: -0.9s;
  }

  .loader .r3 {
    animation-delay: -0.8s;
  }

  .loader .r4 {
    animation-delay: -0.7s;
  }

  .loader .r5 {
    animation-delay: -0.6s;
  }

  @keyframes stretch {
    0%,
    20%,
    49% {
      transform: scaleY(0.4);
      background-color: #1ed760;
    }

    10% {
      transform: scaleY(1);
    }

    50%,
    70%,
    100% {
      transform: scaleY(0.4);
      background-color: gray;
    }

    60% {
      transform: scaleY(1);
      background-color: gray;
    }
  }
</style>