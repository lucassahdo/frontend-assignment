<template>
    <div>
        <dashboard-card :cardClasses="['small']">
            <div slot="header">
                <h4 class="card-title">{{ pageTitle }}</h4>
            </div>
            <div>
                <h2>No additional requirements here!</h2>
            </div>
        </dashboard-card>
    </div>
</template>
<script>
    import DashboardCard from './ui/DashboardCard.vue';

    export default {
        name: "company-page",
        components: {
            DashboardCard
        },
        data() {
            return {
                pageTitle: 'Company Page'
            }
        }
    };
</script>
<style>
</style>