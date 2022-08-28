
import React from "react";
import { useStaticQuery, graphql } from "gatsby"



const PackageList = () => {

      const data = useStaticQuery(graphql`
      query MyQuery {
        allOttPackagesJson {
            edges {
              node {
                id
                jsonId
                price
                rating
                stock
                thumbnail
                title
              }
            }
          }
      }`);
      console.log({data});
    return (
        <h1> hello from package List</h1>
    )
}


export default PackageList;