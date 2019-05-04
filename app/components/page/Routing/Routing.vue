<template>
  <Page>
    <ActionBar title="Routing" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout verticalAlignment="center" horizontalAlignment="center" height="100%">
      <Label class="label" :text="value" textWrap="true"/>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  props: {
    value: {
      type: String,
      default: "This is routing with no props value."
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>
