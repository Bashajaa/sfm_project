package org.example.sfm_project.DtoTeszt;

import org.example.sfm_project.dtos.UserDto;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserDtoTest {

    @Test
    void testGettersAndSetters() {
        UserDto userDto = new UserDto();

        userDto.setUsername("testuser");
        userDto.setName("Test User");
        userDto.setEmail("testuser@example.com");
        Date dob = new Date(100000000000L);
        userDto.setDateOfBirth(dob);
        userDto.setGender("Male");
        userDto.setCountry("Testland");
        Date registrationDate = new Date(200000000000L);
        userDto.setRegistrationDate(registrationDate);

        assertEquals("testuser", userDto.getUsername());
        assertEquals("Test User", userDto.getName());
        assertEquals("testuser@example.com", userDto.getEmail());
        assertEquals(dob, userDto.getDateOfBirth());
        assertEquals("Male", userDto.getGender());
        assertEquals("Testland", userDto.getCountry());
        assertEquals(registrationDate, userDto.getRegistrationDate());
    }
}
