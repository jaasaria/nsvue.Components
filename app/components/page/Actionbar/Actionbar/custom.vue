<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <Image src="res://icon" width="40" height="40" verticalAlignment="center"/>
        <Label text="NativeScript" fontSize="24" verticalAlignment="center"/>
      </StackLayout>
    </ActionBar>

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
