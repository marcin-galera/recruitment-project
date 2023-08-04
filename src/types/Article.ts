export interface iArticle {
  isArticleLoading: boolean;
  data: {
    author: {
      elementType: string;
      value: string;
    };
    body: {
      elementType: string;
      values: string[];
    };
    date: {
      elementType: string;
      value: string;
    };
    heading: {
      elementType: string;
      value: string;
    };
    mainImage?: {
      elementType: string;
      value?: {
        leadImage: {
          url: string;
        };
        leadImageCaption: {
          value: string;
        };
      };
    };
  };
}
