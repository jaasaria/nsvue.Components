<template>
  <Page>
    <ActionBar title="Home" icon/>>
    <StackLayout class="content">
      <ListView for="item in list" height="100%" class="list-group">
        <v-template>
          <GridLayout @tap="item.click" rows="auto" columns="*, auto" class="list-group-item">
            <Label :text="item.name" row="0" col="0"/>
            <!-- <Button text="Test Me" @tap="item.click" row="0" col="1"/> -->
          </GridLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>


<script >
import Routing from "./Routing/Routing";
import PageTransistion from "./Routing/PageTransistion";

import Label from "./Components/Label";
import Button from "./Components/Button";
import Image from "./Components/Image";
import Textfield from "./Components/Textfield";
import Listview from "./Components/Listview";
import Switch from "./Components/Switch";
import Textview from "./Components/Textview";
import ActivityIndicator from "./Components/ActivityIndicator";
import Scrollview from "./Components/Scrollview";
import SearchBar from "./Components/SearchBar";
import SegmentedBar from "./Components/SegmentedBar";
import Progress from "./Components/Progress";
import Slider from "./Components/Slider";
import Tabview from "./Components/Tabview";
import DatePicker from "./Components/DatePicker";
import TimePicker from "./Components/TimePicker";
import ListPicker from "./Components/ListPicker";
import Sounds from "./Components/Sounds";

import Page from "./Actionbar/Page";
import ActionBar from "./Actionbar/ActionBar";
import NavigationButton from "./Actionbar/NavigationButton";

import ActionDialog from "./Dialog/ActionDialog";
import AlertDialog from "./Dialog/AlertDialog";
import ConfirmDialog from "./Dialog/ConfirmDialog";
import LoginDialog from "./Dialog/LoginDialog";
import PrompDialog from "./Dialog/PrompDialog";

import AbsoluteLayout from "./Layouts/AbsoluteLayout";
import DockLayout from "./Layouts/DockLayout";
import FlexboxLayout from "./Layouts/FlexboxLayout";
import GridLayout from "./Layouts/GridLayout";
import StackLayout from "./Layouts/StackLayout";
import WrapLayout from "./Layouts/WrapLayout";

export default {
  components: {},
  data() {
    return {
      list: [
        // Components
        { name: "Label", click: () => this.$navigateTo(Label) },
        { name: "Button", click: () => this.$navigateTo(Button) },
        { name: "Image", click: () => this.$navigateTo(Image) },
        { name: "Textfield ", click: () => this.$navigateTo(Textfield) },
        { name: "Listview ", click: () => this.$navigateTo(Listview) },
        { name: "Switch ", click: () => this.$navigateTo(Switch) },
        { name: "Textview ", click: () => this.$navigateTo(Textview) },
        {
          name: "ActivityIndicator ",
          click: () => this.$navigateTo(ActivityIndicator)
        },
        { name: "Scrollview ", click: () => this.$navigateTo(Scrollview) },
        { name: "Search Bar ", click: () => this.$navigateTo(SearchBar) },
        { name: "Segmented Bar ", click: () => this.$navigateTo(SegmentedBar) },
        { name: "Tabview ", click: () => this.$navigateTo(Tabview) },
        { name: "Progress ", click: () => this.$navigateTo(Progress) },
        { name: "Slider ", click: () => this.$navigateTo(Slider) },
        { name: "Datepicker", click: () => this.$navigateTo(DatePicker) },
        { name: "Timepicker ", click: () => this.$navigateTo(TimePicker) },
        { name: "ListPicker", click: () => this.$navigateTo(ListPicker) },
        {
          name: "Appliying Sounds",
          click: () => this.$navigateTo(Sounds)
        },
        {
          name: "Animation ",
          click: () => this.$navigateTo(Sounds)
        },

        // Actionbar
        { name: "Page ", click: () => this.$navigateTo(Page) },
        { name: "Actionbar ", click: () => this.$navigateTo(ActionBar) },
        {
          name: "Navigation Button",
          click: () => this.$navigateTo(NavigationButton)
        },

        // Routing
        {
          name: "Route",
          click: () => this.$navigateTo(Routing)
        },
        {
          name: "Route with Data",
          click: () => this.routeWithData("Success: This is the route value")
        },
        {
          name: "Page Transistion ",
          click: () => this.$navigateTo(PageTransistion)
        },

        // Dialog
        { name: "Action Dialog ", click: () => this.$navigateTo(ActionDialog) },
        { name: "Alert Dialog ", click: () => this.$navigateTo(AlertDialog) },
        {
          name: "Confirm Dialog ",
          click: () => this.$navigateTo(ConfirmDialog)
        },
        { name: "Login Dialog ", click: () => this.$navigateTo(LoginDialog) },
        { name: "Promp Dialog ", click: () => this.$navigateTo(PrompDialog) },

        {
          name: "Absolute Layout ",
          click: () => this.$navigateTo(AbsoluteLayout)
        },
        { name: "Dock Layout", click: () => this.$navigateTo(DockLayout) },
        { name: "Flex Layout", click: () => this.$navigateTo(FlexboxLayout) },
        { name: "Grid Layout", click: () => this.$navigateTo(GridLayout) },
        { name: "Stack Layout", click: () => this.$navigateTo(StackLayout) },
        { name: "Wrap Layout ", click: () => this.$navigateTo(WrapLayout) }
      ]
    };
  },
  methods: {
    routeWithData(value) {
      this.$navigateTo(Routing, {
        props: {
          value
        }
      });
    },
    onItemTap(item) {
      console.log("item tap" + item.name);
    }
  }
};
</script>

<style scoped>
</style>
