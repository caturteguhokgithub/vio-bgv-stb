import React from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import CompanyLogo from "@/components/CompanyLogo/page";
import useBreakpoints from "@/themes/breakpoints";
import { grey } from "@mui/material/colors";

export default function SearchBox({
  setOpenSearch,
  openSearch,
}: {
  setOpenSearch?: (open: boolean) => void;
  openSearch?: boolean;
}) {
  const router = useRouter();

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      const searchQuery = event.target.value;
      if (searchQuery === "") {
        router.push(`/`);
      } else {
        router.push(`/intro/search?query=${searchQuery}`);
      }
      setOpenSearch && setOpenSearch(false);
    }
  };

  const { onlyMediumScreen } = useBreakpoints();

  const textFieldRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (openSearch && textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [openSearch]);

  return (
    <Stack p={3} direction="row" gap={3}>
      {!onlyMediumScreen && <CompanyLogo dark />}
      <TextField
        fullWidth
        inputRef={textFieldRef}
        onKeyDown={handleKeyPress}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="mdi:magnify" color="white" height={28} />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          ".MuiInputBase-root": {
            borderRadius: 2,
            "&:hover": {
              outline: `1px solid ${grey[400]}`,
            },
          },
          ".MuiInputBase-input": {
            color: "white",
          },
          fieldset: {
            borderColor: grey[700],
          },
        }}
      />
    </Stack>
  );
}
