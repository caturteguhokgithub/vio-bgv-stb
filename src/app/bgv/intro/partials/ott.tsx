import React, { Fragment } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import useBreakpoints from "@/themes/breakpoints";
import { SectionTitle } from "@/components/SectionTitle";
import VideoPlayer from "./videoPlayer";

export interface DataType {
  image?: string | any;
  bgColor?: string;
  title?: string | any;
}

export const data: DataType[] = [
  {
    image: "handsome-guys",
    title: "Handsome Guys",
  },
  {
    image: "lost-in-love",
    title: "Lost in Love",
  },
  {
    image: "my-love",
    title: "My Love Mix-Up",
  },
  {
    image: "redflag",
    title: "How to Spot a Red Flag",
  },
  {
    image: "running-man",
    title: "Running Man",
  },
];

export const CardItem = ({
  image,
  bgcolor,
  onClick,
  isActive,
  title,
}: {
  image: string;
  bgcolor?: string;
  onClick: () => void;
  isActive: boolean;
  title?: string;
}) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="22vh"
      bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      borderRadius={2}
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
        backgroundImage: `url(/images/ott/${image}.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography sx={{ opacity: 0, userSelect: "none", height: 0 }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default function SectionOtt() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [openModal, setOpenModal] = React.useState(false);

  const { onlySmallScreen, onlyLargeScreen } = useBreakpoints();

  const [favoriteRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: onlySmallScreen ? 2 : onlyLargeScreen ? 3 : 4,
      spacing: 15,
    },
  });

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Fragment>
      <Stack gap={2}>
        <SectionTitle label="Video Channel" />
        <Box
          ref={favoriteRef}
          className="keen-slider"
          // sx={{ overflow: "visible !important" }}
        >
          {data.map((item, index) => (
            <Box
              className={`keen-slider__slide`}
              key={index}
              sx={{
                transform: activeIndex === index ? "scale(1.2)" : "none",
                cursor: "pointer",
              }}
            >
              <CardItem
                image={item.image}
                bgcolor={item.bgColor}
                isActive={activeIndex === index}
                onClick={() => setOpenModal(true)}
              />
            </Box>
          ))}
        </Box>
      </Stack>
      <VideoPlayer
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
    </Fragment>
  );
}
