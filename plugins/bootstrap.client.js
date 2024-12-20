import { Modal } from 'bootstrap';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Modal', Modal);
})
