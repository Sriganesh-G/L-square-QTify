/* import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import styles from "./SongsCard.module.css";
import { Stack } from "@mui/material";

const SongsCard = ({ title, image, follows }) => {
  return (
    <Stack
      className={styles.songsCard}
      sx={{
        marginLeft: "10px",
        overflow: "hidden",
        maxWidth: "159px",
        height: "auto",
        borderRadius: "12px",
      }}
    >
      <Card
        className={styles.songsCard}
        sx={{ maxWidth: "159px", height: "205px", borderRadius: "12px" }}
      >
        <CardMedia
          sx={{ height: "170px", width: "100%", backgroundColor: "aqua" }}
          image={image}
          title={title}
        />
        <Chip
          id={styles.chipStyle}
          className={styles.chipStyle}
          sx={{
            "& .MuiChip-label": {
              paddingLeft: "1px",
              paddingRight: "1px",
            },
          }}
          label={`${follows} Follows`}
          variant="outlined"
        />
      </Card>
      <Typography
        sx={{
          color: "white",
          height: "27px",
          fontSize: "14px",
          paddingTop: "6px",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default SongsCard;
 */
//-----------------------------------------------------------------------
/* import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import styles from "./SongsCard.module.css";
import { Stack } from "@mui/material";

const SongsCard = ({ title, image, follows, isSongs, likes }) => {
  return (
    <Stack
      className={styles.songsCard}
      sx={{
        marginLeft: "10px",
        overflow: "hidden",
        maxWidth: "159px",
        height: "auto",
        borderRadius: "12px",
      }}
    >
      <Card
        className={styles.songsCard}
        sx={{ maxWidth: "159px", height: "205px", borderRadius: "12px" }}
      >
        <CardMedia
          sx={{ height: "170px", width: "100%", backgroundColor: "aqua" }}
          image={image}
          title={title}
        />
        <Chip
          id={styles.chipStyle}
          className={styles.chipStyle}
          sx={{
            "& .MuiChip-label": {
              paddingLeft: "1px",
              paddingRight: "1px",
            },
          }}
          label={`${follows} ${isSongs ? "Likes" : "Follows"}`}
          variant="outlined"
        />
      </Card>
      <Typography
        sx={{
          color: "white",
          height: "27px",
          fontSize: "14px",
          paddingTop: "6px",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default SongsCard; */

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import styles from "./SongsCard.module.css";
import { Stack } from "@mui/material";

const SongsCard = ({ title, image, follows, likes, isSongs }) => {
  const displayValue = isSongs ? likes : follows;
  const displayText = isSongs ? "Likes" : "Follows";

  return (
    <Stack
      className={styles.songsCard}
      sx={{
        marginLeft: "10px",
        overflow: "hidden",
        maxWidth: "159px",
        height: "auto",
        borderRadius: "12px",
      }}
    >
      <Card
        className={styles.songsCard}
        sx={{ maxWidth: "159px", height: "205px", borderRadius: "12px" }}
      >
        <CardMedia
          sx={{ height: "170px", width: "100%", backgroundColor: "aqua" }}
          image={image}
          title={title}
        />
        <Chip
          id={styles.chipStyle}
          className={styles.chipStyle}
          sx={{
            "& .MuiChip-label": {
              paddingLeft: "1px",
              paddingRight: "1px",
            },
          }}
          label={`${displayValue} ${displayText}`}
          variant="outlined"
        />
      </Card>
      <Typography
        sx={{
          color: "white",
          height: "27px",
          fontSize: "14px",
          paddingTop: "6px",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default SongsCard;
