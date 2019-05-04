<template>
  <Page
    actionBarHidden="true"
    :backgroundSpanUnderStatusBar="backgroundSpanUnderStatusBar"
    :androidStatusBarBackground="androidStatusBarBackground"
    :backgroundColor="bgColor"
  >
    <!-- binding color not working in page -->

    <!-- <Page
    :androidStatusBarBackground="androidStatusBarBackground"
    :backgroundSpanUnderStatusBar="backgroundSpanUnderStatusBar"
    >-->
    <ActionBar title="Page androidStatusBarBackground" class="actionbar bg">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content bg"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <!-- Need to look at on how to use this  -->
      <!-- <Button
        class="m-t-10"
        @tap="backgroundSpanUnderStatusBar = !backgroundSpanUnderStatusBar"
      >backgroundSpanUnderStatusBar Value: {{ backgroundSpanUnderStatusBar }}</Button>-->

      <Button text="Select Color" @tap="selectColor"/>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  computed: {},
  data() {
    return {
      bgColor: "crimson",
      androidStatusBarBackground: "crimson",
      backgroundSpanUnderStatusBar: true // For IOS
    };
  },
  methods: {
    selectColor() {
      action("Choose your favorite Color", "Cancel", [
        "orangered",
        "orchid",
        "royalblue",
        "aqua",
        "crimson"
      ]).then(result => {
        this.androidStatusBarBackground = result;
      });
    }
  }
};
</script>


<style scoped>
.bg {
  /* background-color: crimson; */
  /* background-image: url("~/assets/images/ads/ads4.png"); */
}
</style>
