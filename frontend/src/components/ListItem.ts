import Vue from 'vue';

export default Vue.component('list-item', {
  props: ['item'],
  data() {
    return {
      isEditing: false,
      editText: '',
    };
  },
  methods: {
    toggleEditing() {
      this.isEditing = !this.isEditing;
      this.editText = this.item.description;
    },
    handleSave() {
      this.isEditing = false;
      this.$emit('input', { ...this.item, description: this.editText });
    },
    handleDelete() {
      this.$emit('delete', this.item);
    },
  },
  template: `<div class="list-item">
                    {{item.id}}.
                <template v-if="isEditing">
                    <input v-model="editText" />
                </template>
                <span v-else>{{item.description}}</span>
                <div class="list-item-buttons">
                    <template v-if="isEditing">
                        <button class="save" @click="handleSave">Save</button>
                        <button class="cancel" @click="toggleEditing">Cancel</button>
                    </template>
                    <template v-else>
                        <button class="edit" @click="toggleEditing">Edit</button>
                        <button class="delete" @click="handleDelete">Delete</button>
                    </template>
                </div>
             </div>`,
});
