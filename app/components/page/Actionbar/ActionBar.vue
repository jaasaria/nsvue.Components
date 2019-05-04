<template>
  <Page>
    <ActionBar title="ActionBar" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    ></StackLayout>
  </Page>
</template>


<script >
var setTimer;
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
