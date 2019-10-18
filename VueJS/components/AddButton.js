export default Vue.component('add-button', {
    methods: {
        handleSubmit() {
            this.isAdding = false;
            this.$emit('submit', this.addText);
        },
        handleCancel() {
            this.isAdding = false;
        },
        handleStartAdding() {
            this.isAdding = true;
            this.addText = '';
        },
    }
    ,
    data() {
        return {
            isAdding: false,
            addText: '',
        };
    },
    template: `<div class="add-button"><button v-if="!isAdding" @click="handleStartAdding"><slot></slot></button>` +
        `<template v-else>` +
        `<input v-model="addText" />` +
        `<button @click="handleSubmit">Add</button>` +
        `<button @click="handleCancel">Cancel</button>` +
        `</template></div>`,
});
