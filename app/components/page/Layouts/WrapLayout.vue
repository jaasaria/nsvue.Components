<template>
  <Page>
    <ActionBar title="WrapLayout" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <ScrollView>
      <StackLayout class="content" verticalAlignment="center" horizontalAlignment="center">
        <Label
          class="m-t-10"
          text="
<WrapLayout> is a layout container that lets you position items in rows or columns, based on the orientation property. When the space is filled, the container automatically wraps items onto a new row or column.
  "
          textWrap="true"
        />

        <WrapLayout backgroundColor="#3c495e">
          <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
          <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
          <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
          <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
        </WrapLayout>

        <WrapLayout orientation="vertical" backgroundColor="#3c495e">
          <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
          <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
          <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
          <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
        </WrapLayout>
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
WrapLayout {
  margin-top: 20;
  width: 250;
  height: 250;
}
</style>
