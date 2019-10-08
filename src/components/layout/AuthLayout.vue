<template>
    <div class="login-area">   
        <div class="wrapper wrapper-full-page login-page">
            <div class="full-page" :class="pageClass" filter-color="black" data-image="/img/bg13.jpg">
                <div class="content">
                    <div class="container">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div id="particles-js"></div>
    </div>
</template>

<script>
    import ParticlesJS from 'particles.js';

    export default {
        props: {
            backgroundColor: {
                type: String,
                default: 'black'
            }
        },
        data() {
            return {
                showMenu: false,
                menuTransitionDuration: 250,
                pageTransitionDuration: 200,
                year: new Date().getFullYear(),
                pageClass: 'login-page'
            };
        },
        methods: {
            toggleNavbar() {
                document.body.classList.toggle('nav-open');
                this.showMenu = !this.showMenu;
            },
            closeMenu() {
                document.body.classList.remove('nav-open');
                this.showMenu = false;
            },
            setPageClass() {
                this.pageClass = `${this.$route.name}-page`.toLowerCase();
            }
        },
        mounted() {
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0.5,
                            "color": "#ffffff"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 0.1,
                            "opacity_min": 0.1,
                            "sync": true
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 10,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.8,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        },
        beforeDestroy() {
            this.closeMenu();
        },
        beforeRouteUpdate(to, from, next) {
            // Close the mobile menu first then transition to next page
            if (this.showMenu) {
                this.closeMenu();
                setTimeout(() => {
                    next();
                }, this.menuTransitionDuration);
            } else {
                next();
            }
        },
        watch: {
            $route() {
                this.setPageClass();
            }
        }
    };
</script>

