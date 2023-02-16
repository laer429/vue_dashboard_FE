<template>
  <PageForm :datas="parentsdatas" :boardnum="parentsboardnum"></PageForm>
</template>

<script>
// eslint-disable-next-line no-unused-vars

import PageForm from '../components/PageForm.vue';

export default {
    data() {
      //parentsboardnum을 숫자로 하고 db 테이블에 게시판 id 만들어서 api 호출할때 데이터로 parentsboardnum을 넘겨준다
        return {
          // parentsdatas:[
          //           {
          //               writer:"writer_게시판1",
          //               title:'title_게시판1',
          //               date:'date_게시판1',
          //           },
          //           {
          //               writer:"writer2_게시판1",
          //               title:'title2_게시판1',
          //               date:'date2_게시판1',
          //           },
          //       ],
          parentsboardnum:"1",
          parentsdatas:{},
        }
    },
    methods: {
      fnGetList() {
        this.$axios.get(this.$serverUrl + 1).then((res) => {
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