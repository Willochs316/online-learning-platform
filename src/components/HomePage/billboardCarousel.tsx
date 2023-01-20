import * as React from "react";
import {
  TopBillBoardCarousel,
  TopCarouselItems,
  TopHomePageBillboardCarousel,
  BillBoardBannerContainer,
  BillboardContentBox,
  BillboardBackButton,
  BillboardForwardButton,
} from "./homePage.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Image } from "../../common/Image";
import { Typography } from "@mui/material";
import firstBillboard from "../../assets/images/first-billboard-banner.jpg";
import secondBillboard from "../../assets/images/second-billboard-banner.jpg";

interface homeProps {}

export const BillboardCarousel: React.FunctionComponent<homeProps> = (
  props
) => {
  const images = [
    {
      title: "Unlock the power of your people",
      subtitle:
        "Udemy Business is trusted by 12.5K+ companies around the world.",
      anchorText: "Find out what we can do for yours",
      img: `${firstBillboard}`,
    },

    {
      title: "Learning that gets you",
      subtitle:
        "Skills for your present (and your future). Get started with us.",
      img: `${secondBillboard}`,
    },
  ];

  return (
    <>
      {/* <BillBoardBannerContainer>
        <img width="1340" height="400" alt="" src={secondBillboard} />
        <BillboardContentBox>
          <Typography data-purpose="billboard-title" variant="h1">
            Learning that gets you
          </Typography>
          <Typography variant="body1" data-purpose="billboard-subtitle">
            Skills for your present (and your future). Get started with us.{" "}
          </Typography>
        </BillboardContentBox>
        <BillboardBackButton>
          <ArrowBackIosNewOutlinedIcon />
        </BillboardBackButton>
        <BillboardForwardButton>
          <ArrowForwardIosOutlinedIcon />
        </BillboardForwardButton>
      </BillBoardBannerContainer> */}
    </>
  );
};
