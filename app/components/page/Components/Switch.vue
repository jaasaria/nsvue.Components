<template>
  <Page>
    <ActionBar title="Switch" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <StackLayout class="content" verticalAlignment="center" horizontalAlignment="center">
        <Switch checked="true"/>
        <Switch @checkedChange="checkedChange" v-model="itemEnabled"/>
      </StackLayout>
      <Label textWrap="true">Value is: {{ itemEnabled }} and change to {{ changeCount }} times</Label>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      changeCount: 0,
      itemEnabled: false
    };
  },
  methods: {
    checkedChange() {
      this.changeCount += 1;
    }
  }
};
</script>

<style scoped>
Switch {
  margin-top: 20;
}
</style>
