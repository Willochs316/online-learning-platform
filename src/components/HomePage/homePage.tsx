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
import Ather from "../../assets/images/ather.jpeg";
import OakAcademy from "../../assets/images/oak-academy.jpeg";
import RustyZone from "../../assets/images/rusty-zone.jpeg";
import Rusty from "../../assets/images/rusty.jpeg";
import { Typography } from "@mui/material";
import { BillboardCarousel } from "./billboardCarousel";
import firstBillboard from "../../assets/images/first-billboard-banner.jpg";
import secondBillboard from "../../assets/images/second-billboard-banner.jpg";
import { CourseCardCarousel } from "./CourseCard";
import StarFilledIcon from "../../assets/svgs/star-filled-rate.svg";
import StarHalfIcon from "../../assets/svgs/star-half-rate.svg";
import StarOutlineIcon from "../../assets/svgs/star-rate-rating-outline.svg";

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
      bestSeller: true,
      starfilled: StarFilledIcon,
      starhalf: StarHalfIcon,
    },

    {
      img: `${OakAcademy}`,
      title: "React Native From Scratch with Hooks and Context",
      instructor: "Oak Academy",
      rate: "4.5",
      rateNum: "(33)",
      currentPrice: "₦3,900",
      originalPrice: "",
      bestSeller: false,
      starfilled: StarFilledIcon,
      starhalf: StarHalfIcon,
    },

    {
      img: `${Ather}`,
      title: "React Native Chat App with Firebase - Firestore Course 2020",
      instructor: "Usaid Ather",
      rate: "3.6",
      rateNum: "(56)",
      currentPrice: "₦3,200",
      originalPrice: "₦4,500",
      bestSeller: false,
      starfilled: StarFilledIcon,
      staroutline: StarOutlineIcon,
    },

    {
      img: `${RustyZone}`,
      title: "Build the original Instagram with React Native & Firebase",
      instructor: "Rusty Zone",
      rate: "3.9",
      rateNum: "(195)",
      currentPrice: "₦3,900",
      originalPrice: "₦5,500",
      bestSeller: false,
      starfilled: StarFilledIcon,
      staroutline: StarOutlineIcon,
    },

    {
      img: `${Rusty}`,
      title: "Build your first app with React Native",
      instructor: "Rusty Zone",
      rate: "4.1",
      rateNum: "(44)",
      currentPrice: "₦3,200",
      originalPrice: "₦4,500",
      bestSeller: false,
      starfilled: StarFilledIcon,
      staroutline: StarOutlineIcon,
    },
  ];

  const bestSelling = courseCard.filter((obj) => obj.bestSeller);

  console.log(bestSelling ? true : false, "hello world");

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
                        How to Build an Instagram Clone w/ React Native
                        {/* Create a Netflix clone from Scratch: JavaScript */}
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
                        & Firebase
                      </Typography>
                    </Span>
                  </CourseViewAnchorTag>
                  "
                </div>
              </CourseViewedTitle>
            </DiscoveryCourseParagraph>

            <CourseCarouselContainer>
              <CourseUnitGridCarousel>
                <CourseCardCarousel
                  courseCard={courseCard}
                  bestSelling={bestSelling}
                />
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
