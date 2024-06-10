// src/queries.js
import { gql } from '@apollo/client';

export const GET_PARTS_LIST = gql`
  query {
  products(filter: {category_id: {eq: "150"} }, sort: {name: ASC}) {
    items {
      name
      sku
       image {
                url
       }
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
    }
  }
}
`;
