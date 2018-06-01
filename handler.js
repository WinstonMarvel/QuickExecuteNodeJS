//ExplorerMenuParent
var ExplorerMenuParent = createMenuItem ({
  id: "ExplorerMenuParent",
  title: "Open folder",
  contexts: ["selection"],
}, menu_click);


//SambaMenuParent
var SublimeMenuParent = createMenuItem ({
  id: "SublimeMenuParent",
  title: "Edit files",
  contexts: ["selection"],
}, menu_click);





/////////////Explorer Menus//////////////////

//Samba
var sambaMain = createMenuItem ({
  id: "sambaMain",
  title: "Open Samba",
  contexts: ["selection"], 
  parentId : "ExplorerMenuParent"
}, menu_click);

//Samba CSS
var sambaCSS = createMenuItem ({
  id: "sambaCSS",
  title: "Open Samba/CSS folder",
  contexts: ["selection"], 
  parentId : "ExplorerMenuParent"
}, menu_click);

//Samba Templates
var sambaTemplates = createMenuItem ({
  id: "sambaTemplates",
  title: "Open Samba/Templates folder",
  contexts: ["selection"], 
  parentId : "ExplorerMenuParent"
}, menu_click);

//Samba Images
var sambaImages = createMenuItem ({
  id: "sambaImages",
  title: "Open Samba/Images folder",
  contexts: ["selection"], 
  parentId : "ExplorerMenuParent"
}, menu_click); 


//Pub Photoshop
var pubPhotoshop = createMenuItem ({
  id: "pubPhotoshop",
  title: "Open Pub/Photoshop folder",
  contexts: ["selection"], 
  parentId : "ExplorerMenuParent"
}, menu_click);

//Create Fikder
var pubMain = createMenuItem ({
  id: "createFolder",
  title: "Create Local Folder",
  contexts: ["selection"], 
  parentId : "ExplorerMenuParent"
}, menu_click);


/////////////SUBLIME Menus//////////////////





//Menu Item 2
var siteCSS = createMenuItem( {
  id: "siteCSS",
  title: "site.scss",
  contexts: ["selection"],
  parentId : "SublimeMenuParent"
}, menu_click);

// //Menu Item 1
// var landingPageCSS = createMenuItem ({
//   id: "landingPageCSS",
//   title: "landing-page.css",
//   contexts: ["selection"],
//   parentId : "SublimeMenuParent"
// }, menu_click);

//Menu Item 1
var homeHTML = createMenuItem ({
  id: "homeHTML",
  title: "home.html",
  contexts: ["selection"],
  parentId : "SublimeMenuParent"
}, menu_click);

//Menu Item 1
var defaultHTML = createMenuItem ({
  id: "defaultHTML",
  title: "default.html",
  contexts: ["selection"],
  parentId : "SublimeMenuParent"
}, menu_click);

//Menu Item 1
var designHTML = createMenuItem ({
  id: "designHTML",
  title: "design.html",
  contexts: ["selection"],
  parentId : "SublimeMenuParent"
}, menu_click);

//Menu Item 1
var initJS = createMenuItem ({
  id: "initJS",
  title: "init.js",
  contexts: ["selection"],
  parentId : "SublimeMenuParent"
}, menu_click);

//Menu Item 1
// var editAll = createMenuItem ({
//   id: "editAll",
//   title: "All",
//   contexts: ["selection"],
//   parentId : "SublimeMenuParent"
// }, menu_click);


// //Menu Item 1
// var attorneyHTML = createMenuItem ({
//   id: "attorneyHTML",
//   title: "default.html",
//   contexts: ["selection"],
//   parentId : "SublimeMenuParent"
// }, menu_click);



samba_drive_letter = "S:\\";
pub_drive_letter = "P:\\";

// Creating the menu items
function createMenuItem( menuObject, onclickHandler){
		menuObject.onclick = onclickHandler;
		chrome.contextMenus.create(menuObject);
		return menuObject;
}


//Deciding what happens when there's a click
function menu_click(info, tab){
var request = "http://localhost:3000/?";
console.log("This works");
	switch(info.menuItemId){

		case "sambaMain":
		request += "method=openfolder&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\";
		console.log(request);
		break;

		case "sambaCSS":
		request += "method=openfolder&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\css";
		console.log(request);
		break;

		case "sambaTemplates":
		request += "method=openfolder&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\templates";
		console.log(request);
		break;

		case "sambaImages":
		request += "method=openfolder&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\images";
		console.log(request);
		break;

		case "pubPhotoshop":
		request += "method=openfolder&path=" + pub_drive_letter + "Firmsites\\" + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\creative\\photoshop";
		console.log(request);
		break;

		case "siteCSS":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\css\\site.scss";
		console.log(request);
		break;

		case "homeHTML":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\templates\\home.html";
		console.log(request);
		break;

		case "defaultHTML":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\templates\\default.html";
		console.log(request);
		break;
		
		case "designHTML":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\templates-blog\\design.html";
		console.log(request);
		break;		

		case "initJS":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\scripts\\init.js";
		console.log(request);
		break;

		case "createFolder":
		request += "method=create&foldername=" + info.selectionText;
		console.log(request);
		break;

		// case "editAll":
		// request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\scripts\\init.js";
		// console.log(request);
		// break;

		default:
		console.log("none");
		break;
	}

// Sending the get request to the server
window.open(request);

}