<template>
  <Page class="bg">
    <ActionBar title="Tabview" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Top Tabview" @tap="top"/>
      <Button text="Bottom Tabview" @tap="bottom"/>
    </StackLayout>
  </Page>
</template>


<script >
import TabviewTop from "./Tabview/TabviewTop";
import TabviewBottom from "./Tabview/TabviewBottom";
export default {
  data() {
    return {
      value: 0
    };
  },
  methods: {
    top() {
      this.$navigateTo(TabviewTop);
    },
    bottom() {
      this.$navigateTo(TabviewBottom);
    }
  }
};
</script>


<style scoped>
button {
  margin-top: 20;
}
</style>
