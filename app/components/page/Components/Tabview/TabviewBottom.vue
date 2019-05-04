<template>
  <Page class="bg">
    <ActionBar title="Tabview Bottom" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <TabView
        tabTextColor="white"
        tabBackgroundColor="orange"
        selectedTabTextColor="red"
        androidTabsPosition="bottom"
        :selectedIndex="selectedIndex"
        iosIconRenderingMode="alwaysOriginal"
      >
        <TabViewItem title="Tab 1" iconSource="res://icon">
          <Label text="Content for Tab 1"/>
        </TabViewItem>
        <TabViewItem title="Tab 2" iconSource="res://icon">
          <StackLayout>
            <Label text="Content for Tab 2"/>
            <Image class="image" src="~/assets/images/ads/ads3.png" stretch="aspectFit"/>
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
  methods: {}
};
</script>


<style scoped>
TabView {
  margin-top: 20;
}
</style>
