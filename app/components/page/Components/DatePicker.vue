<template>
  <Page class="bg">
    <ActionBar title="Date Picker" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <DatePicker v-model="someDate" @dateChange="dateChange"/>
      <Label
        horizontalAlignment="center"
        class="m-t-10"
        textWrap="true"
      >Selected Date Value: {{ someDate }}</Label>
    </StackLayout>
  </Page>
</template>


<script >
var setTimer;
export default {
  data() {
    return {
      someDate: new Date()
    };
  },
  methods: {
    dateChange($event) {
      console.log($event);
    }
  }
};
</script>


<style scoped>
DatePicker {
  margin-top: 20;
}
</style>
