<template>
  <div>
      <h1>멤버초대</h1>
      <button v-on:click="createInvitationToken">초대링크생성</button>
      <input v-model="invitationUrl" placeholder="아래 링크를 복사하여 멤버를 초대하세요." type="text">
      {{token}}
  </div>
</template>

<script>
// import axios from "axios";
export default {
    data: function() {
        return {
            token:null,
            invitationUrl: "",
        }
    },
    computed: {
      invitationToken() {
        return this.token
        }  
    },
    watch: {
    invitationToken (val) {
      console.log('watched invitationToken: ', val)
      this.invitationUrl = `http://localhost:8080/${val}`
    }
  },
  methods: {
      createInvitationToken() {
        this.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        this.$store.dispatch('generateInvitationToken', this.token)
      },
      
  }

}
</script>

<style>

</style>