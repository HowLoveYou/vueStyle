<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import pdf from 'vue-pdf';
export default {
  name: 'home',
  components: {
    pdf,
  },
  data() {
    return {
      previewUrl:
        'https://js-dev.sany.com.cn/file-server/cadre/08efc9ddec642367bc9bd638ce373a9c/f94a4c94-899f-4169-a968-7b202c4a05da.pdf',
      numPages: 0,
    };
  },
  mounted() {
    let loadingTask = pdf.createLoadingTask(this.previewUrl);
    loadingTask.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
  methods: {},
};
</script>
