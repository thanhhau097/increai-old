import { useEffect, useRef, useState } from "react";
import { Annotorious } from "@recogito/annotorious";
import Toolbar from "@recogito/annotorious-toolbar";

import "@recogito/annotorious/dist/annotorious.min.css";

function Interface() {
  // Ref to the image DOM element
  const imgEl = useRef();
  const toolbarRef = useRef();

  // The current Annotorious instance
  const [anno, setAnno] = useState();
  const [hasPlugin, setHasPlugin] = useState(false);

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current
      });

      // Attach event handlers here
      annotorious.on("createAnnotation", (annotation) => {
        console.log("created", annotation);
      });

      annotorious.on("updateAnnotation", (annotation, previous) => {
        console.log("updated", annotation, previous);
      });

      annotorious.on("deleteAnnotation", (annotation) => {
        console.log("deleted", annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, []);

  // load Toolbar plugin once
  useEffect(() => {
    if (anno && !hasPlugin) {
      Toolbar(anno, toolbarRef.current);
      setHasPlugin(true);
    }
  }, [anno, hasPlugin]);


  return (
    <div>
      <div ref={toolbarRef} />

      <img
        ref={imgEl}
        src="https://media.vietravel.com/images/NewsPicture/George-Street-Sydney.jpg"
        alt="Hallstatt Town Square"
      />
    </div>
  );
}

export default Interface;
