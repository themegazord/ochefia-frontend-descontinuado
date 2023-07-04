<template>
  <div id="card-signup">
    <SingupForm />
  </div>
</template>

<script>
import SingupForm from '@/components/Signup/SignupForm.vue';
export default {
  components: {
    SingupForm
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
