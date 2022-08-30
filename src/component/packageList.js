
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PackageTabs from "./packageTabs";



const PackageList = () => {

      const data = useStaticQuery(graphql`
      query MyQuery {
        allOttPackagesJson {
          edges {
            node {
              id
              packageList {
                packageDuration
                details {
                  Price
                  logos
                  packageName
                }
              }
            }
          }
        }
      }`);
      
    return (
       <div className="container">
        <div className="col-12">
        <h1> hello from package List</h1>
      <PackageTabs tabs={data.allOttPackagesJson.edges[0].node.packageList}></PackageTabs>
        </div>
       </div>
    )
}


export default PackageList;