<template>
  <Page class="bg">
    <ActionBar title="List Picker" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <ListPicker
        width="50%"
        :items="listOfItems"
        selectedIndex="0"
        @selectedIndexChange="selectedIndexChange"
      />

      <ListPicker width="50%" :items="listOfItems" v-model="selectedItem"/>

      <Label
        horizontalAlignment="center"
        class="m-t-10"
        textWrap="true"
      >Slider Value: {{ selectedItem }}</Label>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  computed: {},
  data() {
    return {
      listOfItems: ["Facebook", "Youtube", "Twitter", "Viber"],
      selectedItem: 3
    };
  },
  methods: {
    selectedIndexChange($event) {
      let sValue = $event.object;
      console.log(sValue.text);
    }
  }
};
</script>


<style scoped>
ListPicker {
  margin-top: 20;
}
</style>
