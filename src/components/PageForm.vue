<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="notice">
      <div class="page-title">
            <div class="container">
                <h3>{{ dashboardtype }}</h3>
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
                          <!-- 자식 컴포넌트 -->
                          <!-- <RouterLink to="contentroute">{{ datas[index].title }}</RouterLink> -->
                          <!-- <RouterView></RouterView> -->
                          <!-- @click.native"클릭이벤트" -->
                          <RouterLink :to="{ name: 'contentpages', params: { content_id: datas[index].id }}">{{ datas[index].title }}</RouterLink>
                          <p>테스트</p>
                        </th>
                        <td>{{ datas[index].writer }}</td>
                        <td>{{ datas[index].create_at }}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="create"><RouterLink :to="{ name: 'create', params: {page_id: boardnum}}">글쓰기</RouterLink></div>
            </div>
        </div>
    
    </section>
</template>

<script>


    export default {
        props:['datas','boardnum','dashboardtype']
    }
</script>