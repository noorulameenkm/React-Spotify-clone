import React, { useEffect } from "react";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";
import "./Footer.css";

function Footer({ spotify }) {
  const [{ currentTrack, playing }, dispatch] = useDataLayerValue();

  const playOrPauseSong = () => {
    if (!playing) {
      spotify.play({ spotify_uri: currentTrack.uri });
      dispatch({
        type: "SET_PLAYING",
        payload: true,
      });
    } else {
      dispatch({
        type: "SET_PLAYING",
        payload: false,
      });
    }
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src={currentTrack?.album.images[0].url}
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>{currentTrack?.name}</h4>
          <p>
            {currentTrack?.artists?.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            className="footer__icon"
            onClick={playOrPauseSong}
          />
        ) : (
          <PlayCircleOutlineIcon
            className="footer__icon"
            onClick={playOrPauseSong}
          />
        )}
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
