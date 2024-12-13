import React from "react";
import { Icon } from "@iconify/react";
import { Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  blue,
  green,
  grey,
  lightBlue,
  orange,
  red,
  teal,
  yellow,
} from "@mui/material/colors";

const dataFavorite = [
  {
    icon: "cbi:okko-tv",
    bgColor: "#7a12ca",
  },
  {
    icon: "cbi:zdftivi",
    iconColor: orange[600],
  },
  {
    icon: "cbi:metv",
    iconColor: grey[900],
    bgColor: yellow[600],
  },
  {
    icon: "cbi:waiputv",
    iconColor: teal[400],
  },
  {
    icon: "cbi:skysports-mainevent",
    bgColor: red[600],
  },
  {
    icon: "cbi:apple-tv",
    iconColor: grey[800],
  },
  {
    icon: "cbi:molotovtv",
    iconColor: grey[900],
    bgColor: yellow[600],
  },
  {
    icon: "cbi:kion-tv",
    iconColor: lightBlue[800],
  },
  {
    icon: "cbi:ivi-tv",
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
      height="180px"
      bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      borderRadius={2}
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
      }}
    >
      <Icon icon={icon} height={150} color={iconcolor || "white"} />
    </Stack>
  );
};

export default function SectionLiveTv() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const [favoriteRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Stack gap={2}>
      <Typography color="white" fontSize="1.3rem" fontWeight={600}>
        Live TV Channel
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
