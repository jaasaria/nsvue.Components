<template>
  <Page>
    <ActionBar title="TextView" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <ActionItem android.position="actionBar" ios.position="right"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <TextView hint :text="lorem" editable="true"/>

      <TextView editable="false">
        <FormattedString>
          <Span text="You can use text attributes such as "/>
          <Span text="bold, " fontWeight="Bold"/>
          <Span text="italic " fontStyle="Italic"/>
          <Span text="and "/>
          <Span text="underline." textDecoration="Underline"/>
        </FormattedString>
      </TextView>

      <TextView :text="lorem" editable="false"/>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit quis veniam, distinctio est rerum corporis error debitis pariatur molestias ipsum totam nemo ipsa nostrum minima, odio libero omnis quasi?"
    };
  },
  methods: {}
};
</script>

<style scoped>
TextView {
  margin-top: 30;
}
</style>
