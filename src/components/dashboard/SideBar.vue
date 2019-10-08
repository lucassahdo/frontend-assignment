<template>
    <div class="sidebar" data-color="intricately">
        <div class="logo">
            <a href="/#/dashboard">
                <img :src="logo">
            </a>
        </div>
        <div class="sidebar-wrapper" ref="sidebarScrollArea">
            <ul class="nav">
                <h2 class="sidebar-group-title">Business</h2>
                <li>
                    <a route-name="company_data" @click="linkClick">
                        <i :class="['icon']">></i>
                        <p>Company Data</p>
                    </a>
                </li>
                <li>
                    <a route-name="company_page" @click="linkClick">     
                        <i :class="['icon']">></i>
                        <p>Company Page</p>
                    </a>
                </li>

                <h2 class="sidebar-group-title">Settings</h2>  
                <li>
                    <a route-name="extra" @click="linkClick">     
                        <i :class="['icon']">></i>
                        <p>Extra</p>
                    </a>
                </li>

                <li>
                    <a route-name="dashboard" @click="linkClick">     
                        <i :class="['icon']">></i>
                        <p>Log out</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "side-bar",
        props: {
            logo: {
                type: String,
                default: 'https://assets.website-files.com/5938780be60b2223c6c362fd/5971e9b249826a6c5672a208_logo-full.svg'
            }
        },
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