(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1349:function(e,t,a){"use strict";a.r(t);var r=a(25),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cratedb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cratedb"}},[e._v("#")]),e._v(" CrateDB")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://crate.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CrateDB"),r("OutboundLink")],1),e._v(" is an open-source distributed SQL database management system that integrates a fully searchable document-oriented data store based on a shared-nothing architecture, and is designed for high scalability.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/CrateDB/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("ul",[r("li",[e._v("Execute an SQL query")]),e._v(" "),r("li",[e._v("Insert rows in database")]),e._v(" "),r("li",[e._v("Update rows in database")])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create a table and insert data into it in CrateDB. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/597",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("CrateDB")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(651),alt:"A workflow with the CrateDB node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-cratedb-node-execute-query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-cratedb-node-execute-query"}},[e._v("#")]),e._v(" 2. CrateDB node (Execute Query)")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the CrateDB node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/CrateDB/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Execute Query' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the following SQL query in the "),r("em",[r("strong",[e._v("Query")])]),e._v(" field: "),r("code",[e._v("CREATE TABLE test (id INT, name STRING);")]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Node")])]),e._v(" tab and toggle "),r("em",[r("strong",[e._v("Always Output Data")])]),e._v(" to true.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(652),alt:"Using the CreateDB node to create a table"}})]),e._v(" "),r("h3",{attrs:{id:"_3-set-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),r("ol",[r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("id")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("name")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the value for the name in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(653),alt:"Using the Set node to set data to be inserted by the CrateDB node"}})]),e._v(" "),r("h3",{attrs:{id:"_4-cratedb1-node-insert"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-cratedb1-node-insert"}},[e._v("#")]),e._v(" 4. CrateDB1 node (Insert)")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous CrateDB node.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("test")]),e._v(" in the "),r("em",[r("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("id, name")]),e._v(" in the "),r("em",[r("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(654),alt:"Using the CrateDB node to insert data into a table"}})]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/n8n-io/smart-factory-automation-using-iot-and-sensor-data-with-n8n-27675de9943b",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart Factory Automation using IoT and Sensor Data with n8n 🏭"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports},651:function(e,t,a){e.exports=a.p+"assets/img/workflow.bb93d975.png"},652:function(e,t,a){e.exports=a.p+"assets/img/CrateDB_node.b14b5d55.png"},653:function(e,t,a){e.exports=a.p+"assets/img/Set_node.c133eece.png"},654:function(e,t,a){e.exports=a.p+"assets/img/CrateDB1_node.81da3b2a.png"}}]);