<template>
  <div class="documentation">
    <v-row>
      <v-col cols="7">
        <p>
          <b>Quick start</b>
        </p>
        <p>
          Be sure you have Node.js installed, then clone the repository<br />
          <code>
            git clone https://github.com/dvilla8/instagram-planner.git
          </code>
        </p>
        <p>
          Move to the directory you have just cloned<br />
          <code>cd instagram-planner</code>
        </p>
        <p>
          Install dependencies and run this project<br />
          <code>npm install && npm run dev</code>
        </p>

        <br />

        <p>
          <b>Set up a profile</b>
        </p>

        <p>
          Define an Instagram profile in the <code>config/profiles.json</code> file.
        </p>
        <p>
          Create a folder in <code>config/profiles</code> for each one you have added.<br />
          You have to name it like the id of the user, not the username.<br />
        </p>
        <p>
          An avatar should be placed as <code>avatar.jpg</code> in your profile folder.<br />
          Create also a folder called <code>media</code> and put your images inside.
        </p>

        <br />

        <p>
          <b>Media support</b>
        </p>
        <p>
          Images should be declared as string in the <code>media</code> array configuration.<br />
          Videos are supported too, just define them as an object like this:

        <pre><code>{
  "type": "video",
  "name": "my-video.mp4",
  "cover": 12
}
</code></pre>
        </p>

        <br />

        <p>
          <b>Tips & Tricks</b>
        </p>

        <p>
          Press <kbd>R</kbd> to show some rulers.<br />
          Press <kbd>D</kbd> to toggle the dark theme.
        </p>

      </v-col>
      <v-col cols="5">

        <p>
          <b>Default configuration</b>
        </p>
        <pre>{
  "dxlliv": {
    "details":  {
      "name": "",
      "username": "dxlliv",
      "description": "Developer of things",
      "stats": {
        "followers": 50,
        "following": 50
      },
      "avatar": "avatar.jpg"
    },
    "media": [
      "3.jpg",
      "2.jpg",
      "1.jpg"
    ]
  }
}</pre>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Documentation"
}
</script>

<style scoped lang="scss">
.documentation {
  color: #2c3e50;
  max-width: 100%;

  b {
    opacity: 0.4;
  }

  p {
    margin-bottom: 10px;
  }

  code {
    opacity: 0.5;
    font-size: 14px;
  }

  pre {
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.025);
    border-radius: 6px;
    margin-top: 15px;
    padding: 15px;
    text-align: left;
    font-size: 14px;
  }
}
</style>