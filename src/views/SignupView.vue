<template>
  <div id="card-signup">
    <v-card
      width="70%"
      color="#F3DCAC"
    >
    <v-row>
      <v-col cols="6">
        <v-card-subtitle>Insira seus dados pessoais</v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>Conte-nos sobre sua empresa</v-card-subtitle>
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
              :rules="companyDataRules.companyNameRules"
              label="Insira o nome da sua empresa *"
              required
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
            required
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
              required
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
        </v-row>
      </v-container>
    </v-form>
    </v-card>
  </div>
</template>

<script>
import { verificaCNPJ } from '@/utils/verificarCNPJ'
import { verificaEmail } from '@/utils/verificarEmail'
export default {
  data () {
    return {
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
        ]
      },
      companyData: {
        companyName: '',
        CNPJ: '',
        companyEmail: '',
        howDoYouDescribeYourCompany: '',
        companyLogo: ''
      },
      companyDataRules: {
        companyNameRules: [
          companyName => {
            if (companyName) return true
            return 'O nome da empresa é obrigatório, por favor, insira.'
          }
        ],
        CNPJ: [
          cnpj => {
            if (cnpj) return true
            return 'O CNPJ da empresa é obrigatório, por favor, insira.'
          },
          cnpj => {
            if (cnpj?.length == 14) return true
            return 'O CNPJ deve conter 14 caracteres'
          },
          cnpj => {
            if (verificaCNPJ(cnpj)) return true
            return 'O CNPJ é inválido'
          }
        ],
        companyEmailRules: [
          companyEmail => {
            if (companyEmail) return true
            return 'O email da empresa é obrigatório, por favor, insira'
          },
          companyEmail => {
            if (verificaEmail(companyEmail)) return true
            return 'O email inserido é invalido.'
          }
        ]
      }
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

.v-card-subtitle {
  font-family: var(--primary-font);
  font-size: 1.625rem;
  text-align: center;
  padding: 2rem 0rem;
}
</style>
