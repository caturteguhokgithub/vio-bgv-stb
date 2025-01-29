import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useBreakpoints = () => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const onlyXLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  return { onlySmallScreen, onlyMediumScreen, onlyLargeScreen };
};

export default useBreakpoints;
