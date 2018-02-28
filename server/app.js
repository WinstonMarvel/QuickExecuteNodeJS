const express = require('express');
const nrc = require('node-run-cmd');

const app = express();

const samba_drive_letter = 'S';
const pub_drive_letter = 'P';
const sublime_path = 'C:\\Program Files\\Sublime Text 3\\sublime_text.exe';

//Recieve Get request.
app.get('/' , (req,res) => {
console.log(build_command(req));
// res.send(command_debug(req));
res.writeHead(200,{"Content-Type" : "text/html"});
res.write("<strong>Executing: </strong>" + build_command(req));
nrc.run(build_command(req), { onDone: res.write(exit_function()) });
// nrc.run("explorer.exe C:\\Windows & explorer.exe C:\\apps");
res.end();
});



//Separate Get
//Check Requests with switch case
//Execute command



app.listen(3000, ()=>{
	console.log("Server Listening");
});



let command_debug = function(req){
	return '<br/>Folder: ' + req.query.path + '<br/>' + 'Method: ' + req.query.method  +'<br/>';
}

// nrc.run('explorer.exe ' + 'C:\\Windows');


let build_command = function (req) {

let path = req.query.path;
let method = req.query.method;
let foldername = req.query.foldername;
let command;

	if(method == 'openfolder'){
		command = 'explorer.exe' + ' ' + path;//Change only if you are using another OS
	}

	else if(method =='edit')
	{
		command = '"'+ sublime_path + '"' + ' ' + path;	
	}

	// else if(method =='create')
	// {
	// 	// command = 'cd' + ' ' + path + ' ' + '&' + ' ' + 'md' + ' ' + foldername + ' ' + '&' + ' ' + 'explorer.exe' + ' ' + 'C:\\Firmsites\\' + foldername.charAt(0) + '\\' + foldername;//Change only if you are using another OS
	// 	command = 'mkdir C:\\Firmsites\\' + foldername.charAt(0) + '\\'+ foldername;
	// }
	// else if(method =='editAll')
	// {

	// 	// command = 'cd' + ' ' + path + ' ' + '&' + ' ' + 'md' + ' ' + foldername + ' ' + '&' + ' ' + 'explorer.exe' + ' ' + 'C:\\Firmsites\\' + foldername.charAt(0) + '\\' + foldername;//Change only if you are using another OS
	// 	command = 'mkdir C:\\Firmsites\\' + foldername.charAt(0) + '\\'+ foldername;
	// }

return command;
}

let exit_function = function(){
	return "<script>window.close(); </script>";
}