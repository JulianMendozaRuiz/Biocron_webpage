// my-react-component.tsx
import React from "react";
import { quickStartViewerPlugins, RicosViewer } from "@wix/ricos";


const MyReactComponent = ({ content } : any) => {
  const plugins = quickStartViewerPlugins();

  return <RicosViewer content={content} plugins={plugins} />;
};

export default MyReactComponent;
