<template>
  <Page>
    <ActionBar title="AbsoluteLayout" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Label
        class="m-t-10"
        text="
  The <AbsoluteLayout> container is the simplest layout container in NativeScript.
  <AbsoluteLayout> has the following behavior:
  Uses a pair of absolute left/top coordinates to position its children.
  Doesn't enforce any layout constraints on its children.
  Doesn't resize its children at runtime when its size changes.
  "
        textWrap="true"
      />

      <AbsoluteLayout width="250" height="250" backgroundColor="#3c495e">
        <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
        <Label
          text="120,10"
          left="120"
          top="10"
          width="100"
          height="100"
          backgroundColor="#43b883"
        />
        <Label
          text="10,120"
          left="10"
          top="120"
          width="100"
          height="100"
          backgroundColor="#43b883"
        />
        <Label
          text="120,120"
          left="120"
          top="120"
          width="100"
          height="100"
          backgroundColor="#43b883"
        />
      </AbsoluteLayout>
      <!-- top, left -->
      <AbsoluteLayout width="250" height="250" backgroundColor="#3c424d">
        <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
        <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
      </AbsoluteLayout>
    </StackLayout>
  </Page>
</template>


<script >
var setTimer;
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    press() {}
  }
};
</script>


<style scoped>
AbsoluteLayout {
  margin-top: 20;
}

.test {
  background-color: #3c424d;
}
</style>
