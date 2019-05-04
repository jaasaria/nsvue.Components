<template>
  <Page>
    <ActionBar title="Scrollview" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <ScrollView orientation="horizontal">
        <StackLayout orientation="horizontal">
          <Image class="fixed m-5" src="~/assets/images/ads/ads1.png" stretch="aspectFit"/>
          <Image class="fixed m-5" src="~/assets/images/ads/ads2.png" stretch="aspectFit"/>
          <Image class="fixed m-5" src="~/assets/images/ads/ads3.png" stretch="aspectFit"/>
          <Image class="fixed m-5" src="~/assets/images/ads/ads4.png" stretch="aspectFit"/>
        </StackLayout>
      </ScrollView>
      <ScrollView class="m-t-20">
        <StackLayout>
          <Image class="fixed" src="~/assets/images/ads/ads1.png" stretch="aspectFit"/>
          <Image class="fixed" src="~/assets/images/ads/ads2.png" stretch="aspectFit"/>
          <Image class="fixed" src="~/assets/images/ads/ads3.png" stretch="aspectFit"/>
          <Image class="fixed" src="~/assets/images/ads/ads4.png" stretch="aspectFit"/>
          <Image class="fixed" src="~/assets/images/ads/ads1.png" stretch="aspectFit"/>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {}
};
</script>


<style scoped>
image {
  margin-top: 20;
}
.fixed {
  height: 150;
}
</style>
