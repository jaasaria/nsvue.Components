<template>
  <Page class="bg">
    <ActionBar title="Activity Indicator" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <ActivityIndicator :busy="isLoading" @busyChange="onBusyChanged"/>

      <Button class="m-t-30" text="Press me to load" @tap="press"/>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      isLoading: false,
      countDown: 0
    };
  },
  methods: {
    onBusyChanged() {
      console.log("firing event");
    },
    press() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
TextView {
  margin-top: 30;
}
.bg {
  background-color: rgba(220, 20, 170, 0.493);
}
</style>
