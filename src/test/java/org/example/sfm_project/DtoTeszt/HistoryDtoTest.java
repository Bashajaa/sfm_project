package org.example.sfm_project.DtoTeszt;

import org.example.sfm_project.dtos.HistoryDto;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

class HistoryDtoTest {

    @Test
    void testGettersAndSetters() {
        HistoryDto historyDto = new HistoryDto();

        Date testDate = new Date();

        historyDto.setDate(testDate);

        assertEquals(testDate, historyDto.getDate());
    }
}