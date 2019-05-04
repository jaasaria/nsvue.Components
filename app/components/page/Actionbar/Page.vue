<template>
  <Page
    class="bg"
    :backgroundSpanUnderStatusBar="backgroundSpanUnderStatusBar"
    :statusBarStyle="statusBarStyle"
    :actionBarHidden="actionBarHidden"
  >
    <ActionBar title="Page" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button
        class="m-t-10"
        @tap="actionBarHidden = !actionBarHidden"
      >actionBarHidden Value: {{ actionBarHidden}}</Button>

      <Button
        class="m-t-10"
        @tap="backgroundSpanUnderStatusBar = !backgroundSpanUnderStatusBar"
      >backgroundSpanUnderStatusBar Value: {{ backgroundSpanUnderStatusBar }}</Button>

      <Button class="m-t-10" @tap="updatestatusBarStyle">statusBarStyle Value: {{ statusBarStyle}}</Button>

      <Button text="Show androidStatusBarBackground" @tap="openPageStatusBarColor"/>
    </StackLayout>
  </Page>
</template>


<script >
import PageStatusBarColor from "./Page/PageStatusBarColor";
export default {
  computed: {},
  data() {
    return {
      actionBarHidden: false,
      backgroundSpanUnderStatusBar: false,
      statusBarStyle: "dark"
    };
  },
  methods: {
    updatestatusBarStyle() {
      if (this.statusBarStyle == "dark") {
        this.statusBarStyle = "light";
      } else {
        this.statusBarStyle = "dark";
      }
    },
    openPageStatusBarColor() {
      this.$navigateTo(PageStatusBarColor);
    }
  }
};
</script>


<style scoped>
test {
  color: #6200ff;
}
</style>
