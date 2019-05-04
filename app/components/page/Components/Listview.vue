<template>
  <Page>
    <ActionBar title="ListView" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout class="content">
      <!-- Simple Listview -->
      <Label text="Simple ListView" textWrap="true"/>
      <ListView for="item in listOfData" @itemTap="onItemTap" class="list-group">
        <v-template>
          <StackLayout class="list-group-item">
            <Label :text="item.name"/>
          </StackLayout>
        </v-template>
      </ListView>

      <!-- Custom ListView -->
      <Label text="Custom ListView" class="m-t-25" textWrap="true"/>
      <ListView
        for="item in listOfData"
        @itemTap="onItemTap"
        separatorColor="transparent"
        class="list-group"
      >
        <v-template if="$index == 0">
          <StackLayout>
            <StackLayout class="header">
              <Image
                width="100%"
                height="100%"
                src="~/assets/images/ads/ads1.png"
                stretch="aspectFill"
              />
            </StackLayout>
            <StackLayout class="list-group-item">
              <Label :text="item.name"/>
            </StackLayout>
          </StackLayout>
        </v-template>
        <v-template>
          <StackLayout class="list-group-item" :class="$index % 2 === 0 ? 'even': 'odd' ">
            <Label :text="item.name"/>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script >
export default {
  computed: {
    footer() {
      return this.listOfData.length - 1;
    }
  },
  data() {
    return {
      listOfData: [
        { name: "Youtube" },
        { name: "Twitter" },
        { name: "Facebook" },
        { name: "Instagram" },
        { name: "Viber" },
        { name: "Skype" },
        { name: "WeChat" },
        { name: "Paymaya" },
        { name: "GCash" },
        { name: "WePay" },
        { name: "Google" },
        { name: "Messenger" },
        { name: "Yahoo Mail" },
        { name: "Dropbox" }
      ]
    };
  },
  methods: {
    checkFooter(index) {
      console.log(" check footer : " + index);
    },
    onItemTap(event) {
      alert(` Index: ${event.index}  , Item: ${event.item.name} `);
    }
  }
};
</script>

<style scoped>
ListView {
  height: 40%;
  background-color: white;
  margin-top: 5;
}

.header {
  height: 100;
  width: 100%;
}
.odd {
  background-color: rgba(255, 80, 226, 0.103);
}
.even {
  background-color: rgba(155, 85, 248, 0.363);
}
</style>
