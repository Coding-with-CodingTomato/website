<template>
  <div class="home">
    <h1>Willkommen auf der <b>CodingTomato</b> Webseite</h1>
    <div class="player">
      <iframe
        src="https://player.twitch.tv/?channel=codingtomato&parent=127.0.0.1"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        height="100%"
        width="100%"
      ></iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  h1 {
    text-align: center;
    line-height: normal;
    width: 80%;
  }
  b {
    color: var(--primary-color);
  }
}

.player {
  border-radius: 10px;
  overflow: hidden;
  background-color: black;
  width: 80%;
  height: 50%;
}
</style>
