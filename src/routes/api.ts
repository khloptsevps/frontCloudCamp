interface API {
  main: () => string;
}

export const APIRoutes: API = {
  main: () => 'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
};
