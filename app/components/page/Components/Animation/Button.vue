<template>
  <Page>
    <ActionBar title="Animated Button" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
    </ActionBar>

    <!-- https://docs.nativescript.org/ui/animation -->
    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button
        ref="favorite"
        class="fa lblbutton"
        :class="[isLike ? 'like-active' : 'default']"
        :text="isLike ? 'fa-thumbs-up':'fa-thumbs-o-up' | fonticon"
        @tap="animateButton"
      />
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      isLike: false
    };
  },
  methods: {
    animateButton() {
      this.isLike = !this.isLike;

      let imgLogo = this.$refs.favorite.nativeView;
      imgLogo
        .animate({
          scale: {
            x: 0.6,
            y: 0.6
          },
          duration: 50,
          delay: 0
        })
        .then(function() {
          return imgLogo.animate({
            scale: {
              x: 1.2,
              y: 1.2,
              duration: 50
            }
          });
        })
        .then(function() {
          return imgLogo.animate({
            scale: {
              x: 1,
              y: 1,
              duration: 100
            }
          });
        })
        .then(function() {});
    }
  }
};
</script>

<style scoped>
button {
  text-transform: none;
  border-color: transparent;
  border-width: 1;
  font-size: 30;
}
.heart {
  font-size: 25;
}
.like-active {
  color: #0b68e0;
}
.default {
  color: #828282;
}
</style>
