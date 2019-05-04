<template>
  <Page>
    <ActionBar title="StackLayout" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <ScrollView>
      <StackLayout class="content inn" verticalAlignment="center" horizontalAlignment="center">
        <Label
          class="m-t-10"
          text="
<StackLayout> is a layout container that lets you stack the child elements vertically (default) or horizontally.
  "
          textWrap="true"
        />

        <StackLayout backgroundColor="#3c495e">
          <Label text="first" height="70" backgroundColor="#43b883"/>
          <Label text="second" height="70" backgroundColor="#289062"/>
          <Label text="third" height="70" backgroundColor="#1c6b48"/>
        </StackLayout>
        <StackLayout orientation="horizontal" backgroundColor="#3c495e">
          <Label text="first" width="70" backgroundColor="#43b883"/>
          <Label text="second" width="70" backgroundColor="#289062"/>
          <Label text="third" width="70" backgroundColor="#1c6b48"/>
        </StackLayout>
        <StackLayout backgroundColor="#3c495e">
          <Label
            text="left"
            horizontalAlignment="left"
            width="33%"
            height="70"
            backgroundColor="#43b883"
          />
          <Label
            text="center"
            horizontalAlignment="center"
            width="33%"
            height="70"
            backgroundColor="#289062"
          />
          <Label
            text="right"
            horizontalAlignment="right"
            width="33%"
            height="70"
            backgroundColor="#1c6b48"
          />
          <Label
            text="stretch"
            horizontalAlignment="stretch"
            height="70"
            backgroundColor="#43b883"
          />
        </StackLayout>
        <StackLayout orientation="horizontal" backgroundColor="#3c495e">
          <Label
            text="top"
            verticalAlignment="top"
            width="70"
            height="33%"
            backgroundColor="#43b883"
          />
          <Label
            text="center"
            verticalAlignment="center"
            width="70"
            height="33%"
            backgroundColor="#289062"
          />
          <Label
            text="bottom"
            verticalAlignment="bottom"
            width="70"
            height="33%"
            backgroundColor="#1c6b48"
          />
          <Label text="stretch" verticalAlignment="stretch" width="70" backgroundColor="#43b883"/>
        </StackLayout>
      </StackLayout>
    </ScrollView>
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
.inn > StackLayout {
  margin-top: 20;
  width: 250;
  height: 250;
}
</style>
