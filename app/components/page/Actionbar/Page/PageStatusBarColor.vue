<template>
  <Page
    actionBarHidden="true"
    :backgroundSpanUnderStatusBar="backgroundSpanUnderStatusBar"
    :androidStatusBarBackground="androidStatusBarBackground"
    class="bg"
  >
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
      <Button
        class="m-t-10"
        @tap="backgroundSpanUnderStatusBar = !backgroundSpanUnderStatusBar"
      >backgroundSpanUnderStatusBar Value: {{ backgroundSpanUnderStatusBar }}</Button>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  computed: {},
  data() {
    return {
      backgroundSpanUnderStatusBar: true, // For IOS
      androidStatusBarBackground: "#ff0040"
    };
  },
  methods: {}
};
</script>


<style scoped>
.bg {
  background-color: #ff0040;
  background-image: url("~/assets/images/ads/ads4.png");
}
</style>
