import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    paddingTop: 56,
    paddingBottom: 56,
    paddingLeft: 48,
    paddingRight: 48,
  },
  container: {
    border: "1pt solid black",
  },
  headerRow: {
    flexDirection: "row",
    height: 68,
  },
  logoCell: {
    width: "20%",
    borderRight: "1pt solid black",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: "100%",
    height: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoDrill: {
    height: 26,
  },
  logoWordmark: {
    height: 14,
  },
  titleCell: {
    width: "60%",
    paddingTop: 5,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "top",
    alignItems: "top",
  },
  mainTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    marginBottom: 9,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  pageNumberCell: {
    width: "20%",
    borderLeft: "1pt solid black",
    paddingTop: 5,
    paddingLeft: 18,
    paddingRight: 18,
    justifyContent: "top",
    alignItems: "center",
  },
  pageNumber: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    marginBottom: 30,
  },
  pageText: {
    fontSize: 8,
    fontFamily: "Helvetica",
  },
  detailsSection: {
    flexDirection: "column",
    borderTop: "1pt solid black",
  },
  topSection: {
    flexDirection: "row",
    borderBottom: "1pt solid black",
  },
  leftTable: {
    width: "66.67%",
  },
  leftRow: {
    flexDirection: "row",
    minHeight: 22,
    borderBottom: "1pt solid black",
  },
  leftRowLast: {
    borderBottom: 0,
  },
  leftCell: {
    width: "50%",
    borderRight: "1pt solid black",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 3,
    paddingRight: 6,
    justifyContent: "center",
  },
  centerCell: {
    width: "50%",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 3,
    paddingRight: 10,
    justifyContent: "center",
  },
  cellContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cellLabelContainer: {
    width: 76,
    flexDirection: "row",
    alignItems: "center",
  },
  cellLabel: {
    fontSize: 9.5,
    fontFamily: "Helvetica",
  },
  cellValue: {
    fontSize: 9.5,
    fontFamily: "Helvetica",
    marginLeft: 2,
  },
  waterLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  waterIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  remarksColumn: {
    width: "33.33%",
    borderLeft: "1pt solid black",
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 3,
    paddingRight: 12,
    justifyContent: "flex-start",
  },
  remarksText: {
    fontSize: 9.5,
    fontFamily: "Helvetica",
  },
  remarksValue: {
    fontSize: 9.5,
    fontFamily: "Helvetica",
    // marginTop: 6,
  },
  bottomRow: {
    flexDirection: "row",
    minHeight: 22,
  },
  bottomLeftCell: {
    width: "33.33%",
    borderRight: "1pt solid black",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 3,
    paddingRight: 6,
    justifyContent: "center",
  },
  bottomRightCell: {
    width: "66.67%",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 3,
    paddingRight: 10,
    justifyContent: "center",
  },
});

export default styles;
