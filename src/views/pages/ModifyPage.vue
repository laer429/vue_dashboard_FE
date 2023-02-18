
<template>
    <section class="notice">
      <div class="page-title">
            <div class="container">
                <h3>글쓰기</h3>
            </div>
        </div>
  
      <!-- board list area -->
        <div id="board-list">
            <div class="container">
                <div class="create"><input id="submitbtn" type="button" v-on:click="fnWrite" value="등록"></div>
                <table class="board-table_write">
                    <thead>
                    <tr>
                        <th scope="col" class="th-num" >작성자</th>
                        <th scope="col" class="th-title_write" id="title"><input type="text" v-model="writer" placeholder="작성자를 입력하세요." required></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="col" class="th-num" >제목</td>
                        <th scope="col" class="th-title_write" id="title"><input type="text" v-model="title" placeholder="제목을 입력하세요." required></th>  
                    </tr>
                    </tbody>
                </table>
                <textarea id="textarea" v-model="content" placeholder="내용을 입력하세요." required></textarea>
            </div>
        </div>
    
    </section>
  </template>
  
  <script>

    export default{
      data() {
        return {
          page_id: this.$route.query.page_id,
          title:this.$route.query.title,
          writer:this.$route.query.writer,
          content:this.$route.query.content,
          id:this.$route.params.id
        }
      },
      methods: {
        fnList(){
          this.$router.push({name:('dashboard' + this.page_id)})
        },
        fnWrite() {
          let apiUrl = this.$serverUrl + 'create'
          this.form = {
            title:this.title,
            content:this.content,
            writer:this.writer,
            page_id:this.page_id,
            id:this.id
          }
          this.$axios.put(apiUrl, this.form).then(() => {
            alert('글이 저장되었습니다.')
            this.fnList()
          }).catch((err) => {
            console.log('err', err);
            // if (err.message.indexOf('Network Error') > -1) {
            //   alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            // }
          });


        },
      },
    }
  </script>
    
    <style>
    #textarea {
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
    
    .board-table_write .th-title_write {
      width: 600px;
      text-align: left;
      padding-left: 50px;
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
    #create {
      font-size: 14px;
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
    
    #submitbtn:hover {
      text-decoration: underline;
    }
    #contentview {
      display: none;
    }
    #submitbtn {
      width: 50px;
      border: none;
      background-color: white;
      font-weight: bold;
      cursor: pointer;
      padding-right: 5px;
      padding-bottom: 10px;
    }
    
    </style>
