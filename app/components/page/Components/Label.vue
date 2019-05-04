<template>
  <Page>
    <ActionBar title="Label" class="actionbar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
    </ActionBar>

    <StackLayout
      class="content"
      verticalAlignment="center"
      horizontalAlignment="center"
      height="100%"
    >
      <Label textWrap="true">
        <FormattedString>
          <Span text="This text has a "/>
          <Span text="red " style="color: red"/>
          <Span text="piece of text. "/>
          <Span text="Also, this bit is italic, " fontStyle="italic"/>
          <Span text="and this bit is bold." fontWeight="bold"/>
        </FormattedString>
      </Label>

      <!-- Wrap  -->
      <Label
        text="Sample of: Wrap=True:<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eab repellendus officia minima obcaecati modi praesentium culpa doloribus fugiat eius reiciendis, debitis laborum perferendis. Repellat debitis a obcaecati totam. In, aspernatur."
        textWrap="true"
      />
      <!-- Wrap False -->
      <Label
        text="Sample of: Wrap=False: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eab repellendus officia minima obcaecati modi praesentium culpa doloribus fugiat eius reiciendis, debitis laborum perferendis. Repellat debitis a obcaecati totam. In, aspernatur."
        textWrap="false"
      />

      <Label
        :text="'fa-heart' | fonticon"
        class="fa heart"
        horizontalAlignment="center"
        textWrap="true"
      />
      <Label
        class="fa heart"
        horizontalAlignment="center"
        textWrap="true"
      >Label with text and icon {{ 'fa-heart' | fonticon }}</Label>

      <StackLayout orientation="horizontal" horizontalAlignment="center" verticalAlignment="center">
        <Label text="Click Me" class="fa lblbutton" @tap="isHeart = !isHeart" textWrap="true"/>

        <Label
          class="fa lblbutton"
          :class="[isHeart ? 'like-active' : 'default']"
          :text="isHeart ? 'fa-thumbs-up':'fa-thumbs-o-up' | fonticon"
          @tap="isHeart = !isHeart"
        />
        <Label
          class="fa lblbutton"
          :class="[isHeart ? 'heart-active' : 'default']"
          :text="isHeart ? 'fa-heart':'fa-heart-o' | fonticon"
          @tap="isHeart = !isHeart"
        />
        <Label
          class="fa lblbutton"
          :class="[isHeart ? 'comment-active' : 'default']"
          :text="isHeart ? 'fa-comment':'fa-comment-o' | fonticon"
          @tap="isHeart = !isHeart"
        />
        <Label
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
  }
};
</script>

<style scoped>
.heart {
  font-size: 25;
}

label {
  margin-top: 20;
}
.lblbutton {
  padding: 20;
  font-size: 20;
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
