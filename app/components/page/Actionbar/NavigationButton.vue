<template>
  <Page>
    <ActionBar title="Navigation Button" class="actionbar">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
    </ActionBar>

    <!-- for icons -->
    <!-- Android: path-to-your-android-sdk-folder\platforms\android-version\data\res -->
    <!-- https://developer.android.com/reference/android/R.drawable.html -->
    <!-- http://www.hellothupten.com/2013/06/25/436/ -->

    <!-- IOS: https://docs.nativescript.org/angular/ui/action-bar#setting-icons -->

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Label text="Android: Display Android Back Icon" textWrap="true"/>
      <Label text="IOS: Display text and IOS back icon" textWrap="true"/>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      value: 0
    };
  },
  methods: {}
};
</script>


<style scoped>
</style>
