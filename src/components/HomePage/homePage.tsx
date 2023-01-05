import * as React from "react";
import "./homePage.css";
import {
  CarouselButton,
  TopCarouselContainer,
  CarouselItems,
  CarouselScrollItem,
  CarouselSecondButton,
  ComponentMargin,
  CourseCard,
  CourseHeaderContent,
  CourseTitleAnchor,
  CourseTitleUrl,
  CourseUnitCard,
  HomeMainComponentContainer,
  HomeComponentMargin,
  HomeMainHeaderText,
  HomePageTopCarousel,
  HomePageContainer,
  HomeUnitAnchor,
  HomeMainUnitTitle,
  HomeMainUnitTitleContainer,
  HomeMainUnitTitleContent,
  ImageContainer,
  MainCarouselContainer,
  ScrollItemContainer,
  Span,
  StyledHomeMainContent,
  AuthorContainer,
  CourseCardRate,
  StarRatingContainer,
  PriceTextContainer,
  CurrentPriceContainer,
  OriginalPriceContainer,
  OriginalPriceText,
  CourseBadgeContainer,
} from "./homePage.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import WebRtc from "../../assets/images/web-rtc.jpeg";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { CommonText } from "../../common/CustomText";
import { Image } from "../../common/Image";

interface homeProps {}

export const HomePage: React.FunctionComponent<homeProps> = (props) => {
  return (
    <StyledHomeMainContent>
      <HomePageContainer>
        <HomePageTopCarousel>
          <TopCarouselContainer>
            <CarouselItems></CarouselItems>
          </TopCarouselContainer>
        </HomePageTopCarousel>

        <HomeMainComponentContainer>
          <HomeComponentMargin>
            <HomeMainHeaderText>What to learn next</HomeMainHeaderText>

            <ComponentMargin>
              <HomeMainUnitTitleContainer>
                <HomeMainUnitTitleContent>
                  <HomeMainUnitTitle>
                    <div>
                      Because you viewed "
                      <HomeUnitAnchor>
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
                      </HomeUnitAnchor>
                    </div>

                    <div>
                      <HomeUnitAnchor>
                        <Span
                          sx={{
                            ":hover": {
                              color: "#401B9C",
                            },
                          }}
                        >
                          <CommonText content={"PHP + MySQL"} className={""} />
                        </Span>
                      </HomeUnitAnchor>
                      "
                    </div>
                  </HomeMainUnitTitle>
                </HomeMainUnitTitleContent>
              </HomeMainUnitTitleContainer>

              <MainCarouselContainer>
                <CourseUnitCard>
                  <CarouselScrollItem>
                    <ScrollItemContainer>
                      <ImageContainer>
                        <Image
                          src={WebRtc}
                          className={"courseCardImage"}
                          alt="Course Card Image"
                        />
                      </ImageContainer>

                      <CourseCard>
                        <CourseTitleUrl>
                          <CourseTitleAnchor>
                            <CourseHeaderContent>
                              <CommonText
                                content={"Discord Clone - Learn MERN"}
                                className={""}
                              />

                              <CommonText
                                content={"Stack with WebRTC and SocketIO"}
                                className="courseEllipsisText"
                              />
                            </CourseHeaderContent>
                          </CourseTitleAnchor>

                          <AuthorContainer>
                            <CommonText
                              content={"Marek Gryszkiewicz"}
                              className="authorTitle"
                            />
                          </AuthorContainer>

                          <CourseCardRate>
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

                              <CommonText
                                content={"(124)"}
                                className="reviews"
                              />
                            </StarRatingContainer>
                          </CourseCardRate>

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

                          <CourseBadgeContainer>
                            <CommonText
                              content={"Bestseller"}
                              className={"courseBadge"}
                            />
                          </CourseBadgeContainer>
                        </CourseTitleUrl>
                      </CourseCard>
                    </ScrollItemContainer>
                  </CarouselScrollItem>

                  <CarouselButton>
                    <ArrowBackIosNewOutlinedIcon />
                  </CarouselButton>

                  <CarouselSecondButton>
                    <ArrowForwardIosOutlinedIcon />
                  </CarouselSecondButton>
                </CourseUnitCard>
              </MainCarouselContainer>
            </ComponentMargin>
          </HomeComponentMargin>
        </HomeMainComponentContainer>
      </HomePageContainer>
    </StyledHomeMainContent>
  );
};
