<template>
    <div>
        <dashboard-card :cardClasses="['small']">
            <div slot="header">
                <h4 class="card-title">{{ pageTitle }}</h4>
                <button type="success" class="btn btn-primary btn-common btn-round pull-right">
                    <i class="now-ui-icons ui-1_check"></i>
                    Save
                </button>
            </div>
            <div>
                <form method="get" action="/" class="form-horizontal">
                    <div class="form-wrapper row">
                        <div class="width-1">
                            <label class="col-form-label">Company Name</label>
                            <input name="name" type="name" v-model="name" class="form-element width-fill">
                            <div class="error" v-if="!$v.name.required">Field is required</div>
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
                            <input name="name" type="name" value="" class="form-element width-fill">
                        </div>
                        <div class="width-2">
                            <label class="col-form-label">Maximum Spend</label>
                            <input name="name" type="name" value="" class="form-element width-fill">
                        </div>
                    </div>
                    <div class="form-wrapper row">
                        <div class="width-1">
                            <label class="col-form-label">Additional Notes</label>
                            <input name="name" type="name" value="" class="form-element width-fill">
                        </div>
                    </div>
                </form>
            </div>
        </dashboard-card>
    </div>
</template>
<script>
    import DashboardCard from './ui/DashboardCard.vue';
    import {
        required,
        minLength,
        between
    } from 'vuelidate/lib/validators'

    export default {
        name: "company-data",
        components: {
            DashboardCard
        },
        data() {
            return {
                pageTitle: 'Company Data',
                name: ''
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(1)
            }
        }

    };
</script>
<style>
</style>