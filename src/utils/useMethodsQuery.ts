import { graphql, useStaticQuery } from "gatsby";

export const methodsQuery = graphql`
  query MethodsQuery {
    methodsYaml {
      title
      content {
        item
      }
    }
  }
`

export interface MethodsQuery {
  methodsYaml: {
    title: string;
    content: {
      item: string;
    }[];
  };
}

export const useMethodsQuery = () => {
  const { methodsYaml } = useStaticQuery<MethodsQuery>(methodsQuery);


  return methodsYaml;
}
