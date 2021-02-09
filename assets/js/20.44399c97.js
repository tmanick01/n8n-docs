(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1323:function(e,t,o){"use strict";o.r(t);var r=o(25),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"webhook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webhook"}},[e._v("#")]),e._v(" Webhook")]),e._v(" "),r("p",[e._v("The Webhook node is one of the most powerful nodes in n8n. It allows you to create "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("webhooks"),r("OutboundLink")],1),e._v(" which can be used to receive data from apps and services when an event occurs. It is a Trigger node, which means that it serves as the starting point for an n8n workflow. This allows several different services to connect to n8n and run a workflow when data is received.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),r("ol",[r("li",[e._v("When using the Webhook node on the localhost, ensure that n8n is running with the "),r("RouterLink",{attrs:{to:"/getting-started/quickstart.html#start-with-tunnel"}},[e._v("tunnel")]),e._v(" mode.")],1),e._v(" "),r("li",[e._v("When working with a Production webhook, please ensure that you have saved and activated the workflow. Don’t forget that the data flowing through the webhook won’t be visible in the Editor UI with the Production webhook.")])])]),e._v(" "),r("p",[e._v("Webhook nodes can be used as triggers for workflows when we want to receive data and run a workflow based on the data. The Webhook node also supports returning the data generated at the end of a workflow. This makes it very useful to build a workflow to process data and return the results, like an API endpoint.")]),e._v(" "),r("p",[e._v("While building or testing a workflow, we recommend that you use a test webhook URL. Using a test webhook ensures that you can view the incoming data in the Editor UI, which is useful for debugging. Make sure that you click on the "),r("em",[e._v("Execute Node")]),e._v(" button to register the webhook before sending the data to the test webhook. The test webhook stays active for 120 seconds.")]),e._v(" "),r("p",[e._v("🎥 The following playlist will help you learn how to use the Webhook node in n8n.")]),e._v(" "),r("div",{staticClass:"video-container"},[r("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed//videoseries?list=PLlET0GsrLUL5niZQDjW56b_AxpvnEZyps",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),r("h2",{attrs:{id:"node-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),r("p",[e._v("First of all, in the parameters section, we have the Webhook URLs. Clicking on that will reveal the URLs for the webhook. Here you have two options, let’s understand the difference between them.")]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("Webhook URLs")])]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Production")]),e._v(": A Production webhook is only registered when a workflow has been activated (via the switch on the top right of the page). You will never see its data in the Editor UI. To save the executions, you can either set that as a global default or you can specify that on a per-workflow basis in the workflow settings. You will then see the data from the workflow under ‘Past Executions’.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Test")]),e._v(": A Test webhook is only registered in the time between executing a workflow via the UI and until the first call gets made (when it displays “waiting for Webhook call”). After the Test webhook gets called for the first time, it displays the data in the Editor UI, and then gets deactivated.")])])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Authentication:")]),e._v(" The Webhook node supports two methods of authenticating a request that it receives.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Header Auth")]),r("OutboundLink")],1),e._v(" — A method of authentication where the specified header parameter must be passed along with the request. This method can be used when you want to authenticate using an API key or an access token, for example.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Basic Auth")]),r("OutboundLink")],1),e._v(" — A method of authentication where the specified username and password must be passed along with the request.")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("HTTP Method:")]),e._v(" The Webhook node supports receiving two types of "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP Requests"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("GET Request")]),r("OutboundLink")],1),e._v(" — GET requests are typically used to request data from a resource. This type of request is typically used to retrieve data from a service.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("POST Request")]),r("OutboundLink")],1),e._v(" — POST requests are typically used to send data to a resource for a create/update operation. This type of request is typically used to send data to a service.")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Path:")]),e._v(" YBy default, this field contains a randomly generated webhook URL path, to avoid conflicts with other webhook nodes. You can also manually specify a URL path if necessary. A good example would be if you were using n8n to prototype an API; and wanted consistent endpoint URLs.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Response Code:")]),e._v(" Allows you to customize the "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP response code"),r("OutboundLink")],1),e._v(" that the Webhook node will return upon successful execution.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Response Mode:")]),e._v(" This dropdown list allows you to select between two response modes.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("On Received:")]),e._v(" When this option is selected, the Webhook node will return the specified response code along with the message “Workflow got started.”.")]),e._v(" "),r("li",[r("strong",[e._v("Last Node:")]),e._v(" When this option is selected, the Webhook node will return the specified response code along with the data output from the last node executed in the workflow.")])])])]),e._v(" "),r("p",[r("strong",[e._v("Optional Parameters:")]),e._v(" The Webhook node also supports several optional methods that can be used during configuration.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/Response_header",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Response Headers")]),r("OutboundLink")],1),e._v(" — This option allows you to specify additional headers in the Webhook response.")]),e._v(" "),r("li",[r("strong",[e._v("Raw Body")]),e._v(" — This option is used to specify when the Webhook node will receive data in a RAW format, such as JSON or XML.")]),e._v(" "),r("li",[r("strong",[e._v("Binary Data")]),e._v(" — This option is available only when the Webhook node is set to receive POST requests. Setting this to ‘true’ lets the Webhook node know that it will receive binary data (such as an image/audio). You can use this option when you expect to receive a file via your Webhook node.")])]),e._v(" "),r("p",[r("strong",[e._v("Conditional Parameters:")]),e._v(" The Webhook node also supports several other parameters, that are used only in certain configurations.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Response Data:")]),e._v(" This option is available only when the Response Mode is set to ‘Last Node’. It allows you to choose which data to return.\n"),r("ul",[r("li",[r("strong",[e._v("All Entries")]),e._v(" — Choose this option to return all the data generated by the last node in the workflow, as an array.")]),e._v(" "),r("li",[r("strong",[e._v("First Entry JSON")]),e._v(" — Choose this option to return the first data entry of the last node in the workflow, as a JSON object.")]),e._v(" "),r("li",[r("strong",[e._v("First Entry Binary")]),e._v(" — Choose this option to return the binary data of the first entry of the last node in the workflow, as a binary file.")])])])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to receive the weather information of a city using the Webhook and the OpenWeatherMap nodes. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/807",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[e._v("Webhook")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/OpenWeatherMap/"}},[e._v("OpenWeatherMap")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(597),alt:"A workflow with the Webhook node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-webhook-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-webhook-node"}},[e._v("#")]),e._v(" 1. Webhook node")]),e._v(" "),r("p",[e._v("This node will trigger the workflow. We will make a GET request to the Test URL and pass on a query parameter "),r("code",[e._v("city")]),e._v(". We will use the value of this query parameter in the next node in the workflow.")]),e._v(" "),r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Webhook URLs")])]),e._v(" and select the 'Test' tab.")]),e._v(" "),r("li",[e._v("Copy the displayed URL. We will make a GET request to this URL later on.")]),e._v(" "),r("li",[e._v("Select 'Last Node' from the "),r("em",[r("strong",[e._v("Response Mode")])]),e._v(". This will return the data from the last executed node.")]),e._v(" "),r("li",[e._v("Select 'All Entries' from the "),r("em",[r("strong",[e._v("Response Data")])]),e._v(". This will return all the entries of the last executed node.")]),e._v(" "),r("li",[e._v("Save the workflow to register the webhook.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")]),e._v(" "),r("li",[e._v("In a new browser tab, paste the URL you copied in the previous step and append it with "),r("code",[e._v("?city=Berlin")]),e._v(". Your URL should look similar to the following URL:"),r("code",[e._v("https://your-n8n.url/webhook/path?city=Berlin")]),e._v(". We are passing a query parameter "),r("code",[e._v("city")]),e._v(" and assigning it the value "),r("code",[e._v("Berlin")]),e._v(".")]),e._v(" "),r("li",[e._v("Press Enter (or Return) to make a request to the Test Webhook URL.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow and receives a query parameter. We will use the value of the query parameter in the next node in the workflow.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(598),alt:"Using the Webhook node to trigger the workflow"}})]),e._v(" "),r("h3",{attrs:{id:"_2-openweathermap-node-current-weather"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-openweathermap-node-current-weather"}},[e._v("#")]),e._v(" 2. OpenWeatherMap node (Current Weather)")]),e._v(" "),r("p",[e._v("This node will return data about the current weather for the city that we received in the previous node.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the OpenWeatherMap node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/OpenWeatherMap/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("City")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"3"}},[r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Webhook > Output Data > JSON > query > city. You can also add the following expression: "),r("code",[e._v('{{$node["Webhook"].json["query"]["city"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node returns data about the current weather in Berlin.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(599),alt:"Using the OpenWeatherMap node to get weather updates for Berlin"}})]),e._v(" "),r("h3",{attrs:{id:"_3-set-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),r("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets returned to the workflow. We will set the value of "),r("code",[e._v("temp")]),e._v(" and "),r("code",[e._v("description")]),e._v(" in this node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("temp")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > OpenWeatherMap > Output Data > JSON > main > temp. You can also add the following expression: "),r("code",[e._v('{{$node["OpenWeatherMap"].json["main"]["temp"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("description")]),e._v(" in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > OpenWeatherMap > Output Data > JSON > weather > [Item: 0] > description. You can also add the following expression: "),r("code",[e._v('{{$node["OpenWeatherMap"].json["weather"][0]["description"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Keep Only Set")])]),e._v(" to "),r("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node sets the values of "),r("code",[e._v("temp")]),e._v(" and "),r("code",[e._v("description")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(600),alt:"Using the Set node to set the values for temp and description"}})]),e._v(" "),r("p",[e._v("Save the workflow and execute it again by clicking on the "),r("em",[r("strong",[e._v("Execute Workflow")])]),e._v(" button in the Editor UI. This time you will receive the temperature and description as the response in the browser.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),r("p",[e._v("This example workflow uses the Webhook node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered every time a GET request is sent to the "),r("em",[r("strong",[e._v("Production")])]),e._v(" webhook URL.")])]),e._v(" "),r("h2",{attrs:{id:"faqs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),r("h3",{attrs:{id:"where-to-find-the-webhook-urls"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-find-the-webhook-urls"}},[e._v("#")]),e._v(" Where to find the Webhook URLs?")]),e._v(" "),r("p",[e._v("The Webhook node has two URLs - Test URL and Production URL.\nTo get these URLs, follow the steps mentioned below.")]),e._v(" "),r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Webhook URLs")])]),e._v(". By default, the node displays the Production URL.")]),e._v(" "),r("li",[e._v("If you want the Test URL, click on the "),r("em",[r("strong",[e._v("Test")])]),e._v(" tab.")]),e._v(" "),r("li",[e._v("To copy the URL, click on the displayed URL.")])]),e._v(" "),r("p",[e._v("Here is a GIF demonstrating how to retrieve the test and production webhook URLs in n8n.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(601),alt:"Retrieving the Test and Production URLs from the Webhook node"}})]),e._v(" "),r("h3",{attrs:{id:"how-to-use-the-http-request-node-to-trigger-the-webhook-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-the-http-request-node-to-trigger-the-webhook-node"}},[e._v("#")]),e._v(" How to use the HTTP Request node to trigger the Webhook node?")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node is used to make HTTP requests to the URL you specify. To use the HTTP Request node to trigger the Webhook node, follow the steps mentioned below.")],1),e._v(" "),r("ol",[r("li",[e._v("Create a new workflow.")]),e._v(" "),r("li",[e._v("Add the HTTP Request node to the workflow.")]),e._v(" "),r("li",[e._v("Select the appropriate method from the "),r("em",[r("strong",[e._v("Request Method")])]),e._v(" dropdown list. For example, if you have selected GET as the HTTP method in your Webhook node, select GET as the request method in the HTTP Request node.")]),e._v(" "),r("li",[e._v("Copy the URL from the Webhook node, and paste it in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field in the HTTP Request node.")]),e._v(" "),r("li",[e._v("Execute the workflow with the Webhook node if you're using the Test URL.")]),e._v(" "),r("li",[e._v("Execute the HTTP Request node.")])]),e._v(" "),r("p",[e._v("Here is a video demonstrating how to send a request to a Webhook based workflow using the HTTP Request node:")]),e._v(" "),r("div",{staticClass:"video-container"},[r("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube-nocookie.com/embed/WLIDTRJGfWw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),r("h3",{attrs:{id:"how-to-use-curl-to-trigger-the-webhook-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-curl-to-trigger-the-webhook-node"}},[e._v("#")]),e._v(" How to use cURL to trigger the Webhook node?")]),e._v(" "),r("p",[e._v("You can use "),r("a",{attrs:{href:"https://curl.se/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cURL"),r("OutboundLink")],1),e._v(" to make HTTP requests that will trigger the Webhook node. To use cURL, make sure that you have installed it on your machine. You can follow "),r("a",{attrs:{href:"https://www.booleanworld.com/curl-command-tutorial-examples/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),r("OutboundLink")],1),e._v(" to install cURL on your machine.\nBased on your use-case, you can make an HTTP request with or without any parameters. You can also send files with the HTTP request using cURL.")]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" In the following commands, replace "),r("code",[e._v("https://your-n8n.url/webhook/path")]),e._v(" with your webhook URL.")]),e._v(" "),r("ul",[r("li",[r("h4",{attrs:{id:"make-an-http-request-without-any-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#make-an-http-request-without-any-parameters"}},[e._v("#")]),e._v(" Make an HTTP request without any parameters")])])]),e._v(" "),r("p",[e._v("To make a GET request without any parameters, use the following command in your terminal.")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request GET https://your-n8n.url/webhook/path\n")])])]),r("p",[e._v("To make a POST request, use the following command.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request POST https://your-n8n.url/webhook/path\n")])])]),r("ul",[r("li",[r("h4",{attrs:{id:"make-an-http-request-with-body-parameter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#make-an-http-request-with-body-parameter"}},[e._v("#")]),e._v(" Make an HTTP request with body parameter")])])]),e._v(" "),r("p",[e._v("To make an HTTP request with a body parameter, use the following command.")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request GET https://your-n8n.url/webhook/path --data "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'key=value'")]),e._v("\n")])])]),r("ul",[r("li",[r("h4",{attrs:{id:"make-an-http-request-with-header-parameter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#make-an-http-request-with-header-parameter"}},[e._v("#")]),e._v(" Make an HTTP request with header parameter")])])]),e._v(" "),r("p",[e._v("To make an HTTP request with a header parameter, use the following command.")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request GET https://your-n8n.url/webhook/path --header "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'key=value'")]),e._v("\n")])])]),r("ul",[r("li",[r("h4",{attrs:{id:"make-an-http-request-to-send-a-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#make-an-http-request-to-send-a-file"}},[e._v("#")]),e._v(" Make an HTTP request to send a file")])])]),e._v(" "),r("p",[e._v("To send a file with the HTTP request, use the following command.")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request GET https://your-n8n.url/webhook/path --from "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'key=@/path/to/file'")]),e._v("\n")])])]),r("p",[e._v("Replace "),r("code",[e._v("/path/to/file")]),e._v(" with the path of the file you want to send.")]),e._v(" "),r("h3",{attrs:{id:"how-to-send-a-response-of-type-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-send-a-response-of-type-string"}},[e._v("#")]),e._v(" How to send a response of type "),r("code",[e._v("string")]),e._v("?")]),e._v(" "),r("p",[e._v("To send a response of type string, follow the steps mentioned below.")]),e._v(" "),r("ol",[r("li",[e._v("Select 'Last Node' from the "),r("em",[r("strong",[e._v("Response Mode")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'First Entry JSON' from the "),r("em",[r("strong",[e._v("Response Data")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on 'Add Option' and select 'Property Name' from the dropdown list.")]),e._v(" "),r("li",[e._v("Enter the name of the property that contains the response.")]),e._v(" "),r("li",[e._v("Connect a Set node to the Webhook node.")]),e._v(" "),r("li",[e._v("In the Set node, click on 'Add Value' and select 'String'.")]),e._v(" "),r("li",[e._v("Enter the name of the property in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field. The name should match the property name from step 4.")]),e._v(" "),r("li",[e._v("Enter the string value in the "),r("em",[r("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Keep Only Set")])]),e._v(" to "),r("code",[e._v("true")]),e._v(".")])]),e._v(" "),r("p",[e._v("When the Webhook gets called, it will send the string response that was set in the Set node.")]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/n8n-io/webhook-node-the-versatile-toolbox-21cb17cee862",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webhook Node — The Versatile Toolbox 🧰"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/n8n-io/creating-custom-incident-response-workflows-with-n8n-9baef0bbedb9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Custom Incident Response Workflows with n8n 🚨"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/n8n-io/automating-cross-posting-blog-posts-using-n8n-%EF%B8%8F-af2a89601810",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cross-posting content automatically with n8n ✍️"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/n8n-io/effortless-video-collaboration-with-whereby-mattermost-and-n8n-8fc397feb9cb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Effortless video collaboration with Whereby, Mattermost, and n8n 📹"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/n8n-io/webhooks-fun-with-n8n-and-mattermost-4ebf7e2b4d2a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webhooks Fun with n8n and Mattermost 🍸"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports},597:function(e,t,o){e.exports=o.p+"assets/img/workflow.740798e1.png"},598:function(e,t,o){e.exports=o.p+"assets/img/Webhook_node.353afb93.png"},599:function(e,t,o){e.exports=o.p+"assets/img/OpenWeatherMap_node.1b68bd9b.png"},600:function(e,t,o){e.exports=o.p+"assets/img/Set_node.6e0dd6b2.png"},601:function(e,t,o){e.exports=o.p+"assets/img/webhook-url.7d32248f.gif"}}]);