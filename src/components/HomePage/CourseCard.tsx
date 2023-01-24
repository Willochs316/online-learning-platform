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
} from "./homePage.styled";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Image } from "../../common/Image";
import { Typography } from "@mui/material";

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
              <Image
                src={card.img}
                className={"courseCardImage"}
                alt="Course Card Image"
              />
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
                  <Typography
                    sx={{
                      margin: 0,
                      padding: 0,
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "-0.2px",
                      fontSize: "14px",
                      marginRight: "4px",
                      color: "#b4690e",
                    }}
                  >
                    {card.rate}
                  </Typography>

                  <GradeIcon
                    sx={{
                      color: "#E5981A",
                      width: "12px",
                      height: "12px",
                    }}
                  />
                  <GradeIcon
                    sx={{
                      color: "#E5981A",
                      width: "12px",
                      height: "12px",
                    }}
                  />
                  <GradeIcon
                    sx={{
                      color: "#E5981A",
                      width: "12px",
                      height: "12px",
                    }}
                  />
                  <GradeIcon
                    sx={{
                      color: "#E5981A",
                      width: "12px",
                      height: "12px",
                    }}
                  />
                  <StarHalfIcon
                    sx={{
                      color: "#E5981A",
                      width: "12px",
                      height: "12px",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "secondary.light",
                      whiteSpace: "nowrap",
                      margin: 0,
                      padding: 0,
                      fontWeight: 400,
                      lineHeight: 1.4,
                      fontSize: "12px",
                      marginLeft: "4px",
                    }}
                  >
                    {card.rateNum}
                  </Typography>
                </StarRatingContainer>
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
                  {card.bestSeller}
                </Typography>
              </CourseBadgeContainer>
            </CourseCardMainContent>
          </ScrollItemContainer>
        </CourseCarouselScrollItem>
      ))}
    </>
  );
};
