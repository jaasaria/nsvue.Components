<template>
  <Page>
    <ActionBar title="Page Transistion" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Explode" @tap="press1"/>
      <Button text="Fade" @tap="press2"/>
      <Button text="Flip" @tap="press3"/>
      <Button text="Slide" @tap="press4"/>
    </StackLayout>
  </Page>
</template>


<script >
import PageTransistionPage from "./PageTransistionPage";

export default {
  data() {
    return {
      value: ""
    };
  },
  // Curve: ease,easeIn,easeInOut,easeOut,linear,spring
  // Name:
  // curl (same as curlUp) (iOS only)
  // curlUp (iOS only)
  // curlDown (iOS only)
  // explode (Android Lollipop(21) and up only)
  // fade
  // flip (same as flipRight)
  // flipRight
  // flipLeft
  // slide (same as slideLeft)
  // slideLeft
  // slideRight
  // slideTop
  // slideBottom
  methods: {
    press1() {
      this.$navigateTo(PageTransistionPage, {
        animated: true,
        transition: {
          name: "explode",
          duration: 600,
          curve: "linear"
        },
        props: {
          value: "explode"
        }
      });
    },
    press2() {
      this.$navigateTo(PageTransistionPage, {
        animated: true,
        transition: {
          name: "fade",
          duration: 600,
          curve: "linear"
        },
        props: {
          value: "fade"
        }
      });
    },
    press3() {
      this.$navigateTo(PageTransistionPage, {
        animated: true,
        transition: {
          name: "flip",
          duration: 600,
          curve: "linear"
        },
        props: {
          value: "flip"
        }
      });
    },
    press4() {
      this.$navigateTo(PageTransistionPage, {
        animated: true,
        transition: {
          name: "slide",
          duration: 600,
          curve: "linear"
        },
        props: {
          value: "slide"
        }
      });
    }
  }
};
</script>


<style scoped>
button {
  margin-top: 20;
}
</style>
