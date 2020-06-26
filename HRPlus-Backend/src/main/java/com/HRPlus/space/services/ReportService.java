package com.HRPlus.space.services;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.HRPlus.space.entities.Employe;
import com.HRPlus.space.entities.UserInformation;
import com.HRPlus.space.repositories.IEmployeRepo;
import com.HRPlus.space.repositories.IUtilidateurRepo;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;



@Service
public class ReportService {
	
	@Autowired
	private IUtilidateurRepo userRepo;
	
	 public String exportReport(long id) throws FileNotFoundException, JRException {
		 
	        String path = "C:\\Users\\ASUS\\Downloads";
	        
	        Optional<UserInformation> user = userRepo.findById(id);
//	        String nom = employee.get().getNom();
//	        String prenom = employee.get().getPrenom();
//	        List<Object> data = new ArrayList<>();
//	        data.add(nom);
//	        data.add(prenom);
//	        
	        Map<String, Object> parameters = new HashMap<String, Object>();
            parameters.put("prenom", user.get().getPrenom());
            parameters.put("nom", user.get().getNom());
            parameters.put("departement", user.get().getDepartement());
            parameters.put("cin", user.get().getCin());
            parameters.put("CNSS", user.get().getCnss());
            parameters.put("adresse", user.get().getAdresse());
            parameters.put("email", user.get().getEmail());
            parameters.put("phone", user.get().getPhone());
            parameters.put("fonction", user.get().getFonction());
            parameters.put("typeContrat", user.get().getTypeContrat());
            parameters.put("salary", user.get().getSalary());
            
            
	        
	        //load file and compile it
	        File file = ResourceUtils.getFile("classpath:users.jrxml");
	        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
	        //JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(data);
	        
	        
	        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JREmptyDataSource());
	        
	        JasperExportManager.exportReportToPdfFile(jasperPrint, path + "//users.pdf");
	        

	        return "report generated in path : " + path;
	    }

}

