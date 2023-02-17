<template>
  <PageForm :datas="parentsdatas" :boardnum="parentsboardnum" :dashboardtype="dashboardtype"></PageForm>
</template>

<script lang="js">
// eslint-disable-next-line no-unused-vars

import PageForm from '../components/PageForm.vue';
export default {
  data() {
      //parentsboardnum을 숫자로 하고 db 테이블에 게시판 id 만들어서 api 호출할때 데이터로 parentsboardnum을 넘겨준다
        return {
          parentsboardnum:"3",
          dashboardtype:"농구 게시판",
          parentsdatas:{}
        }
    },
    methods: {
      fnGetList() {
        this.$axios.get(this.$serverUrl + 3).then((res) => {
          this.parentsdatas = res.data
        }).catch((err) => {
          if (err.message.indexOf('Network Error') >-1) {
            alert('네트워크 오류')
          }
        })
      }
    },
    mounted() {
      this.fnGetList()

    },
    components: { PageForm }
}
</script>
  
  <style>
  @import "../assets/PageCss.css";
  </style>