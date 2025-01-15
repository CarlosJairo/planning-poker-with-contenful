import { useEffect, useState } from "react";
import { client } from "../../client";

const useContent = () => {
  const [content, setContent] = useState("");

  const getContent = async () => {
    try {
      const response = await client.getEntries({ content_type: "planningPoker" });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContent();
  }, [getContent]);

  return {
    content
  }
}

export default useContent;