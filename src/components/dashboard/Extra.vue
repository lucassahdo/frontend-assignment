<template>
    <dashboard-card :cardClasses="['small']">
        <div slot="header">
            <h4 class="card-title">{{ pageTitle }}</h4>
        </div>
        <div class="row">
            <div class="width-2">
                <h3>> Intricately Challange</h3>
                <p>
                    The Intricately Proposed Project is a test of knowledge of the Vue.js frontend framework. 
                    The goal of the project is to provide a crud environment for managing the company information.
                </p>

                <br>
                <h3>> Project Tech Stack</h3>
                <h4>- Frontend:</h4>
                <p>1. Vue.js</p>
                <p>2. SASS</p>

                <h4>- Backend:</h4>
                <p>1. PHP 7.2 Lumen Framework</p>
                <p>2. MongoDB</p>
                <p>3. Nginx</p>
                <p>4. Digital Ocean - Ubuntu 16.04</p>
            </div>
            <div class="width-2">
                <h3>> Links</h3>
                <div class="wrapper">
                    <div style="width: 100%; display: block">
                        <button class="btn btn-common btn-danger width-fill"
                            onclick="window.open('https://github.com/lucassahdo/frontend-assignment','_blank')">
                            <i><srong>G</srong></i> Github - Source Code
                        </button>
                    </div>

                    <div style="width: 100%; display: block">
                        <button class="btn btn-common btn-warning width-fill" 
                            onclick="window.open('http://sahdo.me','_blank')">
                            <i><srong>S</srong></i> Website Lucas Sahdo
                        </button>
                    </div>

                    <div style="width: 100%; display: block">
                        <button class="btn btn-common btn-success width-fill"
                            onclick="window.open('https://www.linkedin.com/in/lucassahdo','_blank')">
                            <i><srong>L</srong></i> Linkedin Lucas Sahdo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </dashboard-card>
</template>
<script>
    import DashboardCard from './ui/DashboardCard.vue';
    export default {
        name: "extra",
        components: {
            DashboardCard
        },
        data() {
            return {
                pageTitle: 'Extra'
            }
        }
    }
</script>
<style>
</style>