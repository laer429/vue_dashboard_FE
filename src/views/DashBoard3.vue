<template>
  <PageForm :datas="parentsdatas" :boardnum="parentsboardnum"></PageForm>
</template>

<script lang="js">
// eslint-disable-next-line no-unused-vars

import PageForm from '../components/PageForm.vue';
export default {
    data() {
      return {
          parentsdatas:[
                    {
                        writer:"writer_게시판3",
                        title:'title_게시판3',
                        date:'date_게시판3',
                    
                    },
                    {
                        writer:"writer2_게시판3",
                        title:'title2_게시판3',
                        date:'date2_게시판3',
                    
                    },
                    
                ],
          parentsboardnum:"게시판3"
        }
    },
    components: { PageForm }
}
</script>
  
  <style>
  @import "../assets/PageCss.css";
  </style>