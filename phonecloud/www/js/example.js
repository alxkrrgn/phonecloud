	$.mobile.paramsHandler.addPage(
        "page8",                     // jquery mobile page id which will accept parameters
        ["id", "path"],       // required parameters for that page
        [],                          // optional parameters for that page,
        function (urlVars) {
            $("#id9display").html(urlVars.id);
            //$("#path9display").html(decodeURIComponent(urlVars.path));
            document.getElementById("path9display").src = decodeURIComponent(urlVars.path);
            //document.getElementById("path7display").src = decodeURIComponent(urlVars.path);
            $("#http9display").html(decodeURIComponent(urlVars.path));
        }
    );
     $.mobile.paramsHandler.addPage(
        "page7",                     // jquery mobile page id which will accept parameters
        ["id", "path"],       // required parameters for that page
        [],                          // optional parameters for that page,
        function (urlVars7) {    
            $("#id7display").html(urlVars7.id);
            //$("#path9display").html(decodeURIComponent(urlVars.path));
            document.getElementById("path7display").src = decodeURIComponent(urlVars7.path);
            //document.getElementById("path7display").setAttribute('data', decodeURIComponent(urlVars7.path));
            $("#http7display").html(decodeURIComponent(urlVars7.path));
        }
    );  
     $.mobile.paramsHandler.addPage(
        "popupShare",                     // jquery mobile page id which will accept parameters
        ["id", "filepath"],       // required parameters for that page
        [],                          // optional parameters for that page,
        function (linkurl) {
            //$("#id7display").html(urlVars7.id);
            //$("#path9display").html(decodeURIComponent(urlVars.path));
            //document.getElementById("filelink").src = decodeURIComponent(linkurl.filepath);
            //document.getElementById("path7display").setAttribute('data', decodeURIComponent(urlVars7.path));
            $("#filelink").html(decodeURIComponent(linkurl.filepath));
            $("#myfilelink").val(linkurl.filepath);
        }
    );       
     $.mobile.paramsHandler.addPage(
        "page6",                     // jquery mobile page id which will accept parameters
        ["key", "page"],       // required parameters for that page
        [],                          // optional parameters for that page,
        function (urlVars6) {
            $("#myKey").val(urlVars6.key);
            $("#myPage").val(urlVars6.page);
            //$("#myKeyText").html(urlVars6.key);
            //$("#myPageText").html(urlVars6.page);
            var Key = urlVars6.key;
            var Page = urlVars6.page;
            var upfolder = '';
            if ( (Key !== '') && (Page == '') ) {
				upfolder = "<div id='mainleft'>Upload folder: </div>" + "<div id='mainright'>" + "/" + Key + "</div>";
				} 
			else if ( (Key !== '') && (Page == 999999) ) {
				upfolder = "<div id='mainleft'>Upload folder: </div>" + "<div id='mainright'>" + "/" + Key + "</div>";
				} 	
				else if ( (Key !== '') && (Page !== '') ) {
				upfolder = "<div id='mainleft'>Upload folder: </div>" + "<div id='mainright'>" + "/" + Key + "/" + Page + "</div>";
				}
			$('#containm').html("");	
			$('#containm').append(upfolder);	
            //$("#path9display").html(decodeURIComponent(urlVars.path));
            //document.getElementById("path7display").src = decodeURIComponent(urlVars7.path);
            //document.getElementById("path7display").setAttribute('data', decodeURIComponent(urlVars7.path));
            //$("#http7display").html(decodeURIComponent(urlVars7.path));
        }
    );   
     $.mobile.paramsHandler.addPage(
        "page9",                     // jquery mobile page id which will accept parameters
        ["id", "folderName"],       // required parameters for that page
        [],                          // optional parameters for that page,
        function (folders) {
            $("#id29display").html(folders.id);
            //$("#path9display").html(decodeURIComponent(urlVars.path));
           	$("#folder9display").html(folders.folderName);
           	$("#xfolder").val(folders.folderName);
           	$("#xfoldertxt").html(folders.folderName);
           	$("#xsubfolder").val("");
           	$("#xsubfoldertxt").html("");
            //document.getElementById("path7display").setAttribute('data', decodeURIComponent(urlVars7.path));
            //$("#http7display").html(folders.folderName);	
			//alert(Folder);
			$("#TablePage5 tr").html("");
			var head = '<tr><th><a><i class="fa fa-list" id=fath></i></a></th><th>Name<a></a></th><th>Size<a></a></th><th>Date<a></a></th></tr>';
			$('#TablePage5 thead tr:last').after(head);
     	$.ajax({
		   	type: "POST",
		   	url: "http://www.4yourcloud.com/hfilefolder_ios.php",
			data: "folder="+folders.folderName,
			dataType: 'json',
			xhrFields: {
       			withCredentials: true
  				},
  			crossDomain: 'true',
			cache:"false",
		   success: function (folderjson){  
		   
		   var k = 999999;
		   for (var i = 0; i < folderjson.length; i++) {
        	
        		  var row = "<tr>";
             	  var tdfolder = '<td><img src="img/folder.png" height="15" width="18"></td><td>';
             	  var tdone = '</td><td>';
             	  var upload = '<a href="#page6?key=' + folderjson[i].foldername + '&page=' + folderjson[i].subfolder1 + '" data-transition="pop" >' + 'Upload<i  class="fa fa-upload" id=fa15></i>' + '</a>';
             	  var tdtwo = '</td><td></td></tr>';
             	  var result = '';
   			
   			//alert(row);
   			result += row + tdfolder;
   			//alert(result);
			result += '<a href="#page10?id=' + i + '&folderName=' + folderjson[i].foldername + '&subFolder=' + folderjson[i].subfolder1 + '" data-transition="pop" >' + folderjson[i].subfolder1 + '</a>';
			//alert(result);
			result += tdone + upload + tdtwo; 
			//alert(result);
   			//result.append(row + tdfolder + html(datajson[i].foldername) + tdtwo);
		   	
   			$('#TablePage5 tr:last').after(result);
   			$('td a').css('fontSize', '12px');
			$('td a').css('color', '#663300');
			$('td a').css('fontWeight', 'normal');
   			//result.append(row + tdfolder + html(datajson[i].folderpath) + tdtwo);
   			//console.log(result);
   			// result += row + tdfolder + tdtwo; 
   
            //tr.append("<td>" + html(datajson[i].folderpath) + "</td>");
            //tr.append("<td>" + html(datajson[i].Uid) + "</td>");
           
            //$('#content3').html(result);
            }
		   //$('#contentid').html(data.Email);
		   }
		  });
		  $.ajax({
		   	type: "POST",
		   	url: "http://www.4yourcloud.com/hfileKey_ios.php",
			data: "folder="+folders.folderName,
			dataType: 'json',
			xhrFields: {
       			withCredentials: true
  				},
  			crossDomain: 'true',
			cache:"false",
		   success: function (filejson){  
		   
		   for (var i = 0; i < filejson.length; i++) {
        		  
        	function humanFileSize(size) {
    		var j = Math.floor( Math.log(size) / Math.log(1024) );
  		  	return ( size / Math.pow(1024, j) ).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][j];
			};	
			var docs = ['pdf','PDF','psd','PSD','ai','AI','eps','EPS','ps','PS','lrf','LRF','lrx','LRX','djvu','DJVU','ibooks','IBOOKS','inf','INF','PRC','prc','mobi','MOBI','pkg','PKG','opf','OPF','doc','docx','pages','PAGES','epub','EPUB','pdb','PDB','fb2','xeb','ceb','azw3','azw','kf8','lit','oxps','OXPS','xps','XPS','xls','xlsx','DOC','DOCX','XLS','XLSX'];
			var	images = ['png','jpe','jpeg','jpg','gif','bmp','ico','tiff','tif','svg','svgz','JPG','JPE','JPEG','GIF','PNG','BMP','TIF','TIFF','SVG','SVGZ','ICO'];
			var media = ['mng','MNG','avi','AVI','mov','MOV','qt','QT','WMV','wmv','mp3','MP3','MP4','mp4'];
       		//var ext = filejson[i].filename.replace(/.*\./, '').toLowerCase();
       		var fileName = filejson[i].filename;
       		var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
       		
       		if (!!(docs.indexOf(ext)+1)) {
       		var iframefile = '<a href="#page7?id=' + i + '&path=' + encodeURIComponent(filejson[i].httppath) + '" data-transition="pop" >' + filejson[i].filename + '</a>';
       		}
       		else if (!!(images.indexOf(ext)+1)) {
       		var iframefile = '<a href="#page8?id=' + i + '&path=' + encodeURIComponent(filejson[i].httppath) + '" data-transition="pop" >' + filejson[i].filename + '</a>';
       		} 
       		else if (!!(media.indexOf(ext)+1)) {
       		var iframefile = '<a href="#page8?id=' + i + '&path=' + encodeURIComponent(filejson[i].httppath) + '" data-transition="pop" >' + filejson[i].filename + '</a>';
       		} 
       		else {
       		var iframefile = filejson[i].filename;
       		}
        	var row = "<tr>";
            var tdfolder = '<td><i class="'+ filejson[i].Icon + '" id=fa15></td><td>';
            var tdtwo = '</td><td>' + humanFileSize(filejson[i].size) + '</td><td>' + filejson[i].RegDate + '</td></tr>';
            
            var result2 = '';
           	  
   			result2 += row + tdfolder + iframefile + tdtwo;
   	
   			$('#TablePage5 tr:last').after(result2);
   			$('td a').css('fontSize', '12px');
			$('td a').css('color', '#663300');
			$('td a').css('fontWeight', 'normal');
   	
            		}	 
		   		}
		  	});
    	}
    ); 
         $.mobile.paramsHandler.addPage(
        "page10",                     // jquery mobile page id which will accept parameters
        ["id", "folderName", "subFolder"],       // required parameters for that page
        [],                          // optional parameters for that page,
        function (subfolders) {
            $("#id10display").html(subfolders.id);
            //$("#path9display").html(decodeURIComponent(urlVars.path));
           	$("#folder10display").html(subfolders.folderName);
           	$("#subfolder10display").html(subfolders.subFolder);
           	$("#xfolder").html(subfolders.folderName);
           	$("#xsubfolder").html(subfolders.subFolder);
           	$("#xfoldertxt").html(subfolders.folderName);
           	$("#xsubfoldertxt").html(subfolders.subFolder);
           	
            //document.getElementById("path7display").setAttribute('data', decodeURIComponent(urlVars7.path));
            //$("#http7display").html(folders.folderName);	
			//alert(Folder);
			$("#TablePage6 tr").html("");
			var head = '<tr><th><a><i class="fa fa-list" id=fath></i></a></th><th>Name<a></a></th><th>Size<a></a></th><th>Date<a></a></th></tr>';
			$('#TablePage6 thead tr:last').after(head);
			
		  $.ajax({
		   	type: "POST",
		   	url: "http://www.4yourcloud.com/hfilePage_ios.php",
			data: "folder="+subfolders.folderName+"&subFolder="+subfolders.subFolder,
			dataType: 'json',
			xhrFields: {
       			withCredentials: true
  				},
  			crossDomain: 'true',
			cache:"false",
		   success: function (filejson){  
		   
		   for (var i = 0; i < filejson.length; i++) {
        		  
        	function humanFileSize(size) {
    		var j = Math.floor( Math.log(size) / Math.log(1024) );
  		  	return ( size / Math.pow(1024, j) ).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][j];
			};	 
			var docs = ['pdf','PDF','psd','PSD','ai','AI','eps','EPS','ps','PS','lrf','LRF','lrx','LRX','djvu','DJVU','ibooks','IBOOKS','inf','INF','PRC','prc','mobi','MOBI','pkg','PKG','opf','OPF','doc','docx','pages','PAGES','epub','EPUB','pdb','PDB','fb2','xeb','ceb','azw3','azw','kf8','lit','oxps','OXPS','xps','XPS','xls','xlsx','DOC','DOCX','XLS','XLSX'];
			var	images = ['png','jpe','jpeg','jpg','gif','bmp','ico','tiff','tif','svg','svgz','JPG','JPE','JPEG','GIF','PNG','BMP','TIF','TIFF','SVG','SVGZ','ICO'];
       		var media = ['mng','MNG','avi','AVI','mov','MOV','qt','QT','WMV','wmv','mp3','MP3','MP4','mp4'];
       		//var ext = filejson[i].filename.replace(/.*\./, '').toLowerCase();
       		var fileName = filejson[i].filename;
       		var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
       		
       		if (!!(docs.indexOf(ext)+1)) {
       		var iframefile = '<a href="#page7?id=' + i + '&path=' + encodeURIComponent(filejson[i].httppath) + '" data-transition="pop" >' + filejson[i].filename + '</a>';
       		}
       		else if (!!(images.indexOf(ext)+1)) {
       		var iframefile = '<a href="#page8?id=' + i + '&path=' + encodeURIComponent(filejson[i].httppath) + '" data-transition="pop" >' + filejson[i].filename + '</a>';
       		} 
       		else if (!!(media.indexOf(ext)+1)) {
       		var iframefile = '<a href="#page8?id=' + i + '&path=' + encodeURIComponent(filejson[i].httppath) + '" data-transition="pop" >' + filejson[i].filename + '</a>';
       		} 
       		else {
       		var iframefile = filejson[i].filename;
       		}
        	var row = "<tr>";
            var tdfolder = '<td><i class="'+ filejson[i].Icon + '" id=fa15></td><td>';
            var tdtwo = '</td><td>' + humanFileSize(filejson[i].size) + '</td><td>' + filejson[i].RegDate + '</td></tr>';
            
            var result2 = '';
           	  
   			result2 += row + tdfolder + iframefile + tdtwo;
   	
   			$('#TablePage6 tr:last').after(result2);
   			$('td a').css('fontSize', '12px');
			$('td a').css('color', '#663300');
			$('td a').css('fontWeight', 'normal');
   	
            		}	 
		   		}
		  	});
    	}
    );
    $.mobile.paramsHandler.init();