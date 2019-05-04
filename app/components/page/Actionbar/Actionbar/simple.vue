<template>
  <Page>
    <ActionBar title="Action Bar"/>

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
