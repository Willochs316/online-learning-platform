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
import { Typography } from "@mui/material";
import starfilled from "../../assets/svgs/star-filled-rate.svg";
import staroutline from "../../assets/svgs/star-rate-rating-outline.svg";
import starhalf from "../../assets/svgs/star-half-rate.svg";

interface CourseCardCarousel {
  courseCard: any[];
}

export const CourseCardCarousel: React.FunctionComponent<CourseCardCarousel> = (
  props
) => {
  const { courseCard } = props;

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
                    {card.staroutline ? (
                      <>
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starhalf} alt="" />
                      </>
                    ) : card.starhalf ? (
                      <>
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={staroutline} alt="" />
                      </>
                    ) : (
                      <>
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starfilled} alt="" />
                        <RateIcon src={starhalf} alt="" />
                        <RateIcon src={staroutline} alt="" />
                      </>
                    )}
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
