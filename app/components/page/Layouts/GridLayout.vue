<template>
  <Page>
    <ActionBar title="GridLayout" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <ScrollView>
      <StackLayout class="content" verticalAlignment="center" horizontalAlignment="center">
        <Label
          class="m-t-10"
          text="

<GridLayout> is a layout container that lets you arrange its child elements in a table-like manner.

The grid consists of rows, columns, and cells. A cell can span one or more rows and one or more columns. It can contain multiple child elements which can span over multiple rows and columns, and even overlap each other.

By default, <GridLayout> has one column and one row. You can add columns and rows by configuring the columns and the rows properties. In these properties, you need to set the number of columns and rows and their width and height. You set the number of columns by listing their widths, separated by a comma. You set the number of rows by listing their heights, separated by a comma.

You can set a fixed size for column width and row height or you can create them in a responsive manner:

An absolute number: Indicates a fixed size.
auto: Makes the column as wide as its widest child or makes the row as tall as its tallest child.
*: Takes as much space as available after filling all auto and fixed size columns or rows.


  "
          textWrap="true"
        />

        <GridLayout columns="115, 115" rows="115, 115">
          <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
          <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
          <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
          <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
        </GridLayout>

        <GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
          <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
          <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
          <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
          <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
        </GridLayout>
        <GridLayout columns="80, auto" rows="80, 80" backgroundColor="#3c495e">
          <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
          <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
          <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
          <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
        </GridLayout>
        <GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
          <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
          <Label text="0,1" row="0" col="1" colspan="2" backgroundColor="#1c6b48"/>
          <Label text="1,0" row="1" col="0" rowspan="2" backgroundColor="#289062"/>
          <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
          <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
          <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
          <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
        </GridLayout>
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
GridLayout {
  margin-top: 20;
  width: 250;
  height: 250;
}
</style>
