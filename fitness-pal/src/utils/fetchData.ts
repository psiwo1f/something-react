interface Options {
  method: string;
  headers: HeadersInit;
}

// todo: move keys to env
export const exerciseOptions: Options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST_EX || '',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY_EX || '',
  },
};

export const youtubeOptions: Options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

// todo: replace with axios
export const fetchData = async (url: string, options: Options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
