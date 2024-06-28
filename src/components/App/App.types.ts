export interface Image {
  id: string,
  alt_description: string,
  urls: {
    regular: string,
    small: string
  }
};

export interface fetchDataResults {
  results: Image[];
  total: number;
};
