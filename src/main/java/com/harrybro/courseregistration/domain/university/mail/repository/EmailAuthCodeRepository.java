package com.harrybro.courseregistration.domain.university.mail.repository;

import com.harrybro.courseregistration.domain.university.mail.domain.EmailAuthCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmailAuthCodeRepository extends JpaRepository<EmailAuthCode, Long> {

    Optional<EmailAuthCode> findByEmail(String email);

    boolean existsByEmail(String email);

}
