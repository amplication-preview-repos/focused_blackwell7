import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "licensePlate";

export const CarTitle = (record: TCar): string => {
  return record.licensePlate?.toString() || String(record.id);
};
