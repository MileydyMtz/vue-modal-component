<template>
<div>
    <button @click="openModal">Abrir modal</button>

    <TheModal :isOpen="isModalOpen" @close="closeModal" title="The Modal">

        <p>Mi contenido personalizado</p>

        <template v-slot:footer>
            <button @click="closeModal">Cerrar</button>
        </template>
    </TheModal>
</div>
</template>

<script>
import TheModal from './components/TheModal.vue'

export default {
    components: {
        TheModal
    },
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        }
    }
}
</script>

<style scoped>
button {
    background-color: #007BFF;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    margin-top: 20px;
    padding: 10px;
}
</style>
