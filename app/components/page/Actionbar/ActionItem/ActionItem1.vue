<template>
  <Page>
    <ActionBar title="Action Item 1">
      <ActionItem
        @tap="press('share')"
        ios.systemIcon="9"
        ios.position="left"
        android.systemIcon="ic_menu_share"
        android.position="actionBar"
      />
      <ActionItem
        @tap="press('delete')"
        ios.systemIcon="16"
        ios.position="right"
        text="delete"
        android.position="popup"
      />
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Back" @tap="$navigateBack()"/>
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
  methods: {
    press(txt) {
      alert(txt);
    }
  }
};
</script>


<style scoped>
</style>
