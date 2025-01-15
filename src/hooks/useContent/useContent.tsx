import { useCallback, useEffect } from "react";
import { client } from "../../client";
import { useDispatch } from "react-redux";
import { addContent } from "../../reducers/content/contentSlice";


const useContent = () => {
  const dispatch = useDispatch()

  const getContent = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "planningPoker" });
      const dataResponse = response.items

      const transformedData = dataResponse.reduce((acc: any, curr: any) => {
        acc[curr.fields.id] = curr.fields.text;
        return acc;
      }, {});

      dispatch(addContent(transformedData))
    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    getContent();
  }, [getContent]);
}

export default useContent;