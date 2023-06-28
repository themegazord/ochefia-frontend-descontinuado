<template>
  <nav id="navbar">
      <div class="right-navbar">
          <h1 class="logo" @click="goToHome">LOGO</h1>
      </div>
      <div class="left-navbar">
          <router-link v-for="(link, index) in links" :to="link.url" :key="index" class="link">{{ link.name }}</router-link>
          <login-modal-component />
      </div>
  </nav>
</template>
<script>
import LoginModalComponent from '@/components/LoginModalComponent.vue'
export default {
  components: {
    LoginModalComponent
  },
  props: {
      links: {
          type: Object,
          required: true
      }
  },
  methods: {
      goToHome () {
          this.$router.push('/')
      }
  }
}
</script>
<style>
#navbar {
  width: 100%;
  height: 5%;
  border-radius: 0px 0px 30px 30px;
  background: radial-gradient(34799.22% 311.68% at -8.52% -50.46%, var(--light-grayish-orange) 0%, rgba(255, 255, 255, 0.00) 100%);
  backdrop-filter: blur(50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: var(--primary-dark);
  font-size: 3.25rem;
  font-family: var(--primary-font);
  padding: 1.5rem 2.3rem;
  cursor: pointer;
  margin: 0;
}

.right-navbar {
  height: 100%;
}

.left-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.5rem;
  padding-right: 7.25rem;
}

.link {
  color: var(--primary-dark);
  font-size: 1.625rem;
  font-family: var(--primary-font);
  text-decoration: none;
}

</style>
