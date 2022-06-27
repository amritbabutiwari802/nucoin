const Dkjrr = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
    <video width="100%" autoplay muted loop class="nucoin_player_v_1" >
      <source
        src="https://nucoin.com.au/assets/video/light3dcoin.mp4"
        type="video/mp4"
      />
      Your browser does not support HTML video.
    </video>`,
    }}
  />
);

export default Dkjrr;
