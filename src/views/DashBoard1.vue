<template>
  <PageForm :datas="parentsdatas" :boardnum="parentsboardnum"></PageForm>
</template>

<script>
// eslint-disable-next-line no-unused-vars

import PageForm from '../components/PageForm.vue';

export default {
    data() {
        return {
          parentsdatas:[
                    {
                        writer:"writer_게시판1",
                        title:'title_게시판1',
                        date:'date_게시판1',
                    
                    },
                    {
                        writer:"writer2_게시판1",
                        title:'title2_게시판1',
                        date:'date2_게시판1',
                    
                    },
                    
                ],
          parentsboardnum:"게시판1"
        }
    },
    components: { PageForm }
}
</script>
  
  <style>
  @import "../assets/PageCss.css";
  </style>