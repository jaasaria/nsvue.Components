<template>
  <Page class="bg">
    <ActionBar title="Segmented Bar" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <SegmentedBar>
        <SegmentedBarItem title="First"/>
        <SegmentedBarItem title="Second"/>
        <SegmentedBarItem title="Third"/>
      </SegmentedBar>

      <SegmentedBar
        :items="myItems"
        selectedIndex="0"
        v-model="selectedItem"
        @selectedIndexChange="onSelectedIndexChange"
      />

      <Label
        class="m-t-10"
        horizontalAlignment="center"
        textWrap="true"
      >Selected Index: {{ selectedItem }}</Label>
    </StackLayout>
  </Page>
</template>


<script >
import {
  SegmentedBar,
  SegmentedBarItem
} from "tns-core-modules/ui/segmented-bar";

export default {
  created() {
    this.myItems = [];
    for (let i = 0; i < this.listOfItems.length; i++) {
      const item = new SegmentedBarItem();
      item.title = this.listOfItems[i];
      this.myItems.push(item);
    }
  },
  data() {
    return {
      myItems: new SegmentedBarItem(),
      listOfItems: ["Home", "Trending", "Profile"],
      selectedItem: 0
    };
  },
  methods: {
    onSelectedIndexChange() {
      alert("submit fired");
    }
  }
};
</script>


<style scoped>
SegmentedBar {
  margin-top: 20;
}
.bg {
  /* background-color: rgba(20, 107, 220, 0.534); */
}
</style>
