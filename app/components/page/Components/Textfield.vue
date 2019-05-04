<template>
  <Page class="bg">
    <ActionBar title="Textfield" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout class="content" backgroundColor="red">
      <StackLayout
        verticalAlignment="center"
        horizontalAlignment="center"
        width="100%"
        height="100%"
        backgroundColor="white"
      >
        <StackLayout class="content">
          <TextField hint="Default textfield" text/>

          <TextField class="with-style" hint="With styling textfield"/>

          <TextField secure="true" v-model="textFieldValue"/>

          <Label class="m-t-20" :text="textFieldValue" textWrap="true"/>
          <TextField v-model="textFieldValue"/>

          <TextField
            hint="With event textfield"
            @textChange="event('text change')"
            @returnPress="event('return press')"
            @focus="event('focus')"
            @blur="event('blur')"
          />
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      textFieldValue: "Default textfield value"
    };
  },
  methods: {
    event(event) {
      alert(event);
    }
  }
};
</script>

<style scoped>
TextField {
  margin-top: 20;
}
.with-style {
  color: #527796;
  border-width: 1;
  border-radius: 4;
  border-color: #c4c0c0;
  background-color: #f1efef;
  placeholder-color: rgba(16, 50, 65, 0.45);
  vertical-align: middle;
}
.bg {
  background-color: rgb(223, 222, 224);
}
</style>
