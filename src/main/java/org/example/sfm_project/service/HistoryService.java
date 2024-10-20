package org.example.sfm_project.service;

import org.example.sfm_project.dtos.HistoryDto;
import org.example.sfm_project.entity.History;
import org.example.sfm_project.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HistoryService {
    @Autowired
    private HistoryRepository historyRepository;

    public void save(HistoryDto historyDto){
        History history = new History();
        history.setDate(historyDto.getDate());
        historyRepository.save(history);
    }
}
