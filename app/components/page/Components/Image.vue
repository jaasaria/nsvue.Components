<template>
  <Page>
    <ActionBar title="Image" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <ScrollView class="content bg">
      <GridLayout rows="auto,auto,auto,auto,auto,auto" columns="*">
        <!-- Displaying an image from a URL -->
        <Image
          row="0"
          backgroundColor="orange"
          class="image"
          src="https://art.nativescript-vue.org/NativeScript-Vue.png"
          stretch="none"
        />
        <Label row="0" class="txtInfo pull-right" text="From Web" textWrap="true"/>

        <!-- Displaying an image from App_Resources -->
        <Image row="1" backgroundColor="yellow" class="image" src="res://icon" stretch="none"/>
        <Label row="1" class="txtInfo pull-right" text="From App_Resource" textWrap="true"/>

        <!-- Displaying an image relative to the app directory -->
        <Image row="2" class="image" src="~/assets/images/ads/ads1.png" stretch="none"/>
        <Label row="2" class="txtInfo pull-right" text="Stretch: None" textWrap="true"/>

        <Image row="3" class="image" src="~/assets/images/ads/ads3.png" stretch="aspectFill"/>
        <Label row="3" class="txtInfo pull-right" text="Stretch: aspectFill" textWrap="true"/>

        <Image row="4" class="image" src="~/assets/images/ads/ads3.png" stretch="aspectFit"/>
        <Label row="4" class="txtInfo pull-right" text="Stretch: aspectFit" textWrap="true"/>

        <Image row="5" class="image" src="~/assets/images/ads/ads4.png" stretch="fill"/>
        <Label row="5" class="txtInfo pull-right" text="Stretch: fill" textWrap="true"/>
      </GridLayout>
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
.txtInfo {
  color: rgb(116, 112, 112);
  font-size: 16;
  margin: 18;
}
</style>
