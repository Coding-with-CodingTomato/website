<template>
  <div class="commandView" style="overflow: scroll !important">
    <div class="filter">
      <input type="checkbox" v-model="modCommandsVisible" />
      Mod Kommandos einblenden
    </div>
    <div class="commands">
      <CtCard v-for="command in commands" :key="command.name">
        <div class="card-content">
          <h3>{{ command.name }}</h3>
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

const allCommands = ref(
  [
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
      name: '!magischemiesmuschel %frage%',
      aliases: ['8ball', '🐚'],
      mod: false,
      description: 'Stelle der magischen Miesmuschel eine Frage.',
      example: 'Sehr fraglich.',
    },
    {
      name: '!bttv',
      aliases: ['bettertwitchtv', 'ffz', 'frankerfacez'],
      mod: false,
      description: 'Information zu den zusätzlichen Emotes',
      example:
        'blobDance pressF Konntest du die Emotes sehen? Wenn nicht, hast du die BetterTTV Erweiterung nicht installiert. [...]',
    },
    {
      name: '!coin',
      aliases: ['münze'],
      mod: false,
      description: 'Lässt dich eine Münze werfen und gibt Kopf oder Zahl aus.',
      example: 'Kopf!',
    },
    {
      name: '!coin %ausgabe%',
      aliases: ['münze'],
      mod: true,
      description:
        'Lässt dich eine Münze werfen und gibt Kopf oder Zahl aus und lässt Mods das Ergebnis beeinflussen.',
      example: '%ausgabe%!',
    },
    {
      name: '!shoutout %username%',
      aliases: ['so', 'shout-out'],
      mod: true,
      description:
        'Gibt für den User einen Shoutout, mit dem letzten Titel in den Chat ',
      example: 'Blabla',
    },
    {
      name: '!delete-command %command%',
      aliases: [],
      mod: true,
      description: 'Löscht den angegebenen Command aus der Datenbank.',
      example: 'Kommando gelöscht!',
    },
    {
      name: '!editor',
      aliases: ['vscode', 'ide'],
      mod: false,
      description: 'Gibt den Editor meiner Wahl aus.',
      example:
        '🖊️ Editor meiner Wahl: Visual Studio Code (https://code.visualstudio.com/)',
    },
    {
      name: '!emote',
      aliases: ['emotes'],
      mod: false,
      description: 'Zeigt alle verfügbaren Emotes und deren Schöpfer.',
      example:
        'coding36Bruschetta coding36Burning coding36Close Alle Emotes wurden von BlackDesire1305 erstellt. [...]',
    },
    {
      name: '!follow-age',
      aliases: ['followage'],
      mod: false,
      description: 'Gibt aus, wie lange du schon folgst.',
      example:
        '@BlackDesire1305, du folgst schon seit 420 Tagen, 5 Stunden, 42 Minuten und 69 Sekunden! Danke coding36Burning',
    },
    {
      name: '!leak',
      aliases: [],
      mod: false,
      description:
        'Zählt den Leak-Counter hoch und gibt aus, wie oft bereits geleakt wurde.',
      example:
        'CodingTomato hat schon 1337 mal seinen Namen oder Token geleakt. LUL coding36Angry',
    },
    {
      name: '!lurk',
      aliases: [],
      mod: false,
      description:
        'Zählt den Lurk-Counter hoch und gibt aus, wie oft bereits gelurkt wurde.',
      example: 'Es sind bereits 42 Zuschauer in den Lurk gegangen. Danke! 🍅💚',
    },
    {
      name: '!music',
      aliases: ['musik', 'song', 'lied'],
      mod: false,
      description: 'Zeigt dir, welche Musik aktuell spielt.',
      example: '🎶 Aktuell spielt: https://chillhop.ffm.to/creatorcred',
    },
    {
      name: '!overlay',
      aliases: ['chat', 'chatoverlay'],
      mod: false,
      description: 'Gibt Infos zum Chatoverlay',
      example:
        'Ihr könnt eure Nachrichten mit Hilfe meines Chat Overlays detaillierter gestallten. ➡️ Zum Beispiel könnt ihr eure Nachrichten <i>kursiv</i> [...]',
    },
    {
      name: '!prime',
      aliases: ['twitchprime', 'freesub'],
      mod: false,
      description: 'Gibt Infos zum Sub mithilfe von Twitch Prime',
      example:
        'Wenn du einen Amazon Prime Account hast, kannst du diesen mit Twitch verbinden und einen deiner Lieblingsstreamer [...]',
    },
    {
      name: '!set-command %name% %nachricht%',
      aliases: [],
      mod: true,
      description:
        'Fügt einen Command, der für alle verfügbar wird, zur Datenbank hinzu. ',
      example: 'Kommando gesetzt!',
    },
    {
      name: '!set-repo %repo-url%',
      aliases: [],
      mod: true,
      description: 'Setzt das aktuelle Github Repo in der Datenbank.',
      example: 'Github Repo gesetzt!',
    },
    {
      name: '!theme',
      aliases: [],
      mod: false,
      description: 'Gibt das aktuelle Theme meines Editors aus.',
      example:
        '🖼️ Aktuelles Theme: Tokyo Night ✅ Icons: Fluent Icons 📜 Schriftart: Fira Code',
    },
    {
      name: '!würfel',
      aliases: ['wuerfel', 'dice'],
      mod: false,
      description: 'Wirft einen Würfel (1-6) und gibt das Ergebnis aus.',
      example: 'Normaler Würfel: 6',
    },
    {
      name: '!würfel %anzahl%',
      aliases: ['wuerfel', 'dice'],
      mod: false,
      description: 'Wirft einen Würfel (1-%anzahl%) und gibt das Ergebnis aus.',
      example: 'Normaler Würfel: 42',
    },
    {
      name: '!würfel %(\\d*)W(\\d*)([+|-]\\d+)?%',
      aliases: ['wuerfel', 'dice'],
      mod: false,
      description: 'Wirft einen Tabletop-Würfel und gibt das Ergebnis aus.',
      example: 'Normaler Würfel: 42',
    },
    {
      name: '!zitate',
      aliases: [],
      mod: false,
      description: 'Gibt ein zufälliges Zitat aus der Datenbank im Chat aus.',
      example: '%zitat% - am %datum%',
    },
    {
      name: '!zitate id',
      aliases: [],
      mod: true,
      description: 'Gibt alle Zitate mit deren ID aus.',
      example:
        'Alle bisherigen Zitate ➡️ "%zitat%" - am %datum% - ID: %id% [...]',
    },
    {
      name: '!zitate all',
      aliases: [],
      mod: true,
      description: 'Gibt alle Zitate aus.',
      example: 'Alle bisherigen Zitate ➡️ "%zitat%" - am %datum% [...]',
    },
    {
      name: '!zitate add %zitat%',
      aliases: [],
      mod: true,
      description: 'Fügt der Datenbank ein neues Zitat hinzu.',
      example: 'Neues Zitat gesetzt!',
    },
    {
      name: '!zitate remove %zitat-id%',
      aliases: [],
      mod: true,
      description: 'Löscht das Zitat passend zur ID aus der Datenbank.',
      example: 'Zitat gelöscht!',
    },
  ].sort((a, b) => {
    const nameA = a.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
    const nameB = b.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }),
);

