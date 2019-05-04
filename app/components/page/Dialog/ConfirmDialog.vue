<template>
  <Page>
    <ActionBar title="ConfirmDialog" class="actionbar">
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
      value: ""
    };
  },
  methods: {
    press() {
      confirm("Basic confirm dialog").then(result => {
        console.log(result);
      });
    },
    press2() {
      confirm({
        title: "With custom button",
        message: "Your message",
        okButtonText: "Custom Ok",
        cancelButtonText: "Custom Cancel"
      }).then(result => {
        console.log(result);
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
