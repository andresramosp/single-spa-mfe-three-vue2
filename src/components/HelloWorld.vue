<template>
  <div>
    <div class="login-info">
      <div class="logged" v-if="logged">Logged in with token {{ token }}</div>
      <div class="not-logged" v-else>Not Logged</div>
    </div>
    <l-map v-if="logged" style="height: 300px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { auth$ } from "org/auth";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
      logged: false,
      user: '',
      token: ''
    };
  },
  created() {
     auth$.subscribe((payload) => {
      this.token = payload.sessionToken;
      this.user = payload.user;
      this.logged = payload.sessionToken !== null;
    });

  }
};
</script>
<style scoped>
.not-logged {
  background-color: pink;
  width: 100px;
}
.logged {
  background-color: greenyellow;
  width: 250px;
}
</style>