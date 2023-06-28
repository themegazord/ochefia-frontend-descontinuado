<template>
  <v-btn
  color="#000000"
  size="x-large"
  class="link"
  variant="tonal"
>
  Login
  <v-dialog
    v-model="dialog"
    activator="parent"
    width="500"
    class="login-modal"
  >
    <v-card>
      <v-card-title style="text-align: center; margin-top: 2rem;">
        <span class="text-h5">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Email"
                :rules="emailRules"
                v-model="email"
                required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Senha"
                required
                v-model="password"
                :rules="passwordRules"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-checkbox label="Manter-se conectado?"></v-checkbox>
      </v-card-text>
      <v-card-actions style="margin-bottom: 2rem;">
        <v-btn color="#669BBC" block @click="dialog = false" variant="outlined">Entrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-btn>
</template>
<script>
import { verificaEmail } from '@/utils/verificarEmail'
export default {
  data () {
    return {
      dialog: false,
      valid: false,
      email: '',
      emailRules: [
        email => {
          if (email) return true

          return 'O email é obrigatório'
        },
        email => {
          if (verificaEmail(email)) return true

          return 'O email não é válido'
        },
      ],
      password: '',
      passwordRules: [
        value => {
          if (value) return true

          return 'A senha é obrigatória'
        }
      ]
    }
  },
}
</script>
