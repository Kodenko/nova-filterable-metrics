module.exports = {
    props: {
        filters: {
            type: Object
        },
        selectedFilters: {
            type: Object
        },
        url: {
            type: Object
        },
    },

    data() {
        return {
            modalOpen: false
        };
    },

    methods: {
        openModal() {
            this.modalOpen = true;
        },

        closeModal() {
            this.modalOpen = false;
        },

        selected(payload) {
            this.$emit('selected', payload)
        }
    }
}
