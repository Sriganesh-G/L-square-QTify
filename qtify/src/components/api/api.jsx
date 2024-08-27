import axios from "axios";

export const fetchAlbumbs = async () => {
  try {
    const res = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("Error fetching the data", e);
    return [];
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/new"
    );
    //   console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("Error fetching the new albums data", e);
    return [];
  }
};
export const fetchSongs = async () => {
  try {
    const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
    //   console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("Error fetching the new albums data", e);
    return [];
  }
};
export const fetchGenre = async () => {
  try {
    const res = await axios.get("https://qtify-backend-labs.crio.do/genres");
    //   console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("Error fetching the genre data", e);
    return [];
  }
};
