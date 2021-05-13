package com.harrybro.courseregistration.domain.user.api;

import com.harrybro.courseregistration.domain.user.dto.SignUpRequest;
import com.harrybro.courseregistration.domain.user.service.UserService;
import com.harrybro.courseregistration.global.dto.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserApiController {

    private final UserService userService;

    @PostMapping("/auth/sign-up")
    public ResponseEntity<ResponseDto<?>> create(@RequestBody SignUpRequest dto) {
        return ResponseEntity.ok(userService.create(dto));
    }

}