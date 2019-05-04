<template>
  <Page>
    <ActionBar title="Image" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <ScrollView class="content bg">
      <StackLayout>
        <!-- Displaying an image from a URL -->
        <Image
          backgroundColor="orange"
          class="image"
          src="https://art.nativescript-vue.org/NativeScript-Vue.png"
          stretch="none"
        />

        <!-- Displaying an image from App_Resources -->
        <Image backgroundColor="yellow" class="image" src="res://icon" stretch="none"/>

        <!-- Displaying an image relative to the app directory -->
        <Image class="image" src="~/assets/images/ads/ads1.png" stretch="none"/>
        <Image class="image" src="~/assets/images/ads/ads3.png" stretch="aspectFill"/>
        <Image class="image" src="~/assets/images/ads/ads3.png" stretch="aspectFit"/>
        <Image class="image" src="~/assets/images/ads/ads4.png" stretch="fill"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>


<script >
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.image {
  margin-top: 10;
}
.bg {
  background-image: url("~/assets/images/ads/ads2.png");
  background-repeat: no-repeat;
}
</style>
