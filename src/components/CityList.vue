<template>
  <div v-for="city in savedCities" :key="city.id" class="text-white">
    <CityCard :city="city" @click="goToCityView(city)" />
  </div>
  <p v-if="savedCities.length === 0">
    No locations added. To start tracking a location, search in the field above.
  </p>
</template>

<script setup>
import CityCard from "./CityCard.vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const savedCities = ref([]);
const router = useRouter();
const getCities = async () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
  }

  const requests = [];
  savedCities.value.forEach((city) => {
    requests.push(
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          city.coords.lat
        }&lon=${city.coords.lng}&exclude={part}&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API_KEY
        }c&units=metric`
      )
    );
  });

  const weatherData = await Promise.all(requests);

  // Flicker Delay
  await new Promise((res) => setTimeout(res, 500));

  weatherData.forEach((value, index) => {
    savedCities.value[index].weather = value.data;
  });
};

const goToCityView = (city) => {
  router.push({
    name: "city",
    params: {
      city: city.city,
      state: city.state,
    },
    query: {
      id: city.id,
      lat: city.coords.lat,
      lng: city.coords.lng,
    },
  });
};

await getCities();
</script>
