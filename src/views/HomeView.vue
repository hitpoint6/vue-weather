<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        placeholder="Search for a city or state"
        v-model="searchQuery"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        @input="getSearchResults"
      />
      <ul
        class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
        v-if="searchResults"
      >
        <li
          v-for="res in searchResults"
          :key="res.id"
          class="py-2 cursor-pointer"
          @click="handleCityView(res)"
        >
          {{ res.place_name }}
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-4">
      <Suspense>
        <CityList />
        <template #fallback>
          <CityCardSkeleton />
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import CityList from "../components/CityList.vue";
import CityCardSkeleton from "../components/CityCardSkeleton.vue";

const mapboxAPIKey = import.meta.env.VITE_MAPBOX_API_KEY;
const searchQuery = ref("");
const timeout = ref(null);
const searchResults = ref(null);
const router = useRouter();

const handleCityView = (searchResult) => {
  const [city, state] = searchResult.place_name.split(",");
  router.push({
    name: "city",
    params: {
      city: city,
      state: state.replaceAll(" ", ""),
    },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  });
};

const getSearchResults = () => {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(async () => {
    if (searchQuery.value === "") return;

    try {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
      );

      searchResults.value = res.data.features;
    } catch (error) {
      console.log(error);
    }
  }, 1000);
};
</script>
