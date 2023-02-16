<template>
    <section class="notice">
      <div class="page-title">
            <div class="container">
                <h3></h3>
            </div>
        </div>
  
      <!-- board list area -->
        <div id="board-list">
            <div class="container">
                <form>
                    <!-- 버튼 태그는 폼 형식 안에 있으므로 누를 시 자동으로 새로고침 된다. 이를 해결하기 위해 type="button" 추가 -->
                    <button id="content_modify" type="button" v-on:click="fnDelete()">삭제</button><button id="content_modify" v-on:click="fnMove()">수정</button>
                
                <table class="board-table_write">
                    <thead>
                    <tr>
                        <th scope="col" class="th-num" >작성자</th>
                        <th scope="col" class="th-titles" id="title">{{ contentdatas.writer }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="col" class="th-num" >제목</td>
                        <th scope="col" class="th-titles" id="title">{{ contentdatas.title }}</th>  
                    </tr>
                    </tbody>
                </table>
                <div id="content_area" >{{ contentdatas.content }}</div>
                </form>
            </div>
        </div>
    
    </section>
  </template>
  
  <script>

    export default{
      data() {
        return {
            contentdatas:{},
            id: this.$route.params.content_id
        }
      },
      methods: {
      fnGetList() {
          //get(주소): 백엔드 app.get(/contentpage:id)이므로 'contentpage/'를 추가해줌
        this.$axios.get(this.$serverUrl + this.id ).then((res) => {
          this.contentdatas = res.data[0];
          console.log('data:',res.data);
          console.log('id',this.contentdatas.page_id);
        }).catch((err) => {
          if (err.message.indexOf('Network Error') >-1) {
            alert('네트워크 오류')
          }
        })
      },
      fnMove() {
          this.$router.push({ name: 'ModifyPage', params: {id: this.contentdatas.id},query: {page_id:this.contentdatas.page_id, writer: this.contentdatas.writer, title: this.contentdatas.title, content: this.contentdatas.content} })
        },
      fnDelete() {
        console.log('백가기전')
        this.$axios.delete(this.$serverUrl + this.id)
          .then((res) => {
            console.log('delete:',this.id);
            console.log('res:',res);
            this.$router.push({name:('dashboard' + this.contentdatas.page_id)})
          }).catch((err) => {
            if (err) {
              console.log('err',err);
            }
          })
      }
      },
    mounted() {
      this.fnGetList()
    }
    }
  </script>
    
    <style>
    #content_area {
    width: 100%;
    height: 500px;
    font-size: 15px;
    border: 0;
    outline: none;
    padding-left: 30px;
    padding-top: 20px;
    }
    input {
        width: 500px;
        height: 32px;
        font-size: 13px;
        border: 0;
        outline: none;
        padding-left: 10px;
        
    }
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
    
    
    .board-table_write {
      font-size: 13px;
      width: 100%;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    
    .board-table_write a {
      color: #333;
      display: inline-block;
      line-height: 1.4;
      word-break: break-all;
      vertical-align: middle;
    }
    .board-table_write a:hover {
      text-decoration: underline;
    }
    .board-table_write th {
      text-align: center;
    }
    
    .board-table_write .th-num {
      width: 300px;
      font-weight: bold;
      text-align: center;
    }
    
    .board-table_write .th-titles {
      width: 600px;
      text-align: left;
      padding-left: 50px;
      height: 45px;
      /* border-left: 1px solid #ccc; */
      border-top: 1px solid #ccc;
    }

    #title {
      border-left: 1px solid #ccc;
    }
    
    .board-table_write th, .board-table_write td {
      padding: 6px 0;
    }
    
    .board-table_write tbody td {
      border-top: 1px solid #e7e7e7;
      text-align: center;
    }
    
    .board-table_write tbody th {
      padding-left: 28px;
      padding-right: 14px;
      border-top: 1px solid #e7e7e7;
      text-align: left;
    }
    
    .board-table_write tbody th p{
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
    #content_modify {
      font-size: 14px;
      font-weight: bold;
      width: 50px;
      color: #333;
      display: inline-block;
      line-height: 1.4;
      word-break: break-all;
      vertical-align: middle;
      padding-top: 10px;
      padding-right: 83px;
      text-align: right;
      border: none;
      float: right;
      background-color: white;
      cursor: pointer;
      padding-right: 10px;
      padding-bottom: 10px;
    
    }
    
    #content_modify:hover {
      text-decoration: underline;
    }
    #contentview {
      display: none;
    }
    
    
    </style>
