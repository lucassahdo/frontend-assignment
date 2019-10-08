<template>
    <dashboard-modal :show="show" @close="closeModal">
        <div slot="header">
            <h4 class="card-title">Additional Notes</h4>
        </div>
        <div slot="body">
            <textarea name="additional_notes" v-model="additional_notes" class="width-fill"></textarea>
        </div>
    </dashboard-modal>
</template>
<script>
    import DashboardModal from './ui/DashboardModal.vue';
    export default {
        name: 'modal-notes',
        components: {
            DashboardModal
        },
        props: {
            show: Boolean
        },
        data() {
            return {
                additional_notes: ''
            }
        },
        methods: {
            closeModal(status) {
                if (status) {
                    this.$store.state.additional_notes = this.additional_notes;
                }
                this.$emit('close', status);
            }
        },        
        watch: {
            show: function (status) {
                console.log(this.$store.state.additional_notes);
                if (status)
                    this.additional_notes = this.$store.state.additional_notes;
            }
        }
    }
</script>
<style scoped>
    textarea {
        min-height: 150px;
    }
</style>