import * as React from "react";
import {
  TopBillBoardCarousel,
  TopCarouselItems,
  ScrollItemCourseCardCarousel,
  CourseDiscoveryContent,
  AuthorCourseCardContainer,
  AuthorCourseHeaderTitle,
  AuthorCourseAnchorTag,
  AuthorCourseDetails,
  DiscoveryCourseCardCarousel,
  DiscoveryCarouselBackButton,
  DiscoveryCarouselForwardButton,
  CourseDiscoveryContainer,
  TopHomePageBillboardCarousel,
  AppHomeDataContent,
  CourseViewAnchorTag,
  CourseViewedTitle,
  DiscoveryCourseParagraph,
  ImageContainer,
  DiscoveryCourseCardContainer,
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
  BillBoardBannerContainer,
  BillboardBackButton,
  BillboardForwardButton,
} from "./homePage.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import WebRtc from "../../assets/images/web-rtc.jpeg";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Image } from "../../common/Image";
import { Typography } from "@mui/material";
import { BillboardCarousel } from "./billboardCarousel";
import firstBillboard from "../../assets/images/first-billboard-banner.jpg";
import secondBillboard from "../../assets/images/second-billboard-banner.jpg";
import { CourseCardCarousel } from "./CourseCard";

interface HomeProps {}

export const HomePage: React.FunctionComponent<HomeProps> = (props) => {
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

  const courseCard = [
    {
      img: `${WebRtc}`,
      title: "Discord Clone - Learn MERN",
      subtitle: "Stack with WebRTC and SocketIO",
      instructor: "Marek Gryszkiewicz",
      rate: "4.6",
      rateNum: "(124)",
      currentPrice: "₦3,900",
      originalPrice: "₦17,500",
      bestSeller: "Bestseller",
    },

    {
      img: `${WebRtc}`,
      title: "Software Engineering 101: Plan",
      subtitle: "and Execute Better Software.",
      instructor: "Kurt Anderson",
      rate: "4.5",
      rateNum: "(8,818)",
      currentPrice: "₦10,500",
      bestSeller: "Bestseller",
    },
  ];

  const handlePrev = () => {
    const index =
      currentBillboard > 0 ? currentBillboard - 1 : images.length - 1;
    setCurrentBillboard(index);
  };

  const handleNext = () => {
    const index =
      currentBillboard < images.length - 1 ? currentBillboard + 1 : 0;
    setCurrentBillboard(index);
  };

  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentBillboard((currentBillboard: number) =>
        currentBillboard < images.length - 1 ? currentBillboard + 1 : 0
      );
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <AppHomePageWrapper>
      <AppHomeDataContent>
        <TopHomePageBillboardCarousel>
          <TopBillBoardCarousel>
            <TopCarouselItems>
              <BillBoardBannerContainer>
                <BillboardCarousel
                  images={images}
                  currentBillboard={currentBillboard}
                />

                <BillboardBackButton onClick={handlePrev}>
                  <ArrowBackIosNewOutlinedIcon />
                </BillboardBackButton>

                <BillboardForwardButton onClick={handleNext}>
                  <ArrowForwardIosOutlinedIcon />
                </BillboardForwardButton>
              </BillBoardBannerContainer>
            </TopCarouselItems>
          </TopBillBoardCarousel>
        </TopHomePageBillboardCarousel>

        <CourseDiscoveryContainer>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "24px",
              lineHeight: 1.25,
              letterSpacing: "0.5px",
              width: "100%",
            }}
          >
            What to learn next
          </Typography>

          <CourseDiscoveryContent>
            <DiscoveryCourseParagraph>
              <CourseViewedTitle>
                <div>
                  Because you viewed "
                  <CourseViewAnchorTag>
                    <Span>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "secondary.contrastText",
                          ":hover": {
                            color: "#401B9C",
                          },
                        }}
                      >
                        Create a Netflix clone from Scratch: JavaScript
                      </Typography>
                    </Span>
                  </CourseViewAnchorTag>
                </div>

                <div>
                  <CourseViewAnchorTag>
                    <Span>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "secondary.contrastText",
                          ":hover": {
                            color: "#401B9C",
                          },
                        }}
                      >
                        PHP + MySQL
                      </Typography>
                    </Span>
                  </CourseViewAnchorTag>
                  "
                </div>
              </CourseViewedTitle>
            </DiscoveryCourseParagraph>

            <DiscoveryCourseCardContainer>
              <DiscoveryCourseCardCarousel>
                <CourseCardCarousel courseCard={courseCard} />

                {/* <ScrollItemCourseCardCarousel>
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
                        <AuthorCourseAnchorTag>
                          <AuthorCourseHeaderTitle>
                            <Typography
                              variant="subtitle2"
                              sx={{ letterSpacing: "-.2px", lineHeight: 1.2 }}
                            >
                              Discord Clone - Learn MERN
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                width: "80%",
                                letterSpacing: "-.2px",
                                lineHeight: 1.2,
                              }}
                            >
                              Stack with WebRTC and SocketIO
                            </Typography>
                          </AuthorCourseHeaderTitle>
                        </AuthorCourseAnchorTag>
                      </AuthorCourseDetails>

                      <AuthorTitleContainer>
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
                          Marek Gryszkiewicz
                        </Typography>
                      </AuthorTitleContainer>

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
                            4.6
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
                            (124)
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
                            ₦3,900
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
                                ₦17,500
                              </Typography>
                            </s>
                          </OriginalPriceText>
                        </OriginalPriceContainer>
                      </PriceTextContainer>

                      <AuthorCourseBadgeContainer>
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
                      </AuthorCourseBadgeContainer>
                    </AuthorCourseCardContainer>
                  </ScrollItemContainer>
                </ScrollItemCourseCardCarousel> */}
              </DiscoveryCourseCardCarousel>

              <DiscoveryCarouselBackButton>
                <ArrowBackIosNewOutlinedIcon />
              </DiscoveryCarouselBackButton>

              <DiscoveryCarouselForwardButton>
                <ArrowForwardIosOutlinedIcon />
              </DiscoveryCarouselForwardButton>
            </DiscoveryCourseCardContainer>
          </CourseDiscoveryContent>
        </CourseDiscoveryContainer>
      </AppHomeDataContent>
    </AppHomePageWrapper>
  );
};
