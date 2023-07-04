export default {
  apiUrl: 'http://localhost:8000/',
  endpoints: {
    auth: {
      signup: 'api/v1/auth/register',
      signin: 'api/v1/auth/login'
    },
    company: {
      create: 'api/v1/company/create'
    }
  }
}
