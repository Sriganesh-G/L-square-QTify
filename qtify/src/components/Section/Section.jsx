import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import {
  fetchAlbumbs,
  fetchNewAlbums,
  fetchGenre,
  fetchSongs,
} from "../api/api";
import SongsCard from "../SongsCard/SongsCard";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Section = () => {
  // State for Top Albums and New Albums data
  const [albums, setAlbums] = useState([]);
  // fetched data for new albums
  const [newAlbums, setNewAlbums] = useState([]);
  // fetched data for genre
  const [genre, setGenre] = useState([]);
  // fetched data for songs
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  // State for toggling Collapse
  const [isTopAlbumsCollapsed, setIsTopAlbumsCollapsed] = useState(true);
  const [isNewAlbumsCollapsed, setIsNewAlbumsCollapsed] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const topAlbumsData = await fetchAlbumbs();
      setAlbums(topAlbumsData);
      const newAlbumData = await fetchNewAlbums();
      setNewAlbums(newAlbumData);

      // songs data
      const songsData = await fetchSongs();
      setSongs(songsData);

      // genre data
      const genreData = await fetchGenre();
      console.log(genreData);
      setGenre([{ key: "all", label: "All" }, ...genreData.data]);
      // setGenre([{ id: "all", name: "All" }], ...genreData.data);
      console.log(genre);
    };
    fetchData();
  }, []);

  const handleTopAlbumsCollapseClick = () => {
    setIsTopAlbumsCollapsed(!isTopAlbumsCollapsed);
  };

  const handleNewAlbumsCollapseClick = () => {
    setIsNewAlbumsCollapsed(!isNewAlbumsCollapsed);
  };

  //handles the Tab Change values
  const handleTabChange = (e, newValue) => {
    setSelectedGenre(newValue);
    console.log(selectedGenre);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);
  /*   const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre); */

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
      {/* Songs genre tab section */}

      {/* Songs genre tab section */}
      <div style={{ marginTop: "40px" }}>
        <Typography variant="h6">Songs</Typography>
        {genre.length > 0 ? (
          <Tabs
            value={selectedGenre}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#34C94B",
              },
              "& .MuiTab-root": {
                color: "#FFFFFF",
                "&.Mui-selected": {
                  color: "#34C94B",
                },
              },
            }}
          >
            {genre.map((g) => (
              <Tab label={g.label} value={g.key} key={g.key} />
            ))}
          </Tabs>
        ) : (
          <Typography>Loading genres...</Typography>
        )}
        <Carousel songs={filteredSongs}>
          {filteredSongs.map((song) => (
            <Grid item key={song.id}>
              <SongsCard
                title={song.title}
                likes={song.likes}
                image={song.image}
                isSongs={true}
              />
            </Grid>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Section;
