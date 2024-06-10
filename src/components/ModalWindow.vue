<!-- Modal.vue -->
<template>
  <dialog ref="modal" class="modal">
    <div class="modal-box flex flex-col items-center">
      <form method="dialog">
        <button type="button" class="btn btn-sm btn-circle btn-ghost absolute right-2" @click="hideModal">✕</button>
      </form>
      <h3 class="font-bold text-lg btn-sm m-2">Скачать приложение</h3>
      <p class="text-sm">Пожалуйста, скачайте наше приложение для лучшего опыта.</p>
      <button class="btn btn-primary mt-4" @click="downloadApp">Скачать</button>
    </div>
  </dialog>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
  showModal: Boolean,
});

const modal = ref(null);

const hideModal = () => {
  modal.value.close();
};

const downloadApp = () => {
  const fileUrl = '/ProMath.apk'; // URL файла в папке public
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'ProMath.apk'); // задайте имя файла
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  hideModal();
};


watch(() => props.showModal, (newValue) => {
  if (newValue) {
    modal.value.showModal();
  } else {
    modal.value.close();
  }
});
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
