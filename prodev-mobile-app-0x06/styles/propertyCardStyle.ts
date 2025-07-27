import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
  },
  overlay: {
    height: 400,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 16,
    justifyContent: "space-between",
  },
  favoriteGroup: {
    alignItems: "flex-end",
  },
  favoriteOverlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  rateGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  rateText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 500,
    marginLeft: 4,
  },
  priceGroup: {
    backgroundColor: "#F9F9F9",
    width: 90,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    fontSize: 12,
    fontWeight: 500,
  },
  cardGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 30,
    width: "100%",
  },
  cardTextGroup: {},
  cardLargeText: {
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
  },
  cardSmallText: {
    fontSize: 12,
    fontWeight: 400,
    color: "#fff",
  },

  group: {
    position: "absolute",
    bottom: 30,
    left: 30,
  },
});

export { styles };
