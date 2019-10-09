<template>
    <div class="login-block">
        <form @submit.prevent="logIn">
            <div class="card-login card-plain">
                <div class="card-header">
                    <div class="logo-container">
                        <img src="src/images/logo.svg"
                            alt="">
                    </div>
                </div>

                <div class="card-body">
                    <div class="input-box">
                        <div class="input-group">
                            <input v-model="model.email" type="input" placeholder="E-mail">
                        </div>
                        <div class="input-group">
                            <input v-model="model.password" type="password" placeholder="Password">
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <button type="subimit">START</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'login',
        components: {

        },
        data() {
            return {
                model: {
                    email: '',
                    password: ''
                },
                token: false,
                logged: false,
                public_key: false
            };
        },
        methods: {
            getError(fieldName) {
                return this.errors.first(fieldName);
            },
            logIn() {           
                this.startLoading();    
                var that = this;               
                this.$http
                    .post('auth/login', {
                        email: this.model.email,
                        password: this.model.password
                    }, {
                        useCredentails: true
                    })
                    .then(function (response) {
                        var data = response.data;
                        var status = (typeof data.status != 'undefined') ? data.status : 'error';
                        var message = (typeof data.message != 'undefined') ? data.message :'Service not available at the moment';

                        that.stopLoading();

                        switch (status) {
                            case 'ok':
                                that.saveSessionLogin(response.data);
                                break;
                            case 'warning':
                                swal({
                                    title: 'Ooops!',
                                    text: message,
                                    type: 'warning',
                                    confirmButtonClass: "btn btn-success"
                                }).catch(swal.noop);
                                break;
                            case 'error':
                                swal({
                                    title: 'Ooops!',
                                    text: message,
                                    type: 'error',
                                    confirmButtonClass: "btn btn-success"
                                }).catch(swal.noop);
                                break;
                            default:
                                break;
                        }                        
                    })
                    .catch(function (error) {
                        console.error('error: ', error);
                    });
                
            },
            saveSessionLogin(data) {
                localStorage.setItem('logged', true);
                localStorage.setItem('token', data.token);
                window.location.href = "./";
            }
        }
    };
</script>

<style lang="scss">
    .login-page .navbar-nav .nav-item p {
        line-height: inherit;
        margin-left: 5px;
    }

    .login-page .card .card-footer .btn {
        background: #07abd6;
        font-weight: bold;
        margin-bottom: 15px;
        padding: 13px 48px;
        font-size: 1em;
    }

    .login-page .card-login .logo-container {
        width: 325px;
        max-width: 88%;
        margin: 0 auto;
        padding: 35px 15px 20px 15px;

        img {
            width: 100%;
        }
    }

    .login-page .card-login {
        border-radius: 1.5rem !important;
        padding-bottom: 0.7rem !important;
        background: #00000038;
        border-radius: 20px;
    }

    .login-page .input-group-append .input-group-text i,
    .login-page .input-group-prepend .input-group-text i {
        font-size: 18px;
        width: 16px;
        padding-right: 30px;
    }

    .login-page .card-login.card-plain .form-group.no-border .form-control,
    .login-page .card-login.card-plain .input-group.no-border .form-control {
        font-size: 15px;
    }
</style>