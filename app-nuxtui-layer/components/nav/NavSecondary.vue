<script setup lang="ts">
  const { navlinksSecondary } = useNav()

  const dropdownItems = [
    [
      {
        slot: 'account',
        disabled: true,
      },
      ...navlinksSecondary.value.map((navlink) => ({
        slot: navlink.link.replace(/^\//, '').replaceAll('/', '-'),
        label: navlink.text,
        icon: navlink.icon,
        to: navlink.link,
        activeClass: 'text-primary',
      })),
    ],
  ]
</script>
<template>
  <UDropdown
    :popper="{ placement: 'bottom-start' }"
    :ui="{
      container: '!-ml-2 sm:ml-auto',
      rounded: '',
      width: 'w-full sm:w-48',
      item: { disabled: 'cursor-text select-text opacity-100' },
    }"
    :items="dropdownItems"
  >
    <UAvatar
      src="https://img.freepik.com/free-vector/confident-woman-with-curly-hair_1308-174956.jpg?t=st=1730420293~exp=1730423893~hmac=0a9a0df52282f8dd6392114aae799f2d47780a9b066db2ef1823db88c549583e&w=360"
      alt="Avatar"
      size="lg"
      class="sm:ml-2"
    />
    <template #account>
      <div class="my-1 space-x-1 w-full">
        <ProfileActions class="sm:!hidden" />
        <UButton class="font-bold my-4 sm:my-2">Sign In / Join Us</UButton>
      </div>
    </template>
  </UDropdown>
</template>
<style scoped></style>
