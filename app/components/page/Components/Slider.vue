<template>
  <Page>
    <ActionBar title="Slider" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Slider width="100%" v-model="value" value="80" @valueChange="onValueChanged($event)"/>

      <Label horizontalAlignment="center" class="m-t-10" textWrap="true">Slider Value: {{ value }}</Label>
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
    onValueChanged($event) {
      let slider = $event.object;
      if (slider.value == 100) {
        alert("Congrats! You reach 100 value");
      }
    }
  }
};
</script>


<style scoped>
</style>
