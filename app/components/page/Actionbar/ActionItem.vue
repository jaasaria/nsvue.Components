<template>
  <Page>
    <ActionBar title="Action Item" class="actionbar">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Sample #1" @tap="ai1"/>
      <Button text="Sample #2" @tap="ai2"/>
    </StackLayout>
  </Page>
</template>


<script >
import ActionItem1 from "./ActionItem/ActionItem1";
import ActionItem2 from "./ActionItem/ActionItem2";

export default {
  data() {
    return {
      value: 0
    };
  },
  methods: {
    ai1() {
      this.$navigateTo(ActionItem1);
    },
    ai2() {
      this.$navigateTo(ActionItem2);
    }
  }
};
</script>


<style scoped>
</style>
