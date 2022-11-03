<script setup lang="ts">
import { onMounted, Ref, ref } from "vue"
import axios from "axios"

const btn: Ref<number> = ref(0)
const name = ref(import.meta.env.VITE_FACILITY_NAME)
const discordLink = ref(import.meta.env.VITE_DISCORD_INVITE)
const baseUrl = import.meta.env.VITE_API_BASE_URL
const myUrl = window.location.href

onMounted(async () => {
  try {
    let result = await axios.get(`${baseUrl}/v1/user/`, {
      withCredentials: true,
    })
    if (result.data.discord_id !== "") {
      btn.value = 2
    } else {
      btn.value = 1
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      btn.value = 3
      return
    }
    btn.value = 1
  }
})

const link = () => {
  window.location.href = `${baseUrl}/v1/user/discord/link?redirect=${myUrl}`
}

const goTo = (link: string) => {
  window.location.href = link
}
</script>

<template>
  <div class="grid place-items-center h-screen">
    <div class="flex flex-col" style="width: 500px">
      <div>
        <h1 class="text-4xl font-bold text-center">{{ name }}</h1>
      </div>
      <div class="flex">
        <div v-if="btn === 3 || btn === 0" class="w-full text-center">
          <button
          @click="goTo(`${baseUrl}/v1/user/login?redirect=${myUrl}`)"
          class="btn dark:bg-colorado-blue text-white w-full"
            v-if="btn === 3"
          >
            Login with VATSIM
          </button>
          <span v-else>Loading...</span>
        </div>
        <div v-else class="flex w-full">
          <div class="w-1/2">
            <button
              class="btn dark:bg-colorado-blue text-white"
              @click="goTo(discordLink)"
            >
              Join Discord!
            </button>
          </div>
          <div class="w-1/2 text-right">
            <button
              class="btn dark:bg-gray-400 dark:text-black text-white"
              v-if="btn === 0"
              disabled
            >
              Loading...
            </button>
            <button class="btn text-white" v-if="btn === 1" @click="link">
              Link Discord
            </button>
            <button
              class="btn dark:border-green-700 dark:bg-transparent border-1 border-green-700 dark:text-green-400"
              v-if="btn === 2"
            >
              ✓ Discord Linked
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
