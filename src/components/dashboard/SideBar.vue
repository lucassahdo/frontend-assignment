<template>
    <div class="sidebar">
        <a route-name="dashboard" @click="linkClick">     
            <i :class="['icon']"></i>
            <p>Dashboard</p>
        </a>
        <a route-name="company_data" @click="linkClick">
            <i :class="['icon']"></i>
            <p>Company Data</p>
        </a>
        <a route-name="company_page" @click="linkClick">     
            <i :class="['icon']"></i>
            <p>Company Page</p>
        </a>
    </div>
</template>
<script>
    export default {
        name: "side-bar",
        methods: {
            linkClick(event) {
                var route_name = event.currentTarget.getAttribute('route-name');
                this.$router.push({name: route_name});
            }
        }
    };
</script>
<style>
</style>