<style lang="scss">
    body {
        overflow: hidden;
    }

    .login-area .wrapper {
        background-image: linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.1)),linear-gradient(135deg,#002b66,#46004d 76%);
        height: 1600px;
        overflow: hidden;
    }

    .login-area .bg-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        width: 95%;
        height: 100%;
        z-index: 1;
    }

    .login-area .bg-bubbles li {
        position: absolute;
        list-style: none;
        display: block;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        bottom: -160px;
        -webkit-animation: square 25s infinite;
        animation: square 25s infinite;
        transition-timing-function: linear;
    }

    .login-area .bg-bubbles li:nth-child(1) {
        left: 10%;
    }

    .bg-bubbles li:nth-child(2) {
        left: 20%;
        width: 80px;
        height: 80px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 17s;
        animation-duration: 17s;
    }

    .bg-bubbles li:nth-child(3) {
        left: 25%;
        -webkit-animation-delay: 4s;
        animation-delay: 4s;
    }

    .bg-bubbles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        background-color: rgba(255, 255, 255, 0.25);
    }

    .bg-bubbles li:nth-child(5) {
        left: 70%;
    }

    .bg-bubbles li:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
    }

    .bg-bubbles li:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 7s;
        animation-delay: 7s;
    }

    .bg-bubbles li:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        -webkit-animation-delay: 15s;
        animation-delay: 15s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
    }

    .bg-bubbles li:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
        background-color: rgba(255, 255, 255, 0.3);
    }

    .bg-bubbles li:nth-child(10) {
        left: 90%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 11s;
        animation-delay: 11s;
    }

    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
        }
    }

    @keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
        }
    }

    .full-page:after {
        background-color: rgba(0, 0, 0, 0.02);
    }

    #particles-js {
        height: 100%;
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }

    .full-page>.content {
        padding-bottom: 150px;
        padding-top: 10%;
    }

    .login-area .container {
        max-width: 1140px;
        margin: 0 auto;
    }

    .login-area .card-login {
        border-radius: 0.25rem;
        padding-bottom: 0.7rem;
        
        box-sizing: border-box;
        color: rgb(44, 44, 44);

        display: inline-block;        
        left: 0px;
        bottom: 0px;
        right: 0px;
        top: 0px;
        padding: 0px 0px 11.2px;

        position: relative;        
        text-align: left;        
        width: 432.5px;
        height: 345px;

        background: rgba(0, 0, 0, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(44, 44, 44);
        border-radius: 20px 20px 20px 20px;
        font: normal normal 400 normal 14px / 21px Montserrat, "Helvetica Neue", Arial, sans-serif;
        outline: rgb(44, 44, 44) none 0px;

        margin: 0 auto;
        display: block;

        .card-body {
            padding: 15px 25px 10px 25px;
        }

        .card-footer {
            padding: 15px 25px 10px 25px;

            button {
                box-sizing: border-box;
                color: rgb(255, 255, 255);
                display: block;
                width: 100%;
                height: 48px;
                
                text-align: center;
                text-decoration: none solid rgb(255, 255, 255);
                text-size-adjust: 100%;
                vertical-align: middle;
                white-space: nowrap;                
                cursor: pointer;
                
                background: #ee4aff;
                border: 0px none rgb(255, 255, 255);
                border-radius: 30px 30px 30px 30px;
                font: normal normal 700 normal 14px / 18.9px Montserrat, "Helvetica Neue", Arial, sans-serif;
                margin: 0px 0px 16px;
                outline: rgb(255, 255, 255) none 0px;
                padding: 15px 23px;

                &:after {
                    box-sizing: border-box;
                    color: rgb(255, 255, 255);
                    overflow-wrap: break-word;
                    text-align: center;
                    text-decoration: none solid rgb(255, 255, 255);
                    text-size-adjust: 100%;
                    white-space: nowrap;
                    column-rule-color: rgb(255, 255, 255);
                    user-select: none;
                    caret-color: rgb(255, 255, 255);
                    border: 0px none rgb(255, 255, 255);
                    font: normal normal 700 normal 14px / 18.9px Montserrat, "Helvetica Neue", Arial, sans-serif;
                    outline: rgb(255, 255, 255) none 0px;
                }

                &:hover {
                    background-color: #c300d4;
                }

                &:before {
                    box-sizing: border-box;
                    color: rgb(255, 255, 255);
                    overflow-wrap: break-word;
                    text-align: center;
                    text-decoration: none solid rgb(255, 255, 255);
                    text-size-adjust: 100%;
                    white-space: nowrap;
                    column-rule-color: rgb(255, 255, 255);
                    user-select: none;
                    caret-color: rgb(255, 255, 255);
                    border: 0px none rgb(255, 255, 255);
                    font: normal normal 700 normal 14px / 18.9px Montserrat, "Helvetica Neue", Arial, sans-serif;
                    outline: rgb(255, 255, 255) none 0px;
                }
            }
        }
    }

    .login-area .login-block {
        z-index: 10;
        display: block;
        position: relative;
    }

    .login-area .input-box {
        width: 100%;
        display: block;
        margin: 0 auto;

        .input-group {
            display: flex;
        }

        input {
            bottom: 0px;
            margin-top: 5px;
            color: white;
            display: block;
            position: relative;
            text-size-adjust: 100%;
            width: 100%;
            caret-color: white;
            background: rgba(255, 255, 255, 0.1) none repeat scroll 0% 0%/auto padding-box padding-box;
            border: 0px none rgba(255, 255, 255, 0.5);
            border-radius: 30px;
            flex: 1 1 auto;
            font: normal normal 400 normal 15px / normal Montserrat, "Helvetica Neue", Arial, sans-serif;
            padding: 15px 5px 15px 18px;

            &::-webkit-input-placeholder { /* Edge */
                color: lightgrey;
            }

            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: lightgrey;
            }

            &::placeholder {
                color: lightgrey;
            }

            &:after {
                box-sizing: border-box;
                color: rgb(255, 255, 255);
                min-height: auto;
                min-width: auto;
                overflow-wrap: break-word;
                text-decoration: none solid rgb(255, 255, 255);
                text-size-adjust: 100%;
                column-rule-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                border: 0px none rgb(255, 255, 255);
                font: normal normal 400 normal 15px / normal Montserrat, "Helvetica Neue", Arial, sans-serif;
                outline: rgb(255, 255, 255) none 0px;
            }

            &:before {
                box-sizing: border-box;
                color: rgb(255, 255, 255);
                min-height: auto;
                min-width: auto;
                overflow-wrap: break-word;
                text-decoration: none solid rgb(255, 255, 255);
                text-size-adjust: 100%;
                column-rule-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                border: 0px none rgb(255, 255, 255);
                font: normal normal 400 normal 15px / normal Montserrat, "Helvetica Neue", Arial, sans-serif;
                outline: rgb(255, 255, 255) none 0px;
            }

            &:focus {
                outline: none;
                border: none;
            }
        }
    }
</style>