<template>
  <section class="notice">
    <div class="page-title">
          <div class="container">
              <h3>게시판1</h3>
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
                  <tr>
                      <td>{{num}}</td>
                      <th>
                        <RouterLink to="contentroute">{{ title }}</RouterLink>
                        <!-- @click.native"클릭이벤트" -->
                        <RouterView></RouterView>
                        <p>테스트</p>
                      </th>
                      <td>{{ writer }}</td>
                      <td>{{ date }}</td>
                  </tr>
                  <tr>
                      <td>{{num}}</td>
                      <th>
                        <RouterLink to="contentroute">{{ title }}</RouterLink>
                        <RouterView></RouterView>
                        <p>테스트</p>
                      </th>
                      <td>{{ writer }}</td>
                      <td>{{ date }}</td>
                  </tr>
                  </tbody>
              </table>
              <div class="create"><RouterLink to="/create">글쓰기</RouterLink></div>
          </div>
      </div>
  
  </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
  export default{
    data() {
      return {
        num : "num",
        title : "title",
        date : "date",
        writer : "writer"
      }
    }
  }
</script>
  
  <style>
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  section.notice {
    padding: 80px 0;
  }
  
  .page-title {
    margin-bottom: 60px;
  }
  .page-title h3 {
    font-size: 28px;
    color: #333333;
    font-weight: 400;
    text-align: center;
  }
  
  
  .board-table {
    font-size: 13px;
    width: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  
  .board-table a {
    color: #333;
    display: inline-block;
    line-height: 1.4;
    word-break: break-all;
    vertical-align: middle;
  }
  .board-table a:hover {
    text-decoration: underline;
  }
  .board-table th {
    text-align: center;
  }
  
  .board-table .th-num {
    width: 100px;
    text-align: center;
  }
  
  .board-table .th-date {
    width: 200px;
  }
  
  .board-table th, .board-table td {
    padding: 14px 0;
  }
  
  .board-table tbody td {
    border-top: 1px solid #e7e7e7;
    text-align: center;
  }
  
  .board-table tbody th {
    padding-left: 28px;
    padding-right: 14px;
    border-top: 1px solid #e7e7e7;
    text-align: left;
  }
  
  .board-table tbody th p{
    display: none;
  }
  
  .btn {
    display: inline;
    padding: 0 30px;
    font-size: 15px;
    font-weight: 400;
    background: transparent;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    text-transform: uppercase;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  
  .btn-dark {
    background: #555;
    color: #fff;
  }
  
  .btn-dark:hover, .btn-dark:focus {
    background: #373737;
    border-color: #373737;
    color: #fff;
  }
  
  .btn-dark {
    background: #555;
    color: #fff;
  }
  
  .btn-dark:hover, .btn-dark:focus {
    background: #373737;
    border-color: #373737;
    color: #fff;
  }
  
  /* reset */
  
  * {
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }
  .container {
    width: 1100px;
    margin: 0 auto;
  }
  .blind {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: -1px;
    width: 1px;
    height: 1px;
  }
  .create {
    font-size: 13px;
    font-weight: bold;
    width: 100%;
    color: #333;
    display: inline-block;
    line-height: 1.4;
    word-break: break-all;
    vertical-align: middle;
    padding-top: 10px;
    padding-right: 83px;
    text-align: right;
  
  }
  .create a {
    color: black;
  }
  .create:hover {
    text-decoration: underline;
  }

  
  </style>