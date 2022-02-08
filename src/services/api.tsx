import axios, { AxiosError } from "axios";

const url = "https://api.shrtco.de/v2/";

function getRandomArbitrary() {
  return Math.random() * 9999999999999;
}

interface IurlShortned {
  id: number;
  full_short_link: string;
  original_link: string;
}

export default {
  shortenLink: async (userUrl: string): Promise<IurlShortned | string> => {
    try {
      const req = await axios.get(`${url}shorten`, {
        params: {
          url: userUrl,
        },
      });

      return { id: getRandomArbitrary(), ...req.data.result };
    } catch (error) {
      return (error as AxiosError).response?.data.error;
    }
  },
};

export { getRandomArbitrary };
export type { IurlShortned };
