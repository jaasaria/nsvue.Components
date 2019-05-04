<template>
  <Page class="bg">
    <ActionBar title="Tabview Top" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
        <TabViewItem title="Tab 1">
          <Label text="Content for Tab 1"/>
        </TabViewItem>
        <TabViewItem title="Tab 2">
          <StackLayout>
            <Label text="Content for Tab 2"/>
            <Image class="image" src="~/assets/images/ads/ads2.png" stretch="aspectFit"/>
          </StackLayout>
        </TabViewItem>
      </TabView>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      selectedIndex: 0
    };
  },
  methods: {
    indexChange: function(args) {
      let newIndex = args.value;
      console.log("Current tab index: " + newIndex);
    }
  }
};
</script>


<style scoped>
TabView {
  margin-top: 20;
}
</style>
