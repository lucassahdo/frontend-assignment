<template>
    <div class="wrapper">
        <side-bar></side-bar>
        <div class="main-panel">
            <router-view name="header"></router-view>
            <div class="content">
                <router-view></router-view>
            </div>
            <dashboard-footer></dashboard-footer>
        </div>
    </div>
</template>
<script>
    import SideBar from './../dashboard/SideBar.vue';
    import DashboardFooter from './../dashboard/DashboardFooter.vue';
    
    export default {
        name:"dashboard-layout",
        components: {
            SideBar,
            DashboardFooter
        }
    };
</script>

<style>
</style>