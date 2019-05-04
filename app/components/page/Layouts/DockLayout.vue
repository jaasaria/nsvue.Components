<template>
  <Page>
    <ActionBar title="DockLayout" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <ScrollView>
      <StackLayout class="content" verticalAlignment="center" horizontalAlignment="center">
        <Label
          class="m-t-10"
          text="
<DockLayout> is a layout container that lets you dock child elements to the sides or the center of the layout.

<DockLayout> has the following behavior:

Uses the dock property to dock its children to the left, right, top, bottom or center of the layout.
To dock a child element to the center, it must be the last child of the container and you must set the stretchLastChild property of the parent to true.
Enforces layout constraints to its children.
Resizes its children at runtime when its size changes.
  "
          textWrap="true"
        />

        <!-- dock: top, right, bottom, or left -->
        <DockLayout stretchLastChild="false" backgroundColor="#3c495e">
          <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
          <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
          <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
          <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
        </DockLayout>

        <DockLayout stretchLastChild="true" backgroundColor="#3c495e">
          <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
          <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
          <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
          <Label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
        </DockLayout>

        <DockLayout stretchLastChild="true" backgroundColor="#3c495e">
          <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
          <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
          <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
          <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
          <Label text="center" backgroundColor="#1c6b48"/>
        </DockLayout>

        <DockLayout stretchLastChild="true" backgroundColor="#3c495e">
          <Label text="left 1" dock="left" width="40" backgroundColor="#43b883"/>
          <Label text="left 2" dock="left" width="40" backgroundColor="#289062"/>
          <Label text="left 3" dock="left" width="40" backgroundColor="#1c6b48"/>
          <Label text="last child" backgroundColor="#43b883"/>
        </DockLayout>
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
DockLayout {
  margin-top: 20;
  width: 250;
  height: 250;
}
</style>
