<template>
  <Page class="bg">
    <ActionBar title="Page Transistion" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Label horizontalAlignment="center" :text="value" textWrap="true"/>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  props: ["value"],
  data() {
    return {};
  },
  methods: {}
};
</script>


<style scoped>
.bg {
  background-color: rgba(255, 68, 0, 0.521);
}
</style>
