import { Monoton, Poppins } from "next/font/google";

export const cfMonoton = Monoton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const cfPoppins = Poppins({
  weight: ["200", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
