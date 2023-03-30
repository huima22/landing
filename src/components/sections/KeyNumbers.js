import React from 'react';

const KeyNumbers = ({showNumbers}) => {


if(showNumbers) {
            return (
                    <div className="container-xs">
                               <table>
                               <tr>
                                <td><h3> 1200+ </h3> </td>
                                 <td><h3>10m+</h3></td>
                                <td><h3>30+</h3> </td>
                                <td><h3>10k+ </h3></td>
                               </tr>
                                  <tr>
                                  <td>Dashboards</td>
                                  <td>Views</td>
                                  <td>Data Sources</td>
                                  <td>Unique Users</td>
                                  </tr>

                                </table>
                        </div>
            )

        } else {
         return null;
        }

     }

export default KeyNumbers;