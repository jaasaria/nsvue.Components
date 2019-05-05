<template>
  <Page actionBarHidden="true">
    <ActionBar title="Animated Background" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
    </ActionBar>

    <AbsoluteLayout @tap="$navigateBack()" width="100%" height="100%">
      <StackLayout width="100%" height="100%" id="background"></StackLayout>
      <Image
        src="~/assets/images/earth.png"
        opacity="0.25"
        width="350"
        height="350"
        :marginLeft="250"
        :marginTop="400"
        id="earth"
      />
      <FlexboxLayout
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100%"
        width="100%"
        id="app"
      >
        <Label color="white" text="tap anywhere to back" textWrap="true"/>
      </FlexboxLayout>
    </AbsoluteLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      value: false
    };
  }
};
</script>

<style scoped>
#app {
  z-index: 10;
}

#background {
  background: linear-gradient(-45deg, #ec7a2e, #f1680c);
  animation-name: circle;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes circle {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(10);
  }
}

#earth {
  z-index: 5;
  animation-name: bounceInOpacity;
  animation-duration: 1s;
  animation-delay: 0.5s;
}

@keyframes bounceInOpacity {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
