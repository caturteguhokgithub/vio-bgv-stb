import React from "react";
import { Icon } from "@iconify/react";
import { Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { blue, green, grey, orange, red, yellow } from "@mui/material/colors";

const dataFavorite = [
  {
    icon: "cib:apple",
    iconColor: grey[800],
  },
  {
    icon: "cib:netflix",
    bgColor: red[600],
  },
  {
    icon: "cib:youtube",
    iconColor: red[600],
  },
  {
    icon: "token-branded:alpha",
    bgColor: blue[600],
  },
  {
    icon: "cib:intel",
    iconColor: blue[600],
  },
  {
    icon: "cib:amazon-aws",
    bgColor: orange[600],
  },
  {
    icon: "cib:overleaf",
    iconColor: green[600],
  },
  {
    icon: "cib:imdb",
    iconColor: yellow[600],
    bgColor: grey[900],
  },
  {
    icon: "cib:monzo",
    bgColor: green[600],
  },
];

export const CardItem = ({
  icon,
  bgcolor,
  iconcolor,
  onClick,
  isActive,
}: {
  icon: string;
  bgcolor?: string;
  iconcolor?: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="120px"
      bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      borderRadius={1.5}
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
      }}
    >
      <Icon icon={icon} height={60} color={iconcolor || "white"} />
    </Stack>
  );
};

export default function SectionFavorite() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const [favoriteRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 6,
      spacing: 15,
    },
  });

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Stack gap={2}>
      <Typography color="white" fontSize="1.3rem" fontWeight={600}>
        Favorite Apps
      </Typography>
      <Box ref={favoriteRef} className="keen-slider">
        {dataFavorite.map((item, index) => (
          <Box
            className={`keen-slider__slide`}
            key={index}
            sx={{
              transform: activeIndex === index ? "scale(1.2)" : "none",
            }}
          >
            <CardItem
              icon={item.icon}
              bgcolor={item.bgColor}
              iconcolor={item.iconColor}
              isActive={activeIndex === index}
              onClick={() => handleBoxClick(index)}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
