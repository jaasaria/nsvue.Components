<template>
  <Page class="bg">
    <ActionBar title="Progress" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Progress width="100%" :value="currentProgress" maxValue="100" @valueChange="valueChange"/>

      <Label :text="currentProgress" textWrap="true"/>

      <Button text="Press Me" @tap="press"/>
    </StackLayout>
  </Page>
</template>


<script >
var setTimer;
export default {
  data() {
    return {
      currentProgress: 0
    };
  },
  methods: {
    valueChange() {
      if (this.currentProgress >= 100) {
        clearInterval(setTimer);
        this.currentProgress = 0;
      }
    },
    press() {
      this.currentProgress = 0;
      clearInterval(setTimer);

      setTimer = setInterval(() => {
        this.currentProgress += 1;
      }, 10);
    }
  }
};
</script>


<style scoped>
progress {
  margin-top: 20;
}
.bg {
}
</style>
