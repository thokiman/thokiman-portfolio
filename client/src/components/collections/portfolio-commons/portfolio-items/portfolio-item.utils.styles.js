export const measurePortfolioItemStyles = (
  pathname,
  portfolioDefaultRoute,
  portfolioAllRoute,
  brandRoute,
  digitalArtRoute,
  photographyBwRoute,
  photographyColorRoute
) => {
  let portfolioItemStyles;
  if (
    !!pathname.match(`${portfolioDefaultRoute}$`) ||
    !!pathname.match(`${portfolioDefaultRoute}[/]$`) ||
    !!pathname.match(`^${portfolioAllRoute}$`)
  ) {
    return 0;
  } else if (!!pathname.match(`^${brandRoute}$`)) {
    return 1;
  } else if (!!pathname.match(`^${digitalArtRoute}$`)) {
    return 2;
  } else if (!!pathname.match(`^${photographyColorRoute}$`)) {
    return 3;
  } else if (!!pathname.match(`^${photographyBwRoute}$`)) {
    return 4;
  }
  return portfolioItemStyles;
};
