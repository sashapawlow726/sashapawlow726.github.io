<template lang="pug">
  .content-wrapper
    section
      .container
          .auth
            .auth__banner
              img.auth__banner-img(src="./banner.jpg")
            .auth__form 
              span.ui-title-2 Registration
                form(@submit.prevent="onSubmit()")
                  .form-item(:class="{ errorInput: $v.email.$error }")
                    input(
                      type="email"
                      placeholder="Email"
                      v-model="email"
                      :class="{ error: $v.email.$error }"
                      @change="$v.email.$touch()"
                    )
                    .error(
                      v-if="!$v.email.required"
                    ) Field is required

                    .error(
                      v-if="!$v.email.email"
                    ) Email is not correct
                  .form-item(:class="{ errorInput: $v.password.$error }")
                    input(
                      type="password"
                      placeholder="Password"
                      v-model="password"
                      :class="{ error: $v.password.$error}"
                      @change="$v.password.$touch()"
                    )
                    .error(v-if="!$v.password.required") Password is required.
                    .error(v-if="!$v.password.minLength")
                      | Password must have at least {{ $v.password.$params.minLength.min }} letters.
                  .form-item(:class="{ errorInput: $v.repeatPassword.$error }")
                    input(
                      type="password"
                      placeholder="Repeat password"
                      v-model="repeatPassword"
                      :class="{ error: $v.repeatPassword.$error}"
                      @change="$v.repeatPassword.$touch()"
                    )
                    .error(v-if="!$v.repeatPassword.sameAsPassword") Passwords must be identical.
                    .buttons-list
                      button.button.button-primary(
                        type="submit"
                      ) 
                        span(v-if="loading") Loading...
                        span(v-else) Registration

                    .buttons-list.button-list--info
                      p.typo__p(v-if="submitStatus === 'OK'") Thank's for you registration 
                      p.typo__p(v-if="submitStatus === 'ERROR'") Please fill the form
                      p.typo__p(v-else) {{ submitStatus }}
                    .buttons-list.button-list--info
                      span Do you have account?
                        router-link(to="/login")  Enter here
</template>

<script>

import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log('Registration!')
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        this.$store.dispatch('registerUser', user)
          .then(() => {
            console.log('Register')
            this.submitStatus = 'OK'
            this.$router.push('/')
          })
          .catch(err => {
            this.submitStatus = err.message
          })
        // do your submit logic here
        // this.submitStatus = 'PENDING'
        // setTimeout(() => {
        //   this.submitStatus = 'OK'
        // }, 500)
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

.auth
  display flex

.auth__banner,
.auth__form
  width 50%

.form-item
  .error
    display none
    margin-bottom 8px
    font-size 13.4px
    color #fc5c65
  &.errorInput
    .error
      display block
input
  &.error
    border-color #fc5c65
    animation shake .3s

.auth__banner-img
  width: 80%

.button-list--info
  font-size: 15px
</style>
