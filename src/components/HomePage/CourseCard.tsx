import * as React from "react";
import {
  CourseCarouselScrollItem,
  CourseCardMainContent,
  CourseTitleAnchorTag,
  CourseTitleContainer,
  CourseCardImageContainer,
  ScrollItemContainer,
  CourseInstructorContainer,
  CourseCardStarRate,
  StarRatingContainer,
  PriceTextContainer,
  CurrentPriceContainer,
  OriginalPriceContainer,
  OriginalPriceText,
  CourseBadgeContainer,
  CourseCardImage,
  RateIcon,
  StarIconContent,
  RateNumContent,
  CourseCardRateNum,
} from "./homePage.styled";

import GradeIcon from "@mui/icons-material/Grade";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Typography } from "@mui/material";

interface CourseCardCarousel {
  courseCard: any[];
  bestSelling: any;
}

export const CourseCardCarousel: React.FunctionComponent<CourseCardCarousel> = (
  props
) => {
  const { courseCard, bestSelling } = props;

  // const courseRating = [
  //   {
  //     starfilled: StarFilledIcon,
  //     starhalf: StarHalfIcon,
  //     staroutline: StarOutlineIcon,
  //   },
  // ];

  return (
    <>
      {courseCard.map((card, index) => (
        <CourseCarouselScrollItem>
          <ScrollItemContainer>
            <CourseCardImageContainer>
              <CourseCardImage src={card.img} alt="Course Card Image" />
            </CourseCardImageContainer>

            <CourseCardMainContent>
              <CourseTitleContainer>
                <CourseTitleAnchorTag
                  sx={{
                    ":hover": {
                      color: "#1c1d1f",
                    },
                  }}
                >
                  {card.title}
                </CourseTitleAnchorTag>
              </CourseTitleContainer>

              <CourseInstructorContainer>
                <Typography
                  sx={{
                    color: "secondary.light",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    fontSize: "12px",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                  }}
                >
                  {card.instructor}
                </Typography>
              </CourseInstructorContainer>

              <CourseCardStarRate>
                <StarRatingContainer>
                  <CourseCardRateNum>{card.rate}</CourseCardRateNum>

                  <StarIconContent>
                    <RateIcon src={card.starfilled} alt="" />
                    <RateIcon src={card.starfilled} alt="" />
                    <RateIcon src={card.starfilled} alt="" />
                    <RateIcon src={card.starfilled} alt="" />
                    <RateIcon src={card.starhalf} alt="" />
                  </StarIconContent>
                </StarRatingContainer>

                <RateNumContent>{card.rateNum}</RateNumContent>
              </CourseCardStarRate>

              <PriceTextContainer>
                <CurrentPriceContainer>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      letterSpacing: "-0.2px",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {card.currentPrice}
                  </Typography>
                </CurrentPriceContainer>

                <OriginalPriceContainer>
                  <OriginalPriceText>
                    <s>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: 1,
                          whiteSpace: "nowrap",
                          color: "secondary.light",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        {card.originalPrice}
                      </Typography>
                    </s>
                  </OriginalPriceText>
                </OriginalPriceContainer>
              </PriceTextContainer>

              {card.bestSeller ? (
                <CourseBadgeContainer>
                  <Typography
                    sx={{
                      margin: 0,
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "-0.2px",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 8px",
                      whiteSpace: "nowrap",
                      backgroundColor: "#eceb98",
                      color: "#3d3c0a",
                    }}
                  >
                    Bestseller
                  </Typography>
                </CourseBadgeContainer>
              ) : null}
            </CourseCardMainContent>
          </ScrollItemContainer>
        </CourseCarouselScrollItem>
      ))}
    </>
  );
};
