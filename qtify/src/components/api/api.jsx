import axios from "axios";

export const fetchAlbumbs = async () => {
  try {
    const res = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("Error fetching the data", e);
    return [];
  }
};
