import * as React from "react";
import {
  CarouselButton,
  CarouselContainer,
  CarouselItems,
  CarouselScrollItem,
  CarouselSecondButton,
  ComponentMargin,
  CourseCard,
  CourseHeaderContent,
  CourseHeaderText,
  CourseTitleAnchor,
  CourseTitleUrl,
  CourseUnitCard,
  CourseEllipsisText,
  HomeComponentContainer,
  HomeComponentMargin,
  HomeHeaderText,
  HomePageCarousel,
  HomePageContainer,
  HomeUnitAnchor,
  HomeUnitTitle,
  HomeUnitTitleContainer,
  HomeUnitTitleContent,
  Image,
  ImageContainer,
  MainCarouselContainer,
  ScrollItemContainer,
  Span,
  StyledHomeMainContent,
  AuthorContainer,
  AuthorTitle,
  CourseCardRate,
  StarRatingContainer,
  StarHeadingNumber,
  Logo,
  Reviews,
  PriceTextContainer,
  CurrentPriceContainer,
  CurrentPriceText,
  OriginalPriceContainer,
  OriginalPriceText,
  CourseBadgeContainer,
  CourseBadge,
} from "./homePage.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import WebRtc from "../../assets/images/web-rtc.jpeg";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";

interface headerProps {}

export const HomePage: React.FunctionComponent<headerProps> = (props) => {
  return (
    <StyledHomeMainContent>
      <HomePageContainer>
        <HomePageCarousel>
          <CarouselContainer>
            <CarouselItems></CarouselItems>
          </CarouselContainer>
        </HomePageCarousel>

        <HomeComponentContainer>
          <HomeComponentMargin>
            <HomeHeaderText>What to learn next</HomeHeaderText>

            <ComponentMargin>
              <HomeUnitTitleContainer>
                <HomeUnitTitleContent>
                  <HomeUnitTitle>
                    <p>
                      Because you viewed "
                      <HomeUnitAnchor>
                        <Span
                          sx={{
                            ":hover": {
                              color: "#401B9C",
                            },
                          }}
                        >
                          Create a Netflix clone from Scratch: JavaScript
                        </Span>
                      </HomeUnitAnchor>
                    </p>

                    <p>
                      <HomeUnitAnchor>
                        <Span
                          sx={{
                            ":hover": {
                              color: "#401B9C",
                            },
                          }}
                        >
                          PHP + MySQL
                        </Span>
                      </HomeUnitAnchor>
                      "
                    </p>
                  </HomeUnitTitle>
                </HomeUnitTitleContent>
              </HomeUnitTitleContainer>

              <MainCarouselContainer>
                <CourseUnitCard>
                  <CarouselScrollItem>
                    <ScrollItemContainer>
                      <ImageContainer>
                        <Image src={WebRtc} alt="" />
                      </ImageContainer>

                      <CourseCard>
                        <CourseTitleUrl>
                          <CourseTitleAnchor>
                            <CourseHeaderContent>
                              <CourseHeaderText>
                                Discord Clone - Learn MERN
                              </CourseHeaderText>
                              <CourseEllipsisText>
                                Stack with WebRTC and SocketIO
                              </CourseEllipsisText>
                            </CourseHeaderContent>
                          </CourseTitleAnchor>

                          <AuthorContainer>
                            <AuthorTitle>Marek Gryszkiewicz</AuthorTitle>
                          </AuthorContainer>

                          <CourseCardRate>
                            <StarRatingContainer>
                              <StarHeadingNumber>4.6</StarHeadingNumber>
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
                              <Reviews>(124)</Reviews>
                            </StarRatingContainer>
                          </CourseCardRate>

                          <PriceTextContainer>
                            <CurrentPriceContainer>
                              <CurrentPriceText>₦3,900</CurrentPriceText>
                            </CurrentPriceContainer>

                            <OriginalPriceContainer>
                              <OriginalPriceText>
                                <s>
                                  <span>₦17,500</span>
                                </s>
                              </OriginalPriceText>
                            </OriginalPriceContainer>
                          </PriceTextContainer>

                          <CourseBadgeContainer>
                            <CourseBadge>Bestseller</CourseBadge>
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
        </HomeComponentContainer>
      </HomePageContainer>
    </StyledHomeMainContent>
  );
};
