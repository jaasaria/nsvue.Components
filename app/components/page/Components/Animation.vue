<template>
  <Page>
    <ActionBar title="Animation" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Splash Background" @tap="splash"/>
      <Button text="Button" @tap="button"/>
    </StackLayout>
  </Page>
</template>


<script >
import Splash from "./Animation/Splash";
import Button from "./Animation/Button";

export default {
  data() {
    return {
      value: false
    };
  },
  methods: {
    splash() {
      this.$navigateTo(Splash);
    },
    button() {
      this.$navigateTo(Button);
    }
  }
};
</script>

<style scoped>
</style>
