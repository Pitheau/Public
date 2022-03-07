package com.conradpitheau.dojoninja.services;



import java.util.List;

import org.springframework.stereotype.Service;

import com.conradpitheau.dojoninja.models.Dojo;
import com.conradpitheau.dojoninja.models.Ninja;
import com.conradpitheau.dojoninja.repositories.DojoRepository;
import com.conradpitheau.dojoninja.repositories.NinjaRepository;

@Service
public class MainService {

	private final NinjaRepository ninjaRepo;
	private final DojoRepository dojoRepo;
	
	public MainService(NinjaRepository ninjaRepo, DojoRepository dojoRepo) {
		this.ninjaRepo = ninjaRepo;
		this.dojoRepo = dojoRepo;
	}
	
	  public Ninja saveNinja(Ninja ninja) {
		  return ninjaRepo.save(ninja);
	  }
	  public Dojo saveDojo(Dojo dojo) {
		  return dojoRepo.save(dojo);
	  }
	  
	  public List<Ninja> allNinjas(){
		  return ninjaRepo.findAll();
	  }
	  
	  public List<Dojo> allDojos(){
		  return dojoRepo.findAll();
	  }

	 
}
