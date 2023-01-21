import * as React from "react";
import { BillboardContentBox } from "./homePage.styled";
import { Typography } from "@mui/material";
import firstBillboard from "../../assets/images/first-billboard-banner.jpg";
import secondBillboard from "../../assets/images/second-billboard-banner.jpg";

interface homeProps {}

export const BillboardCarousel: React.FunctionComponent<homeProps> = (
  props
) => {
  const [currentBillboard, setCurrentBillboard] = React.useState(0);

  const images = [
    {
      title: "Unlock the power of your people",
      subtitle:
        "Udemy Business is trusted by 12.5K+ companies around the world",
      anchorText: "Find out what we can do for yours",
      dot: ".",
      img: `${firstBillboard}`,
    },

    {
      title: "Learning that gets you",
      content:
        "Skills for your present (and your future). Get started with us.",
      img: `${secondBillboard}`,
    },
  ];

  return (
    <>
      {images.map((image, index) => (
        <div key={index}>
          <img
            width="1340"
            height="400"
            alt=""
            src={images[currentBillboard].img}
            style={{ cursor: "pointer" }}
          />

          <BillboardContentBox>
            <Typography data-purpose="billboard-title" variant="h1">
              {images[currentBillboard].title}
            </Typography>

            <Typography variant="subtitle1" data-purpose="billboard-subtitle">
              {images[currentBillboard].subtitle}{" "}
              <u>
                <a
                  style={{ color: "#5624d0" }}
                  target="_blank"
                  href="https://business.udemy.com/request-demo-mx/?ref=ub-hero-banner&amp;locale=en_US"
                >
                  {images[currentBillboard].anchorText}
                </a>
              </u>
              {images[currentBillboard].dot}
            </Typography>

            <Typography variant="body1" data-purpose="billboard-subtitle">
              {images[currentBillboard].content}
            </Typography>
          </BillboardContentBox>
        </div>
      ))}
    </>
  );
};
