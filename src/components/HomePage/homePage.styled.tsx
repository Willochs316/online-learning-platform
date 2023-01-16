import { convertLength } from "@mui/material/styles/cssUtils";
import { styled } from "@mui/system";

export const StyledHomeMainContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  width: "100%",
  margin: 0,
  padding: 0,
  flex: "1 0 auto",
  overflowX: "hidden",
});

export const HomePageContainer = styled("main")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
});

export const HomePageTopCarousel = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  padding: 0,
  margin: "0 auto",
  //   maxWidth: "1340px",
  //   minWidth: "600px",
  width: "100%",
  height: 448,
  backgroundColor: "#f0f0ff",
});

export const TopCarouselContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  width: "100%",
  height: "100%",
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
});

export const CarouselItems = styled("div")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  display: "flex",
  overflow: "auto",
  overflowY: "hidden",
  scrollSnapType: "x mandatory",
  scrollSnapStop: "always",
  touchAction: "manipulation",
  overflowX: "hidden",
});

export const MainComponentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  width: "100%",
  maxWidth: "1340px",
  marginRight: "auto",
  marginLeft: "auto",
  paddingRight: "24px",
  paddingLeft: "24px",
  paddingBottom: "48px",
  paddingTop: 0,
  flexGrow: 1,
  cursor: "pointer",
});

export const MainComponentMargin = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
});

export const MainHeaderText = styled("h2")({
  display: "flex",
  alignItems: "center",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  //   maxWidth: "600px",
  width: "600px",
  height: 40,
  marginBottom: "24px",
  fontFamily:
    "SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: 1.25,
  letterSpacing: "0.5px",
});

export const ComponentMargin = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  width: "100%",
  background: 'red'
});

export const MainUnitTitleContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  marginBottom: "16px",
  width: "100%",
});

export const MainUnitTitleContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  width: "100%",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
});

export const MainUnitTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2px",
  fontSize: "24px",
  maxWidth: "800",
  width: "100%",
});

export const MainUnitAnchor = styled("a")({
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2",
  fontSize: "24px",
  margin: 0,
  padding: 0,
  color: "#5624d0",
  textDecoration: "none",
  cursor: "pointer",
});

export const Span = styled("div")({
  display: "inline-block",
});

export const MainCarouselContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  position: "relative",
  width: "100%",
  // height: 290.52,
  backgroundColor: "#f0f0ff",
});

export const CourseUnitCard = styled("div")({
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "16px",
  gridAutoColumns: "calc((100% - (5 - 1) * 1.6rem)/5)",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  width: "100%",
  height: 290.52,
  margin: 0,
  padding: 0,
  overflow: "auto",
  overflowY: "hidden",
  scrollSnapType: "x mandatory",
  scrollSnapStop: "always",
  touchAction: "manipulation",
  overflowX: "hidden",
  position: "relative",
});

export const MainCarouselBackButton = styled("button")({
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2px",
  fontSize: "16px",
  alignItems: "center",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  height: "48px",
  color: "#fff",
  backgroundColor: "#1c1d1f",
  minWidth: "auto",
  padding: "0 12px",
  width: "48px",
  borderRadius: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  border: "1px solid #6a6f73",
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  left: "-24px",
  top: "25%",
  zIndex: "1010",
});

export const MainCarouselForwardButton = styled("button")({
  margin: 0,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.2px",
  fontSize: "16px",
  alignItems: "center",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  whiteSpace: "nowrap",
  height: "48px",
  color: "#fff",
  backgroundColor: "#1c1d1f",
  minWidth: "auto",
  padding: "0 12px",
  width: "48px",
  borderRadius: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  border: "1px solid #6a6f73",
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  right: "-24px",
  top: "25%",
  zIndex: 1,
});

export const CarouselScrollItem = styled("div")({
  alignItems: "flex-start",
  display: "flex",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  minWidth: "1px",
  width: 245.59,
  scrollSnapAlign: "start",
});

export const ScrollItemContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  position: "relative",
  maxWidth: "375px",
  minWidth: "173px",
});

export const ImageContainer = styled("div")({
  display: "flex",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  backgroundColor: "#1c1d1f",
  border: "1px solid #d1d7dc",
  overflow: "hidden",
  position: "relative",
  width: 245.59,
  height: 138.14,
});

export const CourseCard = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  flex: 1,
  minWidth: "1px",
  width: "100%",
});

export const CourseTitleUrl = styled("h3")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  maxWidth: "600px",
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-.2px",
  fontSize: "16px",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: "4px",
  marginTop: "8px",
  width: "100%",
});

export const CourseTitleAnchor = styled("a")({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "flex-start",
  lineHeight: 1.2,
  letterSpacing: "-.2px",
  fontSize: "16px",
  whiteSpace: "normal",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  fontWeight: "inherit",
  width: "100%",
});

export const CourseHeaderContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  fontSize: "16px",
  width: "100%",
});

export const AuthorContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  fontweight: 400,
  lineHeight: 1.4,
  fontSize: "12px",
  marginBottom: "4px",
});

export const CourseCardRate = styled("div")({
  display: "flex",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  marginBottom: "4px",
});

export const StarRatingContainer = styled("span")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  width: 94.56,
});

export const PriceTextContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily:
    "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  whiteSpace: "nowrap",
  margin: 0,
  padding: 0,
  color: "#1c1d1f",
  flexWrap: "wrap",
  marginBottom: "4px",
  width: "100%",
});

export const CurrentPriceContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: "#1c1d1f",
  margin: 0,
  fontFamily:
    "udemy sans,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
  fontWeight: 700,
  letterSpacing: "-.2px",
  fontSize: "16px",
  lineHeight: 1,
  padding: "4px 0",
  marginRight: "8px",
  whiteSpace: "nowrap",
});

export const OriginalPriceContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  margin: 0,
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 1,
  padding: "4px 0",
  whiteSpace: "nowrap",
  color: "#6a6f73",
  marginRight: 0,
});

export const OriginalPriceText = styled("span")({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: 1,
  whiteSpace: "nowrap",
  color: "#6a6f73",
  margin: 0,
  padding: 0,
});

export const CourseBadgeContainer = styled("div")({
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "16px",
  color: "#1c1d1f",
  whiteSpace: "nowrap",
  padding: 0,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  margin: "8px 0 4px",
  gap: "4px 8px",
  width: "100%",
});
