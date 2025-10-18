import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles that match the image exactly
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 40,
    paddingTop: 60,
    paddingBottom: 60,
  },
  container: {
    border: "2pt solid black",
  },
  // Header row with logo, title, and page number
  headerRow: {
    flexDirection: "row",
    borderBottom: "2pt solid black",
    minHeight: 80,
  },
  logoCell: {
    width: "26.5%",
    borderRight: "2pt solid black",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoSlashes: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginRight: 2,
  },
  logoText: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.5,
  },
  titleCell: {
    width: "47%",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  pageNumberCell: {
    width: "26.5%",
    borderLeft: "2pt solid black",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  pageNumber: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  pageText: {
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  // Info rows
  infoRow: {
    flexDirection: "row",
    borderBottom: "2pt solid black",
    minHeight: 28,
  },
  infoRowNoBorder: {
    flexDirection: "row",
    minHeight: 28,
  },
  infoCell: {
    flexDirection: "row",
    padding: 6,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: "center",
  },
  infoCellWithBorder: {
    flexDirection: "row",
    padding: 6,
    paddingLeft: 8,
    paddingRight: 8,
    borderRight: "2pt solid black",
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 10,
    fontFamily: "Helvetica",
    marginRight: 12,
  },
  infoValue: {
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  // Specific cell widths
  leftCell: {
    width: "40%",
  },
  middleCell: {
    width: "33.33%",
  },
  rightCell: {
    width: "26.67%",
  },
  fullWidthCell: {
    width: "60%",
  },
  // Water row with checkmark
  waterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    width: 12,
    height: 12,
    border: "1.5pt solid black",
    marginRight: 6,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  checkMark: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    position: "absolute",
    top: -5,
    left: 0.5,
  },
});

const DrillingLog = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Header Row */}
          <View style={styles.headerRow}>
            {/* Logo Cell */}
            <View style={styles.logoCell}>
              <View style={styles.logoContainer}>
                <Text style={styles.logoSlashes}>|||</Text>
                <Text style={styles.logoText}> BOREDM</Text>
              </View>
            </View>

            {/* Title Cell */}
            <View style={styles.titleCell}>
              <Text style={styles.mainTitle}>Riverside Condominiums</Text>
              <Text style={styles.subtitle}>General Location - Project</Text>
            </View>

            {/* Page Number Cell */}
            <View style={styles.pageNumberCell}>
              <Text style={styles.pageNumber}>B-17</Text>
              <Text style={styles.pageText}>Page 1 of 1</Text>
            </View>
          </View>

          {/* Row 2: Drilling Firm, Project No., Remarks */}
          <View style={styles.infoRow}>
            <View style={[styles.infoCellWithBorder, styles.leftCell]}>
              <Text style={styles.infoLabel}>Drilling Firm:</Text>
              <Text style={styles.infoValue}>BoreDM Drilling</Text>
            </View>
            <View style={[styles.infoCellWithBorder, styles.middleCell]}>
              <Text style={styles.infoLabel}>Project No.:</Text>
              <Text style={styles.infoValue}>25-3332</Text>
            </View>
            <View style={[styles.infoCell, styles.rightCell]}>
              <Text style={styles.infoLabel}>Remarks:</Text>
              <Text style={styles.infoValue}>-</Text>
            </View>
          </View>

          {/* Row 3: Driller, Date Drilled */}
          <View style={styles.infoRow}>
            <View style={[styles.infoCellWithBorder, styles.leftCell]}>
              <Text style={styles.infoLabel}>Driller:</Text>
              <Text style={styles.infoValue}>PA</Text>
            </View>
            <View style={[styles.infoCell, styles.fullWidthCell]}>
              <Text style={styles.infoLabel}>Date Drilled:</Text>
              <Text style={styles.infoValue}>03/05/2025</Text>
            </View>
          </View>

          {/* Row 4: Logged By, Boring Depth */}
          <View style={styles.infoRow}>
            <View style={[styles.infoCellWithBorder, styles.leftCell]}>
              <Text style={styles.infoLabel}>Logged By:</Text>
              <Text style={styles.infoValue}>LA</Text>
            </View>
            <View style={[styles.infoCell, styles.fullWidthCell]}>
              <Text style={styles.infoLabel}>Boring Depth:</Text>
              <Text style={styles.infoValue}>-</Text>
            </View>
          </View>

          {/* Row 5: Water, Boring Elevation */}
          <View style={styles.infoRow}>
            <View style={[styles.infoCellWithBorder, styles.leftCell]}>
              <View style={styles.waterContainer}>
                <View style={styles.checkBox}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
                <Text style={styles.infoLabel}>Water :</Text>
                <Text style={styles.infoValue}>N/A</Text>
              </View>
            </View>
            <View style={[styles.infoCell, styles.fullWidthCell]}>
              <Text style={styles.infoLabel}>Boring Elevation:</Text>
              <Text style={styles.infoValue}>N/A</Text>
            </View>
          </View>

          {/* Row 6: Hammer Type, Brand Address */}
          <View style={styles.infoRowNoBorder}>
            <View style={[styles.infoCellWithBorder, styles.leftCell]}>
              <Text style={styles.infoLabel}>Hammer Type:</Text>
              <Text style={styles.infoValue}>-</Text>
            </View>
            <View style={[styles.infoCell, styles.fullWidthCell]}>
              <Text style={styles.infoLabel}>Brand Address:</Text>
              <Text style={styles.infoValue}>4909 N. 44th St, Phoenix, AZ 85018</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DrillingLog;
