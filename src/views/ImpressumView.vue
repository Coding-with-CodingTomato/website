<template>
  <div class="impressum">
    <h1>Impressum</h1>
    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
    <p>
      Coding Tomato<br />
      &#91;Stra&szlig;e&#93;<br />
      &#91;Postleitzahl&#93; &#91;Ort&#93;
    </p>

    <h2>Kontakt</h2>
    <p>
      Telefon: &#91;Telefonnummer&#93;<br />
      E-Mail: me@codingtomato.de
    </p>

    <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
  </div>
</template>

<style scoped lang="scss">
.impressum {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  h1 {
    text-align: center;
    line-height: normal;
    width: 80%;
  }
  b {
    color: var(--primary-color);
  }
}
</style>
