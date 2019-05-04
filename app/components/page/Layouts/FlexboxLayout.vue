<template>
  <Page>
    <ActionBar title="FlexboxLayout" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <ScrollView>
      <StackLayout class="content" verticalAlignment="center" horizontalAlignment="center">
        <Label
          class="m-t-10"
          text="
<FlexboxLayout> is a layout container that provides a non-exact implementation of the CSS Flexbox layout. This layout lets you arrange child components both horizontally and vertically.
  "
          textWrap="true"
        />

        <FlexboxLayout backgroundColor="#3c495e">
          <Label text="first" width="70" backgroundColor="#43b883"/>
          <Label text="second" width="70" backgroundColor="#1c6b48"/>
          <Label text="third" width="70" backgroundColor="#289062"/>
        </FlexboxLayout>
        <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
          <Label text="first" height="70" backgroundColor="#43b883"/>
          <Label text="second" height="70" backgroundColor="#1c6b48"/>
          <Label text="third" height="70" backgroundColor="#289062"/>
        </FlexboxLayout>
        <FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
          <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
          <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
          <Label text="third" width="70" height="70" backgroundColor="#289062"/>
        </FlexboxLayout>
        <FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
          <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
          <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
          <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
        </FlexboxLayout>
        <FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
          <Label text="first" width="30%" backgroundColor="#43b883"/>
          <Label text="second" width="30%" backgroundColor="#1c6b48"/>
          <Label text="third" width="30%" backgroundColor="#289062"/>
          <Label text="fourth" width="30%" backgroundColor="#289062"/>
        </FlexboxLayout>
        <FlexboxLayout
          flexDirection="column-reverse"
          justifyContent="space-around"
          backgroundColor="#3c495e"
        >
          <Label text="first" height="70" backgroundColor="#43b883"/>
          <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48"/>
          <Label
            text="third\nflex-end"
            alignSelf="flex-end"
            width="70"
            height="70"
            backgroundColor="#289062"
          />
          <Label text="fourth" height="70" backgroundColor="#289062"/>
        </FlexboxLayout>
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
FlexboxLayout {
  margin-top: 20;
  width: 250;
  height: 250;
}
</style>
