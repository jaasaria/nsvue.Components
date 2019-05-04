<template>
  <StackLayout>
    <GridLayout class="bg" width="100%" rows="auto,auto" columns="*">
      <!-- Whats on your mind -->
      <GridLayout
        height="60"
        @tap="press('You press Compose')"
        row="0"
        col="0"
        rows="*"
        columns="auto,*"
        width="100%"
      >
        <Image
          class="profile center-v"
          stretch="aspectFill"
          src="~/assets/images/friends/profile1.jpg"
          col="0"
          row="0"
        />
        <Label
          class="profile-text center-v"
          horizontalAlignment="left"
          text="What's on your mind?"
          textWrap="true"
          col="1"
          row="0"
        />
      </GridLayout>

      <!-- Utils -->
      <GridLayout marginTop="5" row="1" col="0" rows="auto" columns="auto,*,auto">
        <StackLayout
          @tap="press('You press Live')"
          class="center-h"
          row="0"
          col="0"
          width="33%"
          orientation="horizontal"
        >
          <Image class="image-util" src="~/assets/images/live.png"/>
          <Label text="Live" class="util-text" textWrap="true"/>
        </StackLayout>
        <StackLayout
          @tap="press('You press Photo')"
          class="center-h"
          row="0"
          col="1"
          width="34%"
          orientation="horizontal"
        >
          <Image class="image-util" src="~/assets/images/photo.png"/>
          <Label text="Photo" class="util-text" textWrap="true"/>
        </StackLayout>
        <StackLayout
          @tap="press('You press Check In')"
          class="center-h"
          row="0"
          col="2"
          width="33%"
          orientation="horizontal"
        >
          <Image class="image-util" src="~/assets/images/checkin.png"/>
          <Label text="Check In" class="util-text" textWrap="true"/>
        </StackLayout>
      </GridLayout>
    </GridLayout>
    <StackLayout marginTop="10" class="line-card"/>

    <!-- Stories and Archive -->
    <GridLayout
      marginBottom="10"
      marginTop="10"
      marginLeft="5"
      marginRight="5"
      row="0"
      col="0"
      rows="auto"
      columns="auto,*,auto"
    >
      <Label @tap="press('You press Stories')" text="Stories" textWrap="true" col="0"/>
      <Label
        @tap="press('You press Archive')"
        marginRight="5"
        text="See Archive"
        textWrap="true"
        col="1"
        horizontalAlignment="right"
      />
      <Label
        :text="'fa-arrow-right' | fonticon"
        class="fa"
        textWrap="true"
        col="2"
        horizontalAlignment="right"
      />
    </GridLayout>

    <!-- Friends -->
    <ScrollView class orientation="horizontal">
      <StackLayout orientation="horizontal" class>
        <GridLayout v-for="(image , index) in listFriends" :key="index" rows="auto" columns="*">
          <Image
            @tap="press(image.name)"
            class="friend-thumb"
            row="0"
            col="0"
            :src="image.picture"
            stretch="aspectFill"
          />
        </GridLayout>
      </StackLayout>
    </ScrollView>
    <StackLayout marginTop="10" class="line-card"/>

    <!-- Cards -->
    <ListView ref="listview" separatorColor="transparent" for="item in listAds" :key="index">
      <v-template>
        <StackLayout>
          <GridLayout marginTop="10" rows="auto, auto" columns="auto,auto">
            <Image
              class="profile"
              stretch="aspectFill"
              src="~/assets/images/friends/profile1.jpg"
              col="0"
              rowspan="2"
            />
            <Label :text="item.group" class="card-title" row="0" col="1"/>
            <Label :text="item.date" class="card-date" row="1" col="1"/>
          </GridLayout>

          <GridLayout rows="auto, auto " columns="auto,auto">
            <Label :text="item.title" marginLeft="10" marginTop="10" marginRight="10" row="0"/>
            <Image
              @tap="press(item.title)"
              class="card-picture"
              stretch="aspectFill"
              :src="item.picture"
              row="1"
            />
          </GridLayout>
        </StackLayout>
      </v-template>
    </ListView>

    <!-- </ScrollView> -->
  </StackLayout>
</template>

<script>
import { friends } from "@/api/friends";
import { ads } from "@/api/ads";
import { toast } from "@/helper";

// const friend_list = new friends();
export default {
  mounted() {},
  data() {
    return {
      listFriends: friends,
      listAds: ads
    };
  },
  methods: {
    press(message) {
      toast(message);
    }
  }
};
</script>

<style scoped>
.card-picture {
  width: 100%;
  height: 200;
  margin-top: 10;
}

.stories-picture {
  width: 25%;
  height: 35%;
}

.profile {
  border-width: 1;
  border-color: white;
  background-color: green;
  border-radius: 50%;
  margin-right: 15;
  margin-left: 10;
  width: 40;
  height: 40;
}
.card-profile {
  border-width: 1;
  border-color: white;
  background-color: green;
  border-radius: 50%;
  margin-right: 15;
  margin-left: 10;
  width: 40;
  height: 40;
}

.profile-text {
  font-size: 18;
}

.center-all {
  vertical-align: center;
  horizontal-align: center;
}
.center-v {
  vertical-align: center;
}
.center-h {
  horizontal-align: center;
}

.image-util {
  height: 18;
  horizontal-align: center;
  margin-right: 3;
}

.friend-thumb {
  background-color: #828282;
  vertical-align: center;
  border-radius: 5;
  width: 110;
  height: 150;
  margin-left: 5;
}

.card-title {
  font-weight: bold;
}
.card-date {
  font-size: 12;
}
</style>