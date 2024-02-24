<template>
  <div id="app">
    <h1>DNS Explorer</h1>
    <label for="urlInput">URL:</label>
    <input v-model="url" id="urlInput" type="text" placeholder="Enter URL" />
    <button @click="fetchDNS">Search</button>

    <div v-if="dnsResult">
      <h2>Results for {{ dnsResult.url }}</h2>
      <pre>{{ dnsResult }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      dnsResult: null,
    };
  },
  methods: {
    async fetchDNS() {
      try {
        const response = await this.$axios.post(`http://zahirdcg.fr/dns-explorer?url=${this.url}`);
        this.dnsResult = response.data.result;
      } catch (error) {
        console.error('Error fetching DNS data:', error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input, button {
  margin: 10px;
  padding: 5px;
}
</style>