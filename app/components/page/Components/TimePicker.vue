<template>
  <Page class="bg">
    <ActionBar title="Time Picker" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <TimePicker :hour="selectedHour" :minute="selectedMinute"/>
      <TimePicker v-model="selectedTime"/>
      <Label
        horizontalAlignment="center"
        class="m-t-10"
        textWrap="true"
      >Selected Time Value: {{ selectedTime }}</Label>
    </StackLayout>
  </Page>
</template>


<script >
var setTimer;
export default {
  data() {
    return {
      selectedTime: 0,
      selectedHour: 12,
      selectedMinute: 30
    };
  },
  methods: {
    timeChange($event) {
      console.log($event);
    }
  }
};
</script>


<style scoped>
TimePicker {
  margin-top: 20;
}
</style>
