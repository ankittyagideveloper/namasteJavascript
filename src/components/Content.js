import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./Content.css";

const Content = () => {
  const [vids, setvids] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&key=AIzaSyA5S3uU7htP_rqhVWmwNPT6CWGMuDF2hLw"
      )
      .then((response) => {
        console.log(response);
        if (response.data) {
          let { items } = response.data;
          setvids(items);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //GET https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&key=[YOUR_API_KEY] HTTP/1.1
  //AIzaSyA5S3uU7htP_rqhVWmwNPT6CWGMuDF2hLw
  return loading ? (
    <div>loading...</div>
  ) : (
    <Container maxWidth="md">
      <div className="player-wrapper">
        {vids.map((x) => (
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${x.snippet.resourceId.videoId}`}
            muted={false}
            playing={false}
            width="100%"
            height="100%"
          />
        ))}
      </div>
    </Container>
  );
};

export default Content;
