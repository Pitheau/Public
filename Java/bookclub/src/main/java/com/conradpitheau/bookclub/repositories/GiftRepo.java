package com.conradpitheau.bookclub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.conradpitheau.bookclub.models.GIft;


@Repository
public interface GiftRepo extends CrudRepository<GIft, Long> {
	List<GIft> findAll();

}
