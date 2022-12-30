import { styled } from "@mui/system";

export const StyledHeader = styled("header")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  width: 1440,
  maxWidth: "100%",
  height: 72,
  // font-family: udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "1.6rem",
  color: "#1c1d1f",
  margin: 0,
  padding: 0,
  boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
  zIndex: 1010,
});

export const ContentHeader = styled("div")({
  color: "#1c1d1f",
  margin: 0,
  width: "100%",
  fontWeight: 400,
  lineHeight: 1.4,
  fontSize: "1.4rem",
  background: "#fff",
  height: "72px",
  padding: "0 2.4rem",
  position: "relative",
  zIndex: 1010,
  alignItems: "center",
  display: "flex",
});

export const Logo = styled("img")({
  width: 91,
  height: 34,
});

export const Nav = styled("nav")({
  display: "flex",
  alignItems: "center",
  width: 90.34,
  height: 72,
  color: "#1c1d1f",
  fontWeight: "400",
  lineHeight: "1.4",
  fontSize: "1.4rem",
  margin: 0,
  padding: 0,
  position: "relative",
});
