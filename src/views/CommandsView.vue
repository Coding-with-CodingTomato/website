<template>
  <div class="commandView">
    <div class="filter">
      <input type="checkbox" v-model="modCommandsVisible" />
      Mod Kommandos einblenden
    </div>
    <div class="commands">
      <CtCard v-for="command in commands" :key="command.name">
        <div class="card-content">
          <h4>{{ command.name }}</h4>
          <div class="aliases">
            <CtChip v-if="command.mod" :color="'#00ad03'">Mod</CtChip>
            <CtChip v-for="alias in command.aliases" :key="alias">{{
              alias
            }}</CtChip>
          </div>
          <p class="description">{{ command.description }}</p>
          <p class="example">{{ command.example }}</p>
        </div>
      </CtCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CtCard from '../components/CtCard.vue';
import CtChip from '../components/CtChip.vue';

const modCommandsVisible = ref(false);

const allCommands = ref([
  {
    name: '!github',
    aliases: ['gh'],
    mod: false,
    description: 'Sendet das aktuelle Repository in den Chat',
    example:
      '🪐 Das aktuelle Repository: %url% ➡️ Alle Repositories aus dem Stream: %url%',
  },
  {
    name: '!discord',
    aliases: ['dc'],
    mod: false,
    description: 'Sendet den Einladungslink für den Discord-Server',
    example:
      '☎️ Schaut auch auf unserem Discord vorbei: https://discord.gg/Qs7sSq25JU',
  },
  {
    name: '!shoutout %username%',
    aliases: ['so'],
    mod: true,
    description: 'Gibt für den definierten User einen Shoutout',
    example: 'Blabla',
  },
]);

const commands = computed(() => {
  if (!modCommandsVisible.value) {
    return allCommands.value.filter((c) => !c.mod);
  }

  return allCommands.value;
});
</script>

<style scoped lang="scss">
.commandsView {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.filter {
  padding: 1rem 1.25rem 0 1.25rem;
}
.commands {
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;

  .card {
    aspect-ratio: 2 / 1;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .aliases {
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 0.25rem;
  }

  p.description {
    font-size: 12px;
    line-height: normal;
  }

  p.example {
    font-size: 10px;
    line-height: normal;
    background-color: var(--background-color);
    padding: 0.25rem;
    border-radius: 5px;
  }
}
</style>
