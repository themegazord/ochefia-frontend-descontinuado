<template>
  <div id="card-signup">
    <SingupForm
      @signup-data="signup"
    />
  </div>
</template>

<script>
import SingupForm from '@/components/Signup/SignupForm.vue';
import axios from 'axios';
import config from '@/db/config';
export default {
  components: {
    SingupForm
  },
  methods: {
    signup (data) {
      axios.post(config.apiUrl + config.endpoints.auth.signup, {

      })
    }
  }
}
</script>

<style>
#card-signup {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7rem);
}

</style>
