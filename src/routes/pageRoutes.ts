interface Routes {
  main: () => string;
  firstStep: () => string;
}

export const pageRoutes: Routes = {
  main: () => '/',
  firstStep: () => '/create',
};
