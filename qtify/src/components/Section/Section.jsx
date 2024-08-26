import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Button } from "@mui/material";
import { fetchAlbumbs } from "../api/api";
import SongsCard from "../SongsCard/SongsCard";
import styles from "./Section.module.css";

const Section = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const data = await fetchAlbumbs();
      setAlbums(data);
    };
    fetchAlbums();
  }, []);

  return (
    <div style={{ margin: "15px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Top Albums</Typography>
        <Typography
          onClick={() => {
            console.log("Collapse clicked");
          }}
          className={styles.collapse}
          variant="h6"
        >
          Collapse
        </Typography>
      </div>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {albums.map((album) => (
          <Grid item key={album.id}>
            <SongsCard
              title={album.title}
              follows={album.follows}
              image={album.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section;
