<script setup>
import { onBeforeMount, inject } from 'vue'

const _achievements_list = inject('_achievements_list')
const _all_achievements_list = inject('_all_achievements_list')
const getUserAchievements = inject('getUserAchievements')
const getAllAchievements = inject('getAllAchievements')

onBeforeMount(async () => {
  await getUserAchievements()
  await getAllAchievements()
})

function isAchievementUnlocked(achievementId) {
  return _achievements_list.value.some((ach) => ach.id === achievementId)
}
</script>

<template>
  
    
      <div
        :class="{
          'bg-base-100 card card-compact border-4 border-primary gap-x-3 w-7xs h-4xs': isAchievementUnlocked(achievement.id),
          'bg-base-100 card card-compact gap-x-3 w-7xs h-4xs': !isAchievementUnlocked(achievement.id)
        }"
        v-for="achievement in _all_achievements_list"
        :key="achievement.id"
      >
        <div class="card-body flex-row items-center">
          <img :src="achievement.image" class="w-3xs" />
          <div class="flex flex-col justify-between h-full py-2">
            <p
              :class="{
                'font-bold text-primary': isAchievementUnlocked(
                  achievement.id
                ),
                'font-bold text-primary': !isAchievementUnlocked(
                  achievement.id
                )
              }"
            >
              {{ achievement.name }}
            </p>
            <span
              :class="{
                'text-primary-content text-xs': isAchievementUnlocked(
                  achievement.id
                ),
                'text-xs text-neutral-content': !isAchievementUnlocked(
                  achievement.id
                )
              }"
              >{{ achievement.description }}</span
            >
          </div>
        </div>
      </div>
</template>

<style scoped>
.border-special {
  border-color: #ffdf00; /* Замените на нужный цвет */
}
</style>
