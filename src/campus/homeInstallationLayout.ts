export type ElectricalPoint = [number, number, number];

/** Architectural service zones, NOT verified product terminal coordinates. */
export const HOME_SERVICE = {
  inverterDc: [-15.85, 1.77, 4.49] as ElectricalPoint,
  inverterAc: [-15.75, 1.77, 4.49] as ElectricalPoint,
  inverterComms: [-15.8, 1.81, 4.50] as ElectricalPoint,
  batteryRearService: [-14.34, 0.87, 4.56] as ElectricalPoint,
  batteryRearComms: [-14.31, 0.83, 4.54] as ElectricalPoint,
};

export function homeElectricalRoutes(): Record<string, ElectricalPoint[]> {
  const battery: ElectricalPoint[] = [
    HOME_SERVICE.inverterDc, [-15.85, 1.54, 4.43], [-14.78, 1.54, 4.43],
    [-14.78, 0.9, 4.43], [-14.43, 0.9, 4.54], HOME_SERVICE.batteryRearService,
  ];
  return {
    'z1-pv-inv': [[-12.5, 4.6, 2.9], [-12.5, 4.1, 4.43], [-16.15, 4.1, 4.43],
      [-16.15, 2.12, 4.43], [-15.85, 2.12, 4.43], HOME_SERVICE.inverterDc],
    'z1-inv-bat-day': battery,
    'z1-bat-inv-night': [...battery].reverse(),
    'z1-bms': [HOME_SERVICE.inverterComms, [-15.8, 1.42, 4.45], [-14.68, 1.42, 4.45],
      [-14.68, 0.83, 4.45], HOME_SERVICE.batteryRearComms],
    'z1-inv-ac-loads': [HOME_SERVICE.inverterAc, [-15.75, 1.58, 4.43], [-17.72, 1.58, 4.43],
      [-17.72, 2.1, 4.43], [-17.72, 2.1, 2.15], [-17.72, 3.38, 2.15],
      [-12.25, 3.38, 2.15], [-8.9, 3.38, 2.15], [-8.9, 2.9, -0.35]],
    'z1-grid': [[-21.1, 6.2, 0.9], [-17.72, 4.1, 0.9], [-17.72, 2.1, 0.9], [-17.72, 2.1, 2.15]],
  };
}
