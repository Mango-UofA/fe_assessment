import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import styles from "./DrillingLogStyles";

const drillIcon = `${process.env.PUBLIC_URL}/assets/drill.png`;
const boredmLogo = `${process.env.PUBLIC_URL}/assets/logo.png`;
const waterLogo = `${process.env.PUBLIC_URL}/assets/waterLogo.png`;

const DrillingLog = () => {
  const topRows = [
    {
      left: { label: "Drilling Firm:", value: "BoreDM Drilling" },
      center: { label: "Project No.:", value: "25-3332" },
    },
    {
      left: { label: "Driller:", value: "PA" },
      center: { label: "Date Drilled:", value: "03/05/2025" },
    },
    {
      left: { label: "Logged By:", value: "LA" },
      center: { label: "Boring Depth:", value: "-" },
    },
    {
      left: { label: "Water :", value: "N/A", icon: waterLogo },
      center: { label: "Boring Elevation:", value: "N/A" },
    },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Header Row */}
          <View style={styles.headerRow}>
            {/* Logo Cell */}
            <View style={styles.logoCell}>
              <View style={styles.logoBox}>
                <View style={styles.logoContainer}>
                  <Image src={drillIcon} style={styles.logoDrill} />
                  <Image src={boredmLogo} style={styles.logoWordmark} />
                </View>
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

          {/* Details Section */}
          <View style={styles.detailsSection}>
            <View style={styles.topSection}>
              <View style={styles.leftTable}>
                {topRows.map((row, index) => (
                  <View
                    key={`${row.left.label}-${index}`}
                    style={[styles.leftRow, index === topRows.length - 1 ? styles.leftRowLast : null]}
                  >
                    <View style={styles.leftCell}>
                      <View style={styles.cellContent}>
                        <View style={styles.cellLabelContainer}>
                          {row.left.icon ? (
                            <Image src={row.left.icon} style={styles.waterIcon} />
                          ) : null}
                          <Text style={styles.cellLabel}>{row.left.label}</Text>
                        </View>
                        <Text style={styles.cellValue}>{row.left.value}</Text>
                      </View>
                    </View>
                    <View style={styles.centerCell}>
                      <View style={styles.cellContent}>
                        <View style={styles.cellLabelContainer}>
                          <Text style={styles.cellLabel}>{row.center.label}</Text>
                        </View>
                        <Text style={styles.cellValue}>{row.center.value}</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>

              <View style={styles.remarksColumn}>
                <Text style={styles.remarksText}>Remarks:</Text>
                <Text style={styles.remarksValue}>-</Text>
              </View>
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.bottomLeftCell}>
                <View style={styles.cellContent}>
                    <View style={styles.cellLabelContainer}>
                      <Text style={styles.cellLabel}>Hammer Type:</Text>
                    </View>
                  <Text style={styles.cellValue}>-</Text>
                </View>
              </View>
              <View style={styles.bottomRightCell}>
                <View style={styles.cellContent}>
                    <View style={styles.cellLabelContainer}>
                      <Text style={styles.cellLabel}>Brand Address:</Text>
                    </View>
                  <Text style={styles.cellValue}>4909 N. 44th St, Phoenix, AZ 85018</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DrillingLog;
