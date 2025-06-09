// my-react-component.tsx
import React from "react";
import { quickStartViewerPlugins, RichContent, RicosViewer } from "@wix/ricos";


const MyReactComponent = ({ content } : {content: RichContent}) => {
  const plugins = quickStartViewerPlugins();

  return <RicosViewer content={content} plugins={plugins} />;
};

export default MyReactComponent;
