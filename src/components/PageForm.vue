<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <section class="notice">
      <div class="page-title">
            <div class="container">
                <h3>{{ boardnum }}</h3>
            </div>
        </div>
  
      <!-- board list area -->
        <div id="board-list">
            <div class="container">
                <table class="board-table">
                    <thead>
                    <tr>
                        <th scope="col" class="th-num">번호</th>
                        <th scope="col" class="th-title">제목</th>
                        <th scope="col" class="th-date">작성자</th>
                        <th scope="col" class="th-date">등록일</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(l,index) in datas" :key="index">
                        <td>{{ index+1 }}</td>
                        <th>
                          <RouterLink to="contentroute">{{ datas[index].title }}</RouterLink>
                          <!-- @click.native"클릭이벤트" -->
                          <RouterView></RouterView>
                          <p>테스트</p>
                        </th>
                        <td>{{ datas[index].writer }}</td>
                        <td>{{ datas[index].date }}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="create"><RouterLink to="/create">글쓰기</RouterLink></div>
            </div>
        </div>
    
    </section>
</template>

<script>


    export default {
        // data() {
        //     return {
        //         datas:[
        //             {
        //                 writer:"writer",
        //                 title:'title',
        //                 date:'date',
                    
        //             },
        //             {
        //                 writer:"writer2",
        //                 title:'title2',
        //                 date:'date2',
                    
        //             },
                    
        //         ],
        //         boardnum:"게시판n"
        //     }
        // }
        props:['datas','boardnum']
    }
</script>