package com.HRPlus.space.services;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.AbstractFileResolvingResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import com.HRPlus.space.repositories.ICandidatRepo;

@Service
public class CandidatService {
	
	@Autowired
	private ICandidatRepo candidatRepo ; 
	
	private final Path fileStorageLocation = Paths.get("C:\\Users\\ASUS\\Desktop\\candidats");

	public Resource loadFileAsResource(String fileName) throws Exception {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = (Resource) new UrlResource(filePath.toUri());
            if(((AbstractFileResolvingResource) resource).exists()) {
                return resource;
            } else {
                throw new Exception("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new Exception("File not found " + fileName, ex);
        }
    }
	
	

	
	
}

