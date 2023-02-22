<template>
  <div class="container vh-100" style="display:flex; align-items:center">
    <b-row class="w-100">
      <b-col lg="6" offset="3">
        <b-card>
          <b-card-body>
            <b-form @submit.prevent="onSubmit">
              <b-form-group label="Email">
                <b-form-input v-model="form.email" size="sm" type="email" placeholder="Enter email"
                  required></b-form-input>
              </b-form-group>

              <b-form-group label="Password" class="mt-1">
                <b-form-input v-model="form.password" size="sm" type="password" placeholder="password"
                  required></b-form-input>
              </b-form-group>

              <b-button size="sm" class="w-100 mt-3" type="submit" variant="primary">
                <b-spinner v-if="loading" variant="light" small></b-spinner>
                Login
              </b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      form: {}
    }
  },
  methods: {
    onSubmit() {

    }
  }
}

</script>