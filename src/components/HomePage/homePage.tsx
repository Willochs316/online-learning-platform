import * as React from "react";
import "./homePage.css";
import {
  TopBillBoardCarousel,
  TopCarouselItems,
  CourseCarouselScrollItem,
  DiscoverCourseComponent,
  AuthorCourseCardContainer,
  AuthorCourseHeaderTitle,
  AuthorCourseTitleAnchor,
  AuthorCourseDetails,
  CourseUnitCard,
  MainCarouselBackButton,
  MainCarouselForwardButton,
  HomeDiscoverCourseContainer,
  // MainComponentMargin,
  CourseCardHeaderTitle,
  TopHomePageBillboardCarousel,
  AppHomeDataContent,
  DiscoverCourseTitleAnchor,
  DiscoverCourseTitle,
  DiscoverCourseTitleContainer,
  // MainUnitTitleContent,
  ImageContainer,
  DiscoverCourseCardCarouselContainer,
  ScrollItemContainer,
  Span,
  AppHomePageWrapper,
  AuthorTitleContainer,
  CourseCardStarRate,
  StarRatingContainer,
  PriceTextContainer,
  CurrentPriceContainer,
  OriginalPriceContainer,
  OriginalPriceText,
  AuthorCourseBadgeContainer,
} from "./homePage.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import WebRtc from "../../assets/images/web-rtc.jpeg";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { CommonText } from "../../common/CustomText";
import { Image } from "../../common/Image";
import { Button, Typography } from "@mui/material";

interface homeProps {}

export const HomePage: React.FunctionComponent<homeProps> = (props) => {
  return (
    <AppHomePageWrapper>
      <AppHomeDataContent>
        <TopHomePageBillboardCarousel>
          <TopBillBoardCarousel>
            <TopCarouselItems></TopCarouselItems>
          </TopBillBoardCarousel>
        </TopHomePageBillboardCarousel>

        <HomeDiscoverCourseContainer>
          {/* <MainComponentMargin> */}
          <CourseCardHeaderTitle>What to learn next</CourseCardHeaderTitle>

          <DiscoverCourseComponent>
            <DiscoverCourseTitleContainer>
              {/* <MainUnitTitleContent> */}

              <DiscoverCourseTitle>
                <div>
                  Because you viewed "
                  <DiscoverCourseTitleAnchor>
                    <Span
                      sx={{
                        ":hover": {
                          color: "#401B9C",
                        },
                      }}
                    >
                      <CommonText
                        content={
                          "Create a Netflix clone from Scratch: JavaScript"
                        }
                        className={""}
                      />
                    </Span>
                  </DiscoverCourseTitleAnchor>
                </div>

                <div>
                  <DiscoverCourseTitleAnchor>
                    <Span
                      sx={{
                        ":hover": {
                          color: "#401B9C",
                        },
                      }}
                    >
                      <CommonText content={"PHP + MySQL"} className={""} />
                    </Span>
                  </DiscoverCourseTitleAnchor>
                  "
                </div>
              </DiscoverCourseTitle>
              {/* </MainUnitTitleContent> */}
            </DiscoverCourseTitleContainer>

            <DiscoverCourseCardCarouselContainer>
              <CourseUnitCard>
                <CourseCarouselScrollItem>
                  <ScrollItemContainer>
                    <ImageContainer>
                      <Image
                        src={WebRtc}
                        className={"courseCardImage"}
                        alt="Course Card Image"
                      />
                    </ImageContainer>

                    <AuthorCourseCardContainer>
                      <AuthorCourseDetails>
                        <AuthorCourseTitleAnchor>
                          <AuthorCourseHeaderTitle>
                            <CommonText
                              content={"Discord Clone - Learn MERN"}
                              className={""}
                            />

                            <CommonText
                              content={"Stack with WebRTC and SocketIO"}
                              className="courseEllipsisText"
                            />
                          </AuthorCourseHeaderTitle>
                        </AuthorCourseTitleAnchor>

                        <AuthorTitleContainer>
                          <CommonText
                            content={"Marek Gryszkiewicz"}
                            className="authorTitle"
                          />
                        </AuthorTitleContainer>

                        <CourseCardStarRate>
                          <StarRatingContainer>
                            <CommonText
                              content={"4.6"}
                              className="starHeadingNumber"
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

                            <CommonText content={"(124)"} className="reviews" />
                          </StarRatingContainer>
                        </CourseCardStarRate>

                        <PriceTextContainer>
                          <CurrentPriceContainer>
                            <CommonText
                              content={"₦3,900"}
                              className="currentPriceText"
                            />
                          </CurrentPriceContainer>

                          <OriginalPriceContainer>
                            <OriginalPriceText>
                              <s>
                                <CommonText
                                  content={"₦17,500"}
                                  className={""}
                                />
                              </s>
                            </OriginalPriceText>
                          </OriginalPriceContainer>
                        </PriceTextContainer>

                        <AuthorCourseBadgeContainer>
                          <CommonText
                            content={"Bestseller"}
                            className={"courseBadge"}
                          />
                        </AuthorCourseBadgeContainer>
                      </AuthorCourseDetails>
                    </AuthorCourseCardContainer>
                  </ScrollItemContainer>
                </CourseCarouselScrollItem>
              </CourseUnitCard>

              <MainCarouselBackButton>
                <ArrowBackIosNewOutlinedIcon />
              </MainCarouselBackButton>

              <MainCarouselForwardButton>
                <ArrowForwardIosOutlinedIcon />
              </MainCarouselForwardButton>
            </DiscoverCourseCardCarouselContainer>
          </DiscoverCourseComponent>
          {/* </MainComponentMargin> */}
        </HomeDiscoverCourseContainer>
      </AppHomeDataContent>
    </AppHomePageWrapper>
  );
};
