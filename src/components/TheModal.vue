<template>
<div v-if="isOpen" class="modal">
    <div class="modal-content">
        <h2>{{ title }}</h2>

        <slot></slot>

        <slot name="footer"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'TheModal',
    
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            default: ''
        },
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
$modal-background-color: #fff;

%center-content {
    align-items: center;
    display: flex;
    justify-content: center;
}
.modal {
    @extend %center-content;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
}
.modal-content {
    @extend %center-content;
    background-color: $modal-background-color;
    border-radius: 8px;
    flex-direction: column;
    max-width: 500px;
    padding: 20px;
    width: 80%;
}
</style>
