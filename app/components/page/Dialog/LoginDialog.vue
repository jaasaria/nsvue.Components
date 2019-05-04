<template>
  <Page>
    <ActionBar title="LoginDialog" class="actionbar">
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
      login(
        "Basic Login Dialog",
        "Username field value",
        "Password field value"
      ).then(result => {
        this.value = `Dialog result: ${result.result}, user: ${
          result.userName
        }, pwd: ${result.password}`;
      });
    },
    press2() {
      login({
        title: "With custom button",
        message: "Your login message",
        okButtonText: "Custom Ok",
        cancelButtonText: "Custom Cancel",
        userName: "Auto set username",
        password: "auto password"
      }).then(result => {
        this.value = `Dialog result: ${result.result}, user: ${
          result.userName
        }, pwd: ${result.password}`;
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
