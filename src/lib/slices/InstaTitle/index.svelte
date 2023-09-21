<script>
  /** @type {import("@prismicio/client").Content.InstaTitleSlice} */
  // import client from '../prismic.js';

  export let slice;

  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount } from "svelte";

  let animate = false;

  onMount(() => {
    animate = true;
  });
</script>

{#if animate}
  <section
    class="visitekaartje"
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    in:fly={{ x: -200, easing: backOut, delay: 500 }}
  >
    <img src={slice.primary.camera.url} alt="cameraIcon" class="cameraIcon" />
    <h1 class="titleInstagram">{slice.primary.title}</h1>
    <img src={slice.primary.arrow.url} alt="arrowIcon" class="arrowIcon" />

    <img src={slice.primary.pic.url} alt="profilePic" class="profilePic" />
    <h2 class="profileName">{slice.primary.profilename}</h2>

    <h3 class="bio">{slice.primary.bio}</h3>

    <img src={slice.primary.circle.url} alt="circle1" class="circle1" />
    <img src={slice.primary.circle.url} alt="circle2" class="circle2" />
    <img src={slice.primary.circle.url} alt="circle3" class="circle3" />
    <img src={slice.primary.circle.url} alt="circle4" class="circle4" />

    <img src={slice.primary.story1.url} alt="instaStory1" class="instaStory1" />
    <h3 class="instaStoryInfo1">{slice.primary.story_info1}</h3>

    <img src={slice.primary.story2.url} alt="instaStory2" class="instaStory2" />
    <h3 class="instaStoryInfo2">{slice.primary.story_info2}</h3>

    <img src={slice.primary.story3.url} alt="instaStory3" class="instaStory3" />
    <h3 class="instaStoryInfo3">{slice.primary.story_info3}</h3>

    <img src={slice.primary.story4.url} alt="instaStory4" class="instaStory4" />
    <h3 class="instaStoryInfo4">{slice.primary.story_info4}</h3>

    <img
      src={slice.primary.black_stripe.url}
      alt="blackStripe1"
      class="blackStripe1"
    />
    <img
      src={slice.primary.black_stripe.url}
      alt="blackStripe2"
      class="blackStripe2"
    />
    <img
      src={slice.primary.black_stripe.url}
      alt="blackStripe3"
      class="blackStripe3"
    />
    <img
      src={slice.primary.black_stripe.url}
      alt="blackStripe4"
      class="blackStripe4"
    />

    <img src={slice.primary.github_pic.url} alt="githubPic" class="githubPic" />
    <img src={slice.primary.email_pic.url} alt="emailPic" class="emailPic" />
    <img
      src={slice.primary.telephone_pic.url}
      alt="telephonePic"
      class="telephonePic"
    />

    <h3 class="githubName">{slice.primary.github_name}</h3>
    <h3 class="emailName">{slice.primary.email_name}</h3>
    <h3 class="telephoneNumber">{slice.primary.telephone_number}</h3>

    <img src={slice.primary.scan_qr.url} alt="scanQr" class="scanQr" />

    <img src={slice.primary.home.url} alt="homeIcon" class="homeIcon" />
    <img src={slice.primary.search.url} alt="plusIcon" class="plusIcon" />
    <img src={slice.primary.plus.url} alt="searchIcon" class="searchIcon" />
    <img src={slice.primary.video.url} alt="videoIcon" class="videoIcon" />
  </section>
{/if}

<style>
  .visitekaartje {
    position: relative;
    max-width: 15em;
    padding-bottom: 25em;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 3em;
    border-radius: 16px;
    box-shadow: 0 4px 50px 30px rgba(1, 1, 1, 0.1);
    font-family: Georgia, "Times New Roman", Times, serif;
  }

  .cameraIcon {
    position: fixed;
    width: 1.5em;
    margin-left: 1em;
    margin-top: 0.8em;
  }

  .titleInstagram {
    position: absolute;
    font-size: 24px;
    margin-top: 0.5em;
    margin-left: 2.5em;
  }

  .arrowIcon {
    position: absolute;
    width: 1.5em;
    margin-left: 12.5em;
    margin-top: 0.8em;
  }

  .profilePic {
    position: absolute;
    width: 5em;
    margin-left: 1em;
    margin-top: 3.5em;
    border-radius: 200px 200px 200px 200px;
  }

  .profileName {
    position: absolute;
    max-width: 10em;
    font-size: 12px;
    margin-left: 9em;
    margin-top: 8em;
  }

  .bio {
    position: absolute;
    font-size: 9px;
    margin-top: 16em;
    margin-left: 3.5em;
  }

  .circle1 {
    position: absolute;
    width: 3em;
    margin-top: 10.3em;
    margin-left: 0.5em;
  }

  .circle2 {
    position: absolute;
    width: 3em;
    margin-top: 10.3em;
    margin-left: 4.1em;
  }

  .circle3 {
    position: absolute;
    width: 3em;
    margin-top: 10.3em;
    margin-left: 7.7em;
  }

  .circle4 {
    position: absolute;
    width: 3em;
    margin-top: 10.3em;
    margin-left: 11.3em;
  }

  .instaStory1 {
    position: absolute;
    width: 1.5em;
    margin-top: 11em;
    margin-left: 1.2em;
  }

  .instaStoryInfo1 {
    position: absolute;
    font-size: 8px;
    margin-top: 27em;
    margin-left: 2.2em;
  }

  .instaStory2 {
    position: absolute;
    width: 1.5em;
    margin-top: 11.1em;
    margin-left: 4.7em;
  }

  .instaStoryInfo2 {
    position: absolute;
    font-size: 8px;
    margin-top: 27em;
    margin-left: 9.5em;
  }

  .instaStory3 {
    position: absolute;
    width: 1.5em;
    margin-top: 11.1em;
    margin-left: 8.4em;
  }

  .instaStoryInfo3 {
    position: absolute;
    font-size: 8px;
    margin-top: 27em;
    margin-left: 16em;
  }

  .instaStory4 {
    position: absolute;
    width: 1.5em;
    margin-top: 11.2em;
    margin-left: 12.1em;
  }

  .instaStoryInfo4 {
    position: absolute;
    font-size: 8px;
    margin-top: 27em;
    margin-left: 23.6em;
  }

  .blackStripe1 {
    position: absolute;
    width: 9.2em;
    height: 1em;
    margin-top: 15.2em;
  }

  .githubPic {
    position: absolute;
    width: 1.5em;
    margin-top: 16em;
    margin-left: 0.3em;
  }

  .blackStripe2 {
    position: absolute;
    width: 9.2em;
    height: 1em;
    margin-top: 17.4em;
  }

  .emailPic {
    position: absolute;
    width: 1.5em;
    margin-top: 18.3em;
    margin-left: 0.3em;
  }

  .blackStripe3 {
    position: absolute;
    width: 9.2em;
    height: 1em;
    margin-top: 19.6em;
  }

  .telephonePic {
    position: absolute;
    width: 1.5em;
    margin-top: 20.4em;
    margin-left: 0.3em;
  }

  .blackStripe4 {
    position: absolute;
    width: 15em;
    height: 1em;
    margin-top: 21.8em;
  }

  .githubName {
    position: absolute;
    font-size: 8px;
    margin-top: 33em;
    margin-left: 4em;
  }

  .emailName {
    position: absolute;
    font-size: 7px;
    margin-top: 43em;
    margin-left: 4.4em;
  }

  .telephoneNumber {
    position: absolute;
    font-size: 8px;
    margin-top: 41.8em;
    margin-left: 3.8em;
  }

  .scanQr {
    position: absolute;
    width: 5em;
    margin-top: 14.7em;
    margin-left: 9.8em;
  }

  .homeIcon {
    position: absolute;
    width: 1.8em;
    margin-top: 22.7em;
    margin-left: 1em;
  }

  .searchIcon {
    position: absolute;
    width: 1.8em;
    margin-top: 22.7em;
    margin-left: 4.5em;
  }

  .plusIcon {
    position: absolute;
    width: 1.8em;
    margin-top: 22.7em;
    margin-left: 8em;
  }

  .videoIcon {
    position: absolute;
    width: 1.8em;
    margin-top: 22.7em;
    margin-left: 11.5em;
  }

  /*MEDIA QUERIES*/
  @media all and (min-width: 320px) {
    .visitekaartje {
      margin-left: 2em;
      margin-right: 2em;
    }
  }

  @media all and (min-width: 600px) {
  }

  @media all and (min-width: 900px) {
  }

  @media all and (min-width: 1200px) {
  }
</style>
