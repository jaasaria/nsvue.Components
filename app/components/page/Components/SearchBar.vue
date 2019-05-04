<template>
  <Page class="bg">
    <ActionBar title="Search Bar" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <SearchBar
        backgroundColor="white"
        hint="Search hint"
        :text="searchPhrase"
        @textChange="onTextChanged"
        @submit="onSubmit"
      />
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    onSubmit() {
      alert("submit fired");
    }
  }
};
</script>


<style scoped>
SearchBar {
  margin-top: 20;
}
.bg {
  background-color: rgba(220, 20, 60, 0.534);
}
</style>
