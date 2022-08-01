<template>
  <div>
      <input placeholder="방 이름을 입력하세요" v-model="roomname" type="text" >
      <button v-on:click="cancell">취소</button>
      <button v-on:click="create">생성</button>
  </div>
</template>

<script>
import axios from "axios";
// import jwt_decode from 'jwt-decode'
export default {
    data: function() {
        return {
            roomname:[]
        }
    },
    methods: {
        cancell: function() {
                this.$router.go(-1) //한단계 뒤로

        },
        create: function() {
             var url = 'http://localhost:8000/room';
             var data = {
                 room_name: this.roomname,
                //  room_manager: jwt_decode(localStorage.getItem("token"))
             }
             axios.post(url,data).then((response) => {
                 console.log(response.data.id);
                 this.acceptInvitation(response.data.id)
             })
             .catch(function(error){
                 console.log(error);
             })
        },
        acceptInvitation(sigId) {
            this.$store.dispatch('acceptInvitation',{sigId: sigId, isLeader:true}).then(response => {
                console.log(response);
                alert('invitation succeed')
                this.$router.push(`/room/${sigId}`)
            })
            .catch(function(error){
                console.log(error);
            })
        }
    },

}
</script>

<style>

</style>