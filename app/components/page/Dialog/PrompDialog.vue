<template>
  <Page>
    <ActionBar title="PromptDialog" class="actionbar">
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
      <Button text="Press Me" @tap="press3"/>
      <Button text="Press Me" @tap="press4"/>
      <Label horizontalAlignment="center" :text="value" textWrap="true"/>
    </StackLayout>
  </Page>
</template>


<script >
const dialogs = require("tns-core-modules/ui/dialogs");

export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    press() {
      prompt("Basic Prompt", "Default value here").then(result => {
        this.value = `Dialog result: ${result.result}, text: ${result.text}`;
      });
    },
    press2() {
      prompt({
        title: "With custom button",
        message: "Your message",
        okButtonText: "Custom Ok",
        cancelButtonText: "Custom Cancel",
        defaultText: "Suggested user input"
      }).then(result => {
        this.value = `Dialog result: ${result.result}, text: ${result.text}`;
      });
    },
    press3() {
      prompt({
        title: "Email Prompt",
        message: "Provide your email address:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        defaultText: "name@domain.com",
        inputType: dialogs.inputType.email
      }).then(result => {
        console.log(`Dialog result: ${result.result}, text: ${result.text}`);
      });
    },
    press4() {
      prompt({
        title: "Password Prompt",
        message: "Provide your password:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        defaultText: "123123",
        inputType: dialogs.inputType.password
      }).then(result => {
        console.log(`Dialog result: ${result.result}, text: ${result.text}`);
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
