<template>
  <GridLayout class="bg" height="50" width="100%" rows="auto" columns="auto,*,auto">
    <GridLayout @tap="press('You press Camera')" rows="*" class="nav" col="0" row="0" width="15%">
      <Image row="0" class="navIcon" src="~/assets/images/camera.png"/>
    </GridLayout>

    <GridLayout @tap="feed" rows="auto" columns="auto,*" class="nav" col="1" row="0">
      <Label
        class="fa search"
        row="0"
        col="0"
        verticalAlignment="center"
        horizontalAlignment="left"
        :text="'fa-search'  | fonticon"
      />
      <Textfield
        row="0"
        col="1"
        class="search"
        verticalAlignment="center"
        horizontalAlignment="left"
        width="100%"
        hint="Search"
      />
    </GridLayout>

    <GridLayout
      @tap="press('You press Messenger')"
      rows="*"
      class="nav"
      col="2"
      row="0"
      width="15%"
    >
      <Image row="0" class="navIcon" src="~/assets/images/messenger.png"/>
    </GridLayout>
  </GridLayout>
</template>

<script>
import { toast } from "@/helper";

export default {
  data() {
    return {
      selectedTab: 0
    };
  },
  methods: {
    feed() {
      this.selectedTab = 0;
    },
    videos() {
      this.selectedTab = 1;
    },
    groups() {
      this.selectedTab = 2;
    },
    notif() {
      this.selectedTab = 3;
    },
    others() {
      this.selectedTab = 4;
    },
    press(message) {
      toast(message);
    }
  }
};
</script>

<style scoped>
.bg {
  background-color: #4167b2;
}

.nav {
  height: 100%;
  width: 100%;
}

.nav.active {
  background-color: #0dc43776;
}

.navIcon {
  horizontal-align: center;
  vertical-align: center;
  height: 23;
}

.search {
  color: white;
  placeholder-color: white;
}
</style>