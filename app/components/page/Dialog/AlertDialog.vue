<template>
  <Page>
    <ActionBar title="AlertDialog" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Press Me" @tap="press"/>
      <Button text="Press Me" @tap="press2"/>
    </StackLayout>
  </Page>
</template>


<script >
var setTimer;
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    press() {
      alert("Basic alert dialog").then(() => {
        console.log("Alert dialog closed.");
      });
    },
    press2() {
      alert({
        title: "With custom button",
        message: "Your message",
        okButtonText: "Custom Ok"
      }).then(() => {
        console.log("Alert dialog closed");
      });
    }
  }
};
</script>


<style scoped>
button {
  margin-top: 20;
}
</style>
