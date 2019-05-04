<template>
  <Page>
    <ActionBar title="Sounds" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <StackLayout orientation="horizontal">
        <Button v-show="!isPlaying" text="Play" @tap="play"/>
        <Button v-show="isPlaying" :text="isPause === false ?  'Pause': 'Play'" @tap="pause"/>
        <Button v-show="isPlaying" text="Stop" @tap="stop"/>
      </StackLayout>

      <Button text="Play Notification" @tap="noti"/>
      <Button text="Play Alert" @tap="alert"/>
    </StackLayout>
  </Page>
</template>


<script >
const audio = require("nativescript-audio");
const player = new audio.TNSPlayer();
const playerOptions = {
  audioFile: "~/assets/audio/happy.mp3",
  loop: false,
  completeCallback: function() {
    console.log("finished playing");
  },
  errorCallback: function(errorObject) {
    console.log(JSON.stringify(errorObject));
  },
  infoCallback: function(args) {
    console.log(JSON.stringify(args));
  }
};

const playerOptions2 = {
  audioFile: "~/assets/audio/alert.mp3",
  loop: false
};
const playerOptions3 = {
  audioFile: "~/assets/audio/noti.mp3",
  loop: false
};

export default {
  mounted() {},
  data() {
    return {
      isPlaying: false,
      isPause: false
    };
  },
  methods: {
    play() {
      const self = this;
      player
        .playFromUrl(playerOptions)
        .then(function(res) {
          console.log(res);
          self.isPlaying = true;
        })
        .catch(function(err) {
          console.log("something went wrong...", err);
          self.isPlaying = false;
        });
    },
    pause() {
      if (player.isAudioPlaying()) {
        player.pause();
        this.isPause = true;
        return;
      }

      if (this.isPause) {
        player.play();
        this.isPause = false;
      }
    },
    stop() {
      player.dispose();
      this.isPlaying = false;
      this.isPause = false;
    },
    noti() {
      player.playFromUrl(playerOptions2);
    },
    alert() {
      player.playFromUrl(playerOptions3);
    }
  }
};
</script>


<style scoped>
button {
  margin-top: 20;
}
</style>
