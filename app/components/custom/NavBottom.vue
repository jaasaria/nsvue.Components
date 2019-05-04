<template>
  <GridLayout class="navBottom" height="50" width="100%" rows="auto" columns="auto,auto,auto,auto,auto">

	
    <GridLayout @tap="feed('You press Feed')" :class="selectedTab==0?'active':''" rows="*"  class="nav" col="0" row="0" width="20%">
  	  <Image :class="selectedTab==0?'active':''" row="0" class="navIcon" :src="selectedTab==0?'~/assets/images/feeds2.png':'~/assets/images/feeds.png'"/>  
    </GridLayout>

    <GridLayout @tap="videos('You press Videos')" :class="selectedTab==1?'active':''"  rows="*,auto"  class="nav" col="1" row="0" width="20%">
      <Image :class="selectedTab==1?'active':''" row="0" class="navIcon" 
			:src="selectedTab==1?'~/assets/images/videos2.png':'~/assets/images/videos.png'"/>    
    </GridLayout>


		<GridLayout @tap="groups('You press Group')" :class="selectedTab==2?'active':''" rows="*,auto"  class="nav" col="2" row="0" width="20%">
      <Image :class="selectedTab==2?'active':''" row="0" class="navIcon" 
			:src="selectedTab==2?'~/assets/images/groups2.png':'~/assets/images/groups.png'" />   
    </GridLayout>

    <GridLayout  @tap="notif('You press Notification')" :class="selectedTab==3?'active':''"  rows="*,auto"  class="nav" col="3" row="0" width="20%">
      <Image :class="selectedTab==3?'active':''" row="0" class="navIcon" :src="selectedTab==3?'~/assets/images/notif2.png':'~/assets/images/notif.png'" />     
    </GridLayout>

		
		<GridLayout @tap="others('You press Settings')" :class="selectedTab==4?'active':''" rows="*,auto"  class="nav" col="4" row="0" width="20%">
      <Image :class="selectedTab==4?'active':''" row="0" class="navIcon" 
			:src="selectedTab==4?'~/assets/images/others2.png':'~/assets/images/others.png'" />   
    </GridLayout>

  </GridLayout>
</template>

<script>
import { toast }  from '@/helper'

export default {
  data () {
    return {
      selectedTab: 0
    };
  },
  methods: {
		press(message) { 
			toast(message)
		},
    feed (m) {
			this.selectedTab = 0;
			this.press(m)
    },
    videos (m) {
			this.selectedTab = 1;
			this.press(m)
    },
    groups (m) {
			this.selectedTab = 2;
			this.press(m)
    },
    notif (m) {
			this.selectedTab = 3;
			this.press(m)
    },
    others (m) {
			this.selectedTab = 4;
			this.press(m)
    }
  }
};
</script>

<style>
 
.nav {
  height: 100%;
  width: 100%;
}

.nav.active {
  background-color: #0dc43776;
}

.navIcon {
  horizontal-align: center;
  vertical-align: center;
  height: 20;
}

</style>