const commands = computed(() => {
  let newCommands = [];

  if (modCommandsVisible.value) {
    newCommands = allCommands.value.sort((a, b) =>
      a.mod === b.mod ? 0 : a.mod ? -1 : 1,
    );

    return newCommands;
  }

  return allCommands.value.filter((c) => !c.mod);
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
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;

  .card {
    aspect-ratio: 2 / 1;
  }

  .card-content {
    width: 100%;
    height: 100%;

    display: grid;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.25rem;
  }

  .aliases {
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 0.25rem;
  }

  p.description {
    width: 100%;
    font-size: 15px;
    line-height: normal;
  }

  p.example {
    width: 100%;
    font-size: 15px;
    line-height: normal;
    background-color: var(--background-color);
    padding: 0.25rem;
    border-radius: 5px;
  }
}

@media screen and (max-width: 1190px) {
  .commands {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    .card {
      aspect-ratio: 3 / 1;
    }
  }
}

@media screen and (max-width: 1190px) {
  .card {
    aspect-ratio: 2 / 1 !important;
  }
}

@media screen and (max-width: 790px) {
  .card {
    aspect-ratio: 1 / 1 !important;
  }
}

@media screen and (max-width: 590px) {
  .commands {
    grid-template-columns: 1fr;
    gap: 0.5rem;

    .card {
      aspect-ratio: 3/ 2 !important;
    }
  }
}
</style>
