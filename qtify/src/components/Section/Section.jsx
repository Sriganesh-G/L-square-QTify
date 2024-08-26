/* import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Button } from "@mui/material";
import { fetchAlbumbs, fetchNewAlbums } from "../api/api";
import SongsCard from "../SongsCard/SongsCard";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = () => {
  // stroes the data of albums data fetched
  const [albums, setAlbums] = useState([]);
  //stores the fetched new albums data
  const [newAlbums, setNewAlbums] = useState([]);
  // state to set collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const topAlbum = await fetchAlbumbs();
      setAlbums(topAlbum);
      const newAlbumData = await fetchNewAlbums();
      setNewAlbums(newAlbumData);
    };
    fetchData();
  }, []);

  const handleCollapseCick = () => {
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed);
  };
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
          onClick={handleCollapseCick}
          className={styles.collapse}
          variant="h6"
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </Typography>
      </div>
      {isCollapsed ? (
        <Carousel newAlbums={newAlbums} topAlbum={albums} />
      ) : (
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
      )}
    </div>
  );
};

export default Section;
 */

import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { fetchAlbumbs, fetchNewAlbums } from "../api/api";
import SongsCard from "../SongsCard/SongsCard";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = () => {
  // State for Top Albums and New Albums data
  const [albums, setAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  // State for toggling Collapse
  const [isTopAlbumsCollapsed, setIsTopAlbumsCollapsed] = useState(false);
  const [isNewAlbumsCollapsed, setIsNewAlbumsCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const topAlbumsData = await fetchAlbumbs();
      setAlbums(topAlbumsData);
      const newAlbumData = await fetchNewAlbums();
      setNewAlbums(newAlbumData);
    };
    fetchData();
  }, []);

  const handleTopAlbumsCollapseClick = () => {
    setIsTopAlbumsCollapsed(!isTopAlbumsCollapsed);
  };

  const handleNewAlbumsCollapseClick = () => {
    setIsNewAlbumsCollapsed(!isNewAlbumsCollapsed);
  };

  return (
    <div style={{ margin: "15px" }}>
      {/* Top Albums Section */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Top Albums</Typography>
          <Typography
            onClick={handleTopAlbumsCollapseClick}
            className={styles.collapse}
            variant="h6"
          >
            {isTopAlbumsCollapsed ? "Show All" : "Collapse"}
          </Typography>
        </div>
        {isTopAlbumsCollapsed ? (
          <Carousel newAlbums={albums} />
        ) : (
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
        )}
      </div>

      {/* New Albums Section */}
      <div style={{ marginTop: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">New Albums</Typography>
          <Typography
            onClick={handleNewAlbumsCollapseClick}
            className={styles.collapse}
            variant="h6"
          >
            {isNewAlbumsCollapsed ? "Show All" : "Collapse"}
          </Typography>
        </div>
        {isNewAlbumsCollapsed ? (
          <Carousel newAlbums={newAlbums} />
        ) : (
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            {newAlbums.map((album) => (
              <Grid item key={album.id}>
                <SongsCard
                  title={album.title}
                  follows={album.follows}
                  image={album.image}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Section;
