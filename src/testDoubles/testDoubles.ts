interface DescriptionDTO {
  road: string;
  city: string;
  state: string;
  country: string;
}

interface AddresseDTO {
  address: DescriptionDTO;
}

interface Repository {
  get: (lat: string, long: string) => Promise<AddresseDTO>;
}

const buildDescriptionString = (descriptionObj: DescriptionDTO) =>
  Object.values(descriptionObj).join(", ");

export const placeDescriptionService = (
  descriptionRepository: () => Repository
) => ({
  get: async (lat = "", long = ""): Promise<string | unknown> => {
    try {
      const res = await descriptionRepository().get(lat, long);
      return buildDescriptionString(res.address);
    } catch (err) {
      return err;
    }
  },
});

export const httpInMemory =
  (descriptionFixture: AddresseDTO, error: string | undefined) => () => ({
    get: error
      ? () => Promise.reject(error)
      : () =>
          Promise.resolve({
            address: descriptionFixture?.address,
          }),
  });
