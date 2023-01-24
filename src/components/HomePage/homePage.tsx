import * as React from "react";
import {
  TopBillBoardCarousel,
  TopCarouselItems,
  CourseDiscoveryContent,
  CourseUnitGridCarousel,
  CourseCarouselBackButton,
  CourseCarouselForwardButton,
  CourseDiscoveryContainer,
  TopHomePageBillboardCarousel,
  AppHomeDataContent,
  CourseViewAnchorTag,
  CourseViewedTitle,
  DiscoveryCourseParagraph,
  CourseCarouselContainer,
  Span,
  AppHomePageWrapper,
  BillBoardBannerContainer,
  BillboardBackButton,
  BillboardForwardButton,
} from "./homePage.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import WebRtc from "../../assets/images/web-rtc.jpeg";
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
      title: "Discord Clone - Learn MERN Stack with WebRTC and SocketIO",
      instructor: "Marek Gryszkiewicz",
      rate: "4.6",
      rateNum: "(124)",
      currentPrice: "₦3,900",
      originalPrice: "₦17,500",
      bestSeller: "Bestseller",
    },

    {
      img: `${WebRtc}`,
      title: "Software Engineering 101: Plan ",
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

            <CourseCarouselContainer>
              <CourseUnitGridCarousel>
                <CourseCardCarousel courseCard={courseCard} />
              </CourseUnitGridCarousel>

              <CourseCarouselBackButton>
                <ArrowBackIosNewOutlinedIcon />
              </CourseCarouselBackButton>

              <CourseCarouselForwardButton>
                <ArrowForwardIosOutlinedIcon />
              </CourseCarouselForwardButton>
            </CourseCarouselContainer>
          </CourseDiscoveryContent>
        </CourseDiscoveryContainer>
      </AppHomeDataContent>
    </AppHomePageWrapper>
  );
};
