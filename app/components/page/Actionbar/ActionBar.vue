<template>
  <Page>
    <ActionBar title="Action Bar" class="actionbar">
      <NavigationButton text="back" android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Simple" @tap="simple"/>
      <Button text="Custom" @tap="custom"/>
      <Button text="Icon for Android" @tap="iconForAndroid"/>
      <Button text="Borderless" @tap="borderless"/>
    </StackLayout>
  </Page>
</template>


<script >
import simple from "./Actionbar/simple";
import custom from "./Actionbar/custom";
import android from "./Actionbar/android";
import borderless from "./Actionbar/borderless";
export default {
  data() {
    return {
      value: "default"
    };
  },
  methods: {
    simple() {
      this.$navigateTo(simple);
    },
    custom() {
      this.$navigateTo(custom);
    },
    iconForAndroid() {
      this.$navigateTo(android);
    },
    borderless() {
      this.$navigateTo(borderless);
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 20;
}
</style>
