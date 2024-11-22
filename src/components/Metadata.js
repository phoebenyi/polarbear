import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Metadata = () => {
  const location = useLocation();

  // Default metadata
  const defaultTitle = "Help the Polar Bears";
  const defaultDescription = "Join us in our mission to protect polar bears!";
  const defaultImage = "/icons8-polar-bear-128.png";

  // Define metadata for each route
  const metadataByRoute = {
    "/": {
      title: "Help the Polar Bears",
      description: "Help the Polar Bears NAO!",
    },
    "/fun-facts": {
      title: "Fun Facts About Polar Bears",
      description: "Discover amazing fun facts about polar bears.",
    },
    "/population": {
      title: "Polar Bear Population",
      description: "Learn about polar bear population trends and statistics.",
    },
    "/about-me": {
      title: "About Me - Help the Polar Bears",
      description: "Learn more about this project and its creator.",
    },
  };

  // Fetch metadata for current route or use default values
  const currentMetadata = metadataByRoute[location.pathname] || {};
  const title = currentMetadata.title || defaultTitle;
  const description = currentMetadata.description || defaultDescription;
  const image = currentMetadata.image || defaultImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  );
};

export default Metadata;
