const CAR_FORWRAD = ">";

const CAMERA = ".";

interface RoadData {
  photos: number;
  carsForward: number;
  cameras: number;
}

const addCarForward = (roadData: RoadData) => ({
  ...roadData,
  carsForward: roadData.carsForward + 1,
});

const addPhotosAndCamera = (roadData: RoadData) => ({
  ...roadData,
  photos: roadData.photos + roadData.carsForward,
  cameras: roadData.cameras + 1,
});

const addPhotos = (roadData: RoadData) => ({
  ...roadData,
  photos: roadData.photos + roadData.cameras,
});

export const countPhotos = (road: string) =>
  road.split("").reduce(
    (roadData: RoadData, roadItem) => {
      if (roadItem === CAR_FORWRAD) return addCarForward(roadData);

      if (roadItem === CAMERA) return addPhotosAndCamera(roadData);

      return addPhotos(roadData);
    },
    { photos: 0, carsForward: 0, cameras: 0 }
  ).photos;
