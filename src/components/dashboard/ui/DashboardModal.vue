<template>
    <transition name="modal" v-if="show">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                        <button type="button" class="close" @click="closeModal(false)">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn pull-left" @click="closeModal(false)">
                                Cancel
                            </button>
                            <button class="btn btn-primary pull-right" @click="closeModal(true)">
                                Save
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'dashboard-modal',
        props: {
            show: Boolean
        },
        methods: {
            closeModal(status) {
                this.$emit('close', status);
            }
        }
    }
</script>

<style scoped lang="scss">
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        margin-top: 7%;
    }

    .modal-container {
        width: 550px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header,
    .modal-body,
    .modal-footer {
        margin: 20px 0;
        display: block;
        position: relative;
    }

    .modal-body {
        min-height: 150px;
    }

    .modal-footer {
        min-height: 25px;
    }

    button.close {
        position: absolute;
        top: -39px;
        right: -21px;
        background: transparent;
        border: navajowhite;
        font-size: 18px !important;
        color: #fe0000;
        cursor: pointer;

        &:focus {
            border: none;
            outline: none
        }
    }
</style>