import * as React from "react";
import { BillboardContentBox, CarouselInner } from "./homePage.styled";
import { Typography } from "@mui/material";

interface homeProps {
  images: any[];
  currentBillboard?: any;
}

export const BillboardCarousel: React.FunctionComponent<homeProps> = (
  props
) => {
  const { images, currentBillboard } = props;

  return (
    <>
      {images.map((image: any[], index: number) => (
        <CarouselInner key={index}>
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
        </CarouselInner>
      ))}
    </>
  );
};
