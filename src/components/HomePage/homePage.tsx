import * as React from "react";
import {
  TopBillBoardCarousel,
  TopCarouselItems,
  CourseUnitGridCarousel,
  CourseCarouselBackButton,
  CourseCarouselForwardButton,
  CourseDiscoveryContainer,
  TopHomePageBillboardCarousel,
  AppHomeDataContent,
  CourseViewAnchorTag,
  CourseViewedTitle,
  CourseCarouselContainer,
  AppHomePageWrapper,
  BillBoardBannerContainer,
  BillboardBackButton,
  BillboardForwardButton,
  RecommendedCourseContainer,
  RecommendedUnitTitleContainer,
  ViewedCourseContainer,
  ViewedCourseHeader,
} from "./homePage.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Typography } from "@mui/material";
import { BillboardCarousel } from "./billboardCarousel";
import firstBillboard from "/src/assets/images/first-billboard-banner.jpg";
import secondBillboard from "/src/assets/images/second-billboard-banner.jpg";
import { CourseCardCarousel } from "./CourseCard";

interface HomeProps {
  courses: any[];
}

export const HomePage: React.FunctionComponent<HomeProps> = (props) => {
  const [currentBillboard, setCurrentBillboard] = React.useState(0);

  const { courses } = props;

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

          <ViewedCourseContainer>
            <ViewedCourseHeader>
              <CourseViewedTitle>
                <div>
                  Because you viewed{" "}
                  <CourseViewAnchorTag
                    sx={{
                      color: "secondary.contrastText",
                      ":hover": {
                        color: "#401B9C",
                      },
                    }}
                  >
                    "How to Build an Instagram Clone w/ React Native & Firebase"
                  </CourseViewAnchorTag>
                </div>
              </CourseViewedTitle>
            </ViewedCourseHeader>

            <CourseCarouselContainer>
              <CourseUnitGridCarousel>
                <CourseCardCarousel courses={courses} />
              </CourseUnitGridCarousel>

              <CourseCarouselBackButton>
                <ArrowBackIosNewOutlinedIcon />
              </CourseCarouselBackButton>

              <CourseCarouselForwardButton>
                <ArrowForwardIosOutlinedIcon />
              </CourseCarouselForwardButton>
            </CourseCarouselContainer>
          </ViewedCourseContainer>

          {/* <RecommendedCourseContainer>
            <DiscoveryCourseParagraph>
              <RecommendedUnitTitleContainer>
              Recommended for you
              </RecommendedUnitTitleContainer>
            </DiscoveryCourseParagraph>

            <CourseCarouselContainer>
              <CourseUnitGridCarousel>
                <CourseCardCarousel courses={courses} />
              </CourseUnitGridCarousel>

              <CourseCarouselBackButton>
                <ArrowBackIosNewOutlinedIcon />
              </CourseCarouselBackButton>

              <CourseCarouselForwardButton>
                <ArrowForwardIosOutlinedIcon />
              </CourseCarouselForwardButton>
            </CourseCarouselContainer>
          </RecommendedCourseContainer> */}
        </CourseDiscoveryContainer>
      </AppHomeDataContent>
    </AppHomePageWrapper>
  );
};
