<template>
  <Page>
    <ActionBar title="My App" android.icon="res://icon" android.iconVisibility="always"/>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Back" @tap="$navigateBack()"/>
    </StackLayout>
  </Page>
</template>

<script >
export default {
  data() {
    return {
      value: "default"
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
