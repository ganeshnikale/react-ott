import  React  from "react";

const PackageTabs = ({tabs}) => {
    return (
        <div className="col-12">

            { 
             tabs.map( (el, index) => {
                  return (
                    <div className="tab">
                  <h1 key={index}>{ el.packageDuration}</h1>
                  console.log('ddd');
                  </div>
                  )
                 })
             }





        </div>
        
    );
}


export default PackageTabs;