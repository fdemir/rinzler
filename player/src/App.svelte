<script>
  export let name;
</script>

<style>
  .player {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 80px;
    width: 100vw;
    border: 3px dashed #2b8a3e;
  }
</style>

<div class="player">
  {name} is mounted!
</div>