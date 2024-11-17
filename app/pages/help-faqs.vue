<script setup lang="ts">
definePageMeta({
  // layout: 'default',
  // name: 'help-faqs',
  // alias: 'help-faqs',
  title: 'Help & FAQs',
  description: `We're Here to Help: Your Support Hub!`,
  navOrder: '12',
  type: 'secondary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})
</script>
<template>
  <div class="faq-container">
    <header class="faq-header">
      <h1 class="faq-title">Dhewa Progress's Boutique FAQ</h1>
    </header>
    <main class="faq-content">
      <section class="faq-item">
        <h2 class="faq-question">What services do you offer?</h2>
        <p class="faq-answer">We offer a range of bespoke fashion items, from custom-tailored suits to elegant dresses,
          all crafted with the finest materials available in Masvingo, Zimbabwe.</p>
      </section>
      <section class="faq-item">
        <h2 class="faq-question">How can I place an order?</h2>
        <p class="faq-answer">Orders can be placed through our website, by phone, or in-store. We offer personalized
          consultations to ensure you get the perfect fit and design.</p>
      </section>
      <section class="faq-item">
        <h2 class="faq-question">Do you offer worldwide shipping?</h2>
        <p class="faq-answer">Yes, we provide worldwide shipping. Each order is carefully packaged to ensure it arrives
          safely and in pristine condition.</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.faq-container {
  @apply  min-h-screen flex flex-col items-center justify-center p-6 bg-white  dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300 border-gray-400 dark:border-gray-300;
}

.faq-header {
  @apply w-full text-center mb-8;
}

.faq-title {
  @apply text-3xl font-bold mb-4;
}

.faq-content {
  @apply w-full max-w-4xl;
}

.faq-item {
  @apply mb-8 p-6 border border-gray-300 dark:border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300;
}

.faq-question {
  @apply text-2xl font-semibold mb-2;
}

.faq-answer {
  @apply text-lg leading-relaxed;
}
</style>

<style scoped></style>
