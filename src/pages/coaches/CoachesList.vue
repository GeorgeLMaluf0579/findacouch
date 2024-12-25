<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter> 
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register a Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="c in filteredCoaches"
          :id="c.id"
          :firstName="c.firstName"
          :lastName="c.lastName"
          :areas="c.areas"
          :rate="c.hourlyRate"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        backend: true,
        frontend: true,
        career: true
      }
    }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter(c => {
        if (this.activeFilters.frontend && c.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && c.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && c.areas.includes('career')) {
          return true;
        }
        return false
      })
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      console.log(updatedFilters)
      this.activeFilters = updatedFilters
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
