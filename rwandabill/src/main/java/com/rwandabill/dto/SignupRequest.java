package com.rwandabill.dto;

import com.rwandabill.entity.ServiceType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignupRequest {

    @NotBlank(message = "Full name is required")
    @Size(min = 3, message = "Full name must be at least 3 characters")
    private String fullName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Telephone is required")
    @Size(min = 10, max = 20, message = "Telephone must be between 10 and 20 characters")
    private String telephone;

    @NotBlank(message = "District is required")
    private String district;

    @NotBlank(message = "Sector is required")
    private String sector;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

    private ServiceType service; // Optional, for admin accounts
    
    @NotBlank(message = "Role is required")
    private String role; // User role (e.g., USER, ADMIN, etc.)
}
