<template>
  <Page>
    <ActionBar title="Button" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Button text="Simple Button" @tap="Press('Message')"/>
      <Button isEnabled="false" text="isEnabled False Button" @tap="Press('Message')"/>
      <Button text="With style Button" class="btn btn-primary" @tap="Press('Message')"/>
      <Button text="Transparent Button" class="trans" @tap="Press('Message')"/>
      <Button text="Lower Case Button" class="lowercase" @tap="Press('Message')"/>
      <Button
        class="fa lowercase"
        @tap="Press('Message')"
      >With text and icon {{ 'fa-heart' | fonticon }} here</Button>

      <StackLayout orientation="horizontal" horizontalAlignment="center" verticalAlignment="center">
        <Button
          class="fa lblbutton"
          :class="[isHeart ? 'like-active' : 'default']"
          :text="isHeart ? 'fa-thumbs-up':'fa-thumbs-o-up' | fonticon"
          @tap="isHeart = !isHeart"
        />
        <Button
          class="fa lblbutton"
          :class="[isHeart ? 'heart-active' : 'default']"
          :text="isHeart ? 'fa-heart':'fa-heart-o' | fonticon"
          @tap="isHeart = !isHeart"
        />
        <Button
          class="fa lblbutton"
          :class="[isHeart ? 'comment-active' : 'default']"
          :text="isHeart ? 'fa-comment':'fa-comment-o' | fonticon"
          @tap="isHeart = !isHeart"
        />
        <Button
          class="fa lblbutton"
          :class="[isHeart ? 'share-active' : 'default']"
          :text="isHeart ? 'fa-share-square':'fa-share-square-o' | fonticon"
          @tap="isHeart = !isHeart"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  data() {
    return {
      isHeart: false
    };
  },
  methods: {
    Press(message) {
      alert("Did you press me?").then(() => {
        console.log("Alert dialog closed.");
      });
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 20;
}
.lowercase {
  text-transform: none;
}

.trans {
  border-color: transparent;
  border-width: 1;
}

.lblbutton {
  padding: 20;
  font-size: 20;
  border-color: transparent;
  border-width: 1;
}

.like-active {
  color: #5714f3;
}
.heart-active {
  color: #b51213;
}
.comment-active {
  color: #f5e509;
}
.share-active {
  color: #fd0d99;
}
.default {
  color: #828282;
}
</style>
