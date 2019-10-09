<template>
    <div class="company-data">
        <dashboard-card :cardClasses="['small']">
            <div slot="header">
                <h4 class="card-title">{{ pageTitle }}</h4>
                <button @click="formSubmit" type="success" class="btn btn-primary btn-common btn-round pull-right">
                    <i class="now-ui-icons ui-1_check"></i>
                    Save
                </button>
            </div>
            <div>
                <form method="get" action="/" class="form-horizontal">
                    <div class="form-wrapper row">
                        <div class="width-1">
                            <label class="col-form-label">Company Name</label>
                            <input name="name" type="name" v-model="name"
                                :class="['form-element', 'width-fill', {'error':$v.name.$invalid}]">
                            <div class="error" v-if="$v.name.$invalid">Field is required</div>
                        </div>
                    </div>
                    <div class="form-wrapper row">
                        <div class="width-1">
                            <label class="col-form-label">Company Spend</label>
                            <input name="name" type="number" v-model="spend"
                                :class="['form-element', 'width-fill', {'error':$v.spend.$invalid}]">
                            <div class="error" v-if="$v.spend.$invalid">Field is required and must be positive</div>
                        </div>
                    </div>
                    <div class="form-wrapper row">
                        <div class="width-2">
                            <label class="col-form-label">Company Spend Ability</label>
                        </div>
                    </div>
                    <div class="form-wrapper row">
                        <div class="width-2">
                            <label class="col-form-label">Minimum Spend</label>
                            <input name="min_spend" type="number" v-model="min_spend" class="form-element width-fill">
                            <div class="error" v-if="$v.min_spend.$invalid">Minimum spend shouldn’t be larger than
                                maximum spend</div>
                        </div>
                        <div class="width-2">
                            <label class="col-form-label">Maximum Spend</label>
                            <input name="max_spend" type="number" v-model="max_spend" class="form-element width-fill">
                            <div class="error" v-if="$v.max_spend.$invalid">Maximum spend shouldn’t be smaller than
                                minimum spend</div>
                        </div>
                    </div>
                    <div class="form-wrapper row">
                        <div class="width-1">
                            <label class="col-form-label">Additional Notes</label>
                            <input @click="modalAdditionalNotes" name="additional_notes" v-model="additional_notes"
                                type="input" class="form-element width-fill">
                        </div>
                    </div>
                </form>
            </div>
        </dashboard-card>
        <modal-notes :show="modal_additional_notes" @close="modalAdditionalNotes">
        </modal-notes>
    </div>
</template>
<script>
    import DashboardCard from './ui/DashboardCard.vue';
    import ModalNotes from './ModalNotes.vue';
    import {
        required,
        minLength,
        between
    } from 'vuelidate/lib/validators'

    const mustBePositive = (value) => (value > 0);
    const mustBeSmaller = (value, vm) => (parseFloat(value) < parseFloat(vm.max_spend));
    const mustBeLarger = (value, vm) => (parseFloat(value) > parseFloat(vm.min_spend));

    export default {
        name: "company-data",
        components: {
            DashboardCard,
            ModalNotes
        },
        data() {
            return {
                pageTitle: 'Company Data',
                name: '',
                spend: '',
                min_spend: '',
                max_spend: '',
                additional_notes: '',
                modal_additional_notes: false,
                validate: false,
                isLoaded: false
            }
        },
        methods: {
            formSubmit() {
                this.validate = true;
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.updateData();
                    return true;
                }

                return false;
            },
            modalAdditionalNotes(status) {
                if (this.modal_additional_notes) {
                    this.modal_additional_notes = false;
                    if (status)
                        this.additional_notes = this.$store.state.additional_notes;
                } else {
                    this.modal_additional_notes = true;
                    this.$store.state.additional_notes = this.additional_notes;
                }
            },
            loadData() {
                this.startLoading();
                var that = this;

                var payload = {
                    token: localStorage.token
                }
                this.$http
                    .get('company_data', {
                        params: payload
                    })
                    .then(function (response) {
                        var data = response.data.data;

                        that.name = data.company_name;
                        that.spend = data.company_spend;
                        that.min_spend = data.company_min_spend;
                        that.max_spend = data.company_max_spend;
                        that.additional_notes = data.additional_notes;
                        that.isLoaded = true;

                        setTimeout(function () {
                            that.stopLoading();
                        }, 1000);
                    });

            },
            updateData() {
                var payload = {
                    company_name: this.name,
                    company_spend: this.spend,
                    company_min_spend: this.min_spend,
                    company_max_spend: this.max_spend,
                    additional_notes: this.additional_notes,
                };           

                var that = this;

                this.startLoading();

                this.$http
                    .post('company_data', {
                        token: localStorage.token,
                        payload: JSON.stringify(payload)
                    }, {
                        useCredentails: true
                    })
                    .then(function (response) {
                        that.stopLoading();

                        var data = response.data;
                        var status = (typeof data.status != 'undefined') ? data.status : 'error';
                        var message = (typeof data.message != 'undefined') ? data.message :
                            'Nossos serviços estão indisponíveis no momento. Tente mais tarde.';

                        switch (status) {
                            case 'ok':
                                swal({
                                    title: 'Done!',
                                    text: message,
                                    type: 'success',
                                    showConfirmButton: false,
                                    timer: 2000,
                                    onClose: () => {
                                        // ...
                                    }
                                }).catch(swal.noop);
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
                        console.log(error);
                    });
            }

        },
        validations() {
            if (this.validate) {
                return {
                    name: {
                        required,
                        minLength: minLength(1)
                    },
                    spend: {
                        required,
                        mustBePositive
                    },
                    min_spend: {
                        mustBeSmaller
                    },
                    max_spend: {
                        mustBeLarger
                    }
                };
            } else {
                return {
                    name: '',
                    spend: '',
                    min_spend: '',
                    max_spend: ''
                };
            }
        },
        mounted() {
            this.loadData();
        }
    };
</script>
<style>
</style>