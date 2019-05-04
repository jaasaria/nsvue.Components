<template>
  <Page>
    <ActionBar title="Action Item 2">
      <ActionItem
        @tap="press('edit')"
        v-show="!isEditing"
        ios.systemIcon="2"
        ios.position="right"
        android.systemIcon="ic_menu_edit"
      />
      <ActionItem
        @tap="press('save')"
        v-show="isEditing"
        ios.systemIcon="3"
        ios.position="right"
        android.systemIcon="ic_menu_save"
      />
      <ActionItem
        @tap="press('cancel')"
        v-show="isEditing"
        ios.systemIcon="1"
        android.systemIcon="ic_menu_close_clear_cancel"
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
