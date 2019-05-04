<template>
  <Page>
    <ActionBar title="ActionDialog" class="actionbar">
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
      <Label horizontalAlignment="center" :text="value" textWrap="true"/>
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
      action("Favorite Mobile App", "Cancel", [
        "Facebook",
        "Youtube",
        "Twitter",
        "Viber",
        "Google",
        "Email",
        "Messenger"
      ]).then(result => {
        this.value = result;
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
