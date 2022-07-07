package com.cts.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadService {
	public final String upload_Dir="C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images";
	
	public boolean uploadFile(MultipartFile image,String url) {
		boolean f = false;
		try {
			Files.copy(image.getInputStream(),Paths.get(upload_Dir+File.separator+url),StandardCopyOption.REPLACE_EXISTING);
			f = true;
		}
		catch(Exception e){
			e.printStackTrace();
		}	
		return f;
	}
}
