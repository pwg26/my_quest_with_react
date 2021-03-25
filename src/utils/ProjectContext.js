import React from "react";

const ArticleContext = React.createContext({
  image: "",
  title: "",
  description: "",
  giturl: "",
  appurl: "",
});

export default ArticleContext;
