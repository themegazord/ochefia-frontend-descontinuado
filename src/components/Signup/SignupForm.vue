<template>
<v-card
  width="70%"
  color="#F3DCAC"
>
  <v-row>
    <v-col cols="6">
      <v-card-subtitle>Você é cliente? Nos informe os<br>seus dados pessoais:</v-card-subtitle>
    </v-col>
    <v-col cols="6">
      <v-card-subtitle>Se você também é empresa,<br>conte-nos mais sobre ela:</v-card-subtitle>
    </v-col>
  </v-row>
  <v-form @submit.prevent>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="personalData.firstname"
            :rules="personalDataRules.firstnameRules"
            :counter="50"
            label="Insira seu nome *"
            hint="Insira apenas o seu primeiro nome"
            required
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="companyData.companyName"
            label="Insira o nome da sua empresa *"
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="personalData.lastname"
            :rules="personalDataRules.lastnameRules"
            :counter="50"
            label="Insira o seu sobrenome *"
            required
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
        <v-text-field
          v-model="companyData.CNPJ"
          :rules="companyDataRules.CNPJ"
          :counter="14"
          label="Insira o CNPJ da sua empresa"
        ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="personalData.email"
            :rules="personalDataRules.emailRules"
            label="Insira seu email *"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="companyData.companyEmail"
            :rules="companyDataRules.companyEmailRules"
            label="Insira o email da sua empresa *"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="personalData.verificationEmail"
            :rules="personalDataRules.verificationEmailRules"
            label="Confirme seu email *"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-select
            label="Como você define sua empresa"
            v-model="companyData.howDoYouDescribeYourCompany"
            :items="['Bar', 'Mercearia', 'Tabacaria', 'Restaurante', 'Botequim', 'Outros']"
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="personalData.password"
            :rules="personalDataRules.passwordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            label="Insira sua senha *"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-file-input
            v-model="companyData.companyLogo"
            label="Sua empresa tem logo? Mostra pra gente"
          ></v-file-input>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="personalData.verificationPassword"
            :rules="personalDataRules.verificationPasswordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            label="Confirme sua senha *"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="signup-button"
        >
          <v-btn
            variant="tonal"
            size="x-large"
            style="width: 100%"
            @click.prevent="signupData"
          >
            Cadastrar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</v-card>
</template>

<script>
import { verificaCNPJ } from '@/utils/verificarCNPJ'
import { verificaEmail } from '@/utils/verificarEmail'
export default {
  data () {
    return {
      show: false,
      personalData: {
        firstname: '',
        lastname: '',
        email: '',
        verificationEmail: '',
        password: '',
        verificationPassword: ''
      },
      personalDataRules: {
        firstnameRules: [
          firstname => {
            if (firstname) return true
            return 'O campo de nome é obrigatório, por favor, insira.'
          },
          firstname => {
            if (firstname?.length <= 50) return true
            return 'O nome deve conter até 50 caracteres'
          }
        ],
        lastnameRules: [
          lastname => {
            if (lastname) return true
            return 'O campo de sobrenome é obrigatório, por favor, insira.'
          },
          lastname => {
            if (lastname?.length <= 50) return true
            return 'O sobrenome deve conter até 50 caracteres'
          }
        ],
        emailRules: [
          email => {
            if (email) return true
            return 'O campo de email é obrigatório, por favor, insira.'
          },
          email => {
            if (verificaEmail(email)) return true
            return 'O email inserido é invalido.'
          }
        ],
        verificationEmailRules: [
          verificationEmail => {
            if (verificationEmail) return true
            return 'O campo de verificação de email é obrigatório, por favor, insira.'
          },
          verificationEmail => {
            if (verificaEmail(verificationEmail)) return true
            return 'O email inserido é inválido.'
          },
          verificationEmail => {
            if (verificationEmail === this.personalData.email) return true
            return 'O email de verificação não corresponde ao email fornecido.'
          }
        ],
        passwordRules: [
          password => {
            if (password) return true
            return 'O campo de senha é obrigatório, por favor, insira.'
          },
          password => {
            if (password?.length >= 10) return true
            return 'A senha deve conter no minimo 10 caracteres'
          }
        ],
        verificationPasswordRules: [
          verificationPassword => {
            if (verificationPassword) return true
            return 'O campo de confirmação de senha é obrigatório, por favor, insira.'
          },
          verificationPassword => {
            if (verificationPassword === this.personalData.password) return true
            return 'A senha de verificação não corresponde a senha fornecida.'
          }
        ]
      },
      companyData: {
        companyName: '',
        CNPJ: '',
        companyEmail: '',
        howDoYouDescribeYourCompany: '',
        companyLogo: []
      },
      companyDataRules: {
        CNPJ: [
          cnpj => {
            if (!cnpj || cnpj?.length == 14) return true
            return 'O CNPJ deve conter 14 caracteres'
          },
          cnpj => {
            if (!cnpj || verificaCNPJ(cnpj)) return true
            return 'O CNPJ é inválido'
          }
        ],
        companyEmailRules: [
          companyEmail => {
            if (!companyEmail || verificaEmail(companyEmail)) return true
            return 'O email inserido é invalido.'
          }
        ]
      }
    }
  },
  methods: {
    signupData () {
      this.$emit('signupData', {
        'personalData': Object.assign({}, this.personalData),
        'companyData': Object.assign({}, this.companyData)
      })
    }
  }
}
</script>

<style>
.v-card-subtitle {
  font-family: var(--primary-font);
  font-size: 1.625rem;
  text-align: center;
  padding: 2rem 0rem;
}

.signup-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
