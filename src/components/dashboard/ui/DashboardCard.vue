<template>
    <div class="card" :class="cardClasses">
        <div class="card-header" :class="headerClasses">
            <slot name="header">
                <h1 v-if="title" class="card-title">{{title}}</h1>
                <h3 v-if="subTitle" class="card-category">{{subTitle}}</h3>
                <p v-if="description" class="card-description">{{description}}</p>
            </slot>
        </div>

        <slot name="raw-content"></slot>

        <div class="card-body" :class="cardBodyClasses">
            <slot></slot>
        </div>

        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'dashboard-card',
        props: {
            title: String,
            subTitle: String,
            description: String,
            cardClasses: [String, Object, Array],
            cardBodyClasses: [String, Object, Array],
            headerClasses: [String, Object, Array]
        }
    };
</script>
<style>
</